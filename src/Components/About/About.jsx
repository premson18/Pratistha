import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about container1'>
      <section id='about'>
       <div className="aboutinfo">
        <div className="aboutcollege aboutcol">
          <h1 className='prat'>About College</h1>
          <img></img>
          <p className='aboutmat'>The Civil Engineering Department at Jawaharlal Nehru Technological University - Gurajada Vizianagaram , is a hub of academic excellence, innovation, and practical learning. Committed to nurturing future leaders in the field of Civil engineering, the department offers a comprehensive curriculum that combines theoretical knowledge with hands-on experience. Renowned for its state-of-the-art infrastructure and cutting-edge laboratories, the department provides students with a conducive environment for research and development. </p>
        </div>
        <div className="abotpratistha aboutcol">
          <h1 className='prat'>About Pratistha</h1>
          <img></img>
           <p className='aboutmat'>Pratistha is the Two day National-level Technical Fest Organised by the Department of Civil Engineering in Which competition is conducted in various 

Technical and Non-Technical events encourages students to participate and showcase their talents .Students put in their best entry learning how to manage time effect priotrize work, follow a schedule</p>
           </div>
       </div>
       </section>
    </div>
  )
}

export default About
