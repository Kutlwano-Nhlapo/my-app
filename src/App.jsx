import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExplodingStack from './assets/explodingStack'
import About from './assets/About'
import Contact from './assets/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>       
        <div className="nav">
           <p className="logo">Portfolio</p>          
            <a href='#home'>home</a>
            <a href='#about'>about</a>
            <a href='#contact'>Contact</a>
        
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
       <div id='contact'>
      
         <Contact/>
      </div>
    
      <ExplodingStack />
    </>
  )
}

export default App