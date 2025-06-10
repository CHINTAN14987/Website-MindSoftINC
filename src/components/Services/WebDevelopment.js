import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Smartphone, LineChart, Zap, Award, Clock, CheckCircle, Users, Wrench, Layout } from "lucide-react";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const serviceCategories = [
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code size={24} />,
      description:
        "Building fast, responsive, and reliable web applications using modern technologies and clean code practices.",
      services: [
        {
          name: "Frontend Development",
          description:
            "Creating intuitive user interfaces with strong attention to performance and detail.",
          technologies: ["React", "Next.js", "Vue", "JavaScript/TypeScript"]
        },
        {
          name: "Backend Development",
          description:
            "Designing scalable and secure backend systems tailored to business needs.",
          technologies: ["Node.js", "Express", "MongoDB", "MySQL"]
        },
        {
          name: "Web Optimization",
          description:
            "Enhancing website speed, accessibility, and SEO for better user engagement.",
          technologies: ["Lighthouse", "Performance Tuning", "SEO Tools"]
        }
      ]
    },
    {
      id: "enterprise-solutions",
      title: "Custom Solutions",
      icon: <Server size={24} />,
      description:
        "Flexible software solutions crafted to match specific business workflows and challenges.",
      services: [
        {
          name: "CRM Prototypes",
          description:
            "Lightweight customer relationship tools tailored for small and growing businesses.",
          technologies: ["Custom Dashboards", "Workflow Tools", "Data Handling"]
        },
        {
          name: "Operations Tools",
          description:
            "Helping teams streamline internal processes with simple, effective tech.",
          technologies: ["Task Automation", "Resource Planning", "Admin Panels"]
        },
        {
          name: "Business Websites",
          description:
            "Professional and goal-focused websites for branding and online presence.",
          technologies: ["Custom CMS", "Landing Pages", "Contact Integration"]
        }
      ]
    },
    {
      id: "data-solutions",
      title: "Data & Insights",
      icon: <Database size={24} />,
      description:
        "Turning data into decisions with clear dashboards, analysis, and reporting tools.",
      services: [
        {
          name: "Data Dashboards",
          description:
            "Simple and powerful visualizations to monitor key metrics in real time.",
          technologies: ["Chart.js", "Recharts", "Power BI (Light Use)", "Custom Dashboards"]
        },
        {
          name: "Reporting Tools",
          description:
            "Automated reports to help track trends and outcomes effectively.",
          technologies: ["Data Exports", "Email Reports", "PDF Generation"]
        },
        {
          name: "Basic ML Integrations",
          description:
            "Lightweight AI features such as recommendation or search enhancements.",
          technologies: ["ML APIs", "NLP APIs", "Basic Models"]
        }
      ]
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      description:
        "Building clean, fast, and responsive apps for Android, iOS, and the web using modern frameworks.",
      services: [
        {
          name: "Cross-Platform Apps",
          description:
            "Efficient app development for both iOS and Android with a single codebase.",
          technologies: ["React Native", "Flutter", "PWA"]
        },
        {
          name: "Prototype Apps",
          description:
            "Building MVPs quickly to test ideas and get early feedback from users.",
          technologies: ["Low-code tools", "Custom APIs", "Firebase"]
        },
        {
          name: "App Optimization",
          description:
            "Improving performance, UI/UX, and responsiveness of existing mobile apps.",
          technologies: ["Performance Monitoring", "UI Refinement", "Platform Guidelines"]
        }
      ]
    }
  ];
  

  const milestones = [
    {
      year: "2025",
      event: "Company Founded",
      description: "Launched with a bold vision to redefine digital solutions — fueled by passion, purpose, and precision."
    },
    {
      year: "2025",
      event: "First Projects Launched",
      description: "Delivered cutting-edge web and mobile experiences that impressed early clients and set a high standard."
    },
    {
      year: "2025",
      event: "Team Expansion",
      description: "Rapidly grew our dream team of innovators, each aligned with our mission to build exceptional software."
    },
    {
      year: "2025",
      event: "Recognized for Speed & Quality",
      description: "Earned praise for delivering high-impact results at startup speed — without compromising on quality."
    }
  ];
  
  

  const achievements = [
    {
      icon: <Award size={24} />,
      title: "10+ Projects Completed",
      description: "Successfully delivered MVPs and production apps for diverse client needs"
    },
    {
      icon: <Users size={24} />,
      title: "Small But Skilled Team",
      description: "Every developer brings unique expertise, from design to deployment"
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Development Cycles",
      description: "Quick turnarounds without compromising on code quality"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Client-First Approach",
      description: "We collaborate closely with clients to deliver exactly what they need"
    }
  ];
  

  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Python", 
    "Java", "PHP", "Ruby on Rails", "AWS", "Azure", 
    "Google Cloud", "MongoDB", "PostgreSQL", "MySQL", "Redis",
    "Docker", "Kubernetes", "Jenkins", "Terraform", "GraphQL"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="services-page">
      <header className="services-hero">
        <div className="services-hero-overlay"></div>
        <motion.div 
          className="services-hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={textVariants}>Expert Web Development Services</motion.h1>
          <motion.p variants={textVariants}>
            Decade-refined expertise delivering innovative digital solutions that drive business success
          </motion.p>
          <motion.div variants={fadeInVariants} className="services-hero-badge">
          <span>Committed to excellence from day one</span>
          </motion.div>
        </motion.div>
        
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div 
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                x: Math.random() * 100 - 50, 
                y: Math.random() * 100 - 50,
                opacity: Math.random() * 0.5 + 0.3
              }}
              transition={{ 
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                width: Math.random() * 10 + 2,
                height: Math.random() * 10 + 2,
              }}
            />
          ))}
        </div>
      </header>

      <section id="achievements" className="achievements-section observe-section">
        <motion.div 
          className="achievements-container"
          initial="hidden"
          animate={isVisible["achievements"] ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} className="achievement-card" variants={itemVariants}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="services-intro" className="services-intro observe-section">
        <motion.div 
          className="services-intro-content"
          initial="hidden"
          animate={isVisible["services-intro"] ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={textVariants}>Comprehensive Digital Solutions</motion.h2>
          <motion.p variants={textVariants}>
            With over a decade of experience in the industry, we've refined our development process to deliver exceptional digital products that meet the unique needs of our clients. Our team of experts combines technical excellence with strategic thinking to create solutions that drive real business results.
          </motion.p>
          <motion.div variants={fadeInVariants} className="expertise-highlights">
            <div className="expertise-item">
              <Zap size={20} />
              <span>Rapid Development</span>
            </div>
            <div className="expertise-item">
              <Wrench size={20} />
              <span>Cutting-edge Tech Stack</span>
            </div>
            <div className="expertise-item">
              <Layout size={20} />
              <span>UX-focused Design</span>
            </div>
            <div className="expertise-item">
              <LineChart size={20} />
              <span>Performance Optimized</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="service-categories" className="service-categories observe-section">
        <motion.h2 
          initial="hidden"
          animate={isVisible["service-categories"] ? "visible" : "hidden"}
          variants={textVariants}
          className="section-title"
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          className="service-tabs"
          initial="hidden"
          animate={isVisible["service-categories"] ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`service-tab ${selectedService === category.id ? 'active' : ''}`}
              onClick={() => setSelectedService(category.id)}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="service-tab-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {selectedService && (
          <motion.div 
            className="service-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="service-details-inner">
              <h3>{serviceCategories.find(cat => cat.id === selectedService)?.title} Services</h3>
              <div className="service-cards">
                {serviceCategories
                  .find(cat => cat.id === selectedService)
                  ?.services.map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="service-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4>{service.name}</h4>
                      <p>{service.description}</p>
                      <div className="technologies">
                        <h5>Technologies:</h5>
                        <div className="tech-tags">
                          {service.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>

      <section id="timeline" className="timeline-section observe-section">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isVisible["timeline"] ? "visible" : "hidden"}
          variants={textVariants}
        >
          Our Journey
        </motion.h2>
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial="hidden"
              animate={isVisible["timeline"] ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
            >
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3>{milestone.event}</h3>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </section>

      <section id="tech-stack" className="tech-stack-section observe-section">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isVisible["tech-stack"] ? "visible" : "hidden"}
          variants={textVariants}
        >
          Technologies We Master
        </motion.h2>
        
        <motion.div 
          className="tech-cloud"
          initial="hidden"
          animate={isVisible["tech-stack"] ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="tech-item"
              variants={itemVariants}
              whileHover={{ scale: 1.1, color: "#4a9dff" }}
              style={{
                fontSize: `${Math.random() * 0.6 + 0.8}rem`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section id="cta" className="cta-section observe-section">
        <motion.div 
          className="cta-content"
          initial="hidden"
          animate={isVisible["cta"] ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={textVariants}>Ready to Transform Your Digital Presence?</motion.h2>
          <motion.p variants={textVariants}>
            Let's discuss how our decade of web development expertise can help you achieve your business goals.
          </motion.p>
          <motion.div variants={fadeInVariants} className="cta-buttons">
            <button className="btn primary">Get a Free Consultation</button>
            <button className="btn secondary">View Our Portfolio</button>
          </motion.div>
        </motion.div>
      </section>

      <style jsx>{`
        .services-page {
          font-family: 'Inter', sans-serif;
          color: #f8f9fa;
          background: linear-gradient(135deg, #0f0524 0%, #1a0e37 100%);
          overflow-x: hidden;
        }

        .services-hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        }

        .services-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000;
          z-index: 1;
        }

        .services-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }

        .services-hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: #FFFFFF;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        .services-hero p {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          color: #FFFFFF;
        }

        .services-hero-badge {
          display: inline-block;
          background: #000;
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 0.5rem 1.5rem;
          font-weight: 500;
          color: #FFFFFF;
          border: 1px solid #FFFFFF;
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 1;
        }

        .particle {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2.5rem;
          position: relative;
          color: #ffffff;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: #ffffff;
          border-radius: 2px;
        }

        /* Achievements Section */
        .achievements-section {
          padding: 5rem 2rem;
          background: #000;
        }

        .achievements-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .achievement-card {
          background: #000;
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #FFFFFF;
        }

        .achievement-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          border-color: #FFFFFF;
        }

        .achievement-icon {
          background: linear-gradient(135deg, #4a9dff 0%, #9747FF 100%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .achievement-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .achievement-card p {
          color: #ffffff;
          font-size: 0.9rem;
        }

        /* Services Intro Section */
        .services-intro {
          padding: 6rem 2rem;
          background: #000;
        }

        .services-intro-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .services-intro h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .services-intro p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          color: #ffffff;
        }

        .expertise-highlights {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .expertise-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #000;
          padding: 0.5rem 1rem;
          border:1px solid #ffffff;
          border-radius: 20px;
          color: #ffffff;
        }

        /* Service Categories Section */
        .service-categories {
          padding: 6rem 2rem;
          background: #000;
        }

        .service-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto 3rem;
        }

        .service-tab {
          background: #000;
          border-radius: 10px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #ffffff;
          height: 100%;
        }

        .service-tab.active {
          background: rgba(74, 157, 255, 0.1);
          border-color: rgba(74, 157, 255, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .service-tab-icon {
          background: linear-gradient(135deg, rgba(74, 157, 255, 0.2) 0%, rgba(151, 71, 255, 0.2) 100%);
          width: 60px;
          height: 60px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: #4a9dff;
        }

        .service-tab h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .service-tab p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .service-details {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          margin: 0 auto;
          max-width: 1200px;
          overflow: hidden;
          border: 1px solid rgba(74, 157, 255, 0.3);
        }

        .service-details-inner {
          padding: 2rem;
        }

        .service-details h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
          color: #4a9dff;
        }

        .service-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-card h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .service-card p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .technologies h5 {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(74, 157, 255, 0.1);
          color: #4a9dff;
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          display: inline-block;
        }

        /* Timeline Section */
        .timeline-section {
          padding: 6rem 2rem;
          background: #000;
        }

        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: #ffffff;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 0 2rem 2rem;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
        }

        .timeline-item.right {
            left: 50%;
            text-align: left;
          }

          @media (max-width: 768px) {
            .timeline-item.right {
              left: auto;
              text-align: left; /* Optional: keep this or adjust */
            }
          }


        .timeline-content {
          {/* background: rgba(255, 255, 255, 0.03); */}
          border-radius: 10px;
          padding: 1.5rem;
          border: 1px solid #ffffff;
          position: relative;
        }

        .timeline-content::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: #ffffff;
          border-radius: 50%;
          top: 25px;
        }

        .timeline-item.left .timeline-content::after {
          right: -32px;
        }

        .timeline-item.right .timeline-content::after {
          left: -32px;
        }

        .timeline-year {
          display: inline-block;
          background: linear-gradient(135deg, #4a9dff 0%, #9747FF 100%);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .timeline-content p {
          color: #ffffff;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Tech Stack Section */
        .tech-stack-section {
          padding: 6rem 2rem;
          background: #000;
        }

        .tech-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid #ffffff;
        }

        .tech-item {
          color: #ffffff !important;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          cursor: default;
        }

        /* CTA Section */
        .cta-section {
          padding: 8rem 2rem;
          background: #000;
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .cta-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 3rem;
          color: #ffffff;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn.primary {
          border:1px solid #ffffff;
          color: #fff;
        }

        .btn.primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(74, 157, 255, 0.3);
        }

        .btn.secondary {
          background: transparent;
          border: 1px solid rgba(74, 157, 255, 0.5);
          color: #4a9dff;
        }

        .btn.secondary:hover {
          background: rgba(74, 157, 255, 0.1);
          transform: translateY(-5px);
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .services-hero h1 {
            font-size: 2.8rem;
          }

          .timeline-item {
            width: 100%;
            padding-left: 4rem;
            padding-right: 0;
            left: 0;
            text-align: left;
          }

          .timeline-line {
            left: 2rem;
          }

          .timeline-item.left .timeline-content::after,
          .timeline-item.right .timeline-content::after {
            left: -32px;
          }
        }

        @media (max-width: 768px) {
          .services-hero h1 {
            font-size: 2.2rem;
          }

          .services-hero p {
            font-size: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .achievement-card,
          .service-tab,
          .service-card {
            padding: 1.5rem;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .services-hero {
            min-height: 500px;
          }

          .services-hero h1 {
            font-size: 1.8rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .timeline-item {
            padding-left: 3rem;
          }

          .timeline-line {
            left: 1rem;
          }

          .expertise-highlights {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;