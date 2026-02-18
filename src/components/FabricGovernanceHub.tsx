import { useState, useRef, useEffect } from 'react'
import './FabricGovernanceHub.css'
import { PrimaryButton, DefaultButton, Icon, TeachingBubble } from '@fluentui/react'
import FabricInsiderRiskDialog from './FabricInsiderRiskDialog'
import FabricPolicyCreationPanel from './FabricPolicyCreationPanel'
import InformAdminsDialog from './InformAdminsDialog'

const FabricGovernanceHub = () => {
  const [activeTab, setActiveTab] = useState('Govern')
  const [isInsiderRiskDialogOpen, setIsInsiderRiskDialogOpen] = useState(false)
  const [isPolicyPanelOpen, setIsPolicyPanelOpen] = useState(false)
  const [isInformAdminsDialogOpen, setIsInformAdminsDialogOpen] = useState(false)
  const [showTeachingBubble, setShowTeachingBubble] = useState(false)
  const fabricCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Show teaching bubble after component mounts
    const timer = setTimeout(() => {
      setShowTeachingBubble(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenPolicyPanel = () => {
    setIsInsiderRiskDialogOpen(false)
    setIsPolicyPanelOpen(true)
  }

  const handleOpenInformAdminsDialog = () => {
    setIsInsiderRiskDialogOpen(false)
    setIsInformAdminsDialogOpen(true)
  }

  return (
    <div className="fabric-governance-hub">
      <div className="fabric-header">
        <h1 className="fabric-title">OneLake catalog</h1>
        <div className="fabric-tabs">
          <button
            className={activeTab === 'Explore' ? 'tab-button active' : 'tab-button'}
            onClick={() => setActiveTab('Explore')}
          >
            Explore
          </button>
          <button
            className={activeTab === 'Govern' ? 'tab-button active' : 'tab-button'}
            onClick={() => setActiveTab('Govern')}
          >
            Govern
          </button>
          <button
            className={activeTab === 'Secure' ? 'tab-button active' : 'tab-button'}
            onClick={() => setActiveTab('Secure')}
          >
            Secure
          </button>
        </div>
      </div>

      <div className="fabric-content">
        <div className="glance-section">
          <div className="glance-header">
            <div>
              <h2 className="glance-title">Your organization-wide data estate in Fabric at a glance</h2>
              <p className="glance-subtitle">View key governance insights on all your organization's content within Microsoft Fabric.</p>
              <p className="refresh-note">This report is automatically refreshed daily.</p>
            </div>
            <PrimaryButton className="view-more-btn">View more</PrimaryButton>
          </div>

          <div className="stats-grid">
            <div className="stats-card">
              <div className="stat-label">Domains & subdomains</div>
              <div className="stat-value">10</div>
              <div className="stat-label">Capacities</div>
              <div className="stat-value">1</div>
              <div className="stat-label">Workspaces</div>
              <div className="stat-value">2</div>
              <div className="stat-label">Items</div>
              <div className="stat-value">19</div>
            </div>

            <div className="chart-card">
              <div className="chart-title">All items by type</div>
              <div className="chart-content">
                <div className="chart-row">
                  <div className="chart-label">SemanticModel</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">Report</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '87.5%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">SynapseNotebo...</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar chart-bar-light" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">DataflowFabri...</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar chart-bar-light" style={{ width: '37.5%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">Warehouse</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar chart-bar-light" style={{ width: '37.5%' }}></div>
                  </div>
                </div>
              </div>
              <div className="chart-axis">
                <span>0</span>
                <span>2</span>
                <span>4</span>
                <span>6</span>
                <span>8</span>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-title">Workspaces by capacity name</div>
              <div className="chart-content">
                <div className="chart-row">
                  <div className="chart-label">Trial-2025092...</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              <div className="chart-axis">
                <span>0</span>
                <span>0.5</span>
                <span>1</span>
                <span>1.5</span>
                <span>2</span>
              </div>
            </div>

            <div className="chart-card">
              <div className="chart-title">Top operations</div>
              <div className="chart-content">
                <div className="chart-row">
                  <div className="chart-label">RefreshDatase...</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">CreateDataset</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">CreateReport</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">Import</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-label">UpdateDatasou...</div>
                  <div className="chart-bar-container">
                    <div className="chart-bar" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
              <div className="chart-axis">
                <span>0</span>
                <span>0.5</span>
                <span>1</span>
                <span>1.5</span>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>

        <div className="recommended-section">
          <h3 className="section-heading">
            Recommended actions
            <Icon iconName="Info" className="info-icon-heading" />
          </h3>
          <div className="actions-grid">
            <div className="action-card">
              <Icon iconName="CirclePlus" className="action-icon green-icon" />
              <span className="action-text">Structure your Fabric data with domains</span>
            </div>
            <div className="action-card">
              <Icon iconName="SkypeCircleCheck" className="action-icon green-icon" />
              <span className="action-text">Establish sources of truth with endorsements</span>
            </div>
            <div className="action-card">
              <Icon iconName="SkypeCircleCheck" className="action-icon green-icon" />
              <span className="action-text">Enhance data curation with tags</span>
            </div>
            <div className="action-card">
              <Icon iconName="ArrowUpRight" className="action-icon blue-icon" />
              <span className="action-text">Increase sensitivity label coverage</span>
            </div>
            <div 
              ref={fabricCardRef}
              className="action-card" 
              onClick={() => setIsInsiderRiskDialogOpen(true)} 
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="https://cdn.prod.website-files.com/62e5ade2db3599bd054570cb/66d4c5a5095e15740d673931_mspurviewlogo1200.png" 
                alt="Microsoft Purview"
                className="action-icon purview-logo"
              />
              <span className="action-text">Detect exfiltration of Fabric data using Insider Risk Management</span>
            </div>
          </div>
        </div>

        {showTeachingBubble && (
          <TeachingBubble
            target={fabricCardRef.current}
            headline="New recommendation!"
            onDismiss={() => setShowTeachingBubble(false)}
            hasCloseButton
            primaryButtonProps={{
              text: 'Learn more',
              onClick: () => {
                setShowTeachingBubble(false)
                setIsInsiderRiskDialogOpen(true)
              }
            }}
            secondaryButtonProps={{
              text: 'Got it',
              onClick: () => setShowTeachingBubble(false)
            }}
          >
            Protect your Fabric data from insider threats with Microsoft Purview Insider Risk Management.
          </TeachingBubble>
        )}

        <div className="solutions-section">
          <div className="section-header-with-nav">
            <h3 className="section-heading">
              Top solutions
              <Icon iconName="Info" className="info-icon-heading" />
            </h3>
            <Icon iconName="ChevronRight" className="nav-icon" />
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <h4 className="solution-title">Admin monitoring reports</h4>
              <p className="solution-description">
                Monitor activity across your organization and gain fresh insights from customizable reports on feature usage and adoption, content sharing, and Microsoft Purview security and compliance.
              </p>
              <DefaultButton className="solution-button">Open</DefaultButton>
              <a href="#" className="solution-link">
                Admin Monitoring Workspace—Microsoft Learn
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>

            <div className="solution-card">
              <h4 className="solution-title">Set up your tenant</h4>
              <p className="solution-description">
                Calibrate your tenant settings to get the right control over Fabric-wide activity. Delegate access to tenant settings and workspace admins, and empower data creation in your org.
              </p>
              <DefaultButton className="solution-button">Open</DefaultButton>
              <a href="#" className="solution-link">
                Tenant Settings - Microsoft Learn
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>

            <div className="solution-card">
              <h4 className="solution-title">Domains</h4>
              <p className="solution-description">
                Organize your tenant into domains and subdomains to help teams find and manage their own data, and make data governance simpler.
              </p>
              <DefaultButton className="solution-button">Open</DefaultButton>
              <a href="#" className="solution-link">
                Fabric domains—Microsoft Learn
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>

            <div className="solution-card">
              <h4 className="solution-title">Capacities</h4>
              <p className="solution-description">
                Manage your organization's Fabric capacity consumption. Optimize your existing...
              </p>
              <DefaultButton className="solution-button">Open</DefaultButton>
              <a href="#" className="solution-link">
                Manage your Fabric capaciti...
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>
          </div>
        </div>

        <div className="learn-section">
          <h3 className="section-heading">Read, watch, and learn</h3>

          <div className="learn-grid">
            <div className="learn-column">
              <h4 className="learn-subtitle">Fabric data governance</h4>
              <a href="#" className="learn-link">
                Administer Microsoft Fabric
                <Icon iconName="NavigateExternalInline" />
              </a>
              <a href="#" className="learn-link">
                Governance and compliance in Microsoft Fabric
                <Icon iconName="NavigateExternalInline" />
              </a>
              <a href="#" className="learn-link">
                Microsoft Fabric security
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>

            <div className="learn-column">
              <h4 className="learn-subtitle">Estate-wide governance</h4>
              <a href="#" className="learn-link">
                Microsoft Purview
                <Icon iconName="NavigateExternalInline" />
              </a>
              <a href="#" className="learn-link">
                Microsoft Purview documentation
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>

            <div className="learn-column">
              <h4 className="learn-subtitle">Keep up to date</h4>
              <a href="#" className="learn-link">
                <Icon iconName="Edit" className="link-icon" />
                Add your ideas to the Fabric community
                <Icon iconName="NavigateExternalInline" />
              </a>
              <a href="#" className="learn-link">
                <Icon iconName="PlayerSettings" className="link-icon youtube" />
                Watch updates on the Fabric channel
                <Icon iconName="NavigateExternalInline" />
              </a>
              <a href="#" className="learn-link">
                <Icon iconName="PreviewLink" className="link-icon" />
                Stay informed with the Fabric blog
                <Icon iconName="NavigateExternalInline" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <FabricInsiderRiskDialog 
        isOpen={isInsiderRiskDialogOpen}
        onClose={() => setIsInsiderRiskDialogOpen(false)}
        onOpenPolicyPanel={handleOpenPolicyPanel}
        onOpenInformAdminsDialog={handleOpenInformAdminsDialog}
      />

      {isPolicyPanelOpen && (
        <FabricPolicyCreationPanel onClose={() => setIsPolicyPanelOpen(false)} />
      )}

      <InformAdminsDialog
        isOpen={isInformAdminsDialogOpen}
        onClose={() => setIsInformAdminsDialogOpen(false)}
      />
    </div>
  )
}

export default FabricGovernanceHub
