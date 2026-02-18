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

function App() {
  const [activePage, setActivePage] = useState('analytics')
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
