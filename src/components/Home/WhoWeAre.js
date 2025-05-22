import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";
import "../../Style/WhoWeAre.css";
import whoWeAre from "../../Images/whoWeAre.png";

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
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Container>
        <Row className="whoWeAre-wrapper">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <motion.div 
              className="whyChooseUs-headingWrapper"
              variants={slideUp}
            >
              <div className="whychoose-heading">WHO WE ARE</div>
              <div className="whychoose-subHeading">
                What we do at&nbsp;
                <span className="whychoose-subHeadingColor">ACAA </span>
              </div>
            </motion.div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <motion.img 
              className="WhoWeAre-img" 
              src={whoWeAre} 
              alt="Who We Are at ACAA"
              variants={slideUp}
              whileHover={{ scale: 1.02 }}
            />
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <motion.div 
              className="whoWeAre-rightrow1"
              variants={slideUp}
            >
              One Innovative Idea can change your tomorrow. Nowadays Rapid
              technological advancements are presenting huge opportunities to
              satisfy your customers with innovative, new applications.
            </motion.div>
            
            <motion.div variants={staggerChildren}>
              <motion.div 
                className="whoWeAre-rightrow2"
                variants={slideUp}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="whoWeAre-imgdiv">
                  <Code size={24} color="#4a6fa1" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="whoWeAre-rowheading">Software Development</div>
                  <div className="whoWeAre-rowcontent">
                    We engineer and build software, web and mobile applications,
                    APIs and more. Our team is experienced with modern technologies
                    and programming languages. Our processes are effective and lean.
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="whoWeAre-rightrow3"
                variants={slideUp}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="whoWeAre-imgdiv">
                  <Palette size={24} color="#4a6fa1" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="whoWeAre-rowheading">UI and UX Design</div>
                  <div className="whoWeAre-rowcontent">
                    We design beautiful, functional and purposeful apps, web-apps
                    and websites. From Wire-frames to MVP to Pixel-Perfect designs.
                    Complex workflows simplified but also beauty of a brand brought
                    out by the simplicity
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default WhoWeAre;