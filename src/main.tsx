import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PublicClientApplication, EventType } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, initializeIcons } from '@fluentui/react'
import { msalConfig } from './authConfig'

initializeIcons()

const msalInstance = new PublicClientApplication(msalConfig)

msalInstance.initialize().then(() => {
  // Handle redirect response before rendering
  return msalInstance.handleRedirectPromise()
}).then(() => {
  const accounts = msalInstance.getAllAccounts()
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0])
  }

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as { account: any }
      msalInstance.setActiveAccount(payload.account)
    }
  })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter basename="/irm-multicloud-prototypes">
        <MsalProvider instance={msalInstance}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </MsalProvider>
      </BrowserRouter>
    </StrictMode>,
  )
})
