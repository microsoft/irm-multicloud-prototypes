import { useState } from 'react'
import './Sidebar.css'
import { IconButton } from '@fluentui/react'

interface SidebarProps {
  activePage: string
  onPageChange: (page: string) => void
}

const Sidebar = ({ activePage, onPageChange }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-top">
        <IconButton
          iconProps={{ iconName: 'GlobalNavButton' }}
          className="sidebar-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          ariaLabel="Toggle navigation"
        />
      </div>

      <div className="sidebar-section">
        <div className="section-header">
          <div className="section-icon-wrapper">
            <i className="ms-Icon ms-Icon--Shield" aria-hidden="true"></i>
          </div>
          {isExpanded && (
            <>
              <div className="section-title">
                <h3>IRM PAYG Awareness</h3>
              </div>
              <IconButton
                iconProps={{ iconName: 'Pin' }}
                className="pin-btn"
                ariaLabel="Pin"
              />
            </>
          )}
        </div>
        
        <div className="nav-single-item">
          <button className={activePage === 'analytics' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('analytics')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--BarChartVertical" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Insider Risk Management Analytics</span>}
          </button>
          <button className={activePage === 'fabric' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('fabric')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--FabricDataConnectionLibrary" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Fabric Governance Hub</span>}
          </button>
          <button className={activePage === 'payg' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('payg')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--ReportDocument" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">PAYG Usage Report</span>}
          </button>
          <button className={activePage === 'purview-irm' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('purview-irm')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Home" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Purview Home - Recommendations</span>}
          </button>
          <button className={activePage === 'policy-health' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('policy-health')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Health" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Policy Health Recommendations</span>}
          </button>
          <button className={activePage === 'exfil-dspm' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('exfil-dspm')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Shield" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Exfil Objective in DSPM</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={activePage === 'user-analytics-dspm' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('user-analytics-dspm')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--People" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">User Analytics in DSPM</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={activePage === 'defender' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('defender')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--DefenderTVM" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Defender</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={activePage === 'audit-search' ? 'nav-item active' : 'nav-item'} onClick={() => onPageChange('audit-search')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Search" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Audit Search</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
