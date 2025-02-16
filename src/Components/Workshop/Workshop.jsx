import React from 'react'
import IMAGE from '../../assets/BIM.png'
import './workshop.css'
import WORKSHOP1 from '../../assets/eventimages/startup.jpeg'

const Workshop = () => {
  return (
    <div>
      <section id='workshop123'>
        <div className="workshop-card">
         <div className='eventsinfo'> <h1>Workshop</h1><br></br>
      <div className="workshop">
        <div className="workshop1">
          <h4>Startup Spark</h4>
          <img src={WORKSHOP1} className="workshopimg"></img>
          <p className='classtext'>
           Startup
          </p>
        </div>
        <div className="workshop2"></div>

      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Workshop

