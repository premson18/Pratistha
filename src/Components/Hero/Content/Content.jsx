import React from 'react';
import '../../Hero/Content/Content.css';
import '../Content/title.css'
import Countdown from './countdown/Countdown';


import Typewriter from './Typewriter/Typewriter'

const Content = () => {
  return (
    <div className='hero2'>
      
      <div className='matter'>
        <p className='dept bold1'>
          Jawaharlal Nehru Technological University - Gurajada Vizianagaram
        </p>
        <p className='dept bold1'>Department of Civil Engineering</p>
        <h5>
        <Typewriter/>
          <p className='to bold1'>To</p></h5>
          <h1 class="title">
        <span>P</span>
        <span>R</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>S</span>
        <span>T</span>
        <span>H</span>
        <span>A</span>
    </h1>
      <h5 className='bold1 twok25'>2K25</h5>
      <p className='date bold1'>March 3<sup>rd</sup> & 4<sup>th</sup></p>
      <Countdown/>
      </div>
    </div>
  )
}

export default Content;

