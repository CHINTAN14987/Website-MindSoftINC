import React from "react";
import ImageSlider from "../Home/ImageSlider";
import OurApproach from "../Home/OurApproach";
import SubscriberNewsLetter from "../Home/SubscriberNewsLetter";
import Testimonial from "../Home/Testimonial";
import WhoWeAre from "../Home/WhoWeAre";
import HoriontalRuler from "../hz-ruler";
import FancyDivider from "../hz-ruler/fancyDivider";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <HoriontalRuler/>
      <WhoWeAre />
      <HoriontalRuler/>
      <SubscriberNewsLetter />
      <HoriontalRuler/>
      <OurApproach />
      <HoriontalRuler/>
      <Testimonial />
      <HoriontalRuler/>
    </div>
  );
};

export default Home;
