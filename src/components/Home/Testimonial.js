import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Style/Testimonial.css";
import TestimonialCarosel from "../Carosel/TestimonialCarosel";
const Testimonial = () => {
  return (
    <div className="testimonial-mainwrapper">
      <Container>
        <Row className="testimonial-wrapper">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            className="d-flex align-items-center"
          >
            <div className="testimonial-wrapperleft">
              <div className="testimonialleft-heading"> TESTIMONIAL</div>
              <div className="testimonialleft-subheading">
                Testimonials from satisfied Blue InfoChips &nbsp;
                <span className="testimonialleft-subheadingblack">
                  clients and Partners
                </span>
              </div>

              <div className="testimonialleft-content">
                Our Priority Is Making Sure You're Happy
              </div>
              <div className="testimonialleft-lowerContext">
                VIEW ALL TESTIMONIALS
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <TestimonialCarosel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
