import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, Calendar, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import "../../Style/BannerContactUs.css";

const BannerContactUs = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Animation effect for floating sparkles
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }
    });
  }, [controls]);

  return (
    <div className="banner-contact-wrapper">
      <div className="banner-contact-overlay"></div>
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(6)].map((_, index) => (
          <motion.div 
            key={index} 
            className="particle"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              opacity: 0.2 + Math.random() * 0.5,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            <Sparkles size={16} color="#ffd166" />
          </motion.div>
        ))}
      </div>
      
      <Container fluid>
        <Row className="banner-contact-content">
          <Col md={7} className="banner-contact-left">
            <motion.div 
              className="banner-contact-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="banner-contact-heading">
                <motion.div 
                  className="banner-contact-badge"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare size={20} />
                  <span>Let's Connect</span>
                </motion.div>
                <h2>Ready to elevate your next project?</h2>
                <p>Our team of experts is ready to transform your vision into reality</p>
              </div>
              
              <div className="banner-contact-details">
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <Phone size={20} className="icon" />
                  <span className="contact-text">+91 981-720-4593</span>
                </motion.div>
                
                <motion.div 
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={20} className="icon" />
                  <span className="contact-text">hello@yourcompany.com</span>
                </motion.div>
              </div>
            </motion.div>
          </Col>
          
          <Col md={5} className="banner-contact-right">
            <motion.button
              className="consultation-button"
              onClick={() => navigate("/contactus")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="button-text">BOOK A CONSULTATION</span>
              <motion.div 
                className="button-icon"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar size={18} strokeWidth={2} />
              </motion.div>
            </motion.button>
            
            <motion.div 
              className="quick-action"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>Or send us a direct message</span>
              <motion.button 
                className="message-button"
                whileHover={{ x: 5 }}
                onClick={() => navigate("/contactus")}
              >
                Send message <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerContactUs;