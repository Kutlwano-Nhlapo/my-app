import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import NotFound from './assets/NotFound.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)