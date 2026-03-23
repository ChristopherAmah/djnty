import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <div className="stone-background">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
