import React from 'react'
import "./Navbar.css"
import logo from "../../../assets/logo.png"
import JNTUGV from "../../../assets/jntugv.png"


const scrollToSection = (sectionId) => {
  const element =  document.getElementById(sectionId);
  if(element){
    element.scrollIntoView({ behavior: 'smooth'});
  }
}

const Navbar = () => {
  return (
    <div>
    <nav className='container1'>
       <a><img src={JNTUGV} alt=""  className='jntugvlogo'/></a>
      <ul className="menu">
        <li><a onClick={() => scrollToSection ('home')} className="menuelements">Home</a></li>
       <li><a onClick={() => scrollToSection ('workshop123')} className="menuelements">Workshop</a></li>
       <li><a onClick={() => scrollToSection ('events123')} className="menuelements">Events</a></li> 
       <li><a onClick={() => scrollToSection ('accomidation123')} className="menuelements">Accomidation</a></li> 
       <li>  <a onClick={() => scrollToSection ('about')} className="menuelements">About</a></li>
       <li>  <a onClick={() => scrollToSection ('contact')} className="menuelements">Contact us</a></li>
       <li>  <a onClick={() => scrollToSection ('sponsors')} className="menuelements">More</a></li>
        </ul>
       
       
       <img src={logo} alt=""  className='logo'/>
       
       
    </nav>
    </div>
    
  )
}

export default Navbar
