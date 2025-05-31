import React, { useState, useEffect } from "react";
import { Phone, Mail, Calendar, ArrowRight, MessageSquare, Sparkles, Star, Zap } from "lucide-react";

const BannerContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleConsultationClick = () => {
    console.log("Navigate to /contactus");
  };

  const handleMessageClick = () => {
    console.log("Navigate to /contactus");
  };

  return (
    <div className="banner-contact-wrapper">
      {/* Dynamic background overlay */}
      <div 
        className="banner-contact-overlay"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      ></div>
      
      {/* Enhanced animated particles */}
      <div className="particles">
        {[...Array(8)].map((_, index) => {
          const icons = [Sparkles, Star, Zap];
          const IconComponent = icons[index % icons.length];
          return (
            <div 
              key={index} 
              className="particle"
              style={{
                left: `${15 + (index * 12)}%`,
                top: `${20 + (index % 3) * 25}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              <IconComponent size={14 + (index % 3) * 2} />
            </div>
          );
        })}
      </div>
      
      <div className="banner-content">
        <div className="banner-left">
          <div className="banner-info">
            <div className="banner-heading">
              <div className="banner-badge">
                <MessageSquare size={18} />
                <span>Let's Connect</span>
                <div className="badge-glow"></div>
              </div>
              <h2>Ready to elevate your next project?</h2>
              <p>Our team of experts is ready to transform your vision into reality with cutting-edge solutions</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item phone-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <span className="contact-text">+91 981-720-4593</span>
                <div className="contact-ripple"></div>
              </div>
              
              <div className="contact-item email-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <span className="contact-text">hello@yourcompany.com</span>
                <div className="contact-ripple"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="banner-right">
          <button
            className={`consultation-button ${isHovered ? 'hovered' : ''}`}
            onClick={handleConsultationClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="button-text">BOOK A CONSULTATION</span>
            <div className="button-icon">
              <Calendar size={18} />
            </div>
            <div className="button-shine"></div>
          </button>
          
          <div className="quick-action">
            <span>Or send us a direct message</span>
            <button className="message-button" onClick={handleMessageClick}>
              <span>Send message</span>
              <ArrowRight size={16} />
              <div className="message-underline"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .banner-contact-wrapper {
          position: relative;
          padding: 80px 5%;
          overflow: hidden;
          min-height: 300px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .banner-contact-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.01) 2px,
              rgba(255, 255, 255, 0.01) 4px
            );
          opacity: 0.8;
          z-index: 1;
          transition: transform 0.1s ease-out;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 2;
        }

        .particle {
          position: absolute;
          color: #ffffff;
          opacity: 0.6;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
            opacity: 0.8; 
          }
        }

        .banner-content {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .banner-left {
          padding-right: 20px;
        }

        .banner-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 8px 20px;
          margin-bottom: 20px;
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .banner-badge:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
        }

        .banner-badge svg {
          margin-right: 8px;
        }

        .badge-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .banner-heading h2 {
          color: #ffffff;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.2;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .banner-heading p {
          color: #cccccc;
          font-size: 18px;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 12px 0;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .contact-item:hover {
          transform: translateX(10px);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          margin-right: 15px;
          transition: all 0.3s ease;
        }

        .phone-item .contact-icon {
          color: #ffffff;
        }

        .email-item .contact-icon {
          color: #ffffff;
        }

        .contact-item:hover .contact-icon {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .contact-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
        }

        .phone-item .contact-text {
          font-size: 20px;
          font-weight: 700;
        }

        .contact-ripple {
          position: absolute;
          top: 50%;
          left: 0;
          width: 0;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          transition: width 0.3s ease;
        }

        .contact-item:hover .contact-ripple {
          width: 100%;
        }

        .banner-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
        }

        .consultation-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #000000;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 18px 35px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          overflow: hidden;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .consultation-button:hover {
          background: #000000;
          color: #ffffff;
          border-color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
        }

        .button-text {
          margin-right: 12px;
          transition: all 0.3s ease;
        }

        .button-icon {
          display: flex;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .consultation-button.hovered .button-icon {
          transform: translateX(5px);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .consultation-button:hover .button-shine {
          left: 100%;
        }

        .quick-action {
          margin-top: 20px;
          text-align: right;
        }

        .quick-action span {
          display: block;
          color: #999999;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .message-button {
          position: relative;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
          transition: all 0.3s ease;
        }

        .message-button:hover {
          color: #cccccc;
          transform: translateX(5px);
        }

        .message-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffffff;
          transition: width 0.3s ease;
        }

        .message-button:hover .message-underline {
          width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .banner-contact-wrapper {
            padding: 60px 4%;
          }
          
          .banner-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .banner-left {
            padding-right: 0;
          }
          
          .banner-right {
            align-items: center;
          }
          
          .banner-heading h2 {
            font-size: 28px;
          }
          
          .consultation-button {
            width: 100%;
            max-width: 300px;
          }
          
          .quick-action {
            text-align: center;
          }
          
          .message-button {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .banner-contact-wrapper {
            padding: 40px 4%;
          }
          
          .banner-heading h2 {
            font-size: 24px;
          }
          
          .banner-heading p {
            font-size: 16px;
          }
          
          .consultation-button {
            padding: 15px 25px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default BannerContactUs;