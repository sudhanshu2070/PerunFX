import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
| Behavior                 | Why                                                             |
| ------------------------ | --------------------------------------------------------------- |
| `console.log` runs twice | React.StrictMode re-runs `useEffect` once in dev to detect bugs |
| Happens in dev only      | Production build runs effects only once as expected             |
*/