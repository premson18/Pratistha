import React from 'react'
import IMAGE from "../../assets/BIM.png"
import "../Workshop/workshop.css"
const Workshop = () => {
  return (
    <div className='workshop'>
      <section id='workshop1'>
      <h1 className='heading'>Workshop</h1>
      <div className="workshop-card container1">
        <div className="image aboutcol">
          <img src={IMAGE}></img>
        </div>
        <div className="matter1 aboutcol">
          <h3>Workshop</h3>
          <p>dffsfhsj fsfjjhfkjhkjfd</p>
          <p>Price :- 699/-</p>
          <button>Buy Now</button>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Workshop
