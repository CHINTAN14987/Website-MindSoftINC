import React from "react";
import ImageSlider from "../Home/ImageSlider";
import OurApproach from "../Home/OurApproach";
import SubscriberNewsLetter from "../Home/SubscriberNewsLetter";
import Testimonial from "../Home/Testimonial";
import WhoWeAre from "../Home/WhoWeAre";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <WhoWeAre />
      <SubscriberNewsLetter />
      <OurApproach />
      <Testimonial />
    </div>
  );
};

export default Home;
