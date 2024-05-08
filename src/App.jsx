import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Herosection />
      <Routes>
      
      </Routes>    
    </BrowserRouter>
  )
}

export default App