import React from "react";
import "./AboutEasier.css";
import one from "./1.jpg";
import two from "./2.jpeg";
import partners from "./3.jpg";
import three from "./3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function AboutEasier() {
  return (
    <div className="easier-1">
      <div className="container">
        <div className="row">
          <h1 className="col-12 easier-2">Find natural solution, But in a easier way..</h1>
          <div className="col-12 row mt-5 mb-5 easier-3">
            <div className="col-lg-4 col-md-6 col-12">
              <img className="img-grid" src={one} alt="" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <img className="img-grid" src={two} alt="" />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <img className="img-grid" src={three} alt="" />
            </div>
          </div>

          <div className="col-12 partnership mb-5 row ">
            <div className="col-lg-6 col-12 mb-5 easier-4">
              <p>
                <h4>Our innovative model makes both customers' and artisans' 
                    life easier. Fair and Equal across countries to support art and crafts of India</h4>
                    
              </p>
              <div id="partners">Join Us More Update</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEasier;
