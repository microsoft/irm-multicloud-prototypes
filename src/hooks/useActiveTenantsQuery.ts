import { useState, useEffect, useCallback, useRef } from 'react'
import { useMsal } from '@azure/msal-react'
import { InteractionStatus, InteractionRequiredAuthError } from '@azure/msal-browser'
import { adxRequest } from '../authConfig'

const ADX_CLUSTER = 'https://o365monweu.westeurope.kusto.windows.net'
const ADX_DATABASE = 'o365monitoring'

export interface ActiveTenantCounts {
  fabric: number
  azure: number
  thirdParty: number
  /** ISO timestamp of when the data was fetched */
  fetchedAt: string
  /** Human-readable range label, e.g. "Feb 1 – Feb 23, 2026" */
  rangeLabel: string
}

export interface QueryState {
  data: ActiveTenantCounts | null
  loading: boolean
  error: string | null
  /** True when ADX consent has not yet been granted — triggers a consent prompt */
  needsConsent: boolean
  /** True when a manual bearer token is active (bypasses MSAL) */
  hasManualToken: boolean
  /** Raw ADX response for debugging */
  rawResponse: unknown | null
  refetch: () => void
  /** Opens an interactive consent popup for the ADX scope */
  grantConsent: () => void
  /** Stores a manually pasted Bearer token and immediately triggers a fetch */
  setManualToken: (token: string) => void
  /** Clears the manual token and falls back to MSAL */
  clearManualToken: () => void
}

/**
 * Aggregated KQL query — re-uses the original logic but summarizes into
 * per-workload tenant counts in a single result row so the dashboard only
 * needs to read one record.
 *
 * Workload buckets (matching the image legend):
 *   Fabric     = PowerBI + Fabric/Lakehouse indicators
 *   Azure      = Azure* indicators
 *   3P Cloud   = Box + Dropbox + GoogleDrive + AWS indicators
 */
function buildAggregationQuery(startTime: string, endTime: string): string {
  return `
let _startTime = datetime(${startTime});
let _endTime   = datetime(${endTime});
let forest = dynamic(null);
let PowerBI    = dynamic(['PowerBIReportsViewed','PowerBIReportsDeleted','PowerBISemanticModelsDeleted',
                          'PowerBIDashboardsDeleted','PowerBISensitivityLabelDowngradedForArtifacts',
                          'PowerBIReportsExported','PowerBISensitivityLabelRemovedFromArtifacts',
                          'PowerBIReportsDownloaded']);
let FabricCore = dynamic(['FabricExternalDataSharingSwitchEnabled','LakehouseArtifactDeleted',
                          'LakehouseExternalDataShareCreated','LakehouseFileOrBlobDeleted',
                          'LakehouseSensitivityLabelDowngraded','LakehouseSensitivityLabelRemoved']);
let Azure      = dynamic(['AzureElevateAccessToAllSubscriptions','AzureResourceThreatProtectionSettingsUpdated',
                          'AzureSQLServerAuditingSettingsUpdated','AzureSQLServerFirewallRuleDeleted',
                          'AzureSQLServerFirewallRuleUpdated','AzureStorageAccountOrContainerDeleted']);
let Box        = dynamic(['BoxContentExternallyShared','BoxContentDelete','BoxContentDownload','BoxContentAccess']);
let Dropbox    = dynamic(['DropboxContentAccess','DropboxContentDelete','DropboxContentDownload',
                          'DropboxContentExternallyShared']);
let GoogleDrive= dynamic(['GoogleDriveContentAccess','GoogleDriveContentDelete','GoogleDriveContentExternallyShared']);
let AWS        = dynamic(['AWSS3BlockPublicAccessDisabled','AWSS3BucketDeleted','AWSS3PublicAccessEnabled',
                          'AWSS3ServerLoggingDisabled']);
SparkApplicationEvent_Global
| where TIMESTAMP between (_startTime .. _endTime)
| where isempty(forest) or Forest in (forest)
| where Message contains "Extensible Indicators enabled for tenant"
| extend enabledIndicators = split(split(Message, "Extensible Indicator Ids ")[1], ",")
| mv-apply enabledIndicator = enabledIndicators on (
    extend enabledIndicatorEle = trim_end(@"[\\.$]", tostring(enabledIndicator))
)
| extend enabledIndicatorsList = pack_array(enabledIndicatorEle)
| summarize any(enabledIndicators) by TenantID
| extend allInds = any_enabledIndicators
| extend isFabric     = allInds has_any (PowerBI)     or allInds has_any (FabricCore)
| extend isAzure      = allInds has_any (Azure)
| extend isThirdParty = allInds has_any (Box)         or allInds has_any (Dropbox)
                     or allInds has_any (GoogleDrive)  or allInds has_any (AWS)
| summarize FabricTenants=countif(isFabric), AzureTenants=countif(isAzure), ThirdPartyTenants=countif(isThirdParty)
`.trim()
}

/**
 * Returns [start-of-current-month, today-minus-2-days) as ISO strings.
 * The 2-day lag accounts for ADX ingestion delay so we always hit fully
 * populated data. E.g. on Feb 25 this returns Feb 1 → Feb 23.
 */
function getLatestDataWindow(): { start: string; end: string; label: string } {
  const now = new Date()
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  // Start = midnight UTC on the 1st of this month
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1))
  // End = midnight UTC 2 days ago (exclusive upper bound gives us data through yesterday-1)
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 2))
  const fmt = (d: Date) => `${months[d.getUTCMonth()]} ${d.getUTCDate()}`
  return {
    start: start.toISOString().replace('.000Z', 'Z'),
    end:   end.toISOString().replace('.000Z', 'Z'),
    label: `${fmt(start)} – ${fmt(end)}, ${end.getUTCFullYear()}`,
  }
}

export function useActiveTenantsQuery(): QueryState {
  const { instance, accounts, inProgress } = useMsal()
  const [data, setData] = useState<ActiveTenantCounts | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [needsConsent, setNeedsConsent] = useState(false)
  const [rawResponse, setRawResponse] = useState<unknown | null>(null)
  // Manual Bearer token — stored in sessionStorage, survives page refresh
  const manualTokenRef = useRef<string>(sessionStorage.getItem('adx_manual_token') ?? '')
  const [hasManualToken, setHasManualToken] = useState(() => !!sessionStorage.getItem('adx_manual_token'))
  // Prevent double-firing when inProgress flips to None more than once
  const hasFetched = useRef(false)

  const fetchData = useCallback(async () => {
    // If a manual token is stored, skip MSAL entirely
    const manualToken = manualTokenRef.current
    if (!manualToken) {
      if (accounts.length === 0) return
      if (inProgress !== InteractionStatus.None) return
    }

    setLoading(true)
    setError(null)
    setNeedsConsent(false)

    try {
      let accessToken: string
      if (manualToken) {
        accessToken = manualToken
      } else {
        const tokenResponse = await instance.acquireTokenSilent({
          ...adxRequest,
          account: accounts[0],
        })
        accessToken = tokenResponse.accessToken
      }

      const { start, end, label } = getLatestDataWindow()
      const query = buildAggregationQuery(start, end)

      const response = await fetch(
        `${ADX_CLUSTER}/v1/rest/query`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            db: ADX_DATABASE,
            csl: query,
            properties: {
              Options: { queryconsistency: 'strongconsistency' }
            }
          })
        }
      )

      if (!response.ok) {
        const errText = await response.text()
        throw new Error(`ADX query failed (${response.status}): ${errText.slice(0, 200)}`)
      }

      const json = await response.json()
      setRawResponse(json)

      // ADX REST v1 returns { Tables: [{ TableName, Columns, Rows }] }
      // The primary result table is usually index 0 (or named "PrimaryResult")
      const tables: Array<{ TableName: string; Columns: Array<{ ColumnName: string }>; Rows: unknown[][] }> =
        json.Tables ?? []

      const primary = tables.find(t => t.TableName === 'PrimaryResult') ?? tables[0]
      if (!primary || primary.Rows.length === 0) {
        // Surface the full response so we can diagnose unexpected schemas
        throw new Error(`Query returned no rows. Tables: ${JSON.stringify(tables.map(t => ({ name: t.TableName, rows: t.Rows?.length })))}`)
      }

      const cols = primary.Columns.map(c => c.ColumnName)
      const row  = primary.Rows[0]
      const get  = (name: string) => Number(row[cols.indexOf(name)] ?? 0)

      setData({
        fabric:     get('FabricTenants'),
        azure:      get('AzureTenants'),
        thirdParty: get('ThirdPartyTenants'),
        fetchedAt:  new Date().toISOString(),
        rangeLabel: label,
      })
    } catch (err: unknown) {
      if (err instanceof InteractionRequiredAuthError) {
        setNeedsConsent(true)
      } else {
        const msg = err instanceof Error ? err.message : String(err)
        // If manual token returned 401/403, it likely expired — clear it and ask for a new one
        if (manualTokenRef.current && (msg.includes('401') || msg.includes('403') || msg.includes('Unauthorized'))) {
          sessionStorage.removeItem('adx_manual_token')
          manualTokenRef.current = ''
          setHasManualToken(false)
          setError('Your token expired. Please paste a fresh one from the ADX web UI.')
        } else {
          setError(msg)
        }
      }
    } finally {
      setLoading(false)
    }
  }, [instance, accounts, inProgress])

  // Fire once MSAL has finished its initial interaction (login redirect/popup).
  // The dependency on inProgress means this re-runs when it transitions to None.
  useEffect(() => {
    if (inProgress !== InteractionStatus.None) return
    if (hasFetched.current) return
    hasFetched.current = true
    fetchData()
  }, [inProgress, fetchData])

  // Manual refetch always re-arms the guard so Retry/Refresh works
  const refetch = useCallback(() => {
    hasFetched.current = false
    fetchData()
  }, [fetchData])

  const setManualToken = useCallback((token: string) => {
    const trimmed = token.replace(/^Bearer\s+/i, '').trim()
    sessionStorage.setItem('adx_manual_token', trimmed)
    manualTokenRef.current = trimmed
    setHasManualToken(true)
    setNeedsConsent(false)
    setError(null)
    hasFetched.current = false
    fetchData()
  }, [fetchData])

  const clearManualToken = useCallback(() => {
    sessionStorage.removeItem('adx_manual_token')
    manualTokenRef.current = ''
    setHasManualToken(false)
    hasFetched.current = false
    fetchData()
  }, [fetchData])

  // Triggers a full re-login popup with Kusto scope bundled.
  // loginPopup is used instead of acquireTokenPopup because the latter requires
  // the Kusto API to already be registered on the app in Entra — loginPopup
  // does a fresh PKCE auth code flow and lets the user consent directly.
  const grantConsent = useCallback(async () => {
    if (accounts.length === 0 || inProgress !== InteractionStatus.None) return
    try {
      await instance.loginPopup({ ...adxRequest, loginHint: accounts[0].username })
      // Token now cached — re-arm and fetch
      setNeedsConsent(false)
      hasFetched.current = false
      fetchData()
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      if (msg.includes('invalid_client') || msg.includes('AADSTS')) {
        setError(
          `Azure AD rejected the request (${msg.match(/AADSTS\d+/)?.[0] ?? 'invalid_client'}). ` +
          `The app registration '367b5007-933b-4bb4-9ee8-6838ca51ab6a' needs ` +
          `"Azure Data Explorer → user_impersonation" added under API Permissions in Entra, then Admin Consent granted.`
        )
      } else {
        setError(msg)
      }
      setNeedsConsent(false)
    }
  }, [instance, accounts, inProgress, fetchData])

  return { data, loading, error, needsConsent, hasManualToken, rawResponse, refetch, grantConsent, setManualToken, clearManualToken }
}
