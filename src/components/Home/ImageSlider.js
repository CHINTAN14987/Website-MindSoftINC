import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TypingWord from "./TypingWord";
import BlurText from "./DecryptedText"; // Add this import
import "../../Style/Hero.css";
import Lottie from "lottie-react";
import Cube from "../../assets/svg/cube.json";

const EnhancedHeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
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
              style={{ position: "absolute", width: "100%" }}
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
        <motion.div
          className="hero_right_con"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Lottie
            animationData={Cube}
            loop={true}
            style={{ width: "100%" }}
          />
        </motion.div>
      </div>
      
      {/* Enhanced paragraph with BlurText */}
      <BlurText
        text="Our company is one of the among leading web and mobile application development companies, which has worldwide popularity. A website adds credibility to your business and of course, the customization of the website enhances the user experience. Our consistency with every project helps us maintaining the standard. We are specialized in delivering the customized solution and responsive performance"
        delay={100}
        animateBy="words"
        direction="top"
        className="company-description"
        onAnimationComplete={() => console.log('Company description animation completed!')}
      />
    </div>
  );
};

export default EnhancedHeroSection;