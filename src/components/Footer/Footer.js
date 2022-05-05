import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { MdWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import "../../Style/Footer.css";
const Footer = () => {
  return (
    <div className="footer-outerWrapper">
      <Container>
        <Row className="footer-wrapper">
          <Col>
            <div>
              <div className="footer-heading">Blue InfoChips</div>
              <div>
                Blue InfoChips has been delivering extraordinary eCommerce, Web
                Development, Mobile App Development, CRM Development and
                Creative Design services.
              </div>
              <div className="footer-heading mt-3">CONTACT US</div>
              <div className="footer-card">
                <div className="footerCard-top">
                  <div className="footerCard-address">
                    Address- A12 Sector 12 Noida - 201301
                  </div>
                  <div>
                    <GoLocation />
                  </div>
                </div>

                <div className="footerCard-bottom">
                  <div className="footerCard-bottom-text">
                    Talk To Our Support <br />
                    <b>(312) 585-6061</b>
                  </div>
                  <div>
                    <MdWifiCalling3 />
                  </div>
                </div>
                <div className="footerCard-email">info@blueinfochips.com</div>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="footer-heading">INFORMATION</div>
              <div className="footer-inforamtionlist-wrapper">
                <Link to="/" className="footer-informationlist">
                  <MdKeyboardArrowRight /> Home
                </Link>
                <Link to="/aboutus" className="footer-informationlist">
                  <MdKeyboardArrowRight /> About Us
                </Link>
                {/* <Link to="/services" className="footer-informationlist">
                  <MdKeyboardArrowRight /> Service
                </Link> */}
                <Link to="/contactus" className="footer-informationlist">
                  <MdKeyboardArrowRight /> Contact Us
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="footer-heading">LATEST NEWS</div>
              {/* <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
            </div>
          </Col>
          <Col>
            <div>
              <div className="footer-heading">NEWSLETTER</div>
              <div>
                Sign up today for hints, tips and the latest product news
              </div>
              <div>
                {/* <div className="footer-heading mt-3">FOLLOW US ON</div> */}
                <div></div>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className="text-center"
          ></Col>
        </Row>
      </Container>
      <div className="footer-copyright">
        Copyright © 2022 Blue InfoChips, All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
