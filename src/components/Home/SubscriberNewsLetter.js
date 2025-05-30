import React, { useState } from 'react';
import './../../Style/SubscriberNewsLetter.css'; // Assuming you have a CSS file for styles

const SubscriberNewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <div className="newsletter-wrapper">
      {/* Custom SVG Background */}
      <svg 
        className="newsletter-bg-svg" 
        viewBox="0 0 1920 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e5e5e5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main background */}
        <rect width="100%" height="100%" fill="url(#mainGradient)" />
        
        {/* Tech pattern elements */}
        <g opacity="0.1">
          {/* Grid pattern */}
          {Array.from({length: 40}).map((_, i) => (
            <g key={`grid-${i}`}>
              <line 
                x1={i * 50} 
                y1="0" 
                x2={i * 50} 
                y2="800" 
                stroke="white" 
                strokeWidth="1"
              />
              <line 
                x1="0" 
                y1={i * 20} 
                x2="1920" 
                y2={i * 20} 
                stroke="white" 
                strokeWidth="1"
              />
            </g>
          ))}
        </g>
        
        {/* Floating tech elements */}
        <g opacity="0.3">
          {/* Circuit board patterns */}
          <circle cx="200" cy="150" r="3" fill="url(#accentGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="300" r="4" fill="url(#accentGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1500" cy="200" r="2" fill="url(#accentGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Connecting lines */}
          <path 
            d="M 200 150 Q 500 100 800 300" 
            stroke="url(#accentGradient)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="stroke-dasharray" values="0 1000;1000 0" dur="8s" repeatCount="indefinite" />
          </path>
          <path 
            d="M 800 300 Q 1200 250 1500 200" 
            stroke="url(#accentGradient)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="stroke-dasharray" values="1000 0;0 1000" dur="6s" repeatCount="indefinite" />
          </path>
        </g>
        
        {/* Abstract geometric shapes */}
        <g opacity="0.2">
          <polygon 
            points="100,600 200,500 300,650 150,700" 
            fill="white"
            transform="rotate(45 200 600)"
          />
          <polygon 
            points="1600,200 1700,100 1800,250 1650,300" 
            fill="white"
            transform="rotate(-30 1700 200)"
          />
          <rect 
            x="1200" 
            y="500" 
            width="60" 
            height="60" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            transform="rotate(45 1230 530)"
          />
        </g>
        
        {/* Floating particles */}
        <g opacity="0.4">
          {Array.from({length: 12}).map((_, i) => (
            <circle 
              key={`particle-${i}`}
              cx={100 + i * 150} 
              cy={400 + Math.sin(i) * 100} 
              r="1.5" 
              fill="white"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0;0,-20;0,0`}
                dur={`${3 + i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
      
      {/* Content overlay */}
      <div className="newsletter-content">
        <div className="newsletter-container">
          <div className="newsletter-header">
            <h2>Stay Ahead with Tech Innovation</h2>
            <p>Get expert insights, industry trends, and cutting-edge IT solutions delivered to your inbox</p>
          </div>
          
          <div className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button
                onClick={handleSubmit}
                className={`newsletter-btn ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Subscribe Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          
        </div>
      </div>


    </div>
  );
};

export default SubscriberNewsLetter;