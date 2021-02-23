import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavbarLogo = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-3">
            <Nav.Link style={{ marginLeft: "30px" }} href="#">
              <i className="fas fa-sign-in-alt"></i> SignIn
            </Nav.Link>
            <Nav.Link style={{ paddingLeft: "40px" }} href="#">
              <i className="fas fa-user-plus"></i> Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand
          className="logo"
          style={{ textAlign: "center" }}
          href="#home"
        >
          Dress Up
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-3">
            <Nav.Link style={{ paddingRight: "40px" }} href="#">
              <i className="fas fa-gift"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fas fa-shopping-cart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarLogo;
