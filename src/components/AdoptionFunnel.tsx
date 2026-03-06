import { useState, useMemo } from 'react'
import './AdoptionFunnel.css'
import { useActiveTenantsQuery } from '../hooks/useActiveTenantsQuery'

interface WorkloadValue {
  numericValue?: number
  displayValue: string
  mom?: number
  isEta?: boolean
}

interface DefinitionPart {
  workload: string
  text: string
}

interface FunnelStage {
  id: number
  name: string
  definition?: string
  definitionParts?: DefinitionPart[]
  metrics: string[]
  fabric: WorkloadValue
  azure: WorkloadValue
  thirdParty: WorkloadValue
}

const stages: FunnelStage[] = [
  {
    id: 1,
    name: 'Workload licensed',
    definitionParts: [
      { workload: 'Fabric', text: 'All Fabric paid tenants including Power BI customers (ME*)' },
      { workload: 'Azure', text: 'All Azure paid tenants with billed usage in at least one of the applicable Azure data sources' },
      { workload: '3P Cloud storage', text: 'All tenants with Entra SSO connected for a supported application (Box, Dropbox, Google drive, AWS)' }
    ],
    metrics: ['# of Tenants'],
    fabric: { numericValue: 584000, displayValue: '584,000' },
    azure: { isEta: true, displayValue: 'ETA: 1/31 (IDEAS)' },
    thirdParty: { isEta: true, displayValue: 'ETA: 1/31 (IDEAS)' }
  },
  {
    id: 2,
    name: 'PAYG enabled',
    definition: 'Tenants with consumptive billing enabled in Purview (through Az subscription)',
    metrics: ['# of Tenants'],
    fabric: { numericValue: 20393, displayValue: '20,393' },
    azure: { numericValue: 20393, displayValue: '20,393' },
    thirdParty: { numericValue: 20393, displayValue: '20,393' }
  },
  {
    id: 3,
    name: 'IRM licensed',
    definition: 'IRM tenants with PAU',
    metrics: ['# of Tenants'],
    fabric: { numericValue: 112000, displayValue: '112,000' },
    azure: { numericValue: 112000, displayValue: '112,000' },
    thirdParty: { numericValue: 112000, displayValue: '112,000' }
  },
  {
    id: 4,
    name: 'Active',
    definition: 'IRM tenants that enabled the workload-specific indicators in settings (after all pre-requisites are met)',
    metrics: ['# of Tenants'],
    fabric: { numericValue: 1234, displayValue: '1,234', mom: 7 },
    azure: { numericValue: 734, displayValue: '734', mom: 5 },
    thirdParty: { numericValue: 217, displayValue: '217', mom: 6 }
  },
  {
    id: 5,
    name: 'Protected',
    definition: 'IRM tenants that are using workload-specific indicators in policies',
    metrics: ['# of Tenants', '# of Users protected'],
    fabric: { numericValue: 639, displayValue: '639', mom: 6 },
    azure: { numericValue: 376, displayValue: '376', mom: 5 },
    thirdParty: { numericValue: 183, displayValue: '183', mom: 6 }
  },
  {
    id: 6,
    name: 'Billed',
    definition: 'IRM tenants with consumptive usage (user activities processed by IRM)',
    metrics: ['# of Tenants', '# of Users with activities'],
    fabric: { numericValue: 367, displayValue: '367', mom: 6 },
    azure: { numericValue: 143, displayValue: '143', mom: -7 },
    thirdParty: { numericValue: 55, displayValue: '55', mom: 2 }
  },
  {
    id: 7,
    name: 'Getting value',
    definition: 'IRM tenants having alerts with workload-specific insights',
    metrics: ['# of Tenants', '# of Alerts'],
    fabric: { numericValue: 264, displayValue: '264' },
    azure: { numericValue: 11, displayValue: '11' },
    thirdParty: { numericValue: 21, displayValue: '21' }
  },
  {
    id: 8,
    name: 'Actioning',
    definition: 'IRM tenants actioning alerts with workload-specific insights',
    metrics: ['# of Tenants', 'Alert fidelity'],
    fabric: { numericValue: 65, displayValue: '65' },
    azure: { numericValue: 2, displayValue: '2' },
    thirdParty: { numericValue: 5, displayValue: '5' }
  }
]

// Stage badge colors
const STAGE_COLORS: string[] = [
  '#0078D4', // 1 - workload licensed
  '#0078D4', // 2 - payg enabled
  '#8764B8', // 3 - irm licensed
  '#CA5010', // 4 - active
  '#CA5010', // 5 - protected
  '#107C10', // 6 - billed
  '#107C10', // 7 - getting value
  '#107C10', // 8 - actioning
]

const MoMBadge = ({ mom }: { mom?: number }) => {
  if (mom === undefined) return null
  const positive = mom >= 0
  return (
    <span className={`mom-badge ${positive ? 'positive' : 'negative'}`}>
      {positive ? '↑' : '↓'} {Math.abs(mom)}% MoM
    </span>
  )
}

interface ValueCellProps {
  data: WorkloadValue
}
const ValueCell = ({ data }: ValueCellProps) => {
  if (data.isEta) {
    return <span className="eta-badge">{data.displayValue}</span>
  }
  return (
    <>
      <span className="value-number">{data.displayValue}</span>
      <MoMBadge mom={data.mom} />
    </>
  )
}

// ── Trapezoid Funnel ──────────────────────────────────────────────────────────

interface WorkloadFunnelProps {
  label: string
  colorMain: string
  colorLight: string
  colorDark: string
  getValue: (s: FunnelStage) => WorkloadValue
  stagesData: FunnelStage[]
  loadingStageId: number | null
}

const FUNNEL_W = 320       // SVG canvas width
const TRAP_H = 34          // height of each trapezoid
const GAP_H = 22           // gap between trapezia (for dropoff badge)
const TOP_PAD = 8
const MAX_TOP_W = 280      // widest trapezoid (stage 1)
const MIN_TOP_W = 60       // narrowest (stage 8)

function getTrapWidths(): number[] {
  // linear taper from MAX_TOP_W to MIN_TOP_W across 8 stages
  return stages.map((_, i) => {
    const t = i / (stages.length - 1)
    return MAX_TOP_W - t * (MAX_TOP_W - MIN_TOP_W)
  })
}

function dropOff(curr: number, prev: number): string {
  if (prev <= 0) return '–'
  const pct = ((prev - curr) / prev) * 100
  return `${pct.toFixed(0)}% drop`
}

const WorkloadFunnel = ({ label, colorMain, colorLight, colorDark, getValue, stagesData, loadingStageId }: WorkloadFunnelProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const widths = getTrapWidths()
  const totalH = TOP_PAD + stagesData.length * (TRAP_H + GAP_H) - GAP_H + TOP_PAD

  return (
    <div className="wl-funnel-wrapper">
      <div className="wl-funnel-title" style={{ borderBottomColor: colorMain }}>
        <span className="wl-funnel-dot" style={{ backgroundColor: colorMain }} />
        {label}
      </div>
      <svg
        className="wl-funnel-svg"
        width={FUNNEL_W}
        height={totalH}
        viewBox={`0 0 ${FUNNEL_W} ${totalH}`}
      >
        {stagesData.map((stage, idx) => {
          const topW = widths[idx]
          const botW = idx < stagesData.length - 1 ? widths[idx + 1] : widths[idx] - 8
          const x = (FUNNEL_W - topW) / 2
          const y = TOP_PAD + idx * (TRAP_H + GAP_H)
          const bx = (FUNNEL_W - botW) / 2

          const wv = getValue(stage)
          const isHovered = hoveredIdx === idx
          const isLiveLoading = loadingStageId === stage.id
          const fill = wv.isEta
            ? 'url(#etaPattern)'
            : isLiveLoading
              ? '#a0a0a0'
              : isHovered
                ? colorDark
                : colorMain

          const points = `${x},${y} ${x + topW},${y} ${bx + botW},${y + TRAP_H} ${bx},${y + TRAP_H}`

          let dropText = ''
          if (idx < stagesData.length - 1) {
            const nextWv = getValue(stagesData[idx + 1])
            const currVal = wv.numericValue ?? 0
            const nextVal = nextWv.numericValue ?? 0
            if (!wv.isEta && !nextWv.isEta && currVal > 0 && !isLiveLoading) {
              dropText = dropOff(nextVal, currVal)
            }
          }

          const cx = FUNNEL_W / 2
          const cy = y + TRAP_H / 2

          return (
            <g key={stage.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ cursor: 'default' }}
            >
              <defs>
                <pattern id="etaPattern" patternUnits="userSpaceOnUse" width="8" height="8">
                  <rect width="8" height="8" fill="#d8d6d4" />
                  <line x1="0" y1="8" x2="8" y2="0" stroke="#b0b0b0" strokeWidth="1.5" />
                </pattern>
              </defs>
              <polygon
                points={points}
                fill={fill}
                opacity={wv.isEta || isLiveLoading ? 1 : isHovered ? 1 : 0.88}
              />
              {/* Stage number */}
              <text x={x + 14} y={cy + 1} fontSize="11" fontWeight="700"
                fill="rgba(255,255,255,0.7)" dominantBaseline="middle" textAnchor="middle"
                fontFamily='"Segoe UI", sans-serif'>
                {stage.id}
              </text>
              {/* Stage name */}
              <text x={cx} y={cy - 6} fontSize="11" fontWeight="600"
                fill="white" dominantBaseline="middle" textAnchor="middle"
                fontFamily='"Segoe UI", sans-serif'>
                {stage.name}
              </text>
              {/* Value or loading indicator */}
              <text x={cx} y={cy + 8} fontSize="11"
                fontWeight={wv.isEta || isLiveLoading ? '400' : '700'}
                fill={wv.isEta || isLiveLoading ? 'rgba(255,255,255,0.75)' : 'white'}
                dominantBaseline="middle" textAnchor="middle"
                fontFamily='"Segoe UI", sans-serif'
                fontStyle={wv.isEta ? 'italic' : 'normal'}>
                {isLiveLoading ? 'Loading…' : wv.isEta ? wv.displayValue : wv.displayValue + ' tenants'}
              </text>

              {/* Drop-off connector + badge */}
              {dropText && (
                <g>
                  <line x1={FUNNEL_W / 2} y1={y + TRAP_H} x2={FUNNEL_W / 2} y2={y + TRAP_H + GAP_H}
                    stroke={colorLight} strokeWidth="1" strokeDasharray="3 2" />
                  <rect x={FUNNEL_W / 2 - 36} y={y + TRAP_H + 4} width="72" height="14" rx="7" fill={colorLight} />
                  <text x={FUNNEL_W / 2} y={y + TRAP_H + 11} fontSize="9.5" fontWeight="600"
                    fill={colorDark} dominantBaseline="middle" textAnchor="middle"
                    fontFamily='"Segoe UI", sans-serif'>
                    {dropText}
                  </text>
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

const AdoptionFunnel = () => {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)
  const [showDebug, setShowDebug] = useState(false)
  const [showTokenInput, setShowTokenInput] = useState(false)
  const [tokenDraft, setTokenDraft] = useState('')
  const { data: liveStage4, loading: stage4Loading, error: stage4Error, needsConsent, hasManualToken, rawResponse, refetch, setManualToken, clearManualToken } = useActiveTenantsQuery()

  // Merge live Stage 4 data into the static stages array
  const mergedStages = useMemo<FunnelStage[]>(() => {
    return stages.map(stage => {
      if (stage.id !== 4 || !liveStage4) return stage
      const fmt = (n: number) => n.toLocaleString()
      return {
        ...stage,
        fabric:    { numericValue: liveStage4.fabric,     displayValue: fmt(liveStage4.fabric) },
        azure:     { numericValue: liveStage4.azure,      displayValue: fmt(liveStage4.azure) },
        thirdParty:{ numericValue: liveStage4.thirdParty, displayValue: fmt(liveStage4.thirdParty) },
      }
    })
  }, [liveStage4])

  return (
    <main className="adoption-funnel">
      <div className="funnel-breadcrumb">
        <span>Reports</span>
        <span className="separator">›</span>
        <span>IRM Workload Adoption Funnel</span>
      </div>

      <div className="funnel-page-header">
        <h1 className="funnel-title">IRM Workload Adoption Funnel</h1>
        <p className="funnel-subtitle">
          Track the tenant journey through Insider Risk Management adoption stages across Fabric, Azure, and 3P Cloud Storage workloads.
        </p>
        <div className="funnel-header-meta">
          <span className="last-updated">Last updated: Jan 31, 2026</span>
        </div>
      </div>

      {/* ── Stage 4 Live Data Banner ── */}
      <div className={`live-data-banner ${stage4Loading ? 'loading' : needsConsent ? 'consent' : stage4Error ? 'error' : 'success'}`}>
        {stage4Loading && (
          <>
            <span className="live-spinner" />
            <span>Fetching live Stage 4 (Active) tenant counts from ADX…</span>
          </>
        )}
        {!stage4Loading && needsConsent && (
          <>
            <span className="live-icon">🔒</span>
            <span>
              <strong>Admin consent required</strong> &mdash; your tenant blocks this app from requesting Kusto tokens. Paste your Bearer token from the ADX web UI (session only).
            </span>
            <button className="live-consent-btn" onClick={() => setShowTokenInput(v => !v)}>
              {showTokenInput ? 'Cancel' : 'Paste token'}
            </button>
          </>
        )}
        {!stage4Loading && !needsConsent && stage4Error && (
          <>
            <span className="live-icon">⚠️</span>
            <span>Stage 4 live query failed. <span className="live-error-detail">{stage4Error}</span></span>
            <button className="live-retry-btn" onClick={() => setShowTokenInput(v => !v)}>
              {showTokenInput ? 'Cancel' : 'Paste new token'}
            </button>
            <button className="live-retry-btn" onClick={refetch}>Retry</button>
            {rawResponse !== null && (
              <button className="live-retry-btn" onClick={() => setShowDebug(v => !v)}>
                {showDebug ? 'Hide' : 'Show'} raw response
              </button>
            )}
          </>
        )}
        {!stage4Loading && !stage4Error && liveStage4 && (
          <>
            <span className="live-icon">🟢</span>
            <span>
              Stage 4 (Active) — live data <strong>{liveStage4.rangeLabel}</strong>:&nbsp;
              <span className="live-chip fabric-chip">Fabric {liveStage4.fabric.toLocaleString()}</span>
              <span className="live-chip azure-chip">Azure {liveStage4.azure.toLocaleString()}</span>
              <span className="live-chip tp-chip">3P {liveStage4.thirdParty.toLocaleString()}</span>
              {hasManualToken && <span className="live-token-badge">via pasted token</span>}
            </span>
            {hasManualToken && (
              <button className="live-retry-btn" onClick={clearManualToken}>✕ Clear token</button>
            )}
            <button className="live-retry-btn" onClick={() => setShowDebug(v => !v)}>
              {showDebug ? 'Hide' : 'Show'} raw response
            </button>
            <button className="live-retry-btn" onClick={refetch}>↻ Refresh</button>
          </>
        )}
      </div>

      {/* ── Token Paste Panel ── */}
      {showTokenInput && (
        <div className="token-paste-panel">
          <div className="token-paste-title">&#x1F4CB; How to get your ADX Bearer token</div>
          <ol className="token-paste-steps">
            <li>
              Open{' '}
              <a href="https://dataexplorer.azure.com/clusters/o365monweu.westeurope/databases/o365monitoring" target="_blank" rel="noreferrer">
                dataexplorer.azure.com &rarr; o365monweu
              </a>{' '}
              and run any query
            </li>
            <li>Press <kbd>F12</kbd> &rarr; Network tab &rarr; filter by <code>v1/rest/query</code></li>
            <li>
              Click any request &rarr; Headers &rarr; copy the <strong>Authorization</strong> value{' '}
              <em>(everything after &quot;Bearer &quot;)</em>
            </li>
          </ol>
          <div className="token-paste-input-row">
            <input
              className="token-paste-input"
              type="password"
              placeholder="Paste Bearer token here..."
              value={tokenDraft}
              onChange={e => setTokenDraft(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && tokenDraft.trim()) {
                  setManualToken(tokenDraft); setShowTokenInput(false); setTokenDraft('')
                }
              }}
            />
            <button
              className="live-consent-btn"
              disabled={!tokenDraft.trim()}
              onClick={() => { setManualToken(tokenDraft); setShowTokenInput(false); setTokenDraft('') }}
            >
              Use token
            </button>
          </div>
        </div>
      )}

      {/* ── Raw Response Inspector ── */}
      {showDebug && rawResponse !== null && (
        <div className="raw-response-panel">
          <div className="raw-response-header">
            <span>ADX Raw Response</span>
            <button className="live-retry-btn" onClick={() => setShowDebug(false)}>✕ Close</button>
          </div>
          <pre className="raw-response-body">
            {JSON.stringify(rawResponse, null, 2)}
          </pre>
        </div>
      )}

      {/* ── Three Funnel Diagrams ── */}
      <div className="three-funnels-row">
        <WorkloadFunnel
          label="Fabric"
          colorMain="#7B2FBE"
          colorLight="#e8d9f5"
          colorDark="#5a1a99"
          getValue={(s) => s.fabric}
          stagesData={mergedStages}
          loadingStageId={stage4Loading ? 4 : null}
        />
        <WorkloadFunnel
          label="Azure"
          colorMain="#0078D4"
          colorLight="#cce4f6"
          colorDark="#005a9e"
          getValue={(s) => s.azure}
          stagesData={mergedStages}
          loadingStageId={stage4Loading ? 4 : null}
        />
        <WorkloadFunnel
          label="3P Cloud Storage"
          colorMain="#107C10"
          colorLight="#d3f0d3"
          colorDark="#0a5c0a"
          getValue={(s) => s.thirdParty}
          stagesData={mergedStages}
          loadingStageId={stage4Loading ? 4 : null}
        />
      </div>

      {/* ── Detail Table ── */}
      <div className="funnel-table-card">
        <div className="funnel-table-header-row">
          <div className="funnel-th">Stage</div>
          <div className="funnel-th">Definition</div>
          <div className="funnel-th">Metrics</div>
          <div className="funnel-th fabric-col">
            <span className="col-dot fabric" />
            Fabric
          </div>
          <div className="funnel-th azure-col">
            <span className="col-dot azure" />
            Azure
          </div>
          <div className="funnel-th thirdparty-col">
            <span className="col-dot third-party" />
            3P Cloud Storage
          </div>
        </div>

        {mergedStages.map((stage, idx) => (
          <div
            key={stage.id}
            className={`funnel-table-row${hoveredStage === stage.id ? ' row-hovered' : ''}${stage.id === 4 && stage4Loading ? ' row-loading' : ''}`}
            onMouseEnter={() => setHoveredStage(stage.id)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            {/* Stage */}
            <div className="funnel-td stage-cell">
              <span
                className="stage-badge-sm"
                style={{ backgroundColor: STAGE_COLORS[idx] }}
              >
                {stage.id}
              </span>
              <div className="stage-cell-text">
                <span className="stage-num-label">Stage {stage.id}</span>
                <span className="stage-name-label">{stage.name}</span>
              </div>
            </div>

            {/* Definition */}
            <div className="funnel-td def-cell">
              {stage.definitionParts ? (
                <div className="def-parts">
                  {stage.definitionParts.map((part) => (
                    <div key={part.workload} className="def-part">
                      <span className="def-workload">{part.workload}:</span>{' '}
                      {part.text}
                    </div>
                  ))}
                </div>
              ) : (
                <span>{stage.definition}</span>
              )}
            </div>

            {/* Metrics */}
            <div className="funnel-td metrics-cell">
              {stage.metrics.map((m, i) => (
                <span key={i} className="metric-tag">{m}</span>
              ))}
            </div>

            {/* Fabric */}
            <div className="funnel-td value-cell fabric-value">
              <ValueCell data={stage.fabric} />
            </div>

            {/* Azure */}
            <div className="funnel-td value-cell azure-value">
              <ValueCell data={stage.azure} />
            </div>

            {/* 3P */}
            <div className="funnel-td value-cell tp-value">
              <ValueCell data={stage.thirdParty} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AdoptionFunnel
