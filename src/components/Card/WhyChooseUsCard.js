import React from "react";
import "../../Style/WhyChooseUsCard.css";

const WhyChooseUsCard = ({ heading, image, content }) => {
  return (
    <div className="whyChooseUsCard-wrapper">
      <div className="whyChooseUsCard-imagediv">
        <div></div>
        {/* <img src="#" /> */}
      </div>
      <div>
        <div className="whyChooseUsCard-heading">{heading}</div>
        <div className="whyChooseUsCard-content">{content}</div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
