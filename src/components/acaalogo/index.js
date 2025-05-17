import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Using your existing CSS file

const AcaaLogo = () => {
  return (
    <Link to="/" className="logo-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
        <defs>
          {/* Enhanced text gradient with better contrast for dark background */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#60a5fa" />
            <animate attributeName="x1" values="0%;100%;0%" dur="6s" repeatCount="indefinite" />
            <animate attributeName="x2" values="100%;0%;100%" dur="6s" repeatCount="indefinite" />
          </linearGradient>
          
          {/* Enhanced circle gradient */}
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c7d2fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
            <animate attributeName="x1" values="0%;100%;0%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="0%;100%;0%" dur="4s" repeatCount="indefinite" />
          </linearGradient>
          
          {/* Filter for glow effects */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feFlood floodColor="#93c5fd" floodOpacity="0.7" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="rotate-circle">
          <circle cx="400" cy="200" r="180" stroke="#93c5fd" strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="400" cy="200" r="150" stroke="#bfdbfe" strokeWidth="1" fill="none" opacity="0.7" />
        </g>
        
        <g className="pulse-circle">
          <circle cx="400" cy="200" r="120" className="circle" />
        </g>
        
        <g transform="translate(180, 220)">
          <text id="A1" x="0" y="0" className="letter">A</text>
          <text id="C" x="120" y="0" className="letter">C</text>
          <text id="A2" x="240" y="0" className="letter">A</text>
          <text id="A3" x="360" y="0" className="letter">A</text>
          <text id="tech" x="220" y="60" className="tech">TECHNOLOGIES</text>
        </g>

        {/* Enhanced particles */}
        <g opacity="0.9">
          <circle cx="180" cy="120" r="8" fill="#bfdbfe" filter="url(#glow)">
            <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="620" cy="120" r="8" fill="#bfdbfe" filter="url(#glow)">
            <animate attributeName="r" values="8;12;8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="100" r="10" fill="#bfdbfe" filter="url(#glow)">
            <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Enhanced connection lines */}
        <g strokeWidth="2.5" opacity="0.8">
          <line x1="180" y1="120" x2="400" y2="100" stroke="#bfdbfe">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="400" y1="100" x2="620" y2="120" stroke="#bfdbfe">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="2.6s" repeatCount="indefinite" />
          </line>
          <line x1="620" y1="120" x2="180" y2="120" stroke="#bfdbfe">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="3.2s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Subtle sparkles */}
        <g className="sparkles">
          <circle cx="220" cy="150" r="2" fill="#f0f9ff">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="580" cy="140" r="2" fill="#f0f9ff">
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="400" cy="280" r="2" fill="#f0f9ff">
            <animate attributeName="opacity" values="0;1;0" dur="1.3s" repeatCount="indefinite" begin="0.7s" />
          </circle>
        </g>
      </svg>
    </Link>
  );
};

export default AcaaLogo;