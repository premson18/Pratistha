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
       <img src={JNTUGV} alt=""  className='jntugvlogo'/>
      <ul className="menu">
        <li><a onClick={() => scrollToSection ('home')}>Home</a></li>
       <li><a onClick={() => scrollToSection ('workshop1')}>Workshop</a></li>
       <li><a onClick={() => scrollToSection ('events123')}>Events</a></li> 
       <li><a onClick={() => scrollToSection ('accomidation123')}>Accomidation</a></li> 
       <li>  <a onClick={() => scrollToSection ('about')}>About</a></li>
       <li>  <a onClick={() => scrollToSection ('contact')}>Contact us</a></li>
       <li>  <a onClick={() => scrollToSection ('sponsors')}>More</a></li>
        </ul>
       
       
       <img src={logo} alt=""  className='logo'/>
       
       
    </nav>
    </div>
    
  )
}

export default Navbar
