import React from 'react'
import './Sponsors.css'
import MFC from '../../assets/Sponsors/mfc.png'


const Sponsors = () => {
  return (
    <div>
      <section id='sponsors'>
        <h1 className='sponsorsh1'>Sponsors</h1>
      <div className="wrapper wrap1">
            <div className="item-1 item1 item12">
              <img src={MFC}></img>
            </div>
            <div className="item-1 item2"></div>
            <div className="item-1 item3"></div>
            <div className="item-1 item4"></div>
            <div className="item-1 item5"></div>
            <div className="item-1 item6"></div>
            <div className="item-1 item7"></div>
            <div className="item-1 item8"></div>
        </div>
        <div className="wrapper wrap2">
            <div className="item-2 item1"></div>
            <div className="item-2 item2"></div>
            <div className="item-2 item3"></div>
            <div className="item-2 item4"></div>
            <div className="item-2 item5"></div>
            <div className="item-2 item6"></div>
            <div className="item-2 item7"></div>
            <div className="item-2 item8"></div>
        </div>
        <div className="wrapper wrap3">
            <div className="item-3 item1"></div>
            <div className="item-3 item2"></div>
            <div className="item-3 item3"></div>
            <div className="item-3 item4"></div>
            <div className="item-3 item5"></div>
            <div className="item-3 item6"></div>
            <div className="item-3 item7"></div>
            <div className="item-3 item8"></div>
        </div>

      
        </section>
    </div>
  )
}

export default Sponsors
