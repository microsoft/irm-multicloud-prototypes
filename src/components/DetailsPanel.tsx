import { useState } from 'react'
import './DetailsPanel.css'
import { detailActivities, nonMicrosoft365Activities } from '../data/mockData'
import { DefaultButton, PrimaryButton, IconButton, Icon } from '@fluentui/react'

interface DetailsPanelProps {
  onClose: () => void
  onOpenPolicyPanel: () => void
}

const DetailsPanel = ({ onClose, onOpenPolicyPanel }: DetailsPanelProps) => {
  const [isDetectedExpanded, setIsDetectedExpanded] = useState(true)

  return (
    <aside className="details-panel">
      <div className="panel-header">
        <h2>Potential data leak activities</h2>
        <IconButton
          iconProps={{ iconName: 'Cancel' }}
          ariaLabel="Close"
          onClick={onClose}
        />
      </div>

      <div className="panel-content">
        <p className="panel-intro">
          The exfiltration activities below might be related to data leakage. After reviewing the
          results, consider setting up the recommended policy to help you address potential risks.
        </p>

        <div className="panel-divider"></div>

        <div className="panel-section">
          <button 
            className="section-toggle"
            onClick={() => setIsDetectedExpanded(!isDetectedExpanded)}
          >
            <IconButton
              iconProps={{ iconName: isDetectedExpanded ? 'ChevronDown' : 'ChevronRight' }}
              className="toggle-icon-btn"
            />
            <span className="section-title">What we detected</span>
          </button>

          {isDetectedExpanded && (
            <div className="section-content">
              <p className="detection-summary">
                The following is recent activity based on a scan of 23K users.
              </p>

              <div className="activities-list">
                {detailActivities.map((activity, index) => (
                  <div key={index} className={`activity-line ${index === 0 ? 'first-activity' : ''}`}>
                    <span className="activity-percentage">{activity.percentage}</span>
                    <span className="activity-description">{activity.description}</span>
                  </div>
                ))}
              </div>

              <h4 className="subsection-title">Exfiltration from non-Microsoft 365 data sources</h4>

              <div className="activities-list">
                {nonMicrosoft365Activities.map((activity, index) => (
                  <div key={index} className="activity-line">
                    <span className="activity-percentage">{activity.percentage}</span>
                    <span className="activity-description">{activity.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="panel-divider"></div>

        <div className="recommendation-section">
          <h3 className="recommendation-heading">Recommendations</h3>
          
          <div className="recommendation-item">
            <h4 className="recommendation-title">Create a data leaks policy</h4>
            <p className="recommendation-description">
              Create a 'Data leaks' policy that detects and alerts you of potential data leaks by users, which can range from accidental sharing of info outside your organization to data theft with malicious intent.
            </p>
            <PrimaryButton>Get started</PrimaryButton>
          </div>

          <div className="recommendation-item">
            <div className="recommendation-title-row">
              <h4 className="recommendation-title">Create a data leaks policy for non-Microsoft 365 apps</h4>
              <div className="badge-payg">
                <Icon iconName="Rocket" />
                <span>Pay-as-you-go</span>
              </div>
            </div>
            <p className="recommendation-description">
              Create a 'Data leaks' policy that detects and alerts you of potential data leaks from non-Microsoft 365 data sources, including Microsoft Fabric.
            </p>
            <PrimaryButton onClick={onOpenPolicyPanel}>Get started</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="panel-footer">
        <DefaultButton onClick={onClose}>Close</DefaultButton>
      </div>
    </aside>
  )
}

export default DetailsPanel
