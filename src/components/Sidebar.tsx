import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Sidebar.css'
import { IconButton } from '@fluentui/react'

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Extract the page segment from the pathname (e.g. "/analytics" → "analytics")
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + '/')

  const go = (path: string) => navigate(path)

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
          <button className={isActive('/analytics') ? 'nav-item active' : 'nav-item'} onClick={() => go('/analytics')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--BarChartVertical" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Insider Risk Management Analytics</span>}
          </button>
          <button className={isActive('/fabric') ? 'nav-item active' : 'nav-item'} onClick={() => go('/fabric')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--FabricDataConnectionLibrary" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Fabric Governance Hub</span>}
          </button>
          {isExpanded && (isActive('/fabric')) && (
            <button className={currentPath === '/fabric/irm-policies' ? 'nav-item nav-sub-item active' : 'nav-item nav-sub-item'} onClick={() => go('/fabric/irm-policies')}>
              <span className="nav-icon">
                <i className="ms-Icon ms-Icon--Health" aria-hidden="true"></i>
              </span>
              <span className="nav-label">IRM Policies</span>
            </button>
          )}
          <button className={isActive('/payg') ? 'nav-item active' : 'nav-item'} onClick={() => go('/payg')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--ReportDocument" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">PAYG Usage Report</span>}
          </button>
          <button className={isActive('/purview-irm') ? 'nav-item active' : 'nav-item'} onClick={() => go('/purview-irm')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Home" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Purview Home - Recommendations</span>}
          </button>
          <button className={isActive('/policies') ? 'nav-item active' : 'nav-item'} onClick={() => go('/policies')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Health" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Policy Health Recommendations</span>}
          </button>
          <button className={isActive('/exfil-dspm') ? 'nav-item active' : 'nav-item'} onClick={() => go('/exfil-dspm')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Shield" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Exfil Objective in DSPM</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={isActive('/user-analytics-dspm') ? 'nav-item active' : 'nav-item'} onClick={() => go('/user-analytics-dspm')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--People" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">User Analytics in DSPM</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={isActive('/defender') ? 'nav-item active' : 'nav-item'} onClick={() => go('/defender')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--DefenderTVM" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Defender</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={isActive('/audit-search') ? 'nav-item active' : 'nav-item'} onClick={() => go('/audit-search')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--Search" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Audit Search</span>}
            {isExpanded && <span className="under-construction-badge">🚧</span>}
          </button>
          <button className={isActive('/adoption-funnel') ? 'nav-item active' : 'nav-item'} onClick={() => go('/adoption-funnel')}>
            <span className="nav-icon">
              <i className="ms-Icon ms-Icon--BarChartVerticalFill" aria-hidden="true"></i>
            </span>
            {isExpanded && <span className="nav-label">Adoption Funnel</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
