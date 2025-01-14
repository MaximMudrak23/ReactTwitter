import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const docRoot = document.getElementById('root')
const crRoot = createRoot(docRoot);

crRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
