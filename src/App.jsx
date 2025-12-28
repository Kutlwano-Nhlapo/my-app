import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExplodingStack from './assets/explodingStack'
import About from './assets/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>       
        <div class="nav">
           <p class="logo">Portfoilio</p>          
            <a>home</a>
            <a>about</a>
            <a>Contact</a>
        
        </div>
       
      </div>
      <div className="container">
      <div className="greet">Hi. I am</div>
      <div className="name">Kutlwano Nhlapo</div>
      <div className="field"><span></span></div>
      </div>
      <About/>
      <ExplodingStack />
    <script src="script.js"></script>
    </>
  )
}

export default App
