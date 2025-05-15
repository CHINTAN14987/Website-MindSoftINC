import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // We'll create this CSS file separately

const AcaaLogo = () => {
  return (
    <Link to="/" className="logo-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
            <animate attributeName="x1" values="0%;100%;0%" dur="6s" repeatCount="indefinite" />
            <animate attributeName="x2" values="100%;0%;100%" dur="6s" repeatCount="indefinite" />
          </linearGradient>
          
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
            <animate attributeName="x1" values="0%;100%;0%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="y1" values="0%;100%;0%" dur="4s" repeatCount="indefinite" />
          </linearGradient>
        </defs>

        {/* Removed the background rect for transparency */}

        <g className="rotate-circle">
          <circle cx="400" cy="200" r="180" stroke="#404040" strokeWidth="1" fill="none" />
          <circle cx="400" cy="200" r="150" stroke="#505050" strokeWidth="1" fill="none" />
        </g>
        
        <g className="pulse-circle">
          <circle cx="400" cy="200" r="120" className="circle" />
        </g>
        
        <g transform="translate(180, 220)">
          <text id="A1" x="0" y="0" className="letter">A</text>
          <text id="C" x="120" y="0" className="letter">C</text>
          <text id="A2" x="240" y="0" className="letter">A</text>
          <text id="A3" x="360" y="0" className="letter">A</text>
          <text x="220" y="60" className="tech">TECHNOLOGIES</text>
        </g>

        <g opacity="0.8">
          <circle cx="180" cy="120" r="8" fill="#3b82f6">
            <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="620" cy="120" r="8" fill="#3b82f6">
            <animate attributeName="r" values="8;12;8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="100" r="10" fill="#3b82f6">
            <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>

        <g strokeWidth="2.5" opacity="0.7">
          <line x1="180" y1="120" x2="400" y2="100" stroke="#3b82f6">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="400" y1="100" x2="620" y2="120" stroke="#3b82f6">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="2.6s" repeatCount="indefinite" />
          </line>
          <line x1="620" y1="120" x2="180" y2="120" stroke="#3b82f6">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="2.5;3.5;2.5" dur="3.2s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>
    </Link>
  );
};

export default AcaaLogo;