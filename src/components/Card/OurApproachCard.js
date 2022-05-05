import React from "react";
import training from "../../Images/training.png";
import "../../Style/OurApproach.css";
const OurApproachCard = ({ number, heading, context, image }) => {
  return (
    <div className="oa-wrapper">
      <div className="oa-img-div">
        <div>
          <img src={image} alt="img" />
        </div>
        <div className="oa-img-divnum">{number}</div>
      </div>
      <div className="oa-main-heading">{heading}</div>
      <div className="oa-main-content">{context}</div>
    </div>
  );
};

export default OurApproachCard;
