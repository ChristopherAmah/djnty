import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import './App.css'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import PWAInstallPrompt from './components/PWAInstallPrompt'

function App() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
       <div className="stone-background">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
      <PWAInstallPrompt />
    </div>
    </>
  )
}

export default App
