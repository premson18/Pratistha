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
            <li><button onClick={() => scrollToSection ('home')} className="homemenu">Home</button></li>
            <li><button onClick={() => scrollToSection ('workshop1')}>Workshop</button></li>
            <li><button >Accomidation</button></li>
            <li><button onClick={() => scrollToSection ('events123')}>Events</button></li>
            <li><button href="">About</button></li>
            <li><button href="" className='contactUsmenu'>ContactUs</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Mobile
