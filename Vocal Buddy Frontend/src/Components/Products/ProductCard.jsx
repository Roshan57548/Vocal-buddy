import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCard.css";
import { Button } from "react-bootstrap";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage
  } from "mdb-react-ui-kit";
import { CartState } from "../../context/Context";
const ProductCard = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
    return (
        <div className="col-lg-4 col-md-6 col-12 mt-3 mb-3">
        <MDBContainer >
                <MDBRow >
                    <MDBCol  className="mb-4 mb-lg-0">
                    <MDBCard>
                        <div className="d-flex justify-content-between p-3 product-body">
                        <p className="lead mb-0">{prod.heading}</p>
                        </div>
                        <div className="card-image-cover">
                            <MDBCardImage
                                className="card-image"
                                src={prod.img}
                                position="top"
                                alt="Laptop"
                            />

                        </div>
                        
                        <MDBCardBody className="product-body2" >
                        <div className="d-flex justify-content-between ">
                            <p className="small">
                            <p className="text-muted">
                                {prod.Category}
                            </p>
                            </p>
                            <p className="small text-danger">
                            <s>{prod.MaxPrize}₹</s>
                            </p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="products-name">{prod.ProductName}</h5>
                            <h5 className="text-dark mb-0">{prod.Prize}₹</h5>
                        </div>
                        {cart.some((p) => p.id === prod.id) ? (
                            <Button
                            variant="outline-danger"
                            onClick={() =>
                                dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                                })
                            }
                            >
                            Remove from Cart
                            </Button>
                        ) : (
                            <Button
                            variant="outline-dark"
                            onClick={() =>
                                dispatch({
                                type: "ADD_TO_CART",
                                payload: prod,
                                })
                            }
                            disabled={!prod.inStock}
                            >
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                            </Button>
                        )}
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default ProductCard;
