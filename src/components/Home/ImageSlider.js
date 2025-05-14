import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EnhancedHeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Technology cards with icons and descriptions
  const technologies = [
    {
      name: "Web Development",
      icon: "💻",
      description: "Modern, responsive websites and web applications"
    },
    {
      name: "Mobile Apps",
      icon: "📱",
      description: "Native and cross-platform mobile experiences"
    },
    {
      name: "Cloud Solutions",
      icon: "☁️",
      description: "Scalable, reliable cloud infrastructure"
    },
    {
      name: "Data Analytics",
      icon: "📊",
      description: "Insights through advanced data analysis"
    }
  ];
  
  // Technology stack information
  const techStack = [
    { name: "React", position: { top: "0%", left: "50%" }, transform: "translateX(-50%)" },
    { name: "Node.js", position: { top: "50%", right: "0%" }, transform: "translateY(-50%)" },
    { name: "Cloud", position: { bottom: "0%", left: "50%" }, transform: "translateX(-50%)" },
    { name: "Data", position: { top: "50%", left: "0%" }, transform: "translateY(-50%)" },
    { name: "Mobile", position: { top: "30%", left: "80%" } }
  ];
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    
    // Initialize component with a slight delay for smoother loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setupParticles();
    }, 300);
    
    // Clean up on unmount
    return () => {
      clearTimeout(timer);
      window.cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls, inView]);
  
  // Handle window resize
  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  };
  
  // Mouse interaction state
  const mouse = useRef({
    x: null,
    y: null,
    radius: 150
  });
  
  // Handle mouse movement
  const handleMouseMove = (event) => {
    mouse.current.x = event.clientX;
    mouse.current.y = event.clientY;
  };
  
  // Set up interactive particles
  const setupParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create particles
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(66, 134, 244, ${Math.random() * 0.5 + 0.1})`,
        velocity: {
          x: (Math.random() - 0.5) * 0.7,
          y: (Math.random() - 0.5) * 0.7
        },
        opacity: Math.random() * 0.5 + 0.3,
        connections: []
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        let particle = particles[i];
        
        // Update position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1;
        }
        
        // Mouse repulsion
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - particle.x;
          const dy = mouse.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.current.radius) {
            const angle = Math.atan2(dy, dx);
            const pushFactor = (mouse.current.radius - distance) / mouse.current.radius;
            
            particle.x -= Math.cos(angle) * pushFactor * 2;
            particle.y -= Math.sin(angle) * pushFactor * 2;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Find and draw connections
        particle.connections = [];
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw connection lines based on proximity
          const connectionDistance = window.innerWidth < 768 ? 80 : 120;
          
          if (distance < connectionDistance) {
            particle.connections.push(j);
            const opacity = 1 - (distance / connectionDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(66, 134, 244, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };
  
  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 8px 15px rgba(66, 134, 244, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.1
      }
    }
  };
  
  const floatingEffectVariant = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };
  
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };
  
  const techIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8 + custom * 0.1,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }),
    pulse: (custom) => ({
      scale: [1, 1.08, 1],
      boxShadow: [
        "0px 4px 10px rgba(0, 0, 0, 0.1)",
        "0px 8px 20px rgba(0, 0, 0, 0.15)",
        "0px 4px 10px rgba(0, 0, 0, 0.1)"
      ],
      transition: {
        duration: 2.5,
        delay: custom * 0.2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    })
  };
  
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2 + custom * 0.15
      }
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + custom * 0.1
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0px 10px 25px rgba(66, 134, 244, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  return (
    <div ref={ref}>
      <section className="hero-section">
        {/* Background elements */}
        <div className="hero-background">
          <canvas ref={canvasRef} className="particle-canvas"></canvas>
          
          <motion.svg 
            className="hero-svg" 
            viewBox="0 0 1440 800" 
            preserveAspectRatio="xMidYMid slice"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a7bd5" />
                <stop offset="100%" stopColor="#3a6073" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4286f4" />
                <stop offset="100%" stopColor="#373B44" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00c6ff" />
                <stop offset="100%" stopColor="#4286f4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <rect x="0" y="0" width="100%" height="100%" fill="#f8f9fa" />
            
            {/* Wave paths */}
            <motion.path
              d="M0,192L48,213.3C96,235,192,277,288,277.3C384,277,480,235,576,213.3C672,192,768,192,864,213.3C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="url(#gradient1)"
              opacity="0.7"
              variants={pathVariants}
            />
            
            <motion.path
              d="M0,96L48,128C96,160,192,224,288,245.3C384,267,480,245,576,208C672,171,768,117,864,117.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="url(#gradient2)"
              opacity="0.5"
              variants={pathVariants}
              transition={{ delay: 0.2 }}
            />
            
            <motion.path
              d="M0,64L40,90.7C80,117,160,171,240,192C320,213,400,203,480,176C560,149,640,107,720,112C800,117,880,171,960,197.3C1040,224,1120,224,1200,208C1280,192,1360,160,1400,144L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              fill="url(#gradient3)"
              opacity="0.3"
              variants={pathVariants}
              transition={{ delay: 0.4 }}
            />
            
            {/* Accent lighting points */}
            {isLoaded && [
              { cx: 300, cy: 120, r: 4 },
              { cx: 600, cy: 180, r: 5 },
              { cx: 900, cy: 150, r: 4 },
              { cx: 1200, cy: 180, r: 3 }
            ].map((point, i) => (
              <motion.circle 
                key={i}
                cx={point.cx}
                cy={point.cy}
                r={point.r}
                fill="#ffffff"
                filter="url(#glow)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.7, 1, 0.7], 
                  scale: [1, 1.5, 1],
                  r: [point.r, point.r + 1, point.r]
                }}
                transition={{ 
                  delay: 0.8 + i * 0.2,
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </motion.svg>
        </div>

        <div className="hero-content-container">
          {/* Main content */}
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div 
              className="hero-badge" 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span>INNOVATIVE SOLUTIONS</span>
              <motion.span 
                className="badge-pulse"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </motion.div>
            
            <motion.h1 className="hero-title" variants={itemVariants}>
              Transforming Ideas Into
              <motion.span 
                className="highlight"
                animate={{
                  backgroundSize: ["0% 8px", "100% 8px"],
                }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              > Digital Excellence</motion.span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Your trusted partner for cutting-edge software development solutions —
              delivering innovation, scalability, and performance tailored to your business goals.
            </motion.p>

            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button 
                className="primary-button"
                onClick={() => navigate("/contactus")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Us
                <motion.span 
                  className="button-shine"
                  animate={{
                    x: ["-100%", "200%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </motion.button>
              
              <motion.button 
                className="secondary-button"
                onClick={() => navigate("/services")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Visual elements on the right side */}
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="tech-orbit"
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Tech stack icons */}
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`tech-icon ${tech.name.toLowerCase()}-icon`}
                  style={{
                    ...tech.position,
                    transform: tech.transform || "none"
                  }}
                  variants={techIconVariants}
                  custom={index}
                  initial="hidden"
                  animate={isLoaded ? ["visible", "pulse"] : "hidden"}
                />
              ))}
              
              {/* Center orbit point */}
              <motion.div 
                className="orbit-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.div 
                  className="orbit-pulse"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.7, 0, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.div>
              
              {/* Orbit paths */}
              {[0, 1, 2].map((_, i) => (
                <motion.div 
                  key={i}
                  className={`orbit-path orbit-path-${i + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLoaded ? { opacity: [0, 0.2, 0.1], scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.8 }}
                />
              ))}
            </motion.div>
            
            {/* Floating code snippets */}
            <motion.div 
              className="floating-code-snippet"
              initial="initial"
              animate={isLoaded ? "animate" : "initial"}
              variants={floatingEffectVariant}
            >
              <code>{`<div className="innovation">`}</code>
            </motion.div>
            
            <motion.div 
              className="floating-code-snippet snippet-2"
              initial="initial"
              animate={isLoaded ? "animate" : "initial"}
              variants={floatingEffectVariant}
              transition={{ delay: 0.5 }}
            >
              <code>{`const future = await getStarted();`}</code>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* New Technologies Section */}
      <section className="tech-cards-section">
        <motion.div 
          className="tech-cards-container"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-heading"
            variants={itemVariants}
          >
            Our Expertise
          </motion.h2>
          
          <motion.p 
            className="section-subheading"
            variants={itemVariants}
          >
            We leverage cutting-edge technologies to deliver exceptional solutions
          </motion.p>
          
          <div className="tech-cards-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                variants={cardVariants}
                custom={index}
                whileHover="hover"
              >
                <div className="tech-card-icon">{tech.icon}</div>
                <h3 className="tech-card-title">{tech.name}</h3>
                <p className="tech-card-description">{tech.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="tech-cta"
            variants={itemVariants}
          >
            <motion.button 
              className="secondary-button tech-cta-button"
              onClick={() => navigate("/aboutus")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View All Technologies
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default EnhancedHeroSection;