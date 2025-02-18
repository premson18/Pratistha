import React from 'react'
import Instagram from "../../assets/InstagramFollow.webp"
import '../Follow/Follow.css'

const scrollToSection = (sectionId) => {
  const element =  document.getElementById(sectionId);
  if(element){
    element.scrollIntoView({ behavior: 'smooth'});
  }
}

const Follow = () => {
  return (
    <div>
      <section id="follow">
        <div className="follow">
            <div>
                <h3>Follow Us On</h3>
                <p className='click'>(Click Here)</p>
               <a  href='https://www.instagram.com/pratistha_2k25?igsh=NTc4MTiwNjQ2YQ=='target="_blank"np> <img src={Instagram}></img></a>
                <br></br>
                
                <h3>Quick Links</h3>

                <ul>
                <ul className='quicklinks'>
        <li><a onClick={() => scrollToSection ('home')} className="menuelements">Home</a></li>
       <li><a onClick={() => scrollToSection ('workshop123')} className="menuelements">Workshop</a></li>
       <li><a onClick={() => scrollToSection ('events123')} className="menuelements">Events</a></li> 
       <li><a onClick={() => scrollToSection ('accomidation123')} className="menuelements">Accomidation</a></li> 
       <li>  <a onClick={() => scrollToSection ('about')} className="menuelements">About</a></li>
       <li>  <a onClick={() => scrollToSection ('contact')} className="menuelements">Contact us</a></li>
       <li>  <a onClick={() => scrollToSection ('sponsors')} className="menuelements">More</a></li>
        </ul>
                </ul>

                <div className="address">
                <a className='Address' href='https://maps.app.goo.gl/o6CbFmCLXeABHdNj7' target="_blank" rel="noopener noreferrer">Address</a>
        
                </div>
                <h5>copyrights@Premson</h5>

                 </div>
        </div>
        
      </section>
    </div>
  )
}

export default Follow
