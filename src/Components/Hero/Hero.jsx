import React from 'react'

import ParticlesComponent from '../Particlejs'
import Content from './Content/Content'
import Countdown from './Content/countdown/Countdown'


import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero2 container1' >
      <section id='home'>
      <div className="bg">
      
      <ParticlesComponent className='particles'/>
       <Content />
       <Countdown/>
       
       
       </div>
       </section>
       

      
    </div>
  )
}

export default Hero;
