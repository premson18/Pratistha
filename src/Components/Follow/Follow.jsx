import React from 'react'
import Instagram from '../../assets/instagram.webp'
import '../Follow/Follow.css'

const Follow = () => {
  return (
    <div>
      <section id="follow">
        <div className="follow">
            <div>
                <h3>Follow Us On</h3>
                <img src={Instagram} alt="" srcset="" />
                <h5>copyrights@Premson</h5>
                 </div>
        </div>
        
      </section>
    </div>
  )
}

export default Follow
