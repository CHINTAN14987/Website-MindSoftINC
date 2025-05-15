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
      <FancyDivider spacing={50}/>
      <OurApproach />
      <FancyDivider spacing={50}/>
      <Testimonial />
      <FancyDivider spacing={50}/>
    </div>
  );
};

export default Home;
