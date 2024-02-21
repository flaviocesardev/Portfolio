import { useState } from 'react'
import './App.css'

//import react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {  

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sobre' element={<About/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
