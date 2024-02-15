import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand>
          <img
            src="data:image/png;base64,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"
            alt="logo"
            width={"50px"}
            height={"50px"}
            className="me-2"
          ></img>
          EpiSpace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className={location === "/" ? "active nav-link" : "nav-link"}
              to="/"
            >
              Home
            </Link>
            {location.includes("/details") && (
              <p
                className={
                  location.includes("/details")
                    ? "active nav-link m-0"
                    : "nav-link m-0"
                }
              >
                In-Depth
              </p>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
