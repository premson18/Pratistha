import React from 'react'

import ParticlesComponent from '../Particlejs'
import Content from './Content/Content'

import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero2 container1' >
      
      <div className="bg">
      <section id='home'>
      <ParticlesComponent className='particles'/>
       <Content />
       </section>
       
       </div>
       

      
    </div>
  )
}

export default Hero;
