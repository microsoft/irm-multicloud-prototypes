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
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

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
