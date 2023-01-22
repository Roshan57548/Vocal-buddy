import React from "react";
import "./Images.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBackgroundImage from './images-mid.jpg';
import first from './images-first.jpg';
import second from './images-second.jpg';
import third from './images-third.jpg';
import four from  './images-four.jpeg';
const Images = () => {
    const mystyle = {
        background: `url(${MyBackgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
  return (
    <div className="container">
            <div className="section-1">
                <div className="left-images">
                    <img src={first} className="pad" alt="table" />
                    <img src={second} className="pad1" alt="table" />
                </div>
                <div className="mid-image" style={mystyle}>
                    <div className="mid-box">
                        <h1>LIFE IS SO BEAUTIFUL WITH NATURE</h1>
                        <p>Whether you want to place a large customised order for a 
                            single item or a large assortment of multiple craft products,
                             we can sort it out for you!   
                        </p>
                    </div>
                </div>
                <div className="right-images">
                    <img src={third} className="pad" alt="table"/>
                    <img src={four} className="pad1" alt="table" />
                </div>
            </div>
    </div>
  );
};

export default Images;
