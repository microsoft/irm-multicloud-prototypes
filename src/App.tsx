import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import FabricGovernanceHub from './components/FabricGovernanceHub'
import PaygUsageReport from './components/PaygUsageReport'
import PurviewHomeIRM from './components/PurviewHomeIRM'
import ExfilObjectiveDSPM from './components/ExfilObjectiveDSPM'
import UserAnalyticsDSPM from './components/UserAnalyticsDSPM'
import Defender from './components/Defender'
import PolicyHealthRecommendations from './components/PolicyHealthRecommendations'
import AuditSearch from './components/AuditSearch'
import AdoptionFunnel from './components/AdoptionFunnel'
import DetailsPanel from './components/DetailsPanel'
import DataTheftPanel from './components/DataTheftPanel'
import PolicyCreationPanel from './components/PolicyCreationPanel'
import DataTheftPolicyPanel from './components/DataTheftPolicyPanel'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { loginRequest } from './authConfig'
import { PrimaryButton, DefaultButton, Spinner, SpinnerSize } from '@fluentui/react'
import { InteractionStatus } from '@azure/msal-browser'

function AnalyticsPage() {
  const [isPanelOpen, setIsPanelOpen] = useState(true)
  const [isDataTheftPanelOpen, setIsDataTheftPanelOpen] = useState(false)
  const [isPolicyPanelOpen, setIsPolicyPanelOpen] = useState(false)
  const [isDataTheftPolicyPanelOpen, setIsDataTheftPolicyPanelOpen] = useState(false)

  const handleOpenPolicyPanel = () => {
    setIsPanelOpen(false)
    setIsPolicyPanelOpen(true)
  }

  const handleOpenDataTheftPanel = () => {
    setIsDataTheftPanelOpen(true)
  }

  const handleOpenDataTheftPolicyPanel = () => {
    setIsDataTheftPanelOpen(false)
    setIsDataTheftPolicyPanelOpen(true)
  }

  return (
    <>
      <MainContent
        onPanelToggle={() => setIsPanelOpen(!isPanelOpen)}
        onDataTheftPanelToggle={handleOpenDataTheftPanel}
      />
      {isPanelOpen && <DetailsPanel onClose={() => setIsPanelOpen(false)} onOpenPolicyPanel={handleOpenPolicyPanel} />}
      {isDataTheftPanelOpen && <DataTheftPanel onClose={() => setIsDataTheftPanelOpen(false)} onOpenPolicyPanel={handleOpenDataTheftPolicyPanel} />}
      {isPolicyPanelOpen && <PolicyCreationPanel onClose={() => setIsPolicyPanelOpen(false)} />}
      {isDataTheftPolicyPanelOpen && <DataTheftPolicyPanel onClose={() => setIsDataTheftPolicyPanelOpen(false)} />}
    </>
  )
}

function App() {
  const isAuthenticated = useIsAuthenticated()
  const { instance, inProgress } = useMsal()
  const [showRetry, setShowRetry] = useState(false)

  // Identify the signed-in user in Microsoft Clarity
  useEffect(() => {
    if (isAuthenticated) {
      const account = instance.getActiveAccount()
      if (account?.username && (window as any).clarity) {
        (window as any).clarity('identify', account.username, undefined, undefined, account.name)
      }
    }
  }, [isAuthenticated, instance])

  useEffect(() => {
    if (inProgress !== InteractionStatus.None) {
      const timer = setTimeout(() => setShowRetry(true), 5000)
      return () => clearTimeout(timer)
    } else {
      setShowRetry(false)
    }
  }, [inProgress])

  if (inProgress !== InteractionStatus.None) {
    return (
      <div className="login-page">
        <div className="login-card">
          <Spinner size={SpinnerSize.large} label="Signing you in..." />
          {showRetry && (
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <p style={{ fontSize: 13, color: '#605e5c', marginBottom: 12 }}>
                Taking too long? A previous session may be stuck.
              </p>
              <DefaultButton
                text="Clear session & retry"
                onClick={() => {
                  sessionStorage.clear()
                  window.location.reload()
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="login-page">
        <div className="login-card">
          <img
            src="https://img.icons8.com/fluency/96/microsoft.png"
            alt="Microsoft"
            className="login-logo"
          />
          <h1 className="login-title">Insider Risk Management</h1>
          <p className="login-subtitle">Sign in with your Microsoft account to access the multicloud prototypes dashboard.</p>
          <PrimaryButton
            text="Sign in with Microsoft"
            onClick={() => instance.loginRedirect(loginRequest).catch(console.error)}
            styles={{ root: { minWidth: 220, height: 40 } }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/fabric" element={<FabricGovernanceHub />} />
          <Route path="/fabric/irm-policies" element={<PolicyHealthRecommendations />} />
          <Route path="/payg" element={<PaygUsageReport />} />
          <Route path="/purview-irm" element={<PurviewHomeIRM />} />
          <Route path="/exfil-dspm" element={<ExfilObjectiveDSPM />} />
          <Route path="/user-analytics-dspm" element={<UserAnalyticsDSPM />} />
          <Route path="/defender" element={<Defender />} />
          <Route path="/audit-search" element={<AuditSearch />} />
          <Route path="/policies" element={<PolicyHealthRecommendations />} />
          <Route path="/adoption-funnel" element={<AdoptionFunnel />} />
          <Route path="*" element={<Navigate to="/analytics" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
