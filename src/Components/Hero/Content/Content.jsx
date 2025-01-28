import React from 'react';
import '../../Hero/Content/Content.css';


import Typewriter from './Typewriter/Typewriter'

const Content = () => {
  return (
    <div>
      
      <div className='matter'>
        <p className='dept bold1'>Department of Civil Enginering</p>
        <h5>
        <Typewriter/>
          <p className='to bold1'>To</p></h5>
      <h1>(Pratistha)</h1>
      <h5 className='bold2'>2K2c5</h5>
      <p className='date bold1'>March 3 & 4</p>
      
      </div>
      
      
    </div>
  )
}

export default Content;

