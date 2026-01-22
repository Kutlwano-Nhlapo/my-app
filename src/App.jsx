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
        <div class="nav">
           <p class="logo">Portfoilio</p>          
            <a href='.'>home</a>
            <a href='#about'>about</a>
            <a>Contact</a>
        
        </div>
       
      </div>
      <div className="container">
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
    <script src="script.js"></script>
    </>
  )
}

export default App
