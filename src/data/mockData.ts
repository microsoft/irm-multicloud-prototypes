export const riskActivities = {
  dataLeak: [
    { percentage: '1.1%', label: 'of users performed activities involving sensitive info' },
    { percentage: '0.9%', label: 'of users showing anomalous exfiltration activity volume' },
    { percentage: '0.8%', label: 'of users downloaded SharePoint files' },
    { percentage: '0.7%', label: 'of users shared SharePoint sites with people outside your organization' },
    { percentage: '0.5%', label: 'of users shared SharePoint files with people outside your organization' },
    { percentage: '0.5%', label: 'of users shared SharePoint folders with people outside your organization' },
    { percentage: '0.4%', label: 'of users copied sensitive content to personal cloud' },
    { percentage: '0.4%', label: 'of users shared files across network' },
    { percentage: '0.3%', label: 'of users emailed people outside your organization' },
    { percentage: '0.2%', label: 'of users copied content to USB' },
    { percentage: '0.1%', label: 'of users printed a large number of files' },
    { percentage: '0.1%', label: 'of users performed sequential activities that might indicate suspicious exfiltration behavior' }
  ]
}

export const detailActivities = [
  { percentage: '1.3%', description: ' of users performed exfiltration activities' },
  { percentage: '1.1%', description: ' of users performed activities involving sensitive info' },
  { percentage: '0.9%', description: ' of users showing anomalous exfiltration activity volume' },
  { percentage: '0.8%', description: ' of users downloaded SharePoint files' },
  { percentage: '0.7%', description: ' of users shared SharePoint sites with people outside your organization' },
  { percentage: '0.5%', description: ' of users shared SharePoint files with people outside your organization' },
  { percentage: '0.5%', description: ' of users shared SharePoint folders with people outside your organization' },
  { percentage: '0.4%', description: ' of users copied sensitive content to personal cloud' },
  { percentage: '0.4%', description: ' of users shared files across network' },
  { percentage: '0.3%', description: ' of users emailed people outside your organization' },
  { percentage: '0.2%', description: ' of users copied content to USB' },
  { percentage: '0.1%', description: ' of users printed a large number of files' },
  { percentage: '0.1%', description: ' of users performed sequential activities that might indicate suspicious exfiltration behavior' }
]

export const nonMicrosoft365Activities = [
  { percentage: '1.2%', description: ' of users downloaded content from Box' },
  { percentage: '1.1%', description: ' of users downloaded content from Dropbox' },
  { percentage: '1.0%', description: ' of users shared Google Drive files with people outside your organization' },
  { percentage: '0.9%', description: ' of users shared Box files with people outside your organization' },
  { percentage: '0.8%', description: ' of users shared Dropbox files with people outside your organization' },
  { percentage: '0.7%', description: ' of users disabled Amazon S3 settings that block public access to data' },
  { percentage: '0.7%', description: ' of users made Amazon S3 buckets publicly accessible' },
  { percentage: '0.6%', description: ' of users elevated access to all Azure subscriptions and management groups' },
  { percentage: '0.5%', description: ' of users downloaded Power BI reports' },
  { percentage: '0.5%', description: ' of users removed or downgraded sensitivity labels of Power BI artifacts' },
  { percentage: '0.4%', description: ' of users enabled external sharing of Microsoft Fabric data' },
  { percentage: '0.4%', description: ' of users are sharing lakehouse data with people outside the organization' },
  { percentage: '0.4%', description: ' of users removed or downgraded sensitivity labels of Microsoft Fabric lakehouses' }
]
