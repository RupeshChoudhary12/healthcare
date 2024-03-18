import React from 'react'
import Dite2 from '../assets/images/dite2.png'
import Permind from '../assets/images/permind.png'
import Botel from '../assets/images/botel.png'

const MainSection = () => {
  return (
    <>
         <section id="our-programs">
        <h1 className=" text-center mt-3 font-weight-bold">
          Our Main <span>Areas Of expertise</span>
        </h1>
        <p className="text-center mt-2">
          Enroll in these programs and get the best benefits & create
        </p>
      </section>

      <div className='container  text-center'>
        <div className='row gap-3'>
            <div className='col'>
                <div className='card bg-light mx-auto'>
                    <img src={Dite2} className='card-img-top  ms-0'  />
                    <div className='card-body'>
                    <h1 className='h5'>Personal Nutrtion</h1>

                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, architecto.</p>
                    </div>
                </div>

            </div>
            <div className='col'>
                <div className='card mx-auto bg-light'>
                    <img src={Permind} className='card-img-top ms-0' alt="" />
                    <div className='card-body'>
                    <h1 className='h5'>Personal Nutrtion</h1>

                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, architecto.</p>
                    </div>
                </div>
                
            </div>
            <div className='col'>
                <div className='card mx-auto bg-light'>
                    <img src={Botel} className='card-img-top ms-0' alt="" />
                    <div className='card-body'>
                        <h1 className='h5'>Personal Nutrtion</h1>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, architecto.</p>
                    </div>
                </div>
                
            </div>
        </div>
      </div>

      
    </>
  )
}

export default MainSection
