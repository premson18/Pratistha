import React from 'react'
import ParticlesComponent from '../Particlejs'
import Content from './Content/Content'
import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero2 container1' >
      <section id='home'>
      <ParticlesComponent/>
       <Content />
       </section>

    </div>
  )
}

export default Hero;
