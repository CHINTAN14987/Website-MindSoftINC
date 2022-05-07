import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Style/ContactUs.css";
import ContactUsCard from "../Card/ContactUsCard";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { ImCalendar } from "react-icons/im";

const ContactUs = () => {
  const [textValue, settextValue] = useState();
  const [emailValue, setemailValue] = useState();
  const changeHandlerName = (e) => {
    settextValue(e.target.value);
  };
  const changeHandlerEmail = (e) => {
    setemailValue(e.target.value);
  };
  return (
    <div>
      <div className="contactUs-heading">
        <Container>Contact Us</Container>
      </div>
      <Container>
        <Row className="contactUs-card-div">
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <ContactUsCard
              image={<AiOutlineMail />}
              heading={"Email Address"}
              subHeadingOne={"info@blueinfochips.com"}
              // subHeadingTwo={"email@example.com"}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <ContactUsCard
              image={<BiMap />}
              heading={"Our Address"}
              subHeadingOne={"B-19 4th-Floor Sector 63"}
              subHeadingTwo={" Noida 201301"}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <ContactUsCard
              image={<ImCalendar />}
              heading={"Hours"}
              subHeadingOne={"Mon-Fri: 9am-5pm"}
              subHeadingTwo={"Sat-Sun:close"}
            />
          </Col>
        </Row>

        <Row className="messageus-outerwrapper">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            <div className="messageus-wrapper">
              <div className="messageus-heading">MESSAGE US</div>
              <div className="messageus-main-heading">
                Have any Question? Fell free to contact us.
              </div>
              {/* <div></div> */}
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="contactus-inputWrapper"
          >
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <input
                type="text"
                placeholder="Your Name"
                className="contactus-input"
                name="mytext"
                value={textValue}
                onChange={changeHandlerName}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <input
                type="email"
                placeholder="Email Address"
                className="contactus-input"
                name="email"
                value={emailValue}
                onChange={changeHandlerEmail}
              />
              {/* <input text />
            <input /> */}
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  settextValue("");
                  setemailValue("");
                }}
                className="contactus-bookBtn"
              >
                BOOK A CONSULTATION
              </button>
            </Col>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.2825858920332!2d-77.40226126837679!3d38.94996582629949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b647eb1720d3c9%3A0xa457f24c41dcfa23!2s13053%20Elm%20Tree%20Dr%2C%20Herndon%2C%20VA%2020171%2C%20USA!5e0!3m2!1sen!2sin!4v1647082315045!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="myaddress"
            className="contactUs-iframe"
          ></iframe> */}
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
