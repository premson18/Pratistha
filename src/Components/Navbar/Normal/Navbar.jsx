import React from 'react'
import "./Navbar.css"
import logo from "../../../assets/logo.png"
import Instagram from "../../../assets/instagram.webp"


const Navbar = () => {
  return (
    <div>
    <nav className='container1'>
       <img src={logo} alt=""  className='logo'/>
      <ul className="menu">
        <li><a href="">Home</a></li>
       <li><a href="Workshop.jsx">Workshop</a></li>
       <li><a href="">Events</a></li> 
       <li><a href="">Accomidation</a></li> 
       <li>  <a href="">About</a></li>
       <li>  <a href="">Contact us</a></li>
       <li>  <a href="">More</a></li>
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
