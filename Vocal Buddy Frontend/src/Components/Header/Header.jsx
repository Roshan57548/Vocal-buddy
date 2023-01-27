import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import first from './logo.png';
import {
  Badge,
  Button,
  Dropdown
} from "react-bootstrap";
import { CartState } from "../../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
function CollapsibleExample() {
        const {
          state: { cart },
          dispatch,
          productDispatch,
        } = CartState();
        return (
          <Navbar collapseOnSelect expand="lg" className="color-nav">
            <Container>
              <Navbar.Brand>
                <Link to="/" className="links">
                    <img
                      className="icon"
                      src={first}
                      alt="First slide"
                    />
                   Vocal Buddy
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="navigation">
                <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">
                      <FaShoppingCart color="white" fontSize="25px" className="cart-icon"/>
                      {cart.length}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370 }} >
                      {cart.length > 0 ? (
                        <>
                          {cart.map((prod) => (
                            <span className="cartitem" key={prod.id}>
                              <img
                                src={prod.img}
                                className="cartItemImg"
                                alt={prod.ProductName}
                              />
                              <div className="cartItemDetail">
                                <span>{prod.ProductName}</span>
                                <span>₹ {prod.Prize.split(".")[0]}</span>
                              </div>
                              <AiFillDelete
                                
                                fontSize="20px"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                  })
                                }
                              />
                            </span>
                          ))}
                          <Link to="/cart">
                            <Button variant="secondary" style={{ width: "95%", margin: "0 10px" }}>
                              Go To Cart
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link className="links">
                    <Link to="/" className="link">
                        Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="links">
                      <Link to="/product" className="link">
                        Products
                      </Link>  
                  </Nav.Link>
                  <Nav.Link className="links">
                      <Link to="/aboutus" className="link">
                        About Us
                      </Link> 
                  </Nav.Link>
                  <Nav.Link className="links">
                      <Link to="/contactus" className="link">
                        Contact Us
                      </Link>
                  </Nav.Link>
                  
                </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
  }
  
  export default CollapsibleExample;