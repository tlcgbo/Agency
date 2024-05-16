import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import Homepage from './components/Pages/Homepage'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Services from './components/Pages/Services'
import Features from './Features'
import Features1 from './Features1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/features' element={<Features />}></Route> */}
        <Route path='/features' element={<Features1 />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App