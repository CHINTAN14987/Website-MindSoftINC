import React, { useState, useEffect } from "react";
import { BsBoxArrowRight, BsShield, BsLightning, BsPeople } from "react-icons/bs";

const AboutUsWhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: `
      radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.05) 0%, transparent 50%),
      linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #dee2e6 50%, #ced4da 75%, #adb5bd 100%)
    `,
    position: 'relative',
    overflow: 'hidden',
    transition: 'background 0.3s ease'
  };

  const floatingShapes = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1
  };

  const mainContent = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '80px 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center'
  };

  const leftSection = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const rightSection = {
    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
  };

  const heading = {
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '3px',
    color: '#6c757d',
    textTransform: 'uppercase',
    marginBottom: '16px',
    position: 'relative'
  };

  const title = {
    fontSize: '4rem',
    fontWeight: '900',
    color: '#212529',
    marginBottom: '32px',
    background: 'linear-gradient(135deg, #000000 0%, #434343 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  const description1 = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#343a40',
    lineHeight: '1.6',
    marginBottom: '24px',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const description2 = {
    fontSize: '1.1rem',
    color: '#6c757d',
    lineHeight: '1.7',
    marginBottom: '48px',
    fontWeight: '400'
  };

  const featureItem = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    padding: '16px 0',
    borderLeft: '4px solid transparent',
    paddingLeft: '20px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const featureIcon = {
    fontSize: '28px',
    marginRight: '20px',
    color: '#212529',
    transition: 'all 0.3s ease'
  };

  const featureText = {
    color: '#343a40',
    fontWeight: '500',
    fontSize: '1.05rem',
    transition: 'all 0.3s ease'
  };

  const svgContainer = {
    width: '500px',
    height: '500px',
    position: 'relative'
  };

  // Responsive adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  if (isMobile) {
    mainContent.gridTemplateColumns = '1fr';
    mainContent.gap = '60px';
    title.fontSize = '2.5rem';
    svgContainer.width = '350px';
    svgContainer.height = '350px';
  }

  return (
    <div style={containerStyle}>
      {/* Floating Background Elements */}
      <div style={floatingShapes}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.02)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.03)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.025)',
          animation: 'float 7s ease-in-out infinite'
        }}></div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          .feature-item:hover {
            border-left-color: #212529 !important;
            transform: translateX(10px);
            background: rgba(255,255,255,0.5);
            border-radius: 8px;
            padding-left: 24px !important;
          }
          
          .svg-element {
            transition: all 0.3s ease;
          }
          
          .svg-element:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div style={mainContent}>
        {/* Left Section - SVG */}
        <div style={leftSection}>
          <div style={svgContainer}>
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 500 500"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
            >
              {/* Animated Background Circles */}
              <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="2">
                <animate attributeName="r" values="200;220;200" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1">
                <animate attributeName="r" values="150;170;150" dur="6s" repeatCount="indefinite"/>
              </circle>
              
              {/* Central Design */}
              <g className="svg-element">
                <rect x="200" y="200" width="100" height="100" fill="#212529" rx="10" opacity="0.9">
                  <animateTransform attributeName="transform" type="rotate" values="0 250 250;360 250 250" dur="20s" repeatCount="indefinite"/>
                </rect>
                <circle cx="250" cy="250" r="35" fill="white" stroke="#212529" strokeWidth="3"/>
                <circle cx="250" cy="250" r="15" fill="#212529" opacity="0.8"/>
              </g>
              
              {/* Connecting Lines with Animation */}
              <g opacity="0.7">
                <line x1="100" y1="250" x2="200" y2="250" stroke="#212529" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="300" y1="250" x2="400" y2="250" stroke="#212529" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="250" y1="100" x2="250" y2="200" stroke="#212529" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
                </line>
                <line x1="250" y1="300" x2="250" y2="400" stroke="#212529" strokeWidth="4" strokeLinecap="round">
                  <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite"/>
                </line>
              </g>
              
              {/* Corner Elements */}
              <circle cx="150" cy="150" r="20" fill="#212529" opacity="0.6">
                <animate attributeName="r" values="20;25;20" dur="5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="150" r="20" fill="#212529" opacity="0.6">
                <animate attributeName="r" values="25;20;25" dur="5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="150" cy="350" r="20" fill="#212529" opacity="0.6">
                <animate attributeName="r" values="20;25;20" dur="5s" repeatCount="indefinite" begin="1s"/>
              </circle>
              <circle cx="350" cy="350" r="20" fill="#212529" opacity="0.6">
                <animate attributeName="r" values="25;20;25" dur="5s" repeatCount="indefinite" begin="1s"/>
              </circle>
              
              {/* Decorative Elements */}
              <polygon points="250,180 270,220 230,220" fill="#212529" opacity="0.4"/>
              <polygon points="250,320 230,280 270,280" fill="#212529" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Right Section - Content */}
        <div style={rightSection}>
          <div style={heading}>WHO WE ARE</div>
          <div style={title}>ACAA</div>
          
          <div style={description1}>
            To gain competitive edge in business, development speed is essential. 
            Development Quality and Speed both are the Key Factor of our Company. 
            After all, you don't want to be outpaced by your competitors.
          </div>
          
          <div style={description2}>
            To address all of these challenges, we created our very own portfolio 
            of best practices and our Managed Testing Services.
          </div>
          
          <div>
            <div 
              className="feature-item"
              style={featureItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = '#212529';
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.borderRadius = '8px';
                e.currentTarget.style.paddingLeft = '24px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderRadius = '0';
                e.currentTarget.style.paddingLeft = '20px';
              }}
            >
              <BsLightning style={featureIcon} />
              <span style={featureText}>
                Our streamlined and optimized processes save you time, effort, and expenses
              </span>
            </div>
            
            <div 
              className="feature-item"
              style={featureItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = '#212529';
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.borderRadius = '8px';
                e.currentTarget.style.paddingLeft = '24px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderRadius = '0';
                e.currentTarget.style.paddingLeft = '20px';
              }}
            >
              <BsShield style={featureIcon} />
              <span style={featureText}>
                We understand risk management for brands
              </span>
            </div>
            
            <div 
              className="feature-item"
              style={featureItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = '#212529';
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.borderRadius = '8px';
                e.currentTarget.style.paddingLeft = '24px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderRadius = '0';
                e.currentTarget.style.paddingLeft = '20px';
              }}
            >
              <BsPeople style={featureIcon} />
              <span style={featureText}>
                Our employees are expert and professional
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWhoWeAre;