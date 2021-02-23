import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const JumbotronLogo = () => {
  return (
    <div>
      <Jumbotron className="text-center jumbotron">
        <h1 className="jumbotronH">New Arrivals</h1>
        <p className="jumbotronP">just dropped</p>
        <p>
          <Button className="px-2" variant="danger">
            Shop All New
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronLogo;
