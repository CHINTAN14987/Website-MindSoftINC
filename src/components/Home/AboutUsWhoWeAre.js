import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whoWeAre from "../../Images/whoWeAre.png";
import "../../Style/WhoWeAre.css";
import { BsBoxArrowRight } from "react-icons/bs";
import "../../Style/AboutUsWhoWeAre.css";
const AboutUsWhoWeAre = () => {
  return (
    <div className="AboutUsWhoWeAre-Outerwrapper">
      <Container>
        <Row className="AboutUsWhoWeAre-wrapper">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="aboutuswho-we-are-imgdiv">
              <img className="WhoWeAre-img" src={whoWeAre} alt="whoWeAre" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="AboutUsWhoWeAre-heading">WHO WE ARE</div>
            <div className="AboutUsWhoWeAre-subHeading">
              ACAA&nbsp;
              <span className="AboutUsWhoWeAre-subHeadingColor"></span>
            </div>
            <div className="AboutUsWhoWeAre-row1">
              To gain competitive edge in business, development speed is
              essential. Development Quality and Speed both are the Key Factor
              of our Company. After all, you don’t want to be outpaced by your
              competitors.
            </div>
            <div className="AboutUsWhoWeAre-row2">
              To address all of these challenges, we created our very own
              portfolio of best practices and our Managed Testing Services.
            </div>
            <div className="AboutUsWhoWeAre-line">
              <span className="AboutUsWhoWeAre-lineIcon">
                <BsBoxArrowRight />
              </span>
              <span className="text-white">
                Our streamlined and optimized processes save you time, effort,
                and expenses
              </span>
            </div>
            <div className="AboutUsWhoWeAre-line">
              <span className="AboutUsWhoWeAre-lineIcon">
                <BsBoxArrowRight />
              </span>
              <span className="text-white">We understand risk management for brands</span>
            </div>
            <div className="AboutUsWhoWeAre-line">
              <span className="AboutUsWhoWeAre-lineIcon">
                <BsBoxArrowRight />
              </span>
              <span className="text-white">Our employees are expert and professional</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsWhoWeAre;
