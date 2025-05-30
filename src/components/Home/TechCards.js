import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../Style/techCards.css";
import aiVideo from "../../assets/svg/AI.mp4";

const FloatingButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(-1);

  const buttons = [
    {
      text: "Artificial Intelligence",
      colorClass: "bg-card-1",
      textColor: "text-white",
      direction: "x", // move right
      position: { left: "15%", top: "50%" },
      video: aiVideo,
    },
    {
      text: "Web Development",
      colorClass: "bg-card-2",
      textColor: "text-white",
      direction: "y", // move up
      position: { left: "40%", top: "70%" },
      video: aiVideo,
    },
    {
      text: "Mobile Apps",
      colorClass: "bg-card-3",
      textColor: "text-white",
      direction: "x",
      position: { left: "10%", top: "30%" },
      video: aiVideo,
    },
    {
      text: "Cloud Solutions",
      colorClass: "bg-card-4",
      textColor: "text-white",
      direction: "y",
      position: { left: "75%", top: "30%" },
      video: aiVideo,
    },
    {
      text: "Data Analytics",
      colorClass: "bg-card-5",
      textColor: "text-white",
      direction: "x",
      position: { left: "70%", top: "65%" },
      video: aiVideo,
    },
  ];

  const getFloatAnimation = (direction) => {
    const commonTransition = { duration: 6, repeat: Infinity, ease: "easeInOut" };
    switch (direction) {
      case "x": return { animate: { x: [0, 20, 0, -20, 0], transition: commonTransition } };
      case "y": return { animate: { y: [0, 20, 0, -20, 0], transition: commonTransition } };
      case "xy": return { animate: { x: [0, 15, 0, -15, 0], y: [0, -15, 0, 15, 0], transition: commonTransition } };
      default: return {};
    }
  };

  return (
    <div className="floating-container">
      {buttons.map((button, index) => (
        <motion.div
          key={index}
          className="floating-button-wrapper"
          style={{
            left: button.position.left,
            top: button.position.top,
            zIndex: hoveredButton === index ? 100 : 10,
          }}
          initial={{ x: 0, y: 0 }}
          animate={
            hoveredButton === index
              ? button.direction === "x"
                ? { x: 50 }
                : { y: -50 }
              : { x: 0, y: 0 }
          }
          transition={{ duration: 0.3 }}
          {...getFloatAnimation(button.direction)}
        >
          <div
            className={`floating-button ${button.colorClass} ${button.textColor} ${
              hoveredButton === index ? `expanded floating-${index}` : "collapsed"
            }`}
            onMouseEnter={() => setHoveredButton(index)}
            onMouseLeave={() => setHoveredButton(-1)}
          >
            {/* Collapsed state */}
            {hoveredButton !== index && (
              <div className="button-inner visible">
                <div className="arrow-circle">
                  <span className="Arrow">→</span>
                </div>
                <span className="text-lg ml-2">{button.text}</span>
              </div>
            )}

            {/* Expanded state */}
            {hoveredButton === index && (
              <div className="expanded-container" style={{ borderColor: `var(--card-bg-${index + 1})` }}>
                <video
                  src={button.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video-expanded"
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingButtons;
