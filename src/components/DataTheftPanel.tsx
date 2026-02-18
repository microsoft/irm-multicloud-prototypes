import { useState } from 'react'
import './DataTheftPanel.css'
import { DefaultButton, PrimaryButton, IconButton, Icon } from '@fluentui/react'

interface DataTheftPanelProps {
  onClose: () => void
  onOpenPolicyPanel: () => void
}

const dataTheftActivities = [
  { percentage: '5.9%', description: ' of users with a resignation date performed exfiltration activities' },
  { percentage: '5%', description: ' of users with a resignation date showing anomalous exfiltration activity volume' },
  { percentage: '4.6%', description: ' of users with a resignation date performed activities involving sensitive info' },
  { percentage: '3.7%', description: ' of users with a resignation date performed sequential activities that might indicate suspicious exfiltration behavior' },
  { percentage: '3.2%', description: ' of users with a resignation date downloaded SharePoint files' },
  { percentage: '2.7%', description: ' of users with a resignation date shared SharePoint sites with people outside your organization' },
  { percentage: '2.3%', description: ' of users with a resignation date shared SharePoint folders with people outside your organization' },
  { percentage: '2.3%', description: ' of users with a resignation date emailed people outside your organization' },
  { percentage: '1.8%', description: ' of users with a resignation date copied content to USB' },
  { percentage: '1.8%', description: ' of users with a resignation date printed a large number of files' },
  { percentage: '1.4%', description: ' of users with a resignation date shared SharePoint files with people outside your organization' },
  { percentage: '1.4%', description: ' of users with a resignation date copied sensitive content to personal cloud' },
  { percentage: '0.9%', description: ' of users with a resignation date shared files across network' }
]

const nonMicrosoft365DataTheftActivities = [
  { percentage: '1.2%', description: ' of users with a resignation date downloaded content from Box' },
  { percentage: '1.1%', description: ' of users with a resignation date downloaded content from Dropbox' },
  { percentage: '1.0%', description: ' of users with a resignation date shared Google Drive files with people outside your organization' },
  { percentage: '0.9%', description: ' of users with a resignation date shared Box files with people outside your organization' },
  { percentage: '0.8%', description: ' of users with a resignation date shared Dropbox files with people outside your organization' },
  { percentage: '0.7%', description: ' of users with a resignation date disabled Amazon S3 settings that block public access to data' },
  { percentage: '0.7%', description: ' of users with a resignation date made Amazon S3 buckets publicly accessible' },
  { percentage: '0.6%', description: ' of users with a resignation date elevated access to all Azure subscriptions and management groups' },
  { percentage: '0.5%', description: ' of users with a resignation date downloaded Power BI reports' },
  { percentage: '0.5%', description: ' of users with a resignation date removed or downgraded sensitivity labels of Power BI artifacts' },
  { percentage: '0.4%', description: ' of users with a resignation date enabled external sharing of Microsoft Fabric data' },
  { percentage: '0.4%', description: ' of users with a resignation date are sharing lakehouse data with people outside the organization' },
  { percentage: '0.4%', description: ' of users with a resignation date removed or downgraded sensitivity labels of Microsoft Fabric lakehouses' }
]

const DataTheftPanel = ({ onClose, onOpenPolicyPanel }: DataTheftPanelProps) => {
  const [isDetectedExpanded, setIsDetectedExpanded] = useState(true)

  return (
    <aside className="data-theft-panel">
      <div className="panel-header">
        <h2>Potential data theft activities</h2>
        <IconButton
          iconProps={{ iconName: 'Cancel' }}
          ariaLabel="Close"
          onClick={onClose}
        />
      </div>

      <div className="panel-content">
        <p className="panel-intro">
          The exfiltration activities below might be related to data theft by departing users
          near their resignation or termination date. After reviewing them, consider setting up the recommended policy to help address potential risks.
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
                The following is recent activity based on a scan of 219 users who are leaving your organization.
              </p>

              <div className="activities-list">
                {dataTheftActivities.map((activity, index) => (
                  <div key={index} className={`activity-line ${index === 0 ? 'first-activity' : ''}`}>
                    <span className="activity-percentage-alt">{activity.percentage}</span>
                    <span className="activity-description">{activity.description}</span>
                  </div>
                ))}
              </div>

              <h4 className="subsection-title">Exfiltration from non-Microsoft 365 data sources</h4>

              <div className="activities-list">
                {nonMicrosoft365DataTheftActivities.map((activity, index) => (
                  <div key={index} className="activity-line">
                    <span className="activity-percentage-alt">{activity.percentage}</span>
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
            <h4 className="recommendation-title">Create a data theft by departing users policy</h4>
            <p className="recommendation-description">
              Create a 'Data theft by departing users' policy that detects data theft by users near their resignation or termination date, which can range from accidental oversharing of info outside your organization to data theft with malicious intent.
            </p>
            <PrimaryButton>Get started</PrimaryButton>
          </div>

          <div className="recommendation-item">
            <div className="recommendation-title-row">
              <h4 className="recommendation-title">Create a data theft policy for non-Microsoft 365 apps</h4>
              <div className="badge-payg">
                <Icon iconName="Rocket" />
                <span>Pay-as-you-go</span>
              </div>
            </div>
            <p className="recommendation-description">
              Create a 'Data theft by departing users' policy that detects and alerts you of potential data theft from non-Microsoft 365 cloud apps, including Microsoft Fabric, by users leaving your org or whose account was deleted from Microsoft Entra ID.
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

export default DataTheftPanel
