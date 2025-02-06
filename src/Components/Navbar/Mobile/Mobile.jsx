import React from 'react'
import './Mobile.css'
import logo from '../../../assets/jntugv.png'
import Pratistha from '../../../assets/logo.png'
import Home from "../../../assets/icons/home.svg"
import Workshop from "../../../assets/icons/workshop.svg"
import About from "../../../assets/icons/about.svg"
import Contact from "../../../assets/icons/contact.svg"
import Accommdation from "../../../assets/icons/accom.svg"
import Events from "../../../assets/icons/events.svg"
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
            <img src={logo} className='toplogo'/>
            <div className="micons">
                <img src={Pratistha} alt=""/>
            </div>
        </div>
      <div className="mobnav">
        <ul>
            <li><button onClick={() => scrollToSection ('home')} className="homemenu"><img src={Home}></img>Home</button></li>
            <li><button onClick={() => scrollToSection ('workshop1')}><img src={Workshop}></img>Workshop</button></li>
            <li><button onClick={() => scrollToSection ('accomidation123')} className='macc'><img src={Accommdation}></img>Accomidation</button></li>
            <li><button onClick={() => scrollToSection ('events123')}><img src={Events}></img>Events</button></li>
            <li><button onClick={() => scrollToSection ('about')}><img src={About}></img>About</button></li>
            <li><button onClick={() => scrollToSection ('contact')}  className='macc'><img src={Contact}></img>ContactUs</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Mobile
