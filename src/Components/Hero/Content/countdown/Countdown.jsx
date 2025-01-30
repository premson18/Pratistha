import React from 'react'
import "./Countdown.css"

var countDownDate = new Date("mar 03, 2025 00:00:00").getTime();
        var x = setInterval(function(){
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days
            document.getElementById("hours").innerHTML = hours
            document.getElementById("minutes").innerHTML = minutes
            document.getElementById("seconds").innerHTML = seconds
            
            if(distance <0 ) {
                clearInterval(x);
                document.getElementById("days").innerHTML ="00"
                document.getElementById("hours").innerHTML ="00"
                document.getElementById("minutes").innerHTML ="00" 
                document.getElementById("seconds").innerHTML ="00"
            }


        },1000);

const Countdown = () => {
  return (
    <div>
        <p className='timetoget'>Time To Get Start</p>
      <div class="launche-time">
        <div>
                <p id="days" className='cen'>00</p>
                <span>Days</span>
            </div>
            <div>
                <p id="hours" className='cen'>00</p>
                <span>Hours</span>
            </div>
            <div>
                <p id="minutes" className='cen'>00</p>
                <span>Minutes</span>
            </div>
            <div>
                <p id="seconds" className='cen'>00</p>
                <span>Seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Countdown
