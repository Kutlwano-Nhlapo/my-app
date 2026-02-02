import {useState} from 'react'
import './AboutStyle.css'

function About() {

     return(
        <div className='section'>
            <div className='about'>
              <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <h3>Systems Thinker & Developer</h3>
          
         <div className="about-description">
            <p>
              What truly sparks me is the <strong>internet as a system</strong>—the intricate 
              dance of data moving across the world in milliseconds. My goal is to build 
              the infrastructure that makes that happen.
            </p>

            <p>
              I specialize in building secure, scalable web applications using 
              <strong> .NET</strong> and <strong>SQL</strong>. However, I believe that 
              modern software requires more than just functionality; it requires responsibility. 
              That's why I focus heavily on <strong>Data Privacy</strong> and use 
              <strong> Python</strong> to understand the data science behind the code.
            </p>

            <p>
              I don't just write code; I manage outcomes. I rely on <strong>Agile methodology</strong> 
              to keep projects organized, ensuring that speed never comes at the cost of stability.
            </p>
          </div>
          {/* Key Skills Tags - Updated for You */}
          <div className="skills-row">
            <span>ASP.NET</span>
            <span>SQL</span>
            <span>JavaScript</span>
            <span>Python (Data Science)</span>
            <span>Agile & Kanban</span>
            <span>Data Privacy</span>
          </div>

          <a href='./Kutlwano Nhlapo Resume.pdf' className="cv-btn">Download My CV</a>
        </div>

        {/* RIGHT COLUMN: The Image */}
        <div className="about-image">
           {/* Keep your image here */}
          <img 
            src="./softImage.png" 
            alt="Profile" 
          />
          <div className="img-backdrop"></div>
        </div>
            </div></div>
     )
}
export default About;