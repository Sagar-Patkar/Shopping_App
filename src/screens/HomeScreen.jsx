import React from "react";
import JumbotronLogo from "../components/JumbotronLogo.jsx";
import Section2 from "../components/Section2.jsx";
import Product from "../components/Product.jsx";
import Section3 from "../components/Section3.jsx";

const HomeScreen = () => {
  return (
    <div>
      <JumbotronLogo />
      <Section2 />
      <Product />
      <Section3 />
    </div>
  );
};

export default HomeScreen;
