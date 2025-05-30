import React, { useState, useEffect } from "react";
import "../../Style/typingWords.css";

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  animationType = "sweep", // 'sweep', 'char', 'pulse'
  charDelay = 0.1, // delay between character animations
}) => {
  const [animatedText, setAnimatedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const animationDuration = `${speed}s`;

  useEffect(() => {
    if (animationType === "char") {
      animateCharacters();
    } else {
      setAnimatedText(text);
    }
  }, [text, animationType]);

  const animateCharacters = () => {
    setIsAnimating(true);
    setAnimatedText("");

    const chars = text.split("");
    let currentIndex = 0;

    const animateNextChar = () => {
      if (currentIndex < chars.length) {
        setAnimatedText((prev) => prev + chars[currentIndex]);
        currentIndex++;
        setTimeout(animateNextChar, charDelay * 1000);
      } else {
        setIsAnimating(false);
      }
    };

    animateNextChar();
  };

  const renderText = () => {
    if (animationType === "char") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            "--char-delay": `${index * charDelay}s`,
            animationDelay: `${index * charDelay}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }
    return text;
  };

  const getClassNames = () => {
    let classes = `shiny-text ${className}`;

    if (disabled) {
      classes += " disabled";
    }

    if (animationType === "char") {
      classes += " char-animation";
    }

    if (animationType === "pulse") {
      classes += " pulse";
    }

    return classes;
  };

  return (
    <div
      className={getClassNames()}
      style={{
        "--animation-duration": animationDuration,
      }}
    >
      {renderText()}
    </div>
  );
};

export default ShinyText;

// Usage Examples:
/*
// Basic sweep animation (default)
<ShinyText text="Hello World" />

// Character-by-character animation
<ShinyText text="Innovation" animationType="char" charDelay={0.1} />

// Pulsing effect
<ShinyText text="Success" animationType="pulse" speed={2} />

// Custom styling
<ShinyText 
  text="Excellence" 
  className="custom-class" 
  speed={3}
  disabled={false}
/>

// For your 3-word interval use case:
const words = ['Innovation', 'Excellence', 'Success'];
const [currentWord, setCurrentWord] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentWord(prev => (prev + 1) % words.length);
  }, 1500);
  return () => clearInterval(interval);
}, []);

return (
  <ShinyText 
    text={words[currentWord]} 
    animationType="char" 
    charDelay={0.1}
    speed={1}
  />
);
*/
