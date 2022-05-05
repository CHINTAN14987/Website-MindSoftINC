import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import consulting from "../../Images/consulting.png";
import programs from "../../Images/programs.png";
import training from "../../Images/training.png";
import "../../Style/OurApproach.css";
import OurApproachCard from "../Card/OurApproachCard";

const OurApproach = () => {
  const cardData = [
    {
      number: "01",
      heading: "Web Design",
      context:
        "Creating amazing web experiences from landing pages to effective eCommerce stores",
      image: consulting,
    },
    {
      number: "02",
      heading: "Print Design",
      context:
        "Everything from business cards to customized graphics, we make print-ready tailored designs.",
      image: training,
    },
    {
      number: "03",
      heading: "Packaging Design",
      context:
        "Let us help you build your product identity and make your product stand out from the rest.",

      image: programs,
    },
  ];
  return (
    <div className="ourApproach-wrapper">
      <Container>
        <div className="ourapproach-topheading">OUR APPROACH</div>
        <div className="ourapproach-subheading">
          Brand is just a perception,{" "}
          <span className="ourapproach-subheading-color">
            and perception will match reality over time.
          </span>
        </div>
        <div className="ourapproach-content">
          Got a project but don't have access to professional resources?
        </div>
        <div className="ourapporach-card-wrapper">
          <Row>
            {cardData.map((item) => {
              return (
                <Col>
                  <OurApproachCard
                    number={item.number}
                    heading={item.heading}
                    context={item.context}
                    image={item.image}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurApproach;
