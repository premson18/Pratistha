import React from 'react'
import IMAGE from '../../assets/BIM.png'
import './workshop.css'
import WORKSHOP1 from '../../assets/eventimages/startup.jpeg'
import WORKSHOP2 from '../../assets/eventimages/sketchup.jpeg'

const Workshop = () => {
  return (
    <div>
      <section id='workshop123' className='container1'>
        <div className="workshop-card container1">
         <div className='eventsinfo'> <h1 className='workshop-title'>Workshop</h1><br></br>
      <div className="workshop ">
        <div className="workshop1">
          <h1 className='maintitle1'>Startup Spark</h1>
          <img src={WORKSHOP1} className="workshopimg"></img>
          <p className='classtext'>
          <p><h1 className='head'>Entrepreneurship:</h1> Discover the journey of     turning ideas into successful businesses.</p>
<p><h1 className='head'>Startup: </h1>Learn how startups disrupt industries and drive economic growth.</p>
<p><h1 className='head'>Stock Market:</h1> Dive into the exciting world of investments and financial markets.</p>
<p><h1 className='head'>Financial Planning:</h1> Financial planning involves managing income, expenses, savings, and investments to achieve long-term financial stability and goals.</p>
          </p>
          <p className='iim'>✨Note: IIM CERTIFICATION WILL BE PROVIDED<br></br>REGISTRATIONS OF YOUR STARTUP IN MSME PORTAL✨</p>
          <div >
            <a href='https://forms.gle/DTAF5ycCJ9GNuxks5' target="_blank" rel="noopener noreferrer"><button className='price1'>Price :- 600/-</button></a><br></br>
            <a className='price' href='https://forms.gle/DTAF5ycCJ9GNuxks5' target="_blank" rel="noopener noreferrer">
<button className='button-1 register'>Register Here</button></a>
            
          </div>
        </div>
        <div className="workshop1">
          <h1 className='maintitle2'>Sketch Up</h1>
          <img src={WORKSHOP2} className="workshopimg"></img>
          <p className='classtext'>
          Unlock the power of 3D design with SketchUp, the industry-leading modeling software. Whether you're an architect,<br></br> designer, or just curious about 3D modeling, this hands-on workshop will teach you the fundamentals of creating stunning visuals <br></br>and detailed structures. Learn from experts, enhance your creativity, and bring your ideas to life!
          
          </p>
          <p className='iim'>✨Certificate will Be Provided✨</p>
          <p className='iim1'>Additional Information :- <br></br>Participants must bring Laptops if Availabe<br></br>Minimum Requirments - 4gb ram,i3 processor</p>
          
          <div>
          <a href='https://forms.gle/TpXsBgmYRnLVUbD69' target="_blank" rel="noopener noreferrer"><button className='price1 '>Price :- 400/-</button></a><br></br>
          <a className='price' href='https://forms.gle/TpXsBgmYRnLVUbD69' target="_blank" rel="noopener noreferrer">
<button className='register button-1'>Register Here</button></a>
        
          </div>
        </div>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Workshop

