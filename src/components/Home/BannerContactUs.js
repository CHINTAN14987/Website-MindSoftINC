import React from "react";
import { Container } from "react-bootstrap";
import "../../Style/BannerContactUs.css";

const BannerContactUs = () => {
  return (
    <div className="bannerContactUs-wrapper">
      <Container>
        <div className="bannerContactUs-innerWrapper">
          <div className="bannerContactUs-left">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>Would you like to use it with your next project?</div>
              <div>Contact Us!</div>
              <div className="bannerContactUs-number">+1 312-585-6061</div>
            </div>
          </div>
          <div className="bannercontactus-btn">
            <button>BOOK A CONSULTATION</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerContactUs;
