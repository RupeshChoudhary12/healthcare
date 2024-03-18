import React from 'react'
import Apple from '../assets/images/apple.png'
import Herat from '../assets/images/heart.png'

const HeroSection = () => {
  return (
    <div className='hero '>
        <div className='herosection p-5 mx-5 container d-flex flex-wrap '>
            <h1>Join Our Programs & Benfit</h1>
            <p >Enroll in these programs and get <br/> the best benefits & create </p>
            <span className='d-flex '>
              <div className='a'>
                <img  src={Apple} alt="" />
                <h2 >Health & Fitness Program</h2>
              </div>
           
              <div className='b ms-5 p-2'>
              <img  src={Herat} alt="" />
                <h2 className='ms-3'>Health Dite Program</h2>
              </div>
            </span>
        </div>
    </div>
  
  )
}

export default HeroSection
