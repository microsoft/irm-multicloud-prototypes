import './DetailsPanel.css'
import { IconButton } from '@fluentui/react'

interface PaygInsightsPanelProps {
  onClose: () => void
}

const PaygInsightsPanel = ({ onClose }: PaygInsightsPanelProps) => {
  const paygActivities = [
    { percentage: '22%', description: ' of users downloaded content from Box' },
    { percentage: '21%', description: ' of users downloaded content from Dropbox' },
    { percentage: '20%', description: ' of users shared Google Drive files with people outside your organization' },
    { percentage: '19%', description: ' of users shared Box files with people outside your organization' },
    { percentage: '18%', description: ' of users shared Dropbox files with people outside your organization' },
    { percentage: '17%', description: ' of users disabled Amazon S3 settings that block public access to data' },
    { percentage: '17%', description: ' of users made Amazon S3 buckets publicly accessible' },
    { percentage: '16%', description: ' of users elevated access to all Azure subscriptions and management groups' },
    { percentage: '15%', description: ' of users downloaded Power BI reports' },
    { percentage: '15%', description: ' of users removed or downgraded sensitivity labels of Power BI artifacts' },
    { percentage: '14%', description: ' of users enabled external sharing of Microsoft Fabric data' },
    { percentage: '14%', description: ' of users are sharing lakehouse data with people outside the organization' },
    { percentage: '14%', description: ' of users removed or downgraded sensitivity labels of Microsoft Fabric lakehouses' }
  ]

  return (
    <aside className="details-panel">
      <div className="panel-header">
        <h2>Exfiltration from non-Microsoft 365 data sources</h2>
        <IconButton
          iconProps={{ iconName: 'Cancel' }}
          ariaLabel="Close"
          onClick={onClose}
        />
      </div>

      <div className="panel-content">
        <p className="panel-intro">
          The following activities were detected from a recent scan of your users. These insights require 
          pay-as-you-go billing to enable monitoring and policy creation.
        </p>

        <div className="panel-divider"></div>

        <div className="panel-section">
          <div className="section-content">
            <p className="detection-summary">
              Activity detected in the past one month from users in your organization.
            </p>

            <div className="activities-list">
              {paygActivities.map((activity, index) => (
                <div key={index} className="activity-line">
                  <span className="activity-percentage">{activity.percentage}</span>
                  <span className="activity-description">{activity.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default PaygInsightsPanel
