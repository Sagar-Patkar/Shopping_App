import React from "react";
import NavbarLogo from "../components/NavbarLogo.jsx";
import NavbarCategories from "../components/NavbarCategories.jsx";
import JumbotronLogo from "../components/JumbotronLogo.jsx";
import Section2 from "../components/Section2.jsx";
import Product from "../components/Product.jsx";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <NavbarLogo />
      <NavbarCategories />
      <main>
        <Container>
          <JumbotronLogo />
          <Section2 />
          <Product />
        </Container>
      </main>
    </div>
  );
};

export default HomeScreen;
