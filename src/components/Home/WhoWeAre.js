import React, { useState } from "react";
import { Code, Palette, Zap, Monitor, Globe, Database, Shield, Cpu, Server, Layers } from "lucide-react";
import '../../Style/WHOweAre.css';

const WhoWeAre = () => {
  const [hoveredIcon, setHoveredIcon] = useState(3);

  // Service data for different icons
  const serviceData = [
    {
      icon: Code,
      title: "Software Development",
      description: "We engineer and build software, web and mobile applications, APIs and more. Our team is experienced with modern technologies and programming languages. Our processes are effective and lean."
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Creating responsive, scalable web applications with modern frameworks. From e-commerce platforms to enterprise solutions, we deliver cutting-edge web experiences."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive database design, optimization, and management services. We handle everything from architecture planning to performance tuning and security."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protecting your digital assets with advanced security measures, penetration testing, and compliance management to ensure your business stays secure."
    },
    {
      icon: Monitor,
      title: "Digital Transformation",
      description: "Modernizing legacy systems and processes with cloud solutions, automation, and digital workflows to accelerate your business growth."
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, server management, and DevOps implementation to ensure your applications run smoothly and efficiently."
    }
  ];

  const getCurrentService = () => {
    if (hoveredIcon !== null && hoveredIcon < serviceData.length) {
      return serviceData[hoveredIcon];
    }
    return serviceData[0]; // Default to first service
  };

  const currentService = getCurrentService();

  return (
    <div className="container">
      <div className="wrapper">
        {/* Header Section */}
        <div className="header">
          <div className="sub-title">
            WHO WE ARE
            <div className="sub-title-line"></div>
          </div>
          <h1 className="main-title">
            What we do at{' '}
            <span className="acaa-text">ACAA</span>
          </h1>
        </div>

        <div className="grid-container">
          {/* Left Side - Tech Hub */}
          <div className="left-section">
            <div className="tech-hub">
              {/* Central Hub */}
              <div className="central-hub">
                <Cpu size={45} color="#ffffff" />
              </div>

              {/* Floating Icons */}
              {serviceData.slice(0, 6).map((service, index) => {
                const IconComponent = service.icon;
                const isHovered = hoveredIcon === index;
                
                return (
                  <div 
                    key={index}
                    className={`floating-icon icon-${index + 1} ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <IconComponent 
                      size={24} 
                      color="#ffffff"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="right-section">
            {/* Introduction */}
            <div className="intro-card">
              <p className="intro-text">
                One Innovative Idea can change your tomorrow. Nowadays Rapid
                technological advancements are presenting huge opportunities to
                satisfy your customers with innovative, new applications.
              </p>
            </div>

            {/* Cards Container */}
            <div className="cards-container">
              {/* Card 2 - Dynamic with Green/Teal gradient (changes on hover) */}
              <div className={`service-card card-2 card-2-${hoveredIcon} ${hoveredIcon !== null ? 'center-card active' : ''}`}>
                <div className={`service-icon ${hoveredIcon !== null ? 'active' : ''}`}>
                  <currentService.icon 
                    size={32} 
                    color={hoveredIcon !== null ? "#000000" : "#ffffff"} 
                  />
                </div>
                <div className="service-content">
                  <h3 className={`service-title cardvisiblity ${hoveredIcon !== null ? 'active' : ''}`}>
                    {currentService.title}
                  </h3>
                  <p className={`service-description cardvisiblity ${hoveredIcon !== null ? 'active' : ''}`}>
                    {currentService.description}
                  </p>
                </div>
              </div>
              
              {/* Card 3 - Static with Orange/Red gradient */}
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;