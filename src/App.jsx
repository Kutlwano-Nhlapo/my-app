import { useState } from 'react'
import './App.css'
import ExplodingStack from './assets/explodingStack'
import About from './assets/About'
import Contact from './assets/Contact'
import Education from './assets/Education'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div>       
        <div className="nav">
           <p className="logo">My Portfolio</p>          
            <a onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>home</a>
            <a onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>about</a>
            <a onClick={() => scrollToSection('education')} style={{cursor: 'pointer'}}>education</a>
            <a onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>contact</a>
        </div>
      </div>
      <div id='home' className="container">
        <div className="greet">Hi. I am</div>
        <div className="name">Kutlwano Nhlapo</div>
        <div className="field"><span></span></div>
      </div>
      
      <div id='about'>
        <About/>        
      </div>
      
      <div id='education'>
        <Education/>
      </div>
       
      <div id='contact'>
        <Contact/>
      </div>
    
      <ExplodingStack />
    </>
  )
}

export default App