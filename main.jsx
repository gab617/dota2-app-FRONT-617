import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/index'
import { ContextProvider } from './src/context/context'
import './style.css'


const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)