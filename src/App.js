import React from "react";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.jsx";
import NavbarLogo from "./components/NavbarLogo.jsx";
import NavbarCategories from "./components/NavbarCategories.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <NavbarLogo />
      <NavbarCategories />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
