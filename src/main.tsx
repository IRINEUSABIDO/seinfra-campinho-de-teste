import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Password from './routes/Password.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Password />
  </StrictMode>,
)
