import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutHeader.css";
import { Link } from "react-router-dom";
const AboutHeader = () => {
  return (
    <div>
      <div className="About-1">
        <div className="About-2">
          <div className="About-4">
                  <Link to="/" className="About-5">
                    Home
                  </Link> / About Us
          </div>
          <div className="About-3">
          About Us
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutHeader;
