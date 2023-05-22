import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes ,Route } from 'react-router-dom'


import App from './App'
import Home from './Pages/Home'
import About from './Pages/About'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
      <Routes>
          
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)