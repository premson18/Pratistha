import React from 'react'
import './Preloader.css'

var loader = document.getElementById("preloader");

    window.addEventListener("load",function(){
        loader.style.display = "none";
    })

const Preloader = () => {
  return (
    <div id='preloader'>
      
    </div>
  )
}

export default Preloader
