import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GetInTouch from './components/Getintouch'
import Footsm from './components/Footsm'
import React from 'react'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Technologies />
      <Experience />
      <Projects />
      <GetInTouch />
      <Footsm />
    </div>
  )
}

export default App