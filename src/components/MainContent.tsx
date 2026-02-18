import { useState } from 'react'
import './MainContent.css'
import { DefaultButton, IconButton } from '@fluentui/react'

interface MainContentProps {
  onPanelToggle: () => void
  onDataTheftPanelToggle: () => void
}

const MainContent = ({ onPanelToggle, onDataTheftPanelToggle }: MainContentProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    dataLeak: true,
    dataTheft: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <main className="main-content">
      <div className="breadcrumb">
        <span>Reports</span>
        <span className="separator">›</span>
        <span>Analytics</span>
      </div>

      <h1 className="page-title">Results from the last scan for risk activities</h1>
      <p className="page-description">
        The insights below provide a pseudonymized summary of user activities detected. Activities scanned are
        the same ones detected by insider risk policies. After reviewing the insights, view their details to drill
        down further and set up a recommended policy to address potential risks.
      </p>

      <div className="date-range">
        <strong>Insights from September 15 - September 28</strong>
      </div>

      {/* Potential data leak activities */}
      <section className="risk-section">
        <div className="section-header-bar" onClick={() => toggleSection('dataLeak')}>
          <h2>Potential data leak activities</h2>
          <IconButton
            iconProps={{ iconName: expandedSections.dataLeak ? 'ChevronDown' : 'ChevronRight' }}
            className="expand-btn"
          />
        </div>

        {expandedSections.dataLeak && (
          <div className="section-content">
            <div className="content-layout">
              <div className="left-column">
                <div className="main-stat">
                  <span className="stat-percentage">1.3% of your users</span>
                  <span className="stat-text"> performed exfiltration activities</span>
                </div>
                <p className="stat-subtitle">Activity from 23K users scanned</p>

                <div className="recommendation-box">
                  <h3>Recommendation: Set up a 'Data leaks' policy</h3>
                  <p>
                    Detects and alerts you of potential data leaks, which can range from accidental sharing of
                    info outside your organization to data theft with malicious intent.
                  </p>
                  <DefaultButton onClick={onPanelToggle}>View details</DefaultButton>
                </div>
              </div>

              <div className="right-column">
                <div className="stat-row">
                  <span className="inline-percentage">1.2%</span>
                  <span className="inline-text"> of users downloaded content from Box</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage">1.1%</span>
                  <span className="inline-text"> of users performed activities involving sensitive info</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage">0.9%</span>
                  <span className="inline-text"> of users showing anomalous exfiltration activity volume</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage">0.9%</span>
                  <span className="inline-text"> of users shared Box files with people outside your organization</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage">0.8%</span>
                  <span className="inline-text"> of users downloaded SharePoint files</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Potential data theft activities */}
      <section className="risk-section">
        <div className="section-header-bar" onClick={() => toggleSection('dataTheft')}>
          <h2>Potential data theft activities</h2>
          <IconButton
            iconProps={{ iconName: expandedSections.dataTheft ? 'ChevronDown' : 'ChevronRight' }}
            className="expand-btn"
          />
        </div>

        {expandedSections.dataTheft && (
          <div className="section-content">
            <div className="content-layout">
              <div className="left-column">
                <div className="main-stat">
                  <span className="stat-percentage-alt">5.9% of users with a resignation date</span>
                  <span className="stat-text"> performed exfiltration activities</span>
                </div>
                <p className="stat-subtitle">Activity from 219 users scanned</p>

                <div className="recommendation-box">
                  <h3>Recommendation: Set up a 'Data theft by departing users' policy</h3>
                  <p>
                    Detects and alerts you of potential data theft by departing users near their resignation or
                    termination date.
                  </p>
                  <DefaultButton onClick={onDataTheftPanelToggle}>View details</DefaultButton>
                </div>
              </div>

              <div className="right-column">
                <div className="stat-row">
                  <span className="inline-percentage-alt">5%</span>
                  <span className="inline-text"> of users with a resignation date showing anomalous exfiltration activity volume</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage-alt">4.6%</span>
                  <span className="inline-text"> of users with a resignation date performed activities involving sensitive info</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage-alt">3.7%</span>
                  <span className="inline-text"> of users with a resignation date performed sequential activities that might indicate suspicious exfiltration behavior</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage-alt">0.4%</span>
                  <span className="inline-text"> of users with a resignation date enabled external sharing of Microsoft Fabric data</span>
                </div>
                <div className="stat-row">
                  <span className="inline-percentage-alt">0.4%</span>
                  <span className="inline-text"> of users with a resignation date are sharing lakehouse data with people outside the organization</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default MainContent
