import React from 'react'

const SimpleSection = () => {
  return (
    <div className='container mt-5 d-flex justify-content-between'>
        <div className='plan'>
            <p>Simple Pricing</p>
            <h1>Choose Your <br /> <span>Perfect Plan</span></h1>
        <div className='month mt-3'>
            <button className='ab'>Yearly</button>
            <button className='bb'> Monthly</button>
        </div>
        <h6 className='mt-4 '>caftwork plans are paid Monthly or Yearly we make it <br /> simple to start-and-stop-your service at any time <br /> paid Monthly or Yearly We make simple to start your <br /> service at any time</h6>
        <p className='text-dark mt-5'>Have a question about plans? Let"s Talk</p>

        </div>
        <div className="container text-center mt-5">
        <div className="row gap-3">
      
          <div className="col ">
            <div className="card mx-auto  ">
              {/* <img
                src="src\assets\images\dite.png"
                className="card-img-top"
                alt=""
              /> */}
            <span className='start'>
            <p className='mt-3 text-white'>Starter Plan</p>
              <h1 className='text-white'>$159</h1>
              <p className='text-white'>7 days Dite plan</p>
            </span>
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                </h5>
                <p className="card-text">
                  <p><span className='right'><img  src="src\assets\images\rigth.png" className='ms-1 gap-5' alt="" /></span>Physical Activitis</p>
                  <p><span className='right'><img  src="src\assets\images\rigth.png"  className='ms-1 gap-5'  alt="" /></span>Meal Plans and mobile</p>
                  <p><span className='right'><img  src="src\assets\images\rigth.png"  className='ms-1 gap-5'  alt="" /></span>-50% group Coaching</p>
                  <p><span className='right'><img  src="src\assets\images\rigth.png"  className='ms-1 gap-5'  alt="" /></span>24/7 Custmore Support</p>
             
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
            </span>
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                </h5>
                <p className="card-text">
                  <p><span className='right'><img  src="src\assets\images\rigth.png" className='ms-1 gap-5' alt="" /></span>Physical Activitis</p>
                  <p><span className='right'><img  src="src\assets\images\rigth.png"  className='ms-1 gap-5'  alt="" /></span>Meal Plans and mobile</p>
                  <p><span className='right'><img  src="src\assets\images\rigth.png"  className='ms-1 gap-5'  alt="" /></span>-50% group Coaching</p>
                  <p><span className='right'><img  src="src\assets\images\rigth.png"  className='ms-1 gap-5'  alt="" /></span>24/7 Custmore Support</p>
             
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
  )
}

export default SimpleSection
