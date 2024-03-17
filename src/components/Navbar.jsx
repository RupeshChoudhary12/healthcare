import React from "react";

const Navbar = () => {
  return (
    <div className="navbaar">
      {/* <img src="src\assets\images\icon.png"alt="" /> */}
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <a class="navbar-brand text-white ms-5" href="#">
            Welcome To HealthCare
          </a>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav mx-5 ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  {" "}
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>{" "}
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </li>{" "}
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  <i class="bi bi-linkedin"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid bg-white">
            <a class="navbar-brand " href="#">
              Home
            </a>
        
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav   ">
                <li class="nav-item text-size-3 ">
                  <a class="nav-link active" aria-current="page" href="#">
                    <a class="navbar-brand fw-light " href="#">
                      About
                    </a>{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="#">
                    {" "}
                    <a class="navbar-brand fw-light " href="#">
                      Service
                    </a>{" "}
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="#">
                    <a class="navbar-brand fw-light" href="#">
                      Pages
                    </a>{" "}
                  </a>
                </li>{" "}
                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="#">
                    <a class="navbar-brand fw-light" href="#">
                      Contact
                    </a>{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="#">
                    <a class="navbar-brand fw-light" href="#">
                      Contact
                    </a>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <button  type="button" className="btn btn-dark btn-lg me-5">Book An Apointment</button>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
