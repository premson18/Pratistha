import React from 'react'
import './Sponsors.css'
import MFC from "../../assets/Sponsors/mfc.png"



const Sponsors = () => {
  return (
    <div>
      <section id='sponsors'>
        <h1 className='sponsorsh1'>Sponsors</h1>
       <div className='sponsors12'> <marquee direction="left" behavior="scroll" loop="infinite" scrollamount="10"><img src={MFC} ></img></marquee></div> 
      
        </section>
    </div>
  )
}

export default Sponsors
