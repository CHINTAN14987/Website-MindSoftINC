import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tablet, Laptop, Star, Check, Code, Zap, Globe, Award, Users, Clock, Shield } from 'lucide-react';

const AppDevelopmentPage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const zoomIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  const techStack = [
    { name: "React Native", years: "10+" },
    { name: "Flutter", years: "8+" },
    { name: "Swift", years: "10+" },
    { name: "Kotlin", years: "9+" },
    { name: "Xamarin", years: "7+" },
    { name: "Ionic", years: "8+" },
    { name: "Firebase", years: "10+" },
    { name: "AWS Amplify", years: "6+" },
  ];

  const clientLogos = [
    "https://via.placeholder.com/120/6A2C70/FFFFFF?text=Client+1",
    "https://via.placeholder.com/120/B83B5E/FFFFFF?text=Client+2",
    "https://via.placeholder.com/120/F08A5D/FFFFFF?text=Client+3",
    "https://via.placeholder.com/120/F9ED69/333333?text=Client+4",
    "https://via.placeholder.com/120/3EDBF0/333333?text=Client+5",
  ];

  const portfolioProjects = [
    {
      title: "HealthTrack Pro",
      description: "Comprehensive health monitoring application with AI-powered insights",
      platforms: ["iOS", "Android"],
      tech: "React Native, Firebase, TensorFlow Lite",
      icon: <Smartphone size={32} />
    },
    {
      title: "FinConnect",
      description: "Secure banking app with biometric authentication and real-time analytics",
      platforms: ["iOS", "Android", "Web"],
      tech: "Flutter, AWS, Blockchain",
      icon: <Shield size={32} />
    },
    {
      title: "GeoMarket",
      description: "Location-based marketplace connecting local businesses with customers",
      platforms: ["iOS", "Android"],
      tech: "Kotlin, Swift, Google Maps API",
      icon: <Globe size={32} />
    },
  ];

  const testimonials = [
    {
      quote: "ACAR Technologies transformed our business idea into a polished app that our customers love. Their expertise in cross-platform development saved us time and money.",
      author: "Sarah Johnson",
      position: "CEO, HealthTech Innovations"
    },
    {
      quote: "Working with ACAR was seamless from concept to launch. Their team's decade of experience shows in every aspect of our application's performance and design.",
      author: "Michael Chen",
      position: "Founder, FinConnect"
    },
    {
      quote: "We've worked with several development teams before, but none matched ACAR's attention to detail and technical knowledge. True professionals who deliver results.",
      author: "Jessica Williams",
      position: "Product Manager, GeoMarket"
    }
  ];

  const services = [
    {
      title: "Native App Development",
      description: "Pure native applications for iOS and Android platforms optimized for peak performance",
      icon: <Smartphone className="service-icon" size={28} />
    },
    {
      title: "Cross-Platform Solutions",
      description: "Efficient development across multiple platforms with React Native and Flutter",
      icon: <Globe className="service-icon" size={28} />
    },
    {
      title: "Enterprise App Development",
      description: "Secure, scalable applications for businesses with complex requirements",
      icon: <Laptop className="service-icon" size={28} />
    },
    {
      title: "UI/UX Design Excellence",
      description: "Intuitive, engaging interfaces that deliver exceptional user experiences",
      icon: <Tablet className="service-icon" size={28} />
    },
    {
      title: "App Maintenance & Updates",
      description: "Ongoing support and enhancement to keep your app competitive and secure",
      icon: <Code className="service-icon" size={28} />
    },
    {
      title: "Performance Optimization",
      description: "Fine-tuning for speed, battery efficiency, and resource management",
      icon: <Zap className="service-icon" size={28} />
    }
  ];

  const achievements = [
    { number: "500+", label: "Apps Delivered", icon: <Smartphone size={24} /> },
    { number: "95%", label: "Client Retention", icon: <Users size={24} /> },
    { number: "10+", label: "Years Experience", icon: <Clock size={24} /> },
    { number: "25+", label: "Industry Awards", icon: <Award size={24} /> }
  ];

  return (
    <div className="app-development-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="hero-content">
          <motion.div className="hero-text" variants={slideInLeft}>
            <h1>App Development <span className="highlight">Excellence</span></h1>
            <p>Transforming ideas into powerful, user-centric mobile experiences with over a decade of expertise in native and cross-platform development.</p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
          <motion.div 
            className="hero-image"
            variants={slideInRight}
            animate={{ ...slideInRight.visible, ...floatAnimation }}
          >
            <div className="device-mockup">
              <div className="phone-screen">
                <img 
                  src="https://via.placeholder.com/260x520/1a1a1a/ffffff?text=Mobile+App+UI" 
                  alt="Mobile App Screenshot" 
                  className="app-screenshot"
                />
                <div className="screen-overlay"></div>
                <motion.div 
                  className="code-particles"
                  animate={pulseAnimation}
                ></motion.div>
              </div>
              <div className="phone-frame"></div>
            </div>
          </motion.div>
        </div>
        <motion.div className="orbital-elements">
          <motion.div 
            className="tech-orbit tech-orbit-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="tech-dot"></div>
          </motion.div>
          <motion.div 
            className="tech-orbit tech-orbit-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="tech-dot"></div>
            <div className="tech-dot" style={{transform: 'rotate(120deg) translateX(150px)'}}></div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Highlight */}
      <motion.section 
        className="experience-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>10+ Years of App Development Expertise</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            Since 2013, we've been crafting exceptional mobile experiences for businesses across industries
          </motion.p>
          
          <motion.div 
            className="achievements-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="achievement-card"
                variants={zoomIn}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our App Development Services</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            End-to-end mobile application development solutions tailored to your business needs
          </motion.p>
          
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                variants={zoomIn}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section 
        className="tech-stack-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Technology Expertise</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            Our extensive experience across modern mobile development technologies
          </motion.p>
          
          <motion.div 
            className="tech-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {techStack.map((tech, index) => (
              <motion.div 
                key={index} 
                className="tech-card"
                variants={zoomIn}
                whileHover={{ scale: 1.05 }}
              >
                <h4>{tech.name}</h4>
                <div className="experience-badge">{tech.years} Years</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section 
        className="process-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Development Process</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            A refined approach honed over a decade of successful app deliveries
          </motion.p>
          
          <motion.div 
            className="process-timeline"
            variants={fadeIn}
          >
            <div className="process-line"></div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="process-number">01</div>
              <div className="process-content">
                <h3>Discovery & Strategy</h3>
                <p>We analyze your business needs, target audience, and market to develop a comprehensive app strategy.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="process-number">02</div>
              <div className="process-content">
                <h3>UX/UI Design</h3>
                <p>Our design team creates intuitive, engaging interfaces that align with your brand and user expectations.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="process-number">03</div>
              <div className="process-content">
                <h3>Development & Testing</h3>
                <p>Our experienced developers build your app with clean, efficient code, following rigorous quality assurance protocols.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="process-number">04</div>
              <div className="process-content">
                <h3>Deployment & Launch</h3>
                <p>We handle the submission process to app stores and provide launch support to ensure a smooth release.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="process-number">05</div>
              <div className="process-content">
                <h3>Maintenance & Growth</h3>
                <p>Our relationship continues with ongoing support, analytics-driven updates, and scalability enhancements.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Showcase */}
      <motion.section 
        className="portfolio-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Featured App Projects</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            Explore some of our most successful mobile applications
          </motion.p>
          
          <motion.div 
            className="portfolio-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {portfolioProjects.map((project, index) => (
              <motion.div 
                key={index} 
                className="portfolio-card"
                variants={zoomIn}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="portfolio-icon">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-details">
                  <div className="portfolio-platforms">
                    <strong>Platforms:</strong> {project.platforms.join(", ")}
                  </div>
                  <div className="portfolio-tech">
                    <strong>Technologies:</strong> {project.tech}
                  </div>
                </div>
                <motion.button 
                  className="view-project-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Case Study
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="view-all-container"
            variants={fadeIn}
          >
            <motion.button 
              className="view-all-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="testimonials-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Client Success Stories</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            Hear from businesses we've helped achieve their mobile app goals
          </motion.p>
          
          <motion.div 
            className="testimonials-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="testimonial-card"
                variants={zoomIn}
              >
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5H5V15L12.5 25H20L12.5 15H15V5Z" fill="#6A2C70" fillOpacity="0.5"/>
                    <path d="M35 5H25V15L32.5 25H40L32.5 15H35V5Z" fill="#6A2C70" fillOpacity="0.5"/>
                  </svg>
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F9ED69" color="#F9ED69" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="why-us-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Why Choose ACAR Technologies</motion.h2>
          <div className="divider"></div>
          <motion.p variants={fadeIn} className="section-subtitle-01">
            What sets our app development services apart after a decade in the industry
          </motion.p>
          
          <motion.div 
            className="benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="benefit-card" variants={fadeIn}>
              <div className="benefit-icon">
                <Check size={24} className="check-icon" />
              </div>
              <h3>Technical Excellence</h3>
              <p>Our team brings 10+ years of specialized mobile development expertise across platforms and technologies.</p>
            </motion.div>
            
            <motion.div className="benefit-card" variants={fadeIn}>
              <div className="benefit-icon">
                <Check size={24} className="check-icon" />
              </div>
              <h3>User-Centered Approach</h3>
              <p>We prioritize user experience at every stage, creating intuitive apps that users love to engage with.</p>
            </motion.div>
            
            <motion.div className="benefit-card" variants={fadeIn}>
              <div className="benefit-icon">
                <Check size={24} className="check-icon" />
              </div>
              <h3>Transparent Development</h3>
              <p>Regular updates and clear communication ensure you're involved throughout the entire process.</p>
            </motion.div>
            
            <motion.div className="benefit-card" variants={fadeIn}>
              <div className="benefit-icon">
                <Check size={24} className="check-icon" />
              </div>
              <h3>Performance Optimization</h3>
              <p>Our apps are built for speed, stability, and battery efficiency through rigorous optimization practices.</p>
            </motion.div>
            
            <motion.div className="benefit-card" variants={fadeIn}>
              <div className="benefit-icon">
                <Check size={24} className="check-icon" />
              </div>
              <h3>Future-Proof Solutions</h3>
              <p>We build with scalability in mind, ensuring your app can grow alongside your business needs.</p>
            </motion.div>
            
            <motion.div className="benefit-card" variants={fadeIn}>
              <div className="benefit-icon">
                <Check size={24} className="check-icon" />
              </div>
              <h3>Post-Launch Support</h3>
              <p>Our relationship continues after launch with maintenance, updates, and strategic growth planning.</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="container">
          <motion.div 
            className="cta-section"
            variants={fadeIn}
          >
            <h2>Ready to Bring Your App Idea to Life?</h2>
            <p>Schedule a free consultation with our app development experts today.</p>
            <motion.button 
              className="cta-button large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </motion.section>



      <style jsx>{`
        .app-development-page {
          font-family: 'Inter', sans-serif;
          color: #ffffff;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: 700;
          margin-top: 0;
        }

        h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .highlight {
          color: #ffffff;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 0.2rem;
          background: #666666;
          bottom: -0.3rem;
          left: 0;
        }

        .divider {
          height: 4px;
          width: 60px;
          background: linear-gradient(90deg, #333333, #666666);
          margin: 0 auto 2rem;
          border-radius: 2px;
        }

        .section-subtitle-01 {
          display: flex;
          justify-content: center;
          text-align: center;
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto 3rem;
          color: #cccccc;
        }

        section {
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="3" cy="3" r="3" fill="%23ffffff" opacity="0.1"/></svg>') repeat;
          position: relative;
          padding-top: 2rem;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .hero-text {
          flex: 1;
          max-width: 550px;
        }

        .hero-text p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          color: #cccccc;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .device-mockup {
          position: relative;
          width: 280px;
          height: 570px;
        }

        .phone-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #1a1a1a;
          border-radius: 36px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
          border: 10px solid #000;
          overflow: hidden;
        }

        .phone-screen {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background: linear-gradient(135deg, #333333, #111111);
          border-radius: 28px;
          overflow: hidden;
        }

        .app-ui {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="800" viewBox="0 0 400 800"><rect x="20" y="40" width="360" height="60" rx="10" fill="white" opacity="0.3"/><rect x="20" y="120" width="150" height="150" rx="10" fill="white" opacity="0.2"/><rect x="190" y="120" width="190" height="70" rx="10" fill="white" opacity="0.2"/><rect x="190" y="200" width="190" height="70" rx="10" fill="white" opacity="0.2"/><rect x="20" y="290" width="360" height="1" fill="white" opacity="0.15"/></svg>');
        }

        .code-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="800" viewBox="0 0 400 800"><circle cx="50" cy="200" r="4" fill="%23ffffff"/><circle cx="120" cy="150" r="3" fill="%23cccccc"/><circle cx="200" cy="250" r="5" fill="%23888888"/><circle cx="280" cy="180" r="4" fill="%23666666"/><circle cx="330" cy="220" r="3" fill="%23ffffff"/><circle cx="100" cy="300" r="4" fill="%23999999"/><circle cx="220" cy="380" r="5" fill="%23bbbbbb"/><circle cx="320" cy="350" r="3" fill="%23777777"/><circle cx="150" cy="450" r="4" fill="%23ffffff"/><circle cx="250" cy="500" r="3" fill="%23aaaaaa"/></svg>');
        }

        .orbital-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .tech-orbit {
          position: absolute;
          border: 1px dashed rgba(255, 255, 255, 0.3);
          border-radius: 50%;
        }

        .tech-orbit-1 {
          width: 300px;
          height: 300px;
          top: 20%;
          right: 10%;
        }

        .tech-orbit-2 {
          width: 500px;
          height: 500px;
          top: 10%;
          right: 5%;
        }

        .tech-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 50%;
          top: 0;
          transform: translateX(150px);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        }

        .cta-button {
          background: linear-gradient(90deg, #333333, #666666);
          color: white;
          border: none;
          border-radius: 30px;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .cta-button.large {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 25px rgba(0, 0, 0, 0.7);
          background: linear-gradient(90deg, #444444, #777777);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .achievement-icon {
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .achievement-card h3 {
          font-size: 2.5rem;
          color: #cccccc;
          margin-bottom: 0.5rem;
        }

        .achievement-card p {
          color: #aaaaaa;
          font-size: 1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .service-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          color: #ffffff;
        }

        .service-card h3 {
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .service-card p {
          color: #cccccc;
          font-size: 1rem;
          line-height: 1.6;
        }

        .tech-stack-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .tech-card {
          background: rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .tech-card h4 {
          font-size: 1.2rem;
          margin-bottom: 0.7rem;
        }

        .experience-badge {
          display: inline-block;
          background: linear-gradient(90deg, #333333, #666666);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .process-section {
          position: relative;
        }

        .process-timeline {
          position: relative;
          padding: 2rem 0;
          margin-top: 3rem;
        }

        .process-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(to bottom, #666666, #ffffff);
          transform: translateX(-50%);
        }

        .process-step {
          display: flex;
          margin-bottom: 5rem;
          position: relative;
        }

        .process-step:nth-child(odd) {
          justify-content: flex-start;
          padding-right: 53%;
        }

        .process-step:nth-child(even) {
          justify-content: flex-end;
          padding-left: 53%;
        }

        .process-number {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #333333, #666666);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          font-size: 1.2rem;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .process-content {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          max-width: 450px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .process-content h3 {
          margin-bottom: 0.7rem;
          font-size: 1.3rem;
          color: #ffffff;
        }

        .process-content p {
          color: #cccccc;
          font-size: 1rem;
          line-height: 1.6;
        }

        .portfolio-section {
          background: rgba(0, 0, 0, 0.2);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .portfolio-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .portfolio-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        .portfolio-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-radius: 50%;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .portfolio-card h3 {
          margin-bottom: 1rem;
          font-size: 1.3rem;
          color: #ffffff;
        }

        .portfolio-card p {
          color: #cccccc;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .portfolio-details {
          margin-top: auto;
          margin-bottom: 1.5rem;
        }

        .portfolio-platforms,
        .portfolio-tech {
          margin-bottom: 0.7rem;
          font-size: 0.9rem;
          color: #cccccc;
        }

        .portfolio-platforms strong,
        .portfolio-tech strong {
          color: #ffffff;
          margin-right: 0.3rem;
        }

        .view-project-btn {
          background: transparent;
          color: #ffffff;
          border: 1px solid #ffffff;
          border-radius: 30px;
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .view-project-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .view-all-container {
          text-align: center;
          margin-top: 3rem;
        }

        .view-all-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
          border-radius: 30px;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .testimonials-section {
          position: relative;
        }

        .testimonials-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          position: relative;
        }

        .quote-icon {
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .testimonial-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #cccccc;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          margin-bottom: 1rem;
        }

        .author-name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: #ffffff;
        }

        .author-position {
          color: #aaaaaa;
          font-size: 0.9rem;
        }

        .testimonial-stars {
          display: flex;
          gap: 0.3rem;
        }

        .star {
          color: #ffffff;
        }

        .why-us-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
        }

        .benefit-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .check-icon {
          color: #ffffff;
        }

        .benefit-card h3 {
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .benefit-card p {
          color: #cccccc;
          font-size: 1rem;
          line-height: 1.6;
        }

        .cta-section {
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
          text-align: center;
          padding: 5rem 0;
          margin-top: 3rem;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-content h2 {
          margin-bottom: 1.5rem;
          font-size: 2.5rem;
        }

        .cta-content p {
          margin-bottom: 2.5rem;
          font-size: 1.2rem;
          color: #cccccc;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .achievements-grid,
          .services-grid,
          .tech-grid,
          .benefits-grid,
          .testimonials-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.8rem;
          }

          h2 {
            font-size: 2rem;
          }

          .hero-content {
            flex-direction: column;
            text-align: center;
          }

          .hero-text {
            margin-bottom: 3rem;
          }

          .process-step:nth-child(odd),
          .process-step:nth-child(even) {
            padding-right: 0;
            padding-left: 0;
            justify-content: center;
          }

          .process-line {
            display: none;
          }

          .process-number {
            position: relative;
            left: auto;
            transform: none;
            margin-bottom: 1rem;
          }

          .process-step {
            flex-direction: column;
            align-items: center;
          }

          .portfolio-grid,
          .testimonials-container,
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .achievements-grid,
          .services-grid,
          .tech-grid {
            grid-template-columns: 1fr;
          }

          section {
            padding: 4rem 0;
          }

          h1 {
            font-size: 2.3rem;
          }

          h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AppDevelopmentPage;