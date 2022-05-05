import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Style/SubscriberNewsLetter.css";

const SubscriberNewsLetter = () => {
  return (
    <div className="SubscriberNewsLetter-wrapper">
      <Container>
        <div className="SubscriberNewsLetter-header">
          With our specialists, and expert at your disposal, you will face
          complex.
        </div>
      </Container>
      {/* <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default SubscriberNewsLetter;
