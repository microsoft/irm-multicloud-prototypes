import { useState } from 'react'
import './PolicyHealthRecommendations.css'
import { DefaultButton, PrimaryButton, Link, IconButton } from '@fluentui/react'
import PolicyDetailsPanel from './PolicyDetailsPanel'

const PolicyHealthRecommendations = () => {
  const [selectedTab, setSelectedTab] = useState('user')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedPolicy, setSelectedPolicy] = useState('')
  const [selectedPolicyIndex, setSelectedPolicyIndex] = useState<number | null>(null)

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
    <main className="policy-health-content">
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
          <DefaultButton iconProps={{ iconName: 'TestBeaker' }}>Start scoping activity for users</DefaultButton>
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
                      setSelectedPolicy(policy.name); 
                      setSelectedPolicyIndex(index);
                      setIsPanelOpen(true); 
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

      <PolicyDetailsPanel
        isOpen={isPanelOpen}
        onDismiss={() => setIsPanelOpen(false)}
        policyName={selectedPolicy}
        hasPAYGSubscription={selectedPolicyIndex === 1}
      />
    </main>
  )
}

export default PolicyHealthRecommendations
