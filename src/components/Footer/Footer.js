import React, { useEffect, useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { MdWifiCalling3, MdKeyboardArrowRight } from 'react-icons/md';
import { FaGithub, FaEnvelope, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaReact, FaDatabase, FaServer, FaMobileAlt, FaCloudUploadAlt, FaRobot } from "react-icons/fa";
import { HiCode, HiSparkles, HiCursorClick } from 'react-icons/hi';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../Style/Footer.css';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleLogoClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer className="footer-outerWrapper" style={{height: "50%"}} >
      {/* Glowing gradient background */}
      <div className="footer-background"></div>
      
      {/* Animated particle effect */}
      <div className="stars-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      
      {/* Reactive glow around cursor */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      
      {/* Easter egg celebration */}
      {showEasterEgg && (
        <div className="easter-egg">
          <div className="celebration">
            <HiSparkles className="sparkle-icon" />
            <span className="celebration-text text-gradient">You found the secret!</span>
          </div>
        </div>
      )}

        {/* Decorative top border */}
        <div className="glow-border"></div>
        
        <Row className="footer-wrapper">
          <Col md={3}>
            <div>
              <div className="footer-heading">ACAA</div>
              <p className="footer-description">
                ACAA has been delivering extraordinary eCommerce, Web Development, 
                Mobile App Development, CRM Development and Creative Design services.
              </p>
              
              <div className="footer-cube-container">
                <div className="footer-cube">
                  <div className="face front"><HiCode /></div>
                  <div className="face back"><HiSparkles /></div>
                  <div className="face right"><HiCursorClick /></div>
                  <div className="face left"><FaGithub /></div>
                  <div className="face top"><FaEnvelope /></div>
                  <div className="face bottom"><FaTwitter /></div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={3}>
            <div>
              <div className="footer-heading">INFORMATION</div>
              <div className="footer-inforamtionlist-wrapper">
                <Link to="/" className="footer-informationlist">
                  <MdKeyboardArrowRight /> Home
                </Link>
                <Link to="/aboutus" className="footer-informationlist">
                  <MdKeyboardArrowRight /> About Us
                </Link>
                <Link to="/services" className="footer-informationlist">
                  <MdKeyboardArrowRight /> Services
                </Link>
                <Link to="/contactus" className="footer-informationlist">
                  <MdKeyboardArrowRight /> Contact Us
                </Link>
              </div>
            </div>
          </Col>
          
          <Col md={3}>
            <div>
              <div className="footer-heading">LATEST NEWS</div>
              <div className="footer-news-container">
                <div className="footer-news-item">
                  <p className="footer-news-date">May 12, 2025</p>
                  <p className="footer-news-title">ACAA launches new AI service</p>
                </div>
                <div className="footer-news-item">
                  <p className="footer-news-date">April 28, 2025</p>
                  <p className="footer-news-title">Web development trends for 2025</p>
                </div>
                <div className="footer-news-item">
                  <p className="footer-news-date">April 15, 2025</p>
                  <p className="footer-news-title">ACAA wins best design award</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={3}>
            <div>
              {/* <div className="footer-heading">NEWSLETTER</div>
              <p className="footer-description">
                Sign up today for hints, tips and the latest product news
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div> */}
              
              <div className="footer-heading">CONTACT US</div>
              <div className="footer-card">
                <div className="footerCard-top">
                  <div className="footerCard-address">
                    Address- B-19 Gurugram - 212343
                  </div>
                  <div>
                    <GoLocation />
                  </div>
                </div>

                <div className="footerCard-bottom">
                  <div className="footerCard-bottom-text">
                    Talk To Our Support <br />
                    <b>+91 981-720-4593</b>
                  </div>
                  <div>
                    <MdWifiCalling3 />
                  </div>
                </div>
                <div className="footerCard-email">info@ACAA.com</div>
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div style={{
                display: "flex",
                justifyContent: "space-between", // Spreads icons evenly
                alignItems: "center",
                width: "100%",
                marginTop: "1rem"
              }}>
              <div>
                <div className="footer-heading mt-4">FOLLOW US ON</div>
                <div className="social-icons-container" >
                  <a
                    href="https://github.com/ACAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon github"
                  >
                    <FaGithub />
                    <span className="social-tooltip">GitHub</span>
                  </a>
                  <a href="mailto:info@ACAA.com" className="social-icon email">
                    <FaEnvelope />
                    <span className="social-tooltip">Email Us</span>
                  </a>
                  <a
                    href="https://twitter.com/ACAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon twitter"
                  >
                    <FaTwitter />
                    <span className="social-tooltip">Twitter</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/ACAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon linkedin"
                  >
                    <FaLinkedinIn />
                    <span className="social-tooltip">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="footer-cube-container">
                <div className="footer-cube">
                  <div className="face front">
                    <FaReact />
                  </div>
                  <div className="face back">
                    <FaDatabase />
                  </div>
                  <div className="face right">
                    <FaServer />
                  </div>
                  <div className="face left">
                    <FaMobileAlt />
                  </div>
                  <div className="face top">
                    <FaCloudUploadAlt />
                  </div>
                  <div className="face bottom">
                    <FaRobot />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      
      
    </footer>
    {/* Bottom section with copyright */}
    <div className="footer-copyright">
    Copyright © {currentYear} ACAA, All Rights Reserved.
  </div>
  </>
  );
};

export default Footer;