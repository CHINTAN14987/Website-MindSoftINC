import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Monitor, Globe, Database, Shield, Cpu, Server, Layers } from "lucide-react";

const WhoWeAre = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '80px 20px',
      fontFamily: 'Arial, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px'
    },
    subTitle: {
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '3px',
      color: '#ffffff',
      marginBottom: '20px',
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '15px'
    },
    subTitleLine: {
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '2px',
      backgroundColor: '#ffffff'
    },
    mainTitle: {
      fontSize: '3.5rem',
      fontWeight: '900',
      marginBottom: '20px',
      lineHeight: '1.1'
    },
    acaaText: {
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(255,255,255,0.3)'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'start'
    },
    leftSection: {
      position: 'relative',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    techHub: {
      position: 'relative',
      width: '100%',
      height: '500px'
    },
    centralHub: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '3px solid #ffffff',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '10',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    centralHubHover: {
      transform: 'translate(-50%, -50%) scale(1.1)',
      boxShadow: '0 0 30px rgba(255,255,255,0.3)'
    },
    floatingIcon: {
      position: 'absolute',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      border: '2px solid #ffffff',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    floatingIconHover: {
      transform: 'scale(1.2)',
      boxShadow: '0 0 20px rgba(255,255,255,0.5)'
    },
    icon1: { top: '10%', left: '20%' },
    icon2: { top: '10%', right: '20%' },
    icon3: { bottom: '10%', left: '20%' },
    icon4: { bottom: '10%', right: '20%' },
    icon5: { left: '5%', top: '50%', transform: 'translateY(-50%)' },
    icon6: { right: '5%', top: '50%', transform: 'translateY(-50%)' },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    },
    introCard: {
      padding: '30px',
      backgroundColor: '#000000',
      border: '2px solid #ffffff',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    introCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
    },
    introText: {
      fontSize: '18px',
      lineHeight: '1.7',
      color: '#ffffff',
      position: 'relative',
      zIndex: '2'
    },
    serviceCard: {
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'flex-start',
      padding: '30px',
      backgroundColor: '#000000',
      border: '2px solid #ffffff',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    serviceCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 25px 50px rgba(255,255,255,0.15)',
      borderColor: '#ffffff'
    },
    serviceIcon: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      border: '2px solid #ffffff',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '25px',
      transition: 'all 0.3s ease',
      flexShrink: 0
    },
    serviceIconHover: {
      transform: 'rotate(360deg)',
      backgroundColor: '#ffffff'
    },
    serviceContent: {
      flex: '1'
    },
    serviceTitle: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '15px'
    },
    serviceDescription: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#ffffff'
    },
    bottomPattern: {
      marginTop: '80px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      gap: '30px'
    },
    patternIcon: {
      opacity: '0.3',
      transition: 'all 0.3s ease'
    },
    // Responsive styles
    '@media (max-width: 1024px)': {
      gridContainer: {
        gridTemplateColumns: '1fr',
        gap: '40px'
      },
      mainTitle: {
        fontSize: '2.8rem'
      }
    },
    '@media (max-width: 768px)': {
      container: {
        padding: '40px 15px'
      },
      mainTitle: {
        fontSize: '2.2rem'
      },
      serviceCard: {
        flexDirection: 'column',
        textAlign: 'center'
      },
      serviceIcon: {
        marginRight: '0',
        marginBottom: '20px'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      style={styles.container}
    >
      <div style={styles.wrapper}>
        {/* Header Section */}
        <motion.div 
          style={styles.header}
          variants={slideUp}
        >
          <div style={styles.subTitle}>
            WHO WE ARE
            <div style={styles.subTitleLine}></div>
          </div>
          <h1 style={styles.mainTitle}>
            What we do at{' '}
            <span style={styles.acaaText}>ACAA</span>
          </h1>
        </motion.div>

        <div style={styles.gridContainer}>
          {/* Left Side - Tech Hub */}
          <motion.div 
            style={styles.leftSection}
            variants={slideUp}
          >
            <div style={styles.techHub}>
              {/* Central Hub */}
              <motion.div 
                style={styles.centralHub}
                whileHover={styles.centralHubHover}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Cpu size={45} color="#ffffff" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div 
                style={{...styles.floatingIcon, ...styles.icon1}}
                animate={floatingAnimation}
                whileHover={styles.floatingIconHover}
              >
                <Code size={24} color="#ffffff" />
              </motion.div>

              <motion.div 
                style={{...styles.floatingIcon, ...styles.icon2}}
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                whileHover={styles.floatingIconHover}
              >
                <Globe size={24} color="#ffffff" />
              </motion.div>

              <motion.div 
                style={{...styles.floatingIcon, ...styles.icon3}}
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
                whileHover={styles.floatingIconHover}
              >
                <Database size={24} color="#ffffff" />
              </motion.div>

              <motion.div 
                style={{...styles.floatingIcon, ...styles.icon4}}
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 3 } }}
                whileHover={styles.floatingIconHover}
              >
                <Shield size={24} color="#ffffff" />
              </motion.div>

              <motion.div 
                style={{...styles.floatingIcon, ...styles.icon5}}
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
                whileHover={styles.floatingIconHover}
              >
                <Monitor size={24} color="#ffffff" />
              </motion.div>

              <motion.div 
                style={{...styles.floatingIcon, ...styles.icon6}}
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
                whileHover={styles.floatingIconHover}
              >
                <Server size={24} color="#ffffff" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            style={styles.rightSection}
            variants={slideUp}
          >
            {/* Introduction */}
            <motion.div 
              style={styles.introCard}
              whileHover={styles.introCardHover}
              transition={{ duration: 0.3 }}
            >
              <p style={styles.introText}>
                One Innovative Idea can change your tomorrow. Nowadays Rapid
                technological advancements are presenting huge opportunities to
                satisfy your customers with innovative, new applications.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div variants={staggerChildren}>
              <motion.div 
                style={styles.serviceCard}
                variants={slideUp}
                whileHover={styles.serviceCardHover}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  style={styles.serviceIcon}
                  whileHover={styles.serviceIconHover}
                  transition={{ duration: 0.6 }}
                >
                  <Code size={32} color="#ffffff" />
                </motion.div>
                <div style={styles.serviceContent}>
                  <h3 style={styles.serviceTitle}>
                    Software Development
                  </h3>
                  <p style={styles.serviceDescription}>
                    We engineer and build software, web and mobile applications,
                    APIs and more. Our team is experienced with modern technologies
                    and programming languages. Our processes are effective and lean.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                style={styles.serviceCard}
                variants={slideUp}
                whileHover={styles.serviceCardHover}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  style={styles.serviceIcon}
                  whileHover={styles.serviceIconHover}
                  transition={{ duration: 0.6 }}
                >
                  <Palette size={32} color="#ffffff" />
                </motion.div>
                <div style={styles.serviceContent}>
                  <h3 style={styles.serviceTitle}>
                    UI and UX Design
                  </h3>
                  <p style={styles.serviceDescription}>
                    We design beautiful, functional and purposeful apps, web-apps
                    and websites. From Wire-frames to MVP to Pixel-Perfect designs.
                    Complex workflows simplified but also beauty of a brand brought
                    out by the simplicity.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Tech Pattern */}
        <motion.div 
          style={styles.bottomPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {[Code, Globe, Database, Shield, Monitor, Layers].map((Icon, index) => (
            <motion.div
              key={index}
              style={styles.patternIcon}
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <Icon size={28} color="#ffffff" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhoWeAre;