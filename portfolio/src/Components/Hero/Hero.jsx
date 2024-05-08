import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id="home" className='hero'>
    <img src={profile_img} alt=""/>
    <h1><span>I'm Aayushma Dhakal Chhetri,</span> frontend developer based in USA.</h1>
    <p>I am, Aayushma Dhakal Chhetri , Frontend developer from Califorina, USA with 10 years of experinces in multiple companies likes Microsoft, Tesla and Apple.</p>
    <div className="hero-action">
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">My resume</div>
    </div>
  </div>
  
  )
}

export default Hero
