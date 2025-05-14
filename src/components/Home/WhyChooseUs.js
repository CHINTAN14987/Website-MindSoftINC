import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Palette, 
  Layout, 
  PenTool, 
  Printer, 
  Package, 
  Globe 
} from "lucide-react";
import "../../Style/WhyChooseUs.css";
const ServiceCard = ({ icon, title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
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
        delay: index * 0.1 + 0.2,
        ease: "easeOut" 
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }
    }
  };

  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} className="mb-4 px-md-3">
      <motion.div 
        className="service-card"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ ...cardVariants, ...hoverVariants }}
        whileHover="hover"
        whileTap="tap"
        custom={index}
      >
        <motion.div 
          className="service-card-icon"
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <div className="service-card-overlay"></div>
      </motion.div>
    </Col>
  );
};

const WhyChooseUs = () => {
  const controls = useAnimation();
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: delay => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(10, 173, 235, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const services = [
    {
      icon: <Layout size={48} strokeWidth={1.5} />,
      title: "Web Design",
      description: "Creating amazing web experiences from landing pages to effective eCommerce stores. We focus on user-friendly designs that convert visitors to customers."
    },
    {
      icon: <PenTool size={48} strokeWidth={1.5} />,
      title: "UI/UX Design",
      description: "We craft creative experiences and intuitive interfaces for your app or website to succeed. Our designs are based on user research and modern design principles."
    },
    {
      icon: <Palette size={48} strokeWidth={1.5} />,
      title: "Branding",
      description: "Create an identity for your business or refresh your existing brand to boost visual appeal. We build brands that resonate with your target audience."
    },
    {
      icon: <Printer size={48} strokeWidth={1.5} />,
      title: "Print Design",
      description: "Everything from business cards to customized graphics, we make print-ready tailored designs that reflect your brand's personality and values."
    },
    {
      icon: <Package size={48} strokeWidth={1.5} />,
      title: "Packaging Design",
      description: "Let us help you build your product identity and make your product stand out from the rest. Our packaging designs are memorable and functional."
    },
    {
      icon: <Globe size={48} strokeWidth={1.5} />,
      title: "Website Domain",
      description: "Find and purchase your next website domain name and hosting without breaking the bank. Seamlessly establish your online identity today."
    }
  ];

  return (
    <section className="why-choose-us-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="text-center" ref={titleRef}>
            <motion.span 
              className="section-badge"
              initial="hidden"
              animate={controls}
              variants={fadeInUpVariants}
              custom={0.1}
            >
              WHY CHOOSE US
            </motion.span>
            
            <motion.h2 
              className="section-title"
              initial="hidden"
              animate={controls}
              variants={fadeInUpVariants}
              custom={0.2}
            >
              Why Choose <span className="highlight">ACAA</span> <br className="d-none d-md-block" /> Expert Consultant
            </motion.h2>
            
            <motion.div 
              className="section-description"
              initial="hidden"
              animate={controls}
              variants={fadeInUpVariants}
              custom={0.4}
            >
              <p>We combine technical expertise with creative excellence to deliver outstanding results for your business.</p>
            </motion.div>
          </Col>
        </Row>

        <Row className="service-card-container mt-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <motion.button 
              className="cta-button"
              initial="hidden"
              animate={controls}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              SAY HELLO TO US
            </motion.button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;