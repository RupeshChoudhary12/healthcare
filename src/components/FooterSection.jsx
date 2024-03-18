import React from 'react'
import Icon from '../assets/images/icon.png'

const FooterSection = () => {
  return (
     <div className='footer mt-5 '>
         <div class="container m  text-white">
    <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top me-3">
      <div class="col mb-3">
       <img src={Icon} className='logo h-50 w-50 ' alt="" />
       

        <p class="text text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dolor quod.</p>
      </div>
  
      <div class="col mb-3">
  
      </div>
  
      <div class="col mb-3 text-white mt-5">
        <h5>Explore</h5>
        <ul class="nav flex-column text-white">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white ">About us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Diet Plans</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Blogs</a></li>
         
        </ul>
      </div>
  
      <div class="col mb-3 mt-5 ">
        <h5>Contact info</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><i class="bi bi-telephone me-3"></i>9876543210</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 me-5 text-white"><i class="bi bi-envelope me-3"></i>xyz.com</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><i class="bi bi-house me-3"></i>Indore</a></li>

        </ul>
      </div>
  
      <div class="col mb-3 mt-5">
      <div class="col-md-5 offset-md-1 mb-3 mt5 w-100">
        <form>
          <h5>Newsletter</h5>
          <p>Subscribe to our Newsletter <br /> get latest news and updates</p>
          <div class="d-flex flex-column flex-sm-row  gap-2">
            <label for="newsletter1" class="visually-hidden  ">Email address</label>
            <input id="newsletter1" type="text" class="form-control    " placeholder="Email address" fdprocessedid="12zsu"/>
          </div>
        </form>
      </div>
      </div>
    </footer>
  </div>
  <div class="custom-shape-divider-top-1710669743">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
     </div>
  )
}

export default FooterSection
