import React from 'react'

import ParticlesComponent from '../Particlejs'
import Content from './Content/Content'
import Countdown from './Content/countdown/Countdown'


import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero2 container1' >
      <div className="bg"></div>
      <section id='home'>
      
      
      <ParticlesComponent className='particles'/>
       <Content />
       
       
       
       
       </section>
       

      
    </div>
  )
}

export default Hero;
