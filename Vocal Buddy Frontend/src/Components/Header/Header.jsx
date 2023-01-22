import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import first from './logo.png';
function CollapsibleExample() {
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