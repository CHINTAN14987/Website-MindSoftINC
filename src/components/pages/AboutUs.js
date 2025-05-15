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
      <FancyDivider spacing={50}/>
      <BannerContactUs />
      <FancyDivider spacing={50}/>
      <AboutUsWhoWeAre />
      <FancyDivider spacing={50}/>
      <Testimonial />
      <FancyDivider spacing={50}/>
    </div>
  );
};

export default Aboutus;
