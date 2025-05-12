import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import consulting from "../../Images/consulting.png";
import programs from "../../Images/programs.png";
import training from "../../Images/training.png";
import card from "../../Images/cardImage.png";
import card1 from "../../Images/CardImage2.png";
import "../../Style/OurApproach.css";
import OurApproachCard from "../Card/OurApproachCard";

const OurApproach = () => {
  const cardData = [
  {
    number: "01",
    heading: "Web Development",
    context:
      "We build fast, scalable, and secure websites using modern frameworks like Node.js and React.js to deliver seamless user experiences.",
    image: consulting, // Replace with your relevant image import
  },
  {
    number: "02",
    heading: "Mobile App Development",
    context:
      "We develop high-performance native mobile applications for iOS and Android, ensuring fluid functionality and optimized user interfaces.",
    image: programs, // Replace with your relevant image import
  },
  {
    number: "03",
    heading: "Cloud Solutions",
    context:
      "Our cloud services help you scale effortlessly using robust, secure, and cost-effective cloud infrastructure tailored to your business needs.",
    image: training, // Replace with your relevant image import
  },
  // {
  //   number: "04",
  //   heading: "Generative AI",
  //   context:
  //     "Integrate cutting-edge AI capabilities like content generation, chatbots, and recommendation systems powered by advanced language models.",
  //   image: card, // Replace with your relevant image import
  // },
  // {
  //   number: "05",
  //   heading: "AI Model Fine-Tuning",
  //   context:
  //     "We fine-tune large AI models using your custom data, enabling personalized, domain-specific AI solutions for smarter automation.",
  //   image: card1, // Replace with your relevant image import
  // },
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
