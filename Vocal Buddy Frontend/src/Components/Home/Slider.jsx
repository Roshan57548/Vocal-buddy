import React from "react";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';
const Slider = () => {
  return (
    <div>
      <Carousel fade className="service-10">
        <Carousel.Item className="service-1">
          <img
            className="d-block w-100 service-1"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            
              <h3 className="service-2">Good Health</h3>
              <p className="service-3">Adopt the pace of nature</p>
                
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="service-1">
          <img
            className="d-block w-100 service-1"
            src={second}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="service-2">Keeping It Natural</h3>
            <p className="service-3">See the wonder of nature around you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="service-1">
          <img
            className="d-block w-100 service-1"
            src={third}
            alt="Third slide"
          />

          <Carousel.Caption >
            <h3 className="service-2">Part Of Life Style</h3>
            <p className="service-3">
            To be at one with nature is to be content with life
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
