import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import Homepage from './components/Pages/Homepage'
import About from './components/Pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App