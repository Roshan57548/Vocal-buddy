import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Header/Header.css";
import first from './logo.png';
function CollapsibleExample() {
        return (
          <Navbar collapseOnSelect expand="lg" className="color-nav">
            <Container>
              <Navbar.Brand className="link">
                    <img
                      className="icon"
                      src={first}
                      alt="First slide"
                    />
                   Vocal Buddy
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="navigation">
                <Nav>
                  <Nav.Link className="links">
                      Home
                  </Nav.Link>
                  <Nav.Link className="links">
                      Products
                  </Nav.Link>
                  <Nav.Link className="links">
                      About Us
                  </Nav.Link>
                  <Nav.Link className="links">
                      Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
  }
  
  export default CollapsibleExample;