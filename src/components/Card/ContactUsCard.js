import React from "react";
import "../../Style/ContactUs.css";
// import { AiOutlineMail } from "react-icons/ai";
const ContactUsCard = ({ image, heading, subHeadingOne, subHeadingTwo }) => {
  return (
    <div className="contact-card-wrapper">
      <div className="contact-card-imagediv">
        {/* <img src={AiOutlineMail} alt="contactcard" /> */}
        {/* <AiOutlineMail /> */}
        {image}
      </div>
      <div className="contact-card-contentDiv">
        <div className="contact-card-heading">{heading}</div>
        <div className="contact-card-subheadingone">{subHeadingOne}</div>
        <div className="contact-card-subHeadingtwo">{subHeadingTwo}</div>
      </div>
    </div>
  );
};

export default ContactUsCard;
