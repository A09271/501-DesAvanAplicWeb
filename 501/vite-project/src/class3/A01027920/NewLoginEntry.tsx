import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NewLogin from './NewLogin'

createRoot(document.getElementById('login-root')!).render(
  <StrictMode>
    <NewLogin />
  </StrictMode>,
)
