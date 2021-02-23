import React from "react";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h6 className="footerH">Quick Links</h6>
            <div>
              <a className="footerLink" href="/">
                <li>FAQ'S</li>
              </a>
              <a className="footerLink" href="/">
                <li>Shipping + Returns</li>
              </a>
              <a className="footerLink" href="/">
                <li>Afterpay</li>
              </a>
              <a className="footerLink" href="/">
                <li>Contact Us</li>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h6 className="footerH">About Dress Up</h6>
            <div>
              <a className="footerLink" href="/">
                <li>Our Story + Mission</li>
              </a>
              <a className="footerLink" href="/">
                <li>Careers</li>
              </a>
              <a className="footerLink" href="/">
                <li>Collaborations</li>
              </a>
              <a className="footerLink" href="/">
                <li>Blogs</li>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h6 className="footerH">Get Shopping</h6>
            <div className="footerLink">
              <a className="footerLink" href="/">
                <li>New Arrivals</li>
              </a>
              <a className="footerLink" href="/">
                <li>Clothing</li>
              </a>
              <a className="footerLink" href="/">
                <li>Accessories</li>
              </a>
              <a className="footerLink" href="/">
                <li>Sale</li>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h6 className="footerH">Conect With Us</h6>
            <p>
              <a className="footerLink" href="/">
                <i className="fab fa-instagram-square fa-2x"></i>
              </a>
              <a className="footerLink" href="/">
                <i className="fab fa-facebook-square fa-2x px-3"></i>
              </a>
              <a className="footerLink" href="/">
                <i className="fab fa-youtube-square fa-2x"></i>
              </a>
            </p>
          </Col>
        </Row>
        <Navbar bg="transparent" variant="dark">
          <Navbar.Brand className="footerLogo" href="#home">
            Dress Up
          </Navbar.Brand>
          <Nav className="mr-4">
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Privacy Policy</Nav.Link>
            <Nav.Link href="#">Locations</Nav.Link>
            <Nav.Link href="#">Accessibility</Nav.Link>
          </Nav>
          <p className="navbar-text px-1 copyright">
            © 2021 DRESS UP – AN ONLINE DRESS BOUTIQUE.
          </p>
        </Navbar>
      </Container>
    </div>
  );
};

export default Footer;
