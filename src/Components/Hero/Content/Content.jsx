import React from 'react';
import '../../Hero/Content/Content.css';


import Typewriter from './Typewriter/Typewriter'

const Content = () => {
  return (
    <div>
      
      <div className='matter'>
        <p className='dept'>Department of Civil Enginering</p>
        <h5>
        <Typewriter/>
          <p className='to'>To</p></h5>
      <h1>(Pratistha)</h1>
      <h5>2K25</h5>
      <p className='date'>March 3 & 4</p>
      
      </div>
      
      
    </div>
  )
}

export default Content;

