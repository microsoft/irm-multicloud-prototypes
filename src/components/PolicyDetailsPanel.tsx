import { useState } from 'react'
import { Panel, PanelType, PrimaryButton, DefaultButton } from '@fluentui/react'
import './PolicyDetailsPanel.css'

interface PolicyDetailsPanelProps {
  isOpen: boolean
  onDismiss: () => void
  policyName: string
  hasPAYGSubscription: boolean
}

const PolicyDetailsPanel = ({ isOpen, onDismiss, policyName, hasPAYGSubscription }: PolicyDetailsPanelProps) => {
  const [selectedTab, setSelectedTab] = useState('health')

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={onDismiss}
      type={PanelType.medium}
      headerText={policyName}
      closeButtonAriaLabel="Close"
      isLightDismiss
    >
      <div className="policy-details-content">
        <div className="policy-metadata">
          <div className="metadata-item">
            <span className="metadata-label">Created by:</span>
            <span className="metadata-value">Admin</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Created on:</span>
            <span className="metadata-value">3/10/2023</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Last alert:</span>
            <span className="metadata-value">No alerts yet</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Last edited on:</span>
            <span className="metadata-value">5/26/2023 4:47 AM</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Last edited by:</span>
            <span className="metadata-value">Admin</span>
          </div>
        </div>

        <div className="panel-tabs">
          <button 
            className={selectedTab === 'health' ? 'panel-tab active' : 'panel-tab'}
            onClick={() => setSelectedTab('health')}
          >
            Policy health
          </button>
          <button 
            className={selectedTab === 'settings' ? 'panel-tab active' : 'panel-tab'}
            onClick={() => setSelectedTab('settings')}
          >
            Policy settings
          </button>
        </div>

        {selectedTab === 'health' && (
          <div className="policy-health-tab">
            <h3>This policy hasn't generated any alerts recently</h3>
            
            <div className="status-items">
              <div className="status-item success">
                <i className="ms-Icon ms-Icon--CompletedSolid" aria-hidden="true"></i>
                <span>Triggering event is configured correctly.</span>
              </div>
              <div className="status-item warning">
                <i className="ms-Icon ms-Icon--WarningSolid" aria-hidden="true"></i>
                <span>Triggering event hasn't occurred for any users in this policy.</span>
              </div>
            </div>

            <div className="troubleshooting-section">
              <h4>Troubleshooting tips</h4>
              <ul>
                <li>Address any action items below.</li>
                <li>Add indicators to detect more user activities.</li>
                <li>Lower indicator thresholds so users don't have to perform as many activities per day in order to generate high severity alerts.</li>
                <li>Increase the number of users included in the policy.</li>
              </ul>
            </div>

            <div className="recommendations-section">
              <h4>Recommendations</h4>
              
              {!hasPAYGSubscription ? (
                <>
                  <div className="recommendation-card-extended">
                    <h5>
                      <div className="recommendation-icon">
                        <i className="ms-Icon ms-Icon--LightningBolt" aria-hidden="true"></i>
                      </div>
                      Extend the policy to non-Microsoft 365 data sources
                    </h5>
                    <p className="recommendation-description">
                      Your policies can detect risky activities across cloud storage, cloud services, and Microsoft Fabric data sources.
                    </p>
                    <p className="recommendation-action-text">
                      <strong>Recommendation:</strong> Set up an Azure subscription to enable monitoring for Cloud storage (Box, Dropbox, Google Drive), Cloud services (Azure, AWS), and Microsoft Fabric (Power BI, Lakehouse).
                    </p>
                    <PrimaryButton className="recommendation-action-btn">Get started</PrimaryButton>
                  </div>
                </>
              ) : (
                <>
                  <div className="recommendation-card-extended">
                    <div className="recommendation-title-row">
                      <h5>
                        <div className="recommendation-icon">
                          <i className="ms-Icon ms-Icon--LightningBolt" aria-hidden="true"></i>
                        </div>
                        Extend the policy to non-Microsoft 365 data sources
                      </h5>
                      <div className="badge-payg">
                        <i className="ms-Icon ms-Icon--Rocket" aria-hidden="true"></i>
                        <span>Pay-as-you-go</span>
                      </div>
                    </div>
                    <p className="recommendation-description">
                      Extend your policy coverage to detect risky activities across cloud storage, cloud services, and Microsoft Fabric data sources.
                    </p>
                    <p className="recommendation-action-text">
                      <strong>Recommendation:</strong> Add indicators for Cloud storage (Box, Dropbox, Google Drive), Cloud services (Azure, AWS), and Microsoft Fabric (Power BI, Lakehouse) with default thresholds by clicking the button below.
                    </p>
                    <PrimaryButton className="recommendation-action-btn">Add indicators now</PrimaryButton>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {selectedTab === 'settings' && (
          <div className="policy-settings-tab">
            <p>Policy settings content goes here...</p>
          </div>
        )}

        <div className="panel-footer">
          <PrimaryButton onClick={onDismiss}>Edit policy</PrimaryButton>
          <DefaultButton onClick={onDismiss}>Close</DefaultButton>
        </div>
      </div>
    </Panel>
  )
}

export default PolicyDetailsPanel
