import React from 'react'
import Right from '../assets/images/rigth.png'

const SimpleSection = () => {
  return (
    <div className='container mt-5 d-flex justify-content-center align-item-center'>
      <div className='time'>
      <div className='plan  '>
            <p>Simple Pricing</p>
            <h1>Choose Your <br /> <span>Perfect Plan</span></h1>
        <div className='month mt-3'>
            <button className='ab'>Yearly</button>
            <button className='bb'> Monthly</button>
        </div>
        <h6 className='mt-4 '>caftwork plans are paid Monthly or Yearly we make it <br /> simple to start-and-stop-your service at any time <br /> paid Monthly or Yearly We make simple to start your <br /> service at any time</h6>
        <p className='text-dark mt-5'>Have a question about plans? Let"s Talk</p>

        </div>
        <div className="container text-center mt-5 ">
        <div className="row gap-3">
      
          <div className="col ">
            <div className="card mx-auto  ">
        
            <span className='start'>
            <p className='mt-3 text-white'>Starter Plan</p>
              <h1 className='text-white'>$159</h1>
              <p className='text-white'>7 days Dite plan</p>
              <div class="custom-shape-divider-bottom-1710666857">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
            </span>
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                </h5>
                <p className="card-text">
                  <p><span className='right'><img  src={Right} className='ms-1 gap-5' alt="" /></span>Physical Activitis</p>
                  <p><span className='right'><img  src={Right}   className='ms-1 gap-5'  alt="" /></span>Meal Plans and mobile</p>
                  <p><span className='right'><img  src={Right}   className='ms-1 gap-5'  alt="" /></span>-50% group Coaching</p>
                  <p><span className='right'><img  src={Right}  className='ms-1 gap-5'  alt="" /></span>24/7 Custmore Support</p>
             
                </p>
                <a href="" className="btn">
                  Subscribre Now
                </a>
              </div>
            </div>{" "}
          </div>
          <div className="col ">
            <div className="card mx-auto ">
            <span className='start'>
            <p className='mt-3 text-white'>Starter Plan</p>
              <h1 className='text-white'>$159</h1>
              <p className='text-white'>7 days Dite plan</p>
              <div class="custom-shape-divider-bottom-1710666857">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
            </span>
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                </h5>
                <p className="card-text">
                  <p><span className='right'><img src={Right}  className='ms-1 gap-5' alt="" /></span>Physical Activitis</p>
                  <p><span className='right'><img  src={Right}   className='ms-1 gap-5'  alt="" /></span>Meal Plans and mobile</p>
                  <p><span className='right'><img  src={Right}   className='ms-1 gap-5'  alt="" /></span>-50% group Coaching</p>
                  <p><span className='right'><img  src={Right}   className='ms-1 gap-5'  alt="" /></span>24/7 Custmore Support</p>
             
                </p>
                <a href="" className="btn">
                  Subscribe Now
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      </div>
      
      
    </div>
    
  )
}

export default SimpleSection
