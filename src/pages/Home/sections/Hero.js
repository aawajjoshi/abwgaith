import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const scrollTo = (ele) => {
    let offsetTop  = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    });
}

export default function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-title">AMERICA'S BEST<span style={{ display: "block", color: '#F5E900' }}>WINGS GAITHERSBURG</span></h1>
            <p className='hero-info'>Welcome to America's Best Wings. Come <span className="info-text-break">and try our best Wings, varieties of Seafood </span>and Much more.</p>
            <button onClick={() => window.open("https://online.skytab.com/aab61c00eb0e1cbf86066f4523e4bd6b")} className='hero-btn'>ORDER NOW</button>
        </section>
    )
}