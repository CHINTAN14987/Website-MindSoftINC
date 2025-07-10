import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Palette, 
  Layout, 
  PenTool, 
  Printer, 
  Package, 
  Globe 
} from "lucide-react";

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
      y: 60,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15 + 0.3,
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-5">
  <motion.div 
    className="service-card"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={cardVariants}
    whileHover={{ 
 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Icon wrapper */}
    <motion.div 
      className="service-card-icon-wrapper"
      variants={iconVariants}
    >
      <div className="service-card-icon">
        {icon}
      </div>
    </motion.div>

    {/* Flex container for icon + title (inline) */}
    <div className="flex items-center gap-3 mt-4">
      <h3 className="service-card-title">{title}</h3>
    </div>

    {/* Description on next line */}
    <p className="service-card-description mt-2">{description}</p>

    {/* Optional number badge */}
    {/* <div className="service-card-number">{String(index + 1).padStart(2, '0')}</div> */}
  </motion.div>
</div>
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <Layout size={40} strokeWidth={1.2} />,
      title: "Web Design",
      description: "Creating amazing web experiences from landing pages to effective eCommerce stores. We focus on user-friendly designs that convert visitors to customers."
    },
    {
      icon: <PenTool size={40} strokeWidth={1.2} />,
      title: "UI/UX Design",
      description: "We craft creative experiences and intuitive interfaces for your app or website to succeed. Our designs are based on user research and modern design principles."
    },
    {
      icon: <Palette size={40} strokeWidth={1.2} />,
      title: "Branding",
      description: "Create an identity for your business or refresh your existing brand to boost visual appeal. We build brands that resonate with your target audience."
    },
    {
      icon: <Printer size={40} strokeWidth={1.2} />,
      title: "Print Design",
      description: "Everything from business cards to customized graphics, we make print-ready tailored designs that reflect your brand's personality and values."
    },
    {
      icon: <Package size={40} strokeWidth={1.2} />,
      title: "Packaging Design",
      description: "Let us help you build your product identity and make your product stand out from the rest. Our packaging designs are memorable and functional."
    },
    {
      icon: <Globe size={40} strokeWidth={1.2} />,
      title: "Website Domain",
      description: "Find and purchase your next website domain name and hosting without breaking the bank. Seamlessly establish your online identity today."
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="background-pattern"></div>
      <div className="container">
        <motion.div 
          className="row justify-content-center"
          ref={titleRef}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <div className="col-12 col-lg-10 text-center">
            <motion.div className="section-header" variants={fadeInUpVariants}>
              <span className="section-badge">WHY CHOOSE US</span>
              <h2 className="section-title">
                Why Choose <span className="highlight">ACAA</span><br />
                Expert Consultant
              </h2>
              <div className="title-decoration"></div>
              <p className="section-description">
                We combine technical expertise with creative excellence to deliver outstanding results for your business. Our team of professionals is dedicated to bringing your vision to life.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="row service-cards-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="row justify-content-center mt-3">
          {/* <div className="col-12 text-center">
            <motion.button 
              className="cta-button"
              initial="hidden"
              animate={controls}
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>SAY HELLO TO US</span>
              <div className="button-shine"></div>
            </motion.button>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .why-choose-us-section {
          min-height: 100vh;
          background: radial-gradient(ellipse at top, #1a1a1a 0%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.005) 50%, transparent 70%);
          z-index: 0;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 30px 20px 30px 20px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          color: #999999;
          text-transform: uppercase;
          margin-bottom: 25px;
          position: relative;
          padding: 8px 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.02);
        }

        .section-title {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.2;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
          letter-spacing: -1px;
        }

        .highlight {
          color: #ffffff;
          position: relative;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
          z-index: -1;
          border-radius: 4px;
        }

        .title-decoration {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #ffffff 0%, transparent 100%);
          margin: 0 auto 30px;
          border-radius: 2px;
        }

        .section-description {
          font-size: 20px;
          line-height: 1.7;
          color: #cccccc;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 300;
        }

        .service-cards-grid {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px 60px -15px;
        }

        .service-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 24px;
          padding: 45px 35px;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.05),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          cursor: pointer;
          display:block;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #000000 0%, #666666 50%, #000000 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        .service-card-icon-wrapper {
          margin-bottom: 30px;
          position: relative;
        }

        .service-card-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          position: relative;
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .service-card-icon::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%);
          border-radius: 22px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-card-icon::after {
          opacity: 1;
        }

        .service-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .service-card-description {
          font-size: 16px;
          line-height: 1.7;
          color: #555555;
          margin-bottom: 0;
          font-weight: 400;
        }

        .service-card-number {
          position: absolute;
          top: 25px;
          right: 25px;
          font-size: 48px;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.03);
          line-height: 1;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-card-number {
          color: rgba(0, 0, 0, 0.06);
          transform: scale(1.1);
        }

        .cta-button {
          background: linear-gradient(135deg, #000000 0%, #333333 100%);
          color: #ffffff;
          border: none;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 22px 50px;
          border-radius: 12px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-button span {
          position: relative;
          z-index: 2;
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover .button-shine {
          left: 100%;
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #333333 0%, #555555 100%);
          transform: translateY(-2px);
        }

        /* Grid System */
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }

        .col-12 { flex: 0 0 100%; max-width: 100%; padding: 0 15px; }
        .col-sm-6 { flex: 0 0 50%; max-width: 50%; }
        .col-lg-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
        .col-lg-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }

        .justify-content-center { justify-content: center; }
        .text-center { text-align: center; }
        .mb-5 { margin-bottom: 3rem; }

        /* Responsive Design */
        @media (max-width: 992px) {
          .why-choose-us-section {
            padding: 100px 0;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .service-card {
            padding: 35px 25px;
          }

          .col-lg-4 { 
            flex: 0 0 50%; 
            max-width: 50%; 
          }
        }

        @media (max-width: 768px) {
          .why-choose-us-section {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .section-description {
            font-size: 18px;
            padding: 0 20px;
          }
          
          .service-card {
            padding: 30px 20px;
          }

          .col-sm-6,
          .col-lg-4,
          .col-lg-10 { 
            flex: 0 0 100%; 
            max-width: 100%; 
          }
          
          .service-cards-grid {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 576px) {
          .why-choose-us-section {
            padding: 60px 0;
          }
          
          .section-badge {
            font-size: 12px;
            letter-spacing: 2px;
            padding: 6px 16px;
          }
          
          .cta-button {
            padding: 18px 40px;
            font-size: 14px;
            letter-spacing: 1.5px;
          }

          .service-card-icon {
            width: 70px;
            height: 70px;
          }

          .service-card-number {
            font-size: 36px;
            top: 20px;
            right: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;