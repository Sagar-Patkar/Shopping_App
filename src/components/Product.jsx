import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Product = () => {
  return (
    <div>
      <h1 className="text-center" style={{ marginBottom: "30px" }}>
        New Products
      </h1>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://img.shopstyle-cdn.com/sim/36/17/3617ade006fee1d2cb50aa6d604856ec_xlarge/terry-terry-tie-ombre-cotton-terry-t-shirt-pink.jpg"
              alt="Blouson Top"
            />
            <Card.Body>
              <Card.Title>Blouson Top</Card.Title>
              <Card.Text>$32</Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/19/9e/10/199e103275dd9ca2dbaf73107c95a535.jpg"
              alt="Blouson Top"
            />
            <Card.Body>
              <Card.Title>Blouson Top</Card.Title>
              <Card.Text>$32</Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://img.shopstyle-cdn.com/sim/36/17/3617ade006fee1d2cb50aa6d604856ec_xlarge/terry-terry-tie-ombre-cotton-terry-t-shirt-pink.jpg"
              alt="Blouson Top"
            />
            <Card.Body>
              <Card.Title>Blouson Top</Card.Title>
              <Card.Text>$32 </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://img.shopstyle-cdn.com/sim/7f/1a/7f1aeca30f20958c3220b4ef75c8614b_best/mother-of-pearl-pixie-faux-pearl-embellished-lyocell-twill-top-orange.jpg"
              alt="Blouson Top"
            />
            <Card.Body>
              <Card.Title>Blouson Top</Card.Title>
              <Card.Text>$32</Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
