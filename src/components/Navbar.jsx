import React from "react";
import 'react-router-dom'
import  Icon from '../assets/images/icon.png'

const Navbar = () => {
  return (
    <>
 

    <>
      <nav className="navbar navbar-expand-md bg-light text-light pt-0">
        <div className="container-fluid flex-nowrap d-flex align-items-center justify-content-between">
          <span className="nav-logo w-25 ">
            <img src={Icon} alt="" className="img-fluid  object-fit-cover" />
          </span>
          <div className="nav-box d-flex flex-column justify-content-between container">
            <div className="nav-icon-text  d-flex justify-content-between w-100 align-items-center  w-100 ms-4 ">
              <h5 className="d-flex align-items-center ps-3 py-xl- py-lg-2 fw-normal text-white mt-3" >
                Welcome to Healthcoach
              </h5>
              <span className="nav-icon w-25 d-flex justify-content-evenly alig-items-center">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-linkedin"></i>




              
              </span>
            </div>
            <div className="nav-link-btn d-flex justify-content-between w-100 py-xl-2 py-lg-2">
              <ul className="navbar-nav w-50 d-flex justify-content-evenly align-items-center">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                               <i class="bi bi-search"></i>

                  </a>
                </li>
             
              </ul>
              <button className="btn bg-black text-light nav-button">
                Book An Appointment
              </button>
            </div>
          </div>
          <div>
            <div className="second-off-nav">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav w-100 d-flex justify-content-evenly">
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Pages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                    <button className="btn bg-black text-light nav-button mt-2">
                      Book An Appointment
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>


    </>
    // <div className="navbaar ">
    //   {/* <img src="src\assets\images\icon.png"alt="" /> */}
    //   <nav class="navbar navbar-expand-lg ">
        
    //     <div class="container-fluid ">
    //       <a class="navbar-brand text-white ms-5" href="#">
    //         Welcome To HealthCare
    //       </a>
    //       <button
    //         class="navbar-toggler text-white"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon text-white"></span>
    //       </button>
    //       <div class="collapse navbar-collapse " id="navbarNav">
    //         <ul class="navbar-nav mx-5 ms-auto">
    //           <li class="nav-item">
    //             <a
    //               class="nav-link active text-white"
    //               aria-current="page"
    //               href="#"
    //             >
    //               <i class="bi bi-facebook"></i>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a
    //               class="nav-link active text-white"
    //               aria-current="page"
    //               href="#"
    //             >
    //               {" "}
    //               <i class="bi bi-twitter-x"></i>
    //             </a>
    //           </li>{" "}
    //           <li class="nav-item">
    //             <a
    //               class="nav-link active text-white"
    //               aria-current="page"
    //               href="#"
    //             >
    //               <i class="bi bi-instagram"></i>
    //             </a>
    //           </li>{" "}
    //           <li class="nav-item">
    //             <a
    //               class="nav-link active text-white"
    //               aria-current="page"
    //               href="#"
    //             >
    //               <i class="bi bi-linkedin"></i>{" "}
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //     <nav class="navbar navbar-expand-lg ">
    //       <div class="container-fluid bg-white">
    //         <a class="navbar-brand " href="#">
    //           Home
    //         </a>
        
    //         <div class="collapse navbar-collapse " id="navbarNav">
    //           <ul class="navbar-nav   ">
    //             <li class="nav-item text-size-3 ">
    //               <a class="nav-link active" aria-current="page" href="#">
    //                 <a class="navbar-brand fw-light " href="#">
    //                   About
    //                 </a>{" "}
    //               </a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link active " aria-current="page" href="#">
    //                 {" "}
    //                 <a class="navbar-brand fw-light " href="#">
    //                   Service
    //                 </a>{" "}
    //               </a>
    //             </li>{" "}
    //             <li class="nav-item">
    //               <a class="nav-link active " aria-current="page" href="#">
    //                 <a class="navbar-brand fw-light" href="#">
    //                   Pages
    //                 </a>{" "}
    //               </a>
    //             </li>{" "}
    //             <li class="nav-item">
    //               <a class="nav-link active " aria-current="page" href="#">
    //                 <a class="navbar-brand fw-light" href="#">
    //                   Contact
    //                 </a>{" "}
    //               </a>
    //             </li>
    //             <li class="nav-item">
    //               <a class="nav-link active " aria-current="page" href="#">
    //                 <a class="navbar-brand fw-light" href="#">
    //                 <i class="bi bi-search"></i>
    //                 </a>{" "}
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <button  type="button" className="btn bg-dark btn-lg me-5 text-white">Book An Apointment</button>
    //       </div>
    //     </nav>
    //   </div>
  );
};

export default Navbar;
