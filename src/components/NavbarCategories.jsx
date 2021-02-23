import React from "react";
import { Nav } from "react-bootstrap";

const NavbarCategories = () => {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="">New Arrivals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Clothing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Shop Dresses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Accessories</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavbarCategories;
