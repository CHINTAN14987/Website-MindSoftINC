import React from "react";
import AboutUsWhoWeAre from "../Home/AboutUsWhoWeAre";
import BannerContactUs from "../Home/BannerContactUs";
import Testimonial from "../Home/Testimonial";
import WhyChooseUs from "../Home/WhyChooseUs";
import FancyDivider from "../hz-ruler/fancyDivider";
import HoriontalRuler from "../hz-ruler";

const Aboutus = () => {
  return (
    <div>
      <WhyChooseUs />
      <HoriontalRuler />
      <BannerContactUs />
      <HoriontalRuler />
      <AboutUsWhoWeAre />
      <HoriontalRuler />
      <Testimonial />
    </div>
  );
};

export default Aboutus;
