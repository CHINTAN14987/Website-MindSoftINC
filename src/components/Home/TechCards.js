import aiVideo from "../../assets/svg/AI.mp4";
import webVideo from "../../assets/svg/WEBD.mp4";
import mobileVideo from "../../assets/svg/APPD.mp4";
import cloudVideo from "../../assets/svg/Cloud.mp4";  
import dataVideo from "../../assets/svg/DataAnalytcs.mp4";

import React, { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(-1);

  const buttons = [
    {
      text: "Artificial Intelligence",
      theme: "ai",
      direction: "x",
      position: { left: "15%", top: "50%" },
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accentColor: "#667eea",
      video: aiVideo // You'll need to import this at the top
    },
    {
      text: "Web Development",
      theme: "web",
      direction: "y",
      position: { left: "40%", top: "70%" },
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accentColor: "#f093fb",
      video: webVideo // Replace with actual web dev video
    },
    {
      text: "Mobile Apps",
      theme: "mobile",
      direction: "x",
      position: { left: "10%", top: "30%" },
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      accentColor: "#4facfe",
      video: mobileVideo // Replace with actual mobile video
    },
    {
      text: "Cloud Solutions",
      theme: "cloud",
      direction: "y",
      position: { left: "75%", top: "30%" },
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      accentColor: "#43e97b",
      video: cloudVideo // Replace with actual cloud video
    },
    {
      text: "Data Analytics",
      theme: "data",
      direction: "x",
      position: { left: "70%", top: "65%" },
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      accentColor: "#fa709a",
      video: dataVideo // Replace with actual data video
    },
  ];

  const getFloatKeyframes = (direction) => {
    switch (direction) {
      case "x":
        return {
          '0%, 100%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(20px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(-20px)' }
        };
      case "y":
        return {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(20px)' },
          '50%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(-20px)' }
        };
      default:
        return {};
    }
  };

  useEffect(() => {
    return () => {
      setHoveredButton(-1);
    };
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      overflow: 'hidden'
    },
    
    buttonWrapper: (button, index, isHovered) => ({
      position: 'absolute',
      left: button.position.left,
      top: button.position.top,
      zIndex: isHovered ? 100 : 10,
      animation: `float-${button.direction} 6s ease-in-out infinite`,
      transform: isHovered 
        ? (button.direction === "x" ? 'translateX(50px)' : 'translateY(-50px)')
        : 'translate(0, 0)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }),

    button: (button, isHovered) => ({
      borderRadius: isHovered ? '24px' : '50px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background: button.gradient,
      boxShadow: isHovered 
        ? `0 25px 50px -12px ${button.accentColor}40, 0 0 0 1px ${button.accentColor}30`
        : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      width: isHovered ? '400px' : '288px',
      height: isHovered ? '450px' : '64px',
      transform: isHovered ? 'translateY(-200px) scale(1.02)' : 'translateY(0) scale(1)',
      transformOrigin: 'bottom center'
    }),

    buttonInner: (isVisible) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      height: '64px',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
      order: 2
    }),

    arrowCircle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },

    arrow: {
      fontSize: '24px',
      color: 'white'
    },

    text: {
      fontSize: '18px',
      color: 'white',
      fontWeight: '600',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },

    expandedContainer: (button) => ({
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: '20px',
      position: 'relative',
      background: `linear-gradient(45deg, ${button.accentColor}20, transparent)`
    }),

    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '20px'
    },

    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '20px'
    }
  };

  // Create dynamic keyframes for animations
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    
    const floatXKeyframes = `
      @keyframes float-x {
        0%, 100% { transform: translateX(0px); }
        25% { transform: translateX(20px); }
        50% { transform: translateX(0px); }
        75% { transform: translateX(-20px); }
      }
    `;
    
    const floatYKeyframes = `
      @keyframes float-y {
        0%, 100% { transform: translateY(0px); }
        25% { transform: translateY(20px); }
        50% { transform: translateY(0px); }
        75% { transform: translateY(-20px); }
      }
    `;
    
    styleSheet.innerText = floatXKeyframes + floatYKeyframes;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container}>
      {buttons.map((button, index) => {
        const isHovered = hoveredButton === index;
        
        return (
          <div
            key={index}
            style={styles.buttonWrapper(button, index, isHovered)}
          >
            <div
              style={styles.button(button, isHovered)}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(-1)}
            >
              {/* Collapsed state */}
              {!isHovered && (
                <div style={styles.buttonInner(true)}>
                  <div style={styles.arrowCircle}>
                    <span style={styles.arrow}>→</span>
                  </div>
                  <span style={styles.text}>{button.text}</span>
                </div>
              )}

              {/* Expanded state */}
              {isHovered && (
                <div style={styles.expandedContainer(button)}>
                  <video
                    src={button.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={styles.video}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingButtons;