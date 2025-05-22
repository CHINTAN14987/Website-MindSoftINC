import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../Style/techCards.css";

const FloatingButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    {
      text: "Artificial Intelligence",
      colorClass: "bg-card-1",
      textColor: "text-black",
      direction: "x",
      position: { left: "15%", top: "60%" },
      hoverContent: {
        title: "AI & Machine Learning Solutions",
        description:
          "Transform your business with intelligent automation, predictive analytics, and cutting-edge AI technologies that drive efficiency and innovation across all operations.",
        image: "/api/placeholder/200/150",
        features: [
          "Machine Learning Models & Training",
          "Natural Language Processing",
          "Computer Vision & Image Recognition",
          "Intelligent Process Automation",
          "Predictive Analytics & Forecasting",
          "AI-Powered Chatbots & Virtual Assistants"
        ],
      },
    },
    {
      text: "Web Development",
      colorClass: "bg-card-2",
      textColor: "text-black",
      direction: "x",
      position: { left: "30%", top: "80%" },
      hoverContent: {
        title: "Full-Stack Web Development",
        description:
          "Build modern, responsive, and scalable web applications using the latest technologies and frameworks for optimal performance, security, and user experience.",
        image: "/api/placeholder/200/150",
        features: [
          "React, Next.js & Modern Frontend",
          "Node.js & Express Backend Systems",
          "Progressive Web Apps (PWA)",
          "E-commerce & Payment Integration",
          "RESTful APIs & GraphQL",
          "Database Design & Optimization"
        ],
      },
    },
    {
      text: "Mobile Apps",
      colorClass: "bg-card-3",
      textColor: "text-black",
      direction: "x",
      position: { left: "30%", top: "20%" },
      hoverContent: {
        title: "Native & Cross-Platform Mobile Apps",
        description:
          "Create stunning mobile applications for iOS and Android with native performance, intuitive design, and seamless user experiences that engage and retain users.",
        image: "/api/placeholder/200/150",
        features: [
          "iOS & Android Native Development",
          "React Native Cross-Platform",
          "Flutter App Development",
          "App Store Optimization (ASO)",
          "Push Notifications & Analytics",
          "Offline Functionality & Sync"
        ],
      },
    },
    {
      text: "Cloud Solutions",
      colorClass: "bg-card-4",
      textColor: "text-black",
      direction: "y",
      position: { left: "50%", top: "35%" },
      hoverContent: {
        title: "Scalable Cloud Infrastructure",
        description:
          "Design and implement robust cloud architectures that scale with your business needs while ensuring maximum security, reliability, and cost-effectiveness.",
        image: "/api/placeholder/200/150",
        features: [
          "AWS & Azure Cloud Deployment",
          "Microservices Architecture Design",
          "Docker & Kubernetes Orchestration",
          "CI/CD Pipeline Implementation",
          "Auto-scaling & Load Balancing",
          "Cloud Security & Monitoring"
        ],
      },
    },
    {
      text: "Data Analytics",
      colorClass: "bg-card-5",
      textColor: "text-white",
      direction: "xy",
      position: { left: "80%", top: "65%" },
      hoverContent: {
        title: "Business Intelligence & Analytics",
        description:
          "Transform raw data into actionable insights with advanced analytics, real-time dashboards, and powerful data-driven decision making tools for your business.",
        image: "/api/placeholder/200/150",
        features: [
          "Business Intelligence Dashboards",
          "Real-time Data Processing",
          "Predictive Modeling & Forecasting",
          "Data Visualization & Reporting",
          "ETL Pipeline Development",
          "Statistical Analysis & Insights"
        ],
      },
    },
  ];

  const getFloatAnimation = (direction) => {
    const commonTransition = {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    };

    switch (direction) {
      case "x":
        return {
          animate: {
            x: [0, 20, 0, -20, 0],
            transition: commonTransition,
          },
        };
      case "y":
        return {
          animate: {
            y: [0, 20, 0, -20, 0],
            transition: commonTransition,
          },
        };
      case "xy":
        return {
          animate: {
            x: [0, 15, 0, -15, 0],
            y: [0, -15, 0, 15, 0],
            transition: commonTransition,
          },
        };
      default:
        return {};
    }
  };

  return (
    <div className="floating-container">
      {buttons.map((button, index) => (
        <motion.div
          key={index}
          className="floating-button-wrapper"
          style={{
            position: "absolute",
            left: button.position.left,
            top: button.position.top,
          }}
          initial={{ x: 0, y: 0 }}
          {...getFloatAnimation(button.direction)}
        >
          <div
            className={`floating-button ${button.colorClass} ${
              button.textColor
            } ${hoveredButton === index ? "expanded" : "collapsed"}`}
            onMouseEnter={() => setHoveredButton(index)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/* Button content */}
            <div
              className={`button-inner ${
                hoveredButton === index ? "hidden" : "visible"
              }`}
            >
              <span className="text-2xl">→</span>
              <span className="text-lg ml-2">{button.text}</span>
            </div>

            {/* Hover content */}
            <div
              className={`button-hover-content ${
                hoveredButton === index ? "visible" : "hidden"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">→</span>
                <h3 className="text-lg font-bold">{button.hoverContent.title}</h3>
              </div>

              {/* Image */}
              <img
                src={button.hoverContent.image}
                alt={button.hoverContent.title}
                className="mb-3 rounded-lg w-full h-32 object-cover"
              />

              {/* Description */}
              <p className="text-sm mb-3 leading-relaxed opacity-90">
                {button.hoverContent.description}
              </p>

              {/* Features List */}
              <div className="mt-3 mb-4">
                <h4 className="text-sm font-semibold mb-2 opacity-80">Key Services:</h4>
                {button.hoverContent.features.map((feature, i) => (
                  <div
                    key={i}
                    className="feature-item flex items-center gap-2 mb-1"
                  >
                    <div className="feature-dot w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                    <span className="text-xs opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

            
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingButtons;