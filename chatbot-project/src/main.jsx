import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(//gives us errors when developing app strict mode helps us find those errors
  <StrictMode>
    <App />
  </StrictMode>,
)
