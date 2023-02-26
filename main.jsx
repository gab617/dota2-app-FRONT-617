import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { ContextProvider } from './src/context/context'

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)