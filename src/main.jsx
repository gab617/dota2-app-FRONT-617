import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { ContextProvider } from './context/context'

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)