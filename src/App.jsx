import { useState } from 'react'
import Navbar from './Components/Navbar/Normal/Navbar'
import Hero from './Components/Hero/Hero'
import Workshop from './Components/Workshop/Workshop'
import Accomidation from './Components/Accomidation/Accomidation'
import Contact from './Components/Contact us/Contact'
import Sponsors from './Components/Sponsors/Sponsors'

import TechnicalEvents from './Components/Events/TechnicalEvents/TechnicalEvents'
import NonTechnicalEvents from './Components/Events/NontechnicalEvents/NonTechnicalEvents'
import About from './Components/About/About'
import Mobile from './Components/Navbar/Mobile/Mobile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Mobile/>
      <Hero />
      <Workshop/>
      <TechnicalEvents/>
      <NonTechnicalEvents/>
      <Accomidation/>
      <Contact/>
      <About/>
      <Sponsors/>
      
    </>
  )
}

export default App;
