import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='herosection p-5 mx-5'>
            <h1>Join Our Programs & Benfit</h1>
            <p >Enroll in these programs and get <br/> the best benefits & create </p>
            <span className='d-flex '>
              <div className='a'>
                <img  src="src\assets\images\apple.png" alt="" />
                <h2 >Health & Fitness Program</h2>
              </div>
           
              <div className='b ms-5'>
              <img  src="src\assets\images\heart.png" alt="" />
                <h2 className=''>Health Dite Program</h2>
              </div>
            </span>
        </div>
    </div>
  
  )
}

export default HeroSection
