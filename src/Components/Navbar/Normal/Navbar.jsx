import React from 'react'
import "./Navbar.css"
import logo from "../../../assets/logo.png"
import Instagram from "../../../assets/instagram.webp"


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
       <img src={logo} alt=""  className='logo'/>
      <ul className="menu">
        <li><a onClick={() => scrollToSection ('home')}>Home</a></li>
       <li><a onClick={() => scrollToSection ('workshop1')}>Workshop</a></li>
       <li><a onClick={() => scrollToSection ('events123')}>Events</a></li> 
       <li><a onClick={() => scrollToSection ('accomidation')}>Accomidation</a></li> 
       <li>  <a onClick={() => scrollToSection ('about')}>About</a></li>
       <li>  <a onClick={() => scrollToSection ('contact')}>Contact us</a></li>
       <li>  <a onClick={() => scrollToSection ('more')}>More</a></li>
        </ul>
       
       <div className="icons">
        <a href='insatagram'><img src={Instagram} alt=""  className='icon1'/></a>
        <img src="" alt="" />
        <img src="" alt="" />
       </div>
    </nav>
    
    </div>
  )
}

export default Navbar
