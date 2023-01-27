import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import first from './logo.png';
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <div className="complete">
      <footer className="container text-center text-lg-start text-dark stylefirst">
        <section className="d-flex justify-content-between text-white stylesecond"></section>

        <section >
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                    <img
                      className="icon"
                      src={first}
                      alt="First slide"
                    /> Vocal Buddy
                </h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                We are one of the most reliable bamboo products manufacturers in India. 
                You can find a selection of high-quality bamboo products at our store. 
                Decorate your home or design a school project with 
                the best supplies without harming the environment. Choose our products, 
                and do your part in the conservation process. Browse our 
                wide variety of products and shop now!
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Service Provided</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>Kids Segment</p>
                <p>Sitting Stools</p>
                <p>Sofa Set</p>
                <p>Laundary Basket</p>
                <p>Moodha Chair</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                    <Link to="/" className="footer-link">
                      Home
                    </Link>
                </p>
                <p>
                    <Link to="/product" className="footer-link">
                      Products
                    </Link>
                </p>
                <p>
                    <Link to="/aboutus" className="footer-link">
                      About Us
                    </Link>
                </p>
                <p>
                    <Link to="/contactus" className="footer-link">
                      Contact Us
                    </Link>
                </p>
                </div>
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                  <i className="fas fa-home mr-3"></i> Shastri Nagar, Ghaziabad, Uttar Pradesh, India
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> Info@vocalbuddy.online
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +919971379750
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="text-center p-3 stylefour">
        © 2023 Copyright: Info@vocalbuddy.online
      </div>
    </div>
  );
};

export default Footer;
