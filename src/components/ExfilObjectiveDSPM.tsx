import './ExfilObjectiveDSPM.css'

const ExfilObjectiveDSPM = () => {
  return (
    <div className="exfil-objective-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumb-item">DSPM</span>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-item">Objectives</span>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-item-active">Prevent exfiltration to risky destinations</span>
      </div>

      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Objective: Prevent exfiltration to risky destinations</h1>
        <p className="page-subtitle">Safeguard sensitive data with monitored transfer of sensitive data outside your organization.</p>
      </div>

      {/* Trend Chart Section */}
      <div className="chart-section">
        <h2 className="section-title">Data exfiltration trends</h2>
        <p className="section-subtitle">Analyze the volume of files containing sensitive data that were transferred outside your organization.</p>
        
        <div className="chart-container">
          <svg className="area-chart" viewBox="0 0 760 260" preserveAspectRatio="xMidYMid meet">
            {/* Y-axis labels */}
            <text x="10" y="20" className="axis-label">2K</text>
            <text x="10" y="70" className="axis-label">1.5K</text>
            <text x="10" y="120" className="axis-label">1K</text>
            <text x="10" y="170" className="axis-label">500</text>
            <text x="10" y="220" className="axis-label">0</text>
            
            {/* X-axis labels */}
            <text x="80" y="250" className="axis-label">Jan</text>
            <text x="220" y="250" className="axis-label">Feb</text>
            <text x="360" y="250" className="axis-label">Mar</text>
            <text x="500" y="250" className="axis-label">Apr-Timeline</text>
            <text x="640" y="250" className="axis-label">May</text>
            <text x="720" y="250" className="axis-label">Jun</text>
            
            {/* Grid lines */}
            <line x1="50" y1="20" x2="750" y2="20" className="grid-line" />
            <line x1="50" y1="70" x2="750" y2="70" className="grid-line" />
            <line x1="50" y1="120" x2="750" y2="120" className="grid-line" />
            <line x1="50" y1="170" x2="750" y2="170" className="grid-line" />
            <line x1="50" y1="220" x2="750" y2="220" className="grid-line" />
            
            {/* Area paths */}
            <defs>
              <linearGradient id="emailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6264A7', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#6264A7', stopOpacity: 0}} />
              </linearGradient>
              <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#E3008C', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#E3008C', stopOpacity: 0}} />
              </linearGradient>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#00B7C3', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#00B7C3', stopOpacity: 0}} />
              </linearGradient>
            </defs>
            
            {/* Cloud area (bottom layer) */}
            <path d="M 50 180 L 150 175 L 250 170 L 350 160 L 450 150 L 550 145 L 650 135 L 750 130 L 750 220 L 50 220 Z" fill="url(#cloudGradient)" />
            <path d="M 50 180 L 150 175 L 250 170 L 350 160 L 450 150 L 550 145 L 650 135 L 750 130" stroke="#00B7C3" strokeWidth="2" fill="none" />
            
            {/* Device area (middle layer) */}
            <path d="M 50 140 L 150 135 L 250 125 L 350 115 L 450 105 L 550 95 L 650 85 L 750 75 L 750 220 L 50 220 Z" fill="url(#deviceGradient)" />
            <path d="M 50 140 L 150 135 L 250 125 L 350 115 L 450 105 L 550 95 L 650 85 L 750 75" stroke="#E3008C" strokeWidth="2" fill="none" />
            
            {/* Email area (top layer) */}
            <path d="M 50 100 L 150 95 L 250 85 L 350 75 L 450 65 L 550 55 L 650 45 L 750 35 L 750 220 L 50 220 Z" fill="url(#emailGradient)" />
            <path d="M 50 100 L 150 95 L 250 85 L 350 75 L 450 65 L 550 55 L 650 45 L 750 35" stroke="#6264A7" strokeWidth="2" fill="none" />
          </svg>
          
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-color" style={{backgroundColor: '#6264A7'}}></span>
              <span className="legend-label">Email</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{backgroundColor: '#E3008C'}}></span>
              <span className="legend-label">Device</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{backgroundColor: '#00B7C3'}}></span>
              <span className="legend-label">Cloud</span>
            </div>
            <div className="legend-item">
              <span className="legend-label-secondary">— Estimated impact of remediation plan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Remediation Card */}
      <div className="remediation-card">
        <div className="remediation-icon">💡</div>
        <div className="remediation-content">
          <h3 className="remediation-title">Remediation plan to prevent exfiltration in action</h3>
          <p className="remediation-text">Estimated impact: Reduce exfiltration attempt rate by approximately 36%</p>
        </div>
        <button className="remediation-button">Implement remediation plan</button>
      </div>

      {/* Key Metrics */}
      <div className="metrics-section">
        <h2 className="section-title">Key exfiltration metrics</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-value">2.4K</div>
            <div className="metric-label">Files exfiltrated</div>
            <div className="metric-change">in last 30 days</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">8%</div>
            <div className="metric-label">Users not covered by Insider Risk Management</div>
            <div className="metric-change">in last 30 days</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">950</div>
            <div className="metric-label">Files sent to personal email</div>
            <div className="metric-change">in last 30 days</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">360</div>
            <div className="metric-label">Files copied to USB</div>
            <div className="metric-change">in last 30 days</div>
          </div>
        </div>
      </div>

      {/* Risk Patterns */}
      <div className="risk-patterns-section">
        <h2 className="section-title">Exfiltration risk patterns</h2>
        <p className="section-subtitle">Review exfiltration activity and risk patterns in the last 30 days.</p>
        
        <div className="patterns-grid">
          {/* Pattern Card 1 */}
          <div className="pattern-card">
            <div className="pattern-content-left">
              <h3 className="pattern-title">Files exfiltrated to personal accounts</h3>
              <p className="pattern-description">Files containing sensitive data were sent to users' personal accounts such as Gmail, Outlook, and Google Drive.</p>
              <button className="pattern-link">View activities</button>
              <button className="pattern-button">Review risk pattern</button>
            </div>
            
            <div className="pattern-content-right">
              <div className="pattern-chart">
              <div className="pattern-item">
                <div className="pattern-label">gmail.com</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '100%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4123</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">outlook.com</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '97%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4000</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">drive.google.com</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '93%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">3824</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Dropbox.com</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '53%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">2200</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Yahoo.com</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '41%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">1700</div>
                </div>
              </div>
            </div>
            
            <div className="pattern-legend">
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#4F6BED'}}></span>
                <span className="legend-text">US Social Security number</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#689920'}}></span>
                <span className="legend-text">Phone number</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#3A96DD'}}></span>
                <span className="legend-text">Customer ID</span>
              </div>
            </div>
            </div>
          </div>

          {/* Pattern Card 2 */}
          <div className="pattern-card">
            <div className="pattern-content-left">
              <h3 className="pattern-title">Risky users shared files from your organization</h3>
              <p className="pattern-description">High-risk users are sharing from risky data sources to external destinations which can increase risk to your org if sensitive data leaked in shared resources.</p>
              <button className="pattern-link">View activities</button>
              <button className="pattern-button">Review risk pattern</button>
            </div>
            
            <div className="pattern-content-right">
              <div className="pattern-chart">
              <div className="pattern-item">
                <div className="pattern-label">Departing users</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '100%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4123</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Potentially high-impact users</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '97%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4000</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Potentially risky users</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '93%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">3824</div>
                </div>
              </div>
            </div>
            
            <div className="pattern-legend">
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#4F6BED'}}></span>
                <span className="legend-text">Box</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#689920'}}></span>
                <span className="legend-text">Dropbox</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#3A96DD'}}></span>
                <span className="legend-text">Google Drive</span>
              </div>
            </div>
            </div>
          </div>

          {/* Pattern Card 3 */}
          <div className="pattern-card">
            <div className="pattern-content-left">
              <h3 className="pattern-title">Departing users transferring files with sensitive info</h3>
              <p className="pattern-description">Users are resigning or sharing files containing sensitive data to external destinations which can increase risk to your data.</p>
              <button className="pattern-link">View activities</button>
              <button className="pattern-button">Review risk pattern</button>
            </div>
            
            <div className="pattern-content-right">
              <div className="pattern-chart">
              <div className="pattern-item">
                <div className="pattern-label">Email to self</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '100%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4123</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Printing files</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '97%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4000</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Copy to USB</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '93%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">3824</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Sharing files externally</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '53%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">2200</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Upload to personal cloud</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '41%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">1700</div>
                </div>
              </div>
            </div>
            
            <div className="pattern-legend">
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#4F6BED'}}></span>
                <span className="legend-text">US Social Security number</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#689920'}}></span>
                <span className="legend-text">Phone number</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#3A96DD'}}></span>
                <span className="legend-text">Customer ID</span>
              </div>
            </div>
            </div>
          </div>

          {/* Pattern Card 4 */}
          <div className="pattern-card">
            <div className="pattern-content-left">
              <h3 className="pattern-title">Top exfiltration activities in your organization</h3>
              <p className="pattern-description">Review the top activities involving sensitive data exfil to external destinations.</p>
              <button className="pattern-link">View activities</button>
              <button className="pattern-button">Review risk pattern</button>
            </div>
            
            <div className="pattern-content-right">
              <div className="pattern-chart">
              <div className="pattern-item">
                <div className="pattern-label">Personal cloud storage</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '100%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4123</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Removable media</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '97%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">4000</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Printing files</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '93%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">3824</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">Network share</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '53%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">2200</div>
                </div>
              </div>
              <div className="pattern-item">
                <div className="pattern-label">File copied to remote desktop version</div>
                <div className="pattern-bar-container">
                  <div className="pattern-bar" style={{width: '53%'}}>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#4F6BED'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#689920'}}></div>
                    <div className="pattern-bar-segment" style={{backgroundColor: '#3A96DD'}}></div>
                  </div>
                  <div className="pattern-value">2200</div>
                </div>
              </div>
            </div>
            
            <div className="pattern-legend">
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#4F6BED'}}></span>
                <span className="legend-text">US Social Security number</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#689920'}}></span>
                <span className="legend-text">Phone number</span>
              </div>
              <div className="legend-item-small">
                <span className="legend-circle" style={{backgroundColor: '#3A96DD'}}></span>
                <span className="legend-text">Customer ID</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExfilObjectiveDSPM
