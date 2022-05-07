import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WhyChooseUsCard from "../Card/WhyChooseUsCard";
import "../../Style/WhyChooseUs.css";

const WhyChooseUs = () => {
  const cardData = [
    {
      heading: "Web Design",
      image: "",
      content:
        "Creating amazing web experiences from landing pages to effective eCommerce stores",
    },
    {
      heading: "UI/UX Design",
      image: "",
      content:
        "We craft creative experiences and intuitive interfaces for your app or website to succeed.",
    },
    {
      heading: "Branding",
      image: "",
      content:
        "Create an identity for your business or refresh your existing brand to boost visual appeal",
    },
    {
      heading: "Print Design",
      image: "",
      content:
        "Everything from business cards to customized graphics, we make print-ready tailored designs",
    },
    {
      heading: "Packaging Design",
      image: "",
      content:
        "Let us help you build your product identity and make your product stand out from the rest.",
    },
    {
      heading: "Website Domain",
      image: "",
      content:
        "Find and purchase your next website domain name and hosting without breaking the bank. Seamlessly establish your online identify today",
    },
  ];
  return (
    <Container>
      <Row className="whyChooseUs-wrapper">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="whyChooseUs-headingWrapper">
            <div className="whychoose-heading">WHY CHOOSE US</div>
            <div className="whychoose-subHeading">
              Why Choose Blue InfoChips
            </div>
            <div className="whychoose-subHeadingColor">Expert Consultant</div>
          </div>
        </Col>

        <div className="testCard-wrapper">
          {cardData.map((item) => {
            return (
              // <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
              <WhyChooseUsCard
                heading={item.heading}
                image={item.image}
                content={item.content}
              />
              // </Col>
            );
          })}
        </div>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="text-center"
        >
          <button className="whyChooseBtn">SAY HELLO TO US</button>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
