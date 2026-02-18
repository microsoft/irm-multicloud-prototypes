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
import DetailsPanel from './components/DetailsPanel'
import DataTheftPanel from './components/DataTheftPanel'
import PolicyCreationPanel from './components/PolicyCreationPanel'
import DataTheftPolicyPanel from './components/DataTheftPolicyPanel'
import { useState } from 'react'
import { useIsAuthenticated, useMsal } from "@azure/msal-react"
import { loginRequest } from "./authConfig"
import { PrimaryButton } from '@fluentui/react'

function App() {
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()
  
  // All hooks must be called before any conditional returns
  const [activePage, setActivePage] = useState('analytics')
  const [isPanelOpen, setIsPanelOpen] = useState(true)
  const [isDataTheftPanelOpen, setIsDataTheftPanelOpen] = useState(false)
  const [isPolicyPanelOpen, setIsPolicyPanelOpen] = useState(false)
  const [isDataTheftPolicyPanelOpen, setIsDataTheftPolicyPanelOpen] = useState(false)

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error("Login error:", e)
      alert("Login failed: " + e.message)
    })
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: '"Segoe UI", sans-serif',
        background: '#f0f0f0'
      }}>
        <div style={{
          background: 'white',
          padding: '48px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: '#242424' }}>
            Microsoft Purview Prototype
          </h1>
          <p style={{ color: '#616161', marginBottom: '32px' }}>
            Sign in with your Microsoft account to access the prototype
          </p>
          <PrimaryButton onClick={handleLogin} text="Sign in with Microsoft" />
        </div>
      </div>
    )
  }

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
    <div className="app">
      <Header />
      <div className="app-container">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        {activePage === 'analytics' && (
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
        )}
        {activePage === 'fabric' && <FabricGovernanceHub />}
        {activePage === 'payg' && <PaygUsageReport />}
        {activePage === 'purview-irm' && <PurviewHomeIRM />}
        {activePage === 'exfil-dspm' && <ExfilObjectiveDSPM />}
        {activePage === 'user-analytics-dspm' && <UserAnalyticsDSPM />}
        {activePage === 'defender' && <Defender />}
        {activePage === 'audit-search' && <AuditSearch />}
        {activePage === 'policy-health' && <PolicyHealthRecommendations />}
      </div>
    </div>
  )
}

export default App
