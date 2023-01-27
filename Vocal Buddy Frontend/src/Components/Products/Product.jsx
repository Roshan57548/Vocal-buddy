import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import ProductHeader from "./ProductHeader";
import ProductCard from "./ProductCard";
import { CartState } from "../../context/Context";
const Product = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="product-full-body">
        <ProductHeader/>
        <div className="container">
            <div className="row">
                <h2 className="col-12 mb-3 mt-5">TOP PRODUCTS</h2>
                {products.map((prod) => (
                  <ProductCard prod={prod} key={prod.id} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Product;
