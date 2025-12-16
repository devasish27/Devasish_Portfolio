import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.scss'
import '@fontsource/inter/400.css'
import '@fontsource/poppins/600.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)