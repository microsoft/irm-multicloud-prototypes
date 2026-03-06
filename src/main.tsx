import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, initializeIcons } from '@fluentui/react'

initializeIcons()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/irm-multicloud-prototypes">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
