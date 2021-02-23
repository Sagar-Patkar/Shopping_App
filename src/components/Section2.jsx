import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const Section2 = () => {
  return (
    <div>
      <Row>
        <Col md={6} className="text-center">
          <Card className="card">
            <Card.Body>
              <h1 className="cardH">BUY NOW PAY LATER</h1>
              <p className="cardP">afterpay</p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center" md={6}>
          <Card className="card">
            <Card.Body>
              <h1 className="cardH">Free Shipping Over $50</h1>
              <p className="cardP">start shopping</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
