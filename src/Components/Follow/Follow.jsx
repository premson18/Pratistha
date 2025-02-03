import React from 'react'
import Instagram from "../../assets/InstagramFollow.webp"
import '../Follow/Follow.css'


const Follow = () => {
  return (
    <div>
      <section id="follow">
        <div className="follow">
            <div>
                <h3>Follow Us On</h3>
               <a  href='https://www.instagram.com/pratistha_2k25?igsh=NTc4MTiwNjQ2YQ=='target="_blank"> <img src={Instagram}></img></a>
                <h5>copyrights@Premson</h5>
                 </div>
        </div>
        
      </section>
    </div>
  )
}

export default Follow
