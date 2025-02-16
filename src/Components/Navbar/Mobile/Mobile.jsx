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
            <img src={logo} className='pratistha1'/>
                <img src={Pratistha} alt="" className='pratistha'/>
            
        </div>
      <div className="mobnav">
        <ul>
            <li><button onClick={() => scrollToSection ('home')} className="homemenu"><img src={Home} className="menuicons"></img><br></br>Home</button></li>
            <li><button onClick={() => scrollToSection ('workshop123')}><img src={Workshop} className="menuicons"></img><br></br>Workshop</button></li>
            <li><button onClick={() => scrollToSection ('accomidation123')} className='macc'><img src={Accommdation} className="menuicons"></img><br></br>Accomidation</button></li>
            <li><button onClick={() => scrollToSection ('events123')}><img src={Events} className="menuicons"></img><br></br>Events</button></li>
            <li><button onClick={() => scrollToSection ('about')}><img src={About} className="menuicons"></img><br></br>About</button></li>
            <li><button onClick={() => scrollToSection ('contact')}  className='macc contactUsmenu'><img src={Contact} className="menuicons"></img><br></br>ContactUs</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Mobile
