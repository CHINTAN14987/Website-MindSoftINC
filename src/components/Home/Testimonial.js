import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Users, Award } from "lucide-react";
import "../../Style/Testimonial.css";

// Sample testimonial data - replace with your actual data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Innovations Inc.",
    image: "/path/to/sarah-image.jpg",
    rating: 5,
    text: "Working with ACAA transformed our business operations. Their dedication to quality and customer satisfaction is unmatched in the industry. Highly recommended for any business looking to scale.",
    position: "CEO"
  },
  {
    id: 2,
    name: "David Miller",
    company: "Global Solutions",
    image: "/path/to/david-image.jpg",
    rating: 5,
    text: "ACAA's team delivered beyond our expectations. Their attention to detail and commitment to excellence has made them our go-to partner for all our projects.",
    position: "Director of Operations"
  },
  {
    id: 3,
    name: "Emily Chang",
    company: "Innovative Startups",
    image: "/path/to/emily-image.jpg",
    rating: 5,
    text: "I've worked with many agencies, but ACAA stands out for their professionalism and results-driven approach. They truly understand our needs and deliver exceptional quality.",
    position: "Founder"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Autoplay functionality
  useEffect(() => {
    let interval;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change testimonial every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Handle next testimonial
  const nextTestimonial = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous testimonial
  const prevTestimonial = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      }
    }
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Star key={i} className="star-icon" size={18} fill="#FFD700" color="#FFD700" />);
    }
    return stars;
  };

  return (
    <div className="testimonial-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={12} className="testimonial-content">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="testimonial-left-content"
            >
              <motion.div className="testimonial-badge" variants={itemVariants}>
                <Users size={18} className="testimonial-badge-icon" />
                <span>CLIENT TESTIMONIALS</span>
              </motion.div>
              
              <motion.h2 className="testimonial-title" variants={itemVariants}>
                What Our <span className="highlight">Clients Say</span> About Our Services
              </motion.h2>
              
              <motion.p className="testimonial-description" variants={itemVariants}>
                Discover why businesses trust ACAA for their most critical projects. Our commitment to excellence and client satisfaction drives everything we do.
              </motion.p>
              
              <motion.div className="testimonial-stats" variants={itemVariants}>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
              </motion.div>
              
              <motion.div className="testimonial-credentials" variants={itemVariants}>
                <Award size={20} className="credential-icon" />
                <span>Certified Excellence</span>
              </motion.div>
            </motion.div>
          </Col>
          
          <Col lg={7} md={12} className="testimonial-carousel-container">
            <div className="testimonial-carousel">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="testimonial-card"
                >
                  <div className="quote-icon-container">
                    <Quote size={40} className="quote-icon" />
                  </div>
                  
                  <div className="testimonial-rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <p className="testimonial-text">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="testimonial-author">
                    <div className="author-image-container">
                      <div 
                        className="author-image" 
                        style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
                      ></div>
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                      <p className="author-position">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="testimonial-controls">
                <button 
                  className="control-btn prev-btn" 
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="testimonial-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => {
                        setIsAutoplay(false);
                        setCurrentIndex(index);
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <button 
                  className="control-btn next-btn" 
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;