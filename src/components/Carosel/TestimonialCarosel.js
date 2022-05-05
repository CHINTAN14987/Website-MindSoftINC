import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialCard from "../Card/TestimonialCard";

const TestimonialCarosel = () => {
  // const option = {
  //   responsive: {
  //     0: {
  //       item: 1,
  //     },
  //     // breakpoint from 480 up
  //     480: {
  //       item: 1,
  //     },
  //     // breakpoint from 768 up
  //     768: {
  //       item: 2,
  //     },
  //     1024: {
  //       item: 3,
  //     },
  //   },
  // };
  return (
    <div>
      <OwlCarousel
        // {...option}
        className="owl-theme"
        loop
        margin={10}
        items={1}
        mergeFit={true}
        nav
        center={true}
      >
        <div className="item testItem">
          <TestimonialCard />
        </div>
        <div className="item testItem">
          <TestimonialCard />
        </div>
        <div className="item testItem">
          <TestimonialCard />
        </div>
        <div className="item testItem">
          <TestimonialCard />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default TestimonialCarosel;
