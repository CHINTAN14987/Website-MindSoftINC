import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ArrowDown } from 'lucide-react';

const FancyDivider = ({ spacing = 60 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Initial animation on mount
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const lineStyle = {
    height: '4px',
    background: 'white',
    position: 'relative',
    borderRadius: '3px',
    boxShadow: isHovered ? '0 0 15px rgba(255, 255, 255, 0.7)' : '0 0 5px rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease'
  };

  const containerStyle = {
    width: '100%',
    marginTop: `${spacing/2}px`,
    marginBottom: `${spacing/2}px`,
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: 'linear-gradient(to right, #1a0b35, #2d1654, #47267a, #34103e, #0e0629)'
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5px',
    position: 'absolute',
    background: 'white',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
    border: '3px solid #d4b8ff',
    zIndex: 2
  };

  const accentStyle = {
    position: 'absolute',
    width: '60%',
    height: '12px',
    background: 'linear-gradient(to right, #1a0b35, #2d1654, #47267a, #34103e, #0e0629)',
    borderRadius: '6px',
    zIndex: 1
  };

  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: [1, 1.2, 1],
      opacity: 1,
      transition: { duration: 1, repeat: Infinity }
    }
  };

  const sparkleVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: 360,
      scale: [1, 1.2, 1],
      transition: { duration: 3, repeat: Infinity, ease: "linear" }
    },
    hover: {
      rotate: 360,
      scale: [1, 1.5, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const decorativeElementStyle = {
    position: 'absolute',
    width: '100%',
    top: '-10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none'
  };

  return (
    <div 
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top decorative elements */}
      <div style={decorativeElementStyle}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`top-${i}`}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            style={{
              position: 'absolute',
              top: '-15px',
              left: `${45 + i * 5}%`,
              transform: 'translateX(-50%)',
              width: '30px',
              height: '3px',
              background: 'white',
              borderRadius: '5px',
            }}
          />
        ))}
      </div>

      {/* Gradient background accent for better visual separation */}
      <div style={accentStyle} />
      
      {/* Main white line */}
      <motion.div
        initial={{ width: '0%', opacity: 0 }}
        animate={{ width: '85%', opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={lineStyle}
      />
      
      {/* Animated dots */}
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        whileHover="hover"
        style={{
          position: 'absolute',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: '0 10%'
        }}
      >
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            transition={{ delay: index * 0.1 }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'white',
              boxShadow: '0 0 8px white'
            }}
          />
        ))}
      </motion.div>
      
      {/* Center icon with animations */}
      <motion.div 
        style={iconContainerStyle}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.div
          variants={sparkleVariants}
          initial="initial"
          animate={isHovered ? "hover" : "animate"}
        >
          <Star color="#47267a" size={24} />
        </motion.div>
      </motion.div>

      {/* Secondary icons for more visual interest */}
      <motion.div
        style={{
          position: 'absolute',
          left: '25%',
          ...iconContainerStyle,
          width: '32px',
          height: '32px'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            rotate: 360,
            transition: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
        >
          <Sparkles color="#47267a" size={16} />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          right: '25%',
          ...iconContainerStyle,
          width: '32px',
          height: '32px'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            y: [0, -3, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ArrowDown color="#47267a" size={16} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FancyDivider;