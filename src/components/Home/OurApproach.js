import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code, Smartphone, Cloud, Brain, Settings } from "lucide-react";
import "../../Style/OurApproach.css";

const OurApproach = () => {
  const services = [
    {
      id: "01",
      heading: "Web Development",
      context:
        "We build fast, scalable, and secure websites using modern frameworks like Node.js and React.js to deliver seamless user experiences.",
      icon: <Code size={36} />,
      color: "#4361ee"
    },
    {
      id: "02",
      heading: "Mobile App Development",
      context:
        "We develop high-performance native mobile applications for iOS and Android, ensuring fluid functionality and optimized user interfaces.",
      icon: <Smartphone size={36} />,
      color: "#3a86ff"
    },
    {
      id: "03",
      heading: "Cloud Solutions",
      context:
        "Our cloud services help you scale effortlessly using robust, secure, and cost-effective cloud infrastructure tailored to your business needs.",
      icon: <Cloud size={36} />,
      color: "#4cc9f0"
    },
    {
      id: "04",
      heading: "Generative AI",
      context:
        "Integrate cutting-edge AI capabilities like content generation, chatbots, and recommendation systems powered by advanced language models.",
      icon: <Brain size={36} />,
      color: "#7209b7"
    },
    {
      id: "05",
      heading: "AI Model Fine-Tuning",
      context:
        "We fine-tune large AI models using your custom data, enabling personalized, domain-specific AI solutions for smarter automation.",
      icon: <Settings size={36} />,
      color: "#560bad"
    }
  ];

  return (
    <section className="our-approach-section">
      <Container>
        <div className="section-header">
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            OUR APPROACH
          </motion.span>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Turning <span className="highlight">Ideas</span> into <span className="highlight">Digital Reality</span>
          </motion.h2>
          
          <motion.p 
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our team of experts combines cutting-edge technologies with creative solutions to deliver exceptional results for your business needs.
          </motion.p>
        </div>

        <Row className="service-cards-container">
          {services.map((service, index) => (
            <Col lg={4} md={6} sm={12} key={service.id} className="service-column">
              <ServiceCard 
                service={service} 
                index={index}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        delay: index * 0.1 + 0.3,
        ease: "easeOut" 
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        delay: index * 0.1 + 0.5,
        ease: "backOut" 
      }
    }
  };

  return (
    <motion.div 
      className="service-card"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="card-content">
        <motion.div 
          className="icon-container" 
          style={{ backgroundColor: `${service.color}15` }}
          variants={iconVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="icon" style={{ color: service.color }}>
            {service.icon}
          </div>
          <motion.div 
            className="service-number"
            style={{ backgroundColor: service.color }}
            variants={numberVariants}
            initial="hidden"
            animate={controls}
          >
            {service.id}
          </motion.div>
        </motion.div>
        
        <h3 className="service-title">{service.heading}</h3>
        <p className="service-description">{service.context}</p>
        
        <motion.div 
          className="hover-overlay"
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          initial={{ opacity: 0 }}
        >
          <div className="overlay-content">
            <div className="overlay-icon" style={{ color: "#fff" }}>
              {service.icon}
            </div>
            <h3 className="overlay-title">{service.heading}</h3>
            <p className="overlay-description">{service.context}</p>
            <div className="learn-more">
              <span>Learn More</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurApproach;