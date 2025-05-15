import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FancyDivider = () => {
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
    height: '3px',
    background: 'linear-gradient(to right, #1a0b35, #2d1654, #47267a, #34103e, #0e0629)',
    position: 'relative',
    borderRadius: '3px',
    boxShadow: isHovered ? '0 0 15px rgba(118, 73, 172, 0.7)' : '0 0 5px rgba(118, 73, 172, 0.3)',
    transition: 'all 0.3s ease'
  };

  const containerStyle = {
    width: '100%',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5px',
    position: 'absolute',
    background: 'linear-gradient(to right, #1a0b35, #2d1654, #47267a, #34103e, #0e0629)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    boxShadow: '0 0 10px rgba(118, 73, 172, 0.6)',
    border: '2px solid #8c5bc9'
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

  return (
    <div 
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ width: '0%', opacity: 0 }}
        animate={{ width: '80%', opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={lineStyle}
      />
      
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
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            transition={{ delay: index * 0.1 }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#8c5bc9',
              boxShadow: '0 0 5px #8c5bc9'
            }}
          />
        ))}
      </motion.div>
      
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
          <Sparkles color="#d4b8ff" size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FancyDivider;