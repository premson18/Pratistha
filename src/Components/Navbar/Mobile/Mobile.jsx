import React from 'react'
import './Mobile.css'
import logo from '../../../assets/logo.png'
import Instagram from '../../../assets/instagram.png'

const scrollToSection = (sectionId) => {
    const element =  document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

const Mobile = () => {
  return (
    <div>
        <div className="toplogo">
            <img src={logo}/>
            <div className="micons">
                <img src={Instagram} alt=""/>
            </div>
        </div>
      <div className="mobnav">
        <ul>
            <li><a onClick={() => scrollToSection ('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection ('workshop1')}>Workshop</a></li>
            <li><a href="">Accomidation</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">About</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Mobile
