import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "../Home/ImageSlider";
import OurApproach from "../Home/OurApproach";
import SubscriberNewsLetter from "../Home/SubscriberNewsLetter";
import Testimonial from "../Home/Testimonial";
import WhoWeAre from "../Home/WhoWeAre";
import HoriontalRuler from "../hz-ruler";
import Waves from "../waves/Waves";
import FloatingButtons from "../Home/TechCards";

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div>


<AnimatedSection delay={0.1}>
        <ImageSlider />
      </AnimatedSection> 
      <div style={{ position: "relative", height: "100vh" }}>
        <Waves
          lineColor="#636363"
          backgroundColor="#000"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={30}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
        <div style={{ position: "absolute", width: "100%" }}>
          <FloatingButtons />
        </div>
      </div>
      <AnimatedSection delay={0.3}>
   
      </AnimatedSection>
      {/* Hero Section with Floating Buttons and Waves */}
   

      {/* Delayed Reveal Sections */}
   
      <AnimatedSection delay={0.5}>
        <WhoWeAre />
      </AnimatedSection>

<AnimatedSection delay={0.7}>
        <SubscriberNewsLetter />
      </AnimatedSection> 



       <AnimatedSection delay={0.9}>
        <OurApproach />
      </AnimatedSection> 



      {/* <AnimatedSection delay={0.9}>
        <Testimonial />
      </AnimatedSection> */}

  
    </div>
  );
};

export default Home;
