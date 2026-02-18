import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, initializeIcons } from '@fluentui/react'
import { MsalProvider } from "@azure/msal-react"
import { PublicClientApplication } from "@azure/msal-browser"
import { msalConfig } from "./authConfig"

const msalInstance = new PublicClientApplication(msalConfig)

initializeIcons()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MsalProvider>
  </StrictMode>,
)
