import React from "react";
import "../../Style/TestimonialCard.css";
const TestimonialCard = () => {
  return (
    <div className="tcard-wrapper">
      <div className="tcard-imagediv">
        <img
          src={
            "http://www.gvdsystem.com/wp-content/uploads/2019/06/testimonial-01-150x150.jpg"
          }
          alt="img"
        />
      </div>
      <div className="tcard-body">
        <div>
          Great company to work with. Dedicated specialists work with you
          regularly to complete tasks quickly and efficiently while maintaining
          the highest levels of quality. Highly recommend them to anyone looking
          for excellent developers.
        </div>
        <div className="tcard-designation">
          <span className="tcard-designation-colortext">Jennifer james</span> -
          Adviser
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
