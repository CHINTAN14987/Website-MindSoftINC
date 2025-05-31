import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TypingWord from "./TypingWord";
import BlurText from "./BlurText";
import "../../Style/Hero.css";
// import Lottie from "lottie-react";
// import Cube from "../../assets/svg/cube.json";
import Hyperspeed from "../hyperSpeed";
const EnhancedHeroSection = () => {
  // const navigate = useNavigate();
  // const [isLoaded, setIsLoaded] = useState(false);
  // const canvasRef = useRef(null);
  // const animationRef = useRef(null);
  // const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  //   triggerOnce: true,
  // });
  const [current, setCurrent] = useState(0);
  const rotatingWords = ["AI Agents", "Web Development", "Mobile Development"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero_container">

<Hyperspeed
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x0a0a0a,        // Very dark gray (almost black)
      islandColor: 0x1a1a1a,      // Slightly lighter dark gray
      background: 0x000000,       // Pure black
      shoulderLines: 0xFFFFFF,    // Pure white (unchanged)
      brokenLines: 0xCCCCCC,     // Light gray for subtle contrast
      leftCars: [0xFFFFFF, 0xE0E0E0, 0xD0D0D0],    // White to light gray gradient
      rightCars: [0x808080, 0x606060, 0x404040],   // Medium to dark gray gradient
      sticks: 0xB0B0B0,          // Medium-light gray
    }
  }}
/>
    
    <div className="hero_front">
    <div className="hero_component">
      <motion.div
        className="hero-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="top_point">
          We leverage cutting-edge technologies like
        </div>
        <AnimatePresence mode="wait">
        <motion.div
          key={rotatingWords[current]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <TypingWord
            text={rotatingWords[current]}
            disabled={false}
            speed={5}
            className="custom-class"
          />
        </motion.div>
      </AnimatePresence>
        <div className="last_point">to deliver exceptional solutions</div>
      </motion.div>

      {/* Right side */}
      {/* <motion.div
     className="hero_right_con"
        initial={{ x: 50, opacity: 0 }}
        animate={ { x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      
      >
        <Lottie
          animationData={Cube}
          loop={true}
          style={{ width: "100%" }}
        />
      </motion.div> */}
    </div>
    <BlurText
        text="Our company is one of the among leading web and mobile application development companies, which has worldwide popularity. A website adds credibility to your business and of course, the customization of the website enhances the user experience. Our consistency with every project helps us maintaining the standard. We are specialized in delivering the customized solution and responsive performance"
        delay={100}
        animateBy="words"
        direction="top"
        className="company-description"
        onAnimationComplete={() => console.log('Company description animation completed!')}
      />
    </div>
    </div>
  
  );
};

export default EnhancedHeroSection;