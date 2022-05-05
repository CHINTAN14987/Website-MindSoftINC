import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HomePage from "./HomePage";
import Services from "./Services";
import { IoMdArrowDropright } from "react-icons/io";
import Slider2 from "../../Images/SliderImage2.jpg";
import expert from "../../Images/expert.png";
import Slider3 from "../../Images/Slider3.jpg";
import Slider1 from "../../Images/SliderImage1.jpg";

const ImageSlider = () => {
  return (
    <div>
      <div className="sliderContainer">
        <OwlCarousel
          items={1}
          className="owl-theme"
          autoplay="true"
          loop="true"
          nav
          margin={8}
          smartSpeed="1000"
        >
          <div>
            <img src={Slider1} alt="" />
            <div className="expert ">
              <img src={expert} alt="" />
            </div>
            <div className="sliderOneDetails">
              <h4>KNOWLEDGE IS POWER</h4>
              <h3>
                Software<span className="sliderSpan"> Development</span>{" "}
                Solution Partner
              </h3>
              <div className="sliderPage1AnimationButton">
                <button className="sliderpageOneBtn">CONTACT US</button>
                <button className="sliderpage_circleBtn">
                  <IoMdArrowDropright className="circleBtnIcon" />
                </button>
                <span className="btnClick">How We Work</span>
              </div>
            </div>
          </div>
          <div>
            <img src={Slider1} alt="" />

            <div className="expert ">
              <img src={expert} alt="" />
            </div>
            <div className="sliderOneDetails">
              <h4>KNOWLEDGE IS POWER</h4>
              <h3>
                Software<span className="sliderSpan"> Development</span>{" "}
                Solution Partner
              </h3>
              <div className="sliderPage1AnimationButton">
                <button className="sliderpageOneBtn">CONTACT US</button>
                <button className="sliderpage_circleBtn">
                  <IoMdArrowDropright className="circleBtnIcon" />
                </button>
                <span className="btnClick">How We Work</span>
              </div>
            </div>
          </div>
          <div>
            <img src={Slider1} alt="" />
            <div className="expert ">
              <img src={expert} alt="" />
            </div>
            <div className="sliderOneDetails">
              <h4>KNOWLEDGE IS POWER</h4>
              <h3>
                Software<span className="sliderSpan"> Development</span>{" "}
                Solution Partner
              </h3>
              <div className="sliderPage1AnimationButton">
                <button className="sliderpageOneBtn">CONTACT US</button>
                <button className="sliderpage_circleBtn">
                  <IoMdArrowDropright className="circleBtnIcon" />
                </button>
                <span className="btnClick">How We Work</span>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <HomePage />
      <Services />
    </div>
  );
};

export default ImageSlider;
