import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductHeader.css";
import { Link } from "react-router-dom";
const ProductHeader = () => {
  return (
    <div>
      <div className="ProductHeader-1">
        <div className="ProductHeader-2">
          <div className="ProductHeader-4">
                  <Link to="/" className="ProductHeader-5">
                    Home
                  </Link> / Product
          </div>
          <div className="ProductHeader-3">
          Product
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductHeader;
