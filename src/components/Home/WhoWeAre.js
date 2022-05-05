import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Style/WhoWeAre.css";
import whoWeAre from "../../Images/whoWeAre.png";
import "../../Style/WhyChooseUs.css";
import Training from "../../Images/training.png";
import Corporate from "../../Images/corporate.png";
const WhoWeAre = () => {
  return (
    <Container>
      <Row className="whoWeAre-wrapper">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="whyChooseUs-headingWrapper">
            <div className="whychoose-heading">WHO WE ARE</div>
            <div className="whychoose-subHeading">
              What we do at&nbsp;
              <span className="whychoose-subHeadingColor">Blue InfoChips</span>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <img className="WhoWeAre-img" src={whoWeAre} alt="whoWeAre" />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <div className="whoWeAre-rightrow1">
            One Innovative Idea can change your tomorrow. Nowadays Rapid
            technological advancements are presenting huge opportunities to
            satisfy your customers with innovative, new applications.
          </div>
          <div className="whoWeAre-rightrow2">
            <div className="whoWeAre-imgdiv">
              <img src={Training} alt="" />
            </div>
            <div>
              <div className="whoWeAre-rowheading">Software Development</div>
              <div className="whoWeAre-rowcontent">
                We engineer and build software, web and mobile applications,
                APIs and more. Our team is experienced with modern technologies
                and programming languages. Our processes are effective and lean.
              </div>
            </div>
          </div>
          <div className="whoWeAre-rightrow3">
            <div className="whoWeAre-imgdiv">
              <img src={Corporate} alt="" />
            </div>
            <div>
              <div className="whoWeAre-rowheading">UI and UX Design</div>
              <div className="whoWeAre-rowcontent">
                We design beautiful, functional and purposeful apps, web-apps
                and websites. From Wire-frames to MVP to Pixel-Perfect designs.
                Complex workflows simplified but also beauty of a brand brought
                out by the simplicity
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
