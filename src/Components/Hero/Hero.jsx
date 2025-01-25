import React from 'react'

import ParticlesComponent from '../Particlejs'
import Content from './Content/Content'

import "./Hero.css"

const Hero = () => {
  return (
    <div  >
      <section id='home'>
        <div className='hero2 container1'>
      <ParticlesComponent className='particles'/>
       <Content />
       </div>
       </section>
       
    </div>
  )
}

export default Hero;
