import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Myworks from './Components/Myworks/Myworks'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Myworks/>
    <Contact/>
    </div>
  )
}

export default App
