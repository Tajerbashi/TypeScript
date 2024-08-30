import ReactContent from "../HOC/ReactContent";
import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const NavbarComponent = () => {
  const { cartQty } = useCartContext();
  return (
    <ReactContent>
      <Navbar className="navbar bg-dark bg-bg-gradient rounded text-light mb-2 shadow">
        <Container fluid>
          <Nav className="">
            <Nav.Link to="/" as={NavLink} className="text-light">
              Home
            </Nav.Link>
            <Nav.Link to="/products" as={NavLink} className="text-light">
              Products
            </Nav.Link>
            <Nav.Link to="/dashboard" as={NavLink} className="text-light">
              Dashboard
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink} className="text-light">
              About
            </Nav.Link>
          </Nav>
          <Button
            className="bg-dark btn-outline-light"
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
              fontSize: "1.2rem",
            }}
          >
            <i className="bi bi-cart"></i>
            <Badge bg="light" text="dark">
              {cartQty}
            </Badge>
            {/* <div
              className="bg-light text-black d-flex justify-content-center align-items-center p-2 rounded-5 shadow"
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                fontSize: "1.2rem",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQty}
            </div> */}
          </Button>
        </Container>
      </Navbar>
    </ReactContent>
  );
};
export default NavbarComponent;
