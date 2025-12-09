import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavidadInfo from './NavidadInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavidadInfo></NavidadInfo>
  </StrictMode>,
)
