import { useState } from 'react'
import './PolicyHealthRecommendations.css'
import { DefaultButton, PrimaryButton, Link, IconButton, Icon } from '@fluentui/react'
import PolicyDetailsPanel from './PolicyDetailsPanel'
import FabricPolicyCreationPanel from './FabricPolicyCreationPanel'

type RequestStatus = 'pending' | 'actioned' | 'dismissed'
type RequestSource = 'Fabric' | 'Azure' | 'Defender'

interface AdminRequest {
  id: number
  from: string
  initials: string
  source: RequestSource
  receivedAt: string
  message: string
  status: RequestStatus
  resolvedAt?: string
  resolvedBy?: string
  policyName?: string
}

const SOURCE_CONFIG: Record<RequestSource, { label: string; icon: string; color: string }> = {
  Fabric:   { label: 'Fabric',   icon: 'WebAppBuilderModule', color: '#008272' },
  Azure:    { label: 'Azure',    icon: 'AzureLogo',           color: '#0078d4' },
  Defender: { label: 'Defender', icon: 'Shield',              color: '#5c2d91' },
}

const INITIAL_REQUESTS: AdminRequest[] = [
  {
    id: 1,
    from: 'Priya Anand',
    initials: 'PA',
    source: 'Fabric',
    receivedAt: 'Mar 4, 2026 · 10:32 AM',
    message: 'Requested a data leaks policy to monitor all Microsoft Fabric activities for potential data exfiltration.',
    status: 'pending',
  },
  {
    id: 2,
    from: 'Marcus Chen',
    initials: 'MC',
    source: 'Fabric',
    receivedAt: 'Mar 3, 2026 · 3:15 PM',
    message: 'Requested a data leaks policy to detect exfiltration of Power BI reports and lakehouse data.',
    status: 'pending',
  },
  {
    id: 3,
    from: 'Aisha Rahman',
    initials: 'AR',
    source: 'Fabric',
    receivedAt: 'Feb 28, 2026 · 9:04 AM',
    message: 'Requested a data leaks policy for lakehouse sharing and sensitivity label activity monitoring.',
    status: 'actioned',
    resolvedAt: 'Mar 1, 2026 · 11:20 AM',
    resolvedBy: 'You',
    policyName: 'Microsoft Fabric data leaks (quick policy) - 3/1/2026',
  },
  {
    id: 4,
    from: 'James Okafor',
    initials: 'JO',
    source: 'Fabric',
    receivedAt: 'Feb 20, 2026 · 2:47 PM',
    message: 'Requested a policy to detect downloading of Power BI reports and semantic model exports.',
    status: 'dismissed',
    resolvedAt: 'Feb 21, 2026 · 8:30 AM',
    resolvedBy: 'You',
  },
  {
    id: 5,
    from: 'Elena Rossi',
    initials: 'ER',
    source: 'Azure',
    receivedAt: 'Mar 4, 2026 · 9:15 AM',
    message: 'Requested a data theft policy to monitor Azure Storage blob downloads and suspicious access patterns.',
    status: 'pending',
  },
  {
    id: 6,
    from: 'David Kim',
    initials: 'DK',
    source: 'Azure',
    receivedAt: 'Mar 2, 2026 · 1:48 PM',
    message: 'Requested a policy to detect mass file transfers from Azure SQL databases and key vault access anomalies.',
    status: 'actioned',
    resolvedAt: 'Mar 3, 2026 · 10:05 AM',
    resolvedBy: 'You',
    policyName: 'Azure data theft (quick policy) - 3/3/2026',
  },
]

const STATUS_CONFIG: Record<RequestStatus, { label: string; color: string; icon: string }> = {
  pending:   { label: 'Pending',        color: '#d97706', icon: 'Clock'       },
  actioned:  { label: 'Policy created', color: '#107C10', icon: 'CheckMark'   },
  dismissed: { label: 'Dismissed',      color: '#8a8886', icon: 'Cancel'      },
}

const PolicyHealthRecommendations = () => {
  const [selectedTab, setSelectedTab] = useState('user')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedPolicy, setSelectedPolicy] = useState('')
  const [selectedPolicyIndex, setSelectedPolicyIndex] = useState<number | null>(null)
  const [isRequestsPanelOpen, setIsRequestsPanelOpen] = useState(false)
  const [isFabricPolicyPanelOpen, setIsFabricPolicyPanelOpen] = useState(false)
  const [pendingActionId, setPendingActionId] = useState<number | null>(null)
  const [requests, setRequests] = useState<AdminRequest[]>(INITIAL_REQUESTS)
  const [filterTab, setFilterTab] = useState<'all' | RequestStatus>('all')

  const pendingCount = requests.filter(r => r.status === 'pending').length

  const handleAction = (id: number) => {
    setPendingActionId(id)
    setIsFabricPolicyPanelOpen(true)
  }

  const handleDismiss = (id: number) => {
    setRequests(prev => prev.map(r =>
      r.id === id ? { ...r, status: 'dismissed', resolvedAt: 'Just now', resolvedBy: 'You' } : r
    ))
  }

  const filteredRequests = filterTab === 'all' ? requests : requests.filter(r => r.status === filterTab)

  const policies = [
    { name: 'Data Leaks - NonPAYG tenant', status: 'warning', warnings: 1, recommendations: 1, usersInScope: 6, activeAlerts: 14, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'Data Leaks - PAYG tenant', status: 'warning', warnings: 1, recommendations: 1, usersInScope: 6, activeAlerts: 14, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'DataLeakPolicy', status: 'warning', warnings: 1, usersInScope: 0, activeAlerts: 1, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'DoNotDelete - EmailFromSelf', status: 'warning', warnings: 1, recommendations: 1, usersInScope: 0, activeAlerts: 0, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'Email exfiltration policy - 9/11/2025', status: 'warning', warnings: 1, usersInScope: 0, activeAlerts: 0, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'UI test 2', status: 'warning', warnings: 1, usersInScope: 0, activeAlerts: 1, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'Non-Microsoft 365 data theft (quick policy) - 2/9/2026', status: 'healthy', warnings: 0, usersInScope: 0, activeAlerts: 0, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'Scope testing', status: 'warning', warnings: 2, usersInScope: 0, activeAlerts: 0, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'SensitivityLabelUpdated-Kamika', status: 'healthy', warnings: 0, usersInScope: 0, activeAlerts: 1, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
    { name: 'Test LH 234', status: 'warning', warnings: 1, usersInScope: 0, activeAlerts: 1, confirmedAlerts: 0, actionsTaken: 0, effectiveness: '0%' },
  ]

  const warningCount = policies.filter(p => p.status === 'warning').length
  const recommendationCount = policies.filter(p => p.recommendations).length
  const healthyCount = policies.filter(p => p.status === 'healthy').length

  return (
    <main className={`policy-health-content${isRequestsPanelOpen ? ' requests-panel-open' : ''}`}>
      {/* â”€â”€ Page Header â”€â”€ */}
      <div className="policy-header">
        <h1>Policies</h1>
      </div>

      <div className="policy-tabs">
        <button
          className={selectedTab === 'user' ? 'policy-tab active' : 'policy-tab'}
          onClick={() => setSelectedTab('user')}
        >
          <i className="ms-Icon ms-Icon--Contact" aria-hidden="true"></i>
          User Policies
        </button>
        <button
          className={selectedTab === 'agent' ? 'policy-tab' : 'policy-tab'}
          onClick={() => setSelectedTab('agent')}
        >
          <i className="ms-Icon ms-Icon--Robot" aria-hidden="true"></i>
          Agent Policies
        </button>
      </div>

      <div className="policy-stats-card">
        <div className="stat-item">
          <div className="stat-label">Policy warnings</div>
          <div className="stat-value warning">{warningCount}</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-label">Policy recommendations</div>
          <div className="stat-value recommendation">{recommendationCount}</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-label">Healthy policies</div>
          <div className="stat-value healthy">{healthyCount}</div>
        </div>
      </div>

      <div className="policy-toolbar">
        <div className="toolbar-left">
          <PrimaryButton iconProps={{ iconName: 'Add' }}>Create policy</PrimaryButton>
          <DefaultButton
            className="review-requests-btn"
            iconProps={{ iconName: 'Ringer' }}
            onClick={() => setIsRequestsPanelOpen(v => !v)}
          >
            Review requests
            {pendingCount > 0 && <span className="review-requests-badge">{pendingCount}</span>}
          </DefaultButton>
          <DefaultButton iconProps={{ iconName: 'TestBeaker' }}>Start scoring activity for users</DefaultButton>
          <IconButton iconProps={{ iconName: 'Refresh' }} title="Refresh" ariaLabel="Refresh" />
        </div>
        <div className="toolbar-right">
          <span className="items-count">10 items</span>
          <div className="search-box">
            <i className="ms-Icon ms-Icon--Search" aria-hidden="true"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="policy-table-container">
        <table className="policy-table">
          <thead>
            <tr>
              <th className="checkbox-col"><input type="checkbox" /></th>
              <th className="sortable">Policy name <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
              <th className="sortable">Status <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
              <th className="sortable">Users in scope <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
              <th className="sortable">Active alerts <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
              <th className="sortable">Confirmed alerts <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
              <th className="sortable">Actions taken on alerts <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
              <th className="sortable">Policy alert effectiveness <i className="ms-Icon ms-Icon--SortDown" aria-hidden="true"></i></th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy, index) => (
              <tr key={index}>
                <td className="checkbox-col"><input type="checkbox" /></td>
                <td className="policy-name">
                  {index === 0 || index === 1 ? (
                    <Link onClick={() => {
                      setSelectedPolicy(policy.name)
                      setSelectedPolicyIndex(index)
                      setIsPanelOpen(true)
                    }}>
                      {policy.name}
                    </Link>
                  ) : (
                    <Link href="#">{policy.name}</Link>
                  )}
                </td>
                <td>
                  <span className={`status-badge ${policy.status}`}>
                    <span className="status-dot"></span>
                    {policy.warnings ? `${policy.warnings} warning${policy.warnings > 1 ? 's' : ''}` : ''}
                    {policy.warnings && policy.recommendations ? ', ' : ''}
                    {policy.recommendations ? `${policy.recommendations} recommendation` : ''}
                    {policy.status === 'healthy' && !policy.warnings ? 'Healthy' : ''}
                  </span>
                </td>
                <td>{policy.usersInScope}</td>
                <td>{policy.activeAlerts}</td>
                <td>{policy.confirmedAlerts}</td>
                <td>{policy.actionsTaken}</td>
                <td>{policy.effectiveness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* â”€â”€ Requests Side Panel â”€â”€ */}
      {isRequestsPanelOpen && (
        <div className="requests-side-panel">
          <div className="rsp-header">
            <div className="rsp-header-left">
              <Icon iconName="Ringer" className="rsp-header-icon" />
              <span className="rsp-title">Policy Requests</span>
              {pendingCount > 0 && <span className="rsp-pending-badge">{pendingCount} pending</span>}
            </div>
            <IconButton iconProps={{ iconName: 'Cancel' }} ariaLabel="Close" onClick={() => setIsRequestsPanelOpen(false)} />
          </div>

          <div className="rsp-filter-tabs">
            {(['all', 'pending', 'actioned', 'dismissed'] as const).map(tab => (
              <button
                key={tab}
                className={`rsp-filter-tab${filterTab === tab ? ' active' : ''}`}
                onClick={() => setFilterTab(tab)}
              >
                {tab === 'all' ? 'All' : STATUS_CONFIG[tab].label}
                <span className="rsp-tab-count">
                  {tab === 'all' ? requests.length : requests.filter(r => r.status === tab).length}
                </span>
              </button>
            ))}
          </div>

          <div className="rsp-body">
            {filteredRequests.length === 0 && (
              <div className="rsp-empty">No requests in this category.</div>
            )}
            {filteredRequests.map(req => {
              const cfg = STATUS_CONFIG[req.status]
              return (
                <div key={req.id} className={`rsp-request-card rsp-status-${req.status}`}>
                  <div className="rsp-card-top">
                    <div className="rsp-avatar" style={{ background: SOURCE_CONFIG[req.source].color }}>{req.initials}</div>
                    <div className="rsp-card-info">
                      <div className="rsp-card-from">{req.from}</div>
                      <div className="rsp-card-time">{req.receivedAt}</div>
                    </div>
                    <span className="rsp-source-badge" style={{ background: `${SOURCE_CONFIG[req.source].color}14`, color: SOURCE_CONFIG[req.source].color, borderColor: `${SOURCE_CONFIG[req.source].color}40` }}>
                      <Icon iconName={SOURCE_CONFIG[req.source].icon} /> {SOURCE_CONFIG[req.source].label}
                    </span>
                    <span className="rsp-status-chip" style={{ color: cfg.color, borderColor: cfg.color }}>
                      <Icon iconName={cfg.icon} /> {cfg.label}
                    </span>
                  </div>

                  <div className="rsp-card-msg">{req.message}</div>

                  {req.status === 'pending' && (
                    <div className="rsp-card-actions">
                      <PrimaryButton onClick={() => handleAction(req.id)}>Create policy</PrimaryButton>
                      <DefaultButton onClick={() => handleDismiss(req.id)}>Dismiss</DefaultButton>
                    </div>
                  )}

                  {req.status !== 'pending' && req.resolvedAt && (
                    <div className="rsp-card-resolved">
                      <span>
                        {req.status === 'actioned' ? 'Policy created' : 'Dismissed'} by {req.resolvedBy} &middot; {req.resolvedAt}
                      </span>
                      {req.policyName && (
                        <div className="rsp-policy-link"><Icon iconName="Documentation" /> {req.policyName}</div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      <PolicyDetailsPanel
        isOpen={isPanelOpen}
        onDismiss={() => setIsPanelOpen(false)}
        policyName={selectedPolicy}
        hasPAYGSubscription={selectedPolicyIndex === 1}
      />

      {isFabricPolicyPanelOpen && (
        <FabricPolicyCreationPanel
          onClose={() => {
            setIsFabricPolicyPanelOpen(false)
            setPendingActionId(null)
          }}
          onPolicyCreated={() => {
            if (pendingActionId !== null) {
              setRequests(prev => prev.map(r =>
                r.id === pendingActionId
                  ? { ...r, status: 'actioned' as RequestStatus, resolvedAt: 'Just now', resolvedBy: 'You', policyName: 'Microsoft Fabric data leaks (quick policy) - 3/4/2026' }
                  : r
              ))
            }
          }}
        />
      )}
    </main>
  )
}

export default PolicyHealthRecommendations

