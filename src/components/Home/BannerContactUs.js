import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Style/BannerContactUs.css";

const BannerContactUs = () => {
  let navigate = useNavigate();
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
              <div className="bannerContactUs-number">+91 902-720-4993</div>
            </div>
          </div>
          <div className="bannercontactus-btn">
            <button
              onClick={() => {
                navigate("/contactus");
              }}
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerContactUs;
