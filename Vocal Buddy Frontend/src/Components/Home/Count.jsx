import React from "react";
import "./Count.css";
import "bootstrap/dist/css/bootstrap.min.css";
import first from "./Mudha.png";
const Count = () => {
  return (
    <div className="count-1">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-12 count-2 row">
            <div className="col-12 row count-8 mt-5">
              <h1 className="count-h1">Vocal Buddy Market Record</h1>
              <p className="count-p">
              We have direct partnerships with over 200 Indian artisans and over 500 
              indirectly. As a social enterprise that seeks to offer a fair-trade platform, 
              our primary purpose is to support handicraft workers. With each purchase you make, 
              you can help make a difference. Reviewed by over 5,000 individual customers with 
              average rating of 4.6.
              </p>
            </div>
            <div className="col-12 row">
                <div className="col-md-6 col-12 mt-3 mb-3 count-6">
                    <h1>
                        12+
                    </h1>
                    <h3>Quality Products </h3>
                </div>
                <div className="col-md-6 col-12 mt-3 mb-3 count-6">
                    <h1>
                        5000+
                    </h1>
                    <h3>Sold Products</h3>
                </div>
                <div className="col-md-6 col-12 mt-3 mb-3 count-6">
                    <h1>
                        1000-5000 ₹
                    </h1>
                    <h3>Prize Range</h3>
                </div>
                <div className="col-md-6 col-12 mt-3 mb-3 count-6">
                    <h1>
                        10+
                    </h1>
                    <h3>Upcoming Products</h3>
                </div>


            </div>
          </div>
          <div className="col-lg-6 col-12 count-2 mt-5 mb-5">
            <img src={first} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
