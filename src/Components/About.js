import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Anwar Ali</b> and I am from New Delhi, India.
            I'm a <b>Full stack web developer</b> and i have completed <b>BTech in CSE</b> in 2023. <br/><br/>
            
            I completed a <b>Data Science</b> internship at Zummit Infolab and worked as a <b>Frontend/UI Developer</b> at Chetu, specializing in HTML, CSS, JavaScript, and ReactJS. 
            I enjoy creating original projects with visually appealing designs—feel free to explore some of my work in the projects section. <br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='Python' />
        <Skills skill='Django' />
        <Skills skill='React' />
        <Skills skill='Redux' />
        <Skills skill='Javascript' />
        <Skills skill='HTML'/>
        <Skills skill='CSS' />
        <Skills skill='TailwindCSS' />
        <Skills skill='MaterialUI' />
        <Skills skill='MySQL' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Figma' />
        <Skills skill='Bootstrap'/>

      </div>
    </>
  )
}

export default About