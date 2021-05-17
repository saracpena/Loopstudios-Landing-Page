import React from 'react'
import '../Hero/Hero.css'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
    return (
        <>
           <section className="hero">
           <Navbar/>
            <div className="hero__overlay">
                <h1 className='hero__title'>Immersive experiences that deliver</h1>
            </div>
           </section> 
        </>
    )
}

export default Hero;