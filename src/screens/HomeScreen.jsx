import React from "react";
import NavbarLogo from "../components/NavbarLogo.jsx";
import NavbarCategories from "../components/NavbarCategories.jsx";
import JumbotronLogo from "../components/JumbotronLogo.jsx";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <NavbarLogo />
      <NavbarCategories />
      <main>
        <Container>
          <JumbotronLogo />
        </Container>
      </main>
    </div>
  );
};

export default HomeScreen;
