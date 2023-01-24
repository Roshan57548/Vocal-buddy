import React from "react";
import "./AboutVocal.css";
import target from "./bamboos.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function AboutVocal() {
  return (
    <div className="hamara-3">
      <div className="container hamara-1">
        <div className="row hamara-2">
          <div className="col-lg-6 col-12 mt-5 mb-5  hamara-5">
            <img src={target} alt=""  className=" hamara-6"/>
          </div>

          <div className="col-lg-6 col-12 mt-5 mb-5 hamara-5">
            <h1>Vocal Buddy - Natural Product Supplier</h1>
            <p className="mt-2">
            The India Craft House is a digital platform for some of the world's 
            oldest and most intricate craft forms. We started this social enterprise 
            close to 10 years ago in order to preserve, showcase and share the talent of 
            India's artisans with the world. We hope to be able to raise the dignity of the 
            Indian artisan in our own way and kindle an interest and support for an unsurpassed 
            legacy of craft that spans millennia and spreads across the length and breadth of the 
            land. It is our effort to curate an undeniably unique selection of traditional art and 
            craft translated into a range of beautiful, contemporary products.
            </p>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default AboutVocal;
