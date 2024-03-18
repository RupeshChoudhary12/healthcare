import React from "react";
import HeartIcon from '../assets/images/heraticon.png'
import Dite from '../assets/images/dite.png'
import Glass from '../assets/images/glass.png'

const CardSection = () => {
  return (
    <>
      <section id="our-programs">
        <h1 className=" text-center mt-3 font-weight-bold">
          Our <span>Programs</span>
        </h1>
        <p className="text-center mt-2">
          Enroll in these programs and get the best benefits & create
        </p>
      </section>
      <div className="container text-center">
        <div className="row gap-3">
          <div className="col">
            <div className="card mx-auto ">
              <img
                src={Glass}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">Nutrition Plans</h5>
                <p className="card-text">
                  in enim justo, rhoncus ut, imperdiet a venenatis viae justo
                  Nullam dictum felis eu pede mollis pretium in enim justo{" "}
                </p>
                <a href="" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mx-auto ">
              <img
                src={Dite}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                  Daily Exercise
                </h5>
                <p className="card-text">
                  in enim justo, rhoncus ut, imperdiet a venenatis viae justo
                  Nullam dictum felis eu pede mollis pretium in enim justo{" "}
                </p>
                <a href="" className="btn">
                  Read More
                </a>
              </div>
            </div>{" "}
          </div>
          <div className="col">
            <div className="card mx-auto ">
              <img
                src={HeartIcon}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">Natural Foods</h5>
                <p className="card-text">
                  in enim justo, rhoncus ut, imperdiet a venenatis viae justo
                  Nullam dictum felis eu pede mollis pretium in enim justo{" "}
                </p>
                <a href="" className="btn">
                  Read More
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
