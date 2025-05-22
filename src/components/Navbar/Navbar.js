import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSvg from "../../Images/logo/logo.svg"
import "../../Style/Navbar.css";  
import AcaaLogo from "../acaalogo";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  
  // Check if current path is under services
  const isServicesActive = () => {
    return location.pathname.includes("/services");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
      <div className="navbar-logo">
          {/* Replace the SVG with our AcaaLogo component */}
          {/* <AcaaLogo /> */}
        </div>


        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop & Mobile navigation */}
        <div className={`navbar-right ${isOpen ? "open" : ""}`}>
          {/* <Link 
            to="/" 
            className={`navbar-item ${isActive("/") ? "active" : ""}`}
          >
            <span className="navbar-item-text">Home</span>
          </Link> */}
          
          <Link 
            to="/aboutus" 
            className={`navbar-item ${isActive("/aboutus") ? "active" : ""}`}
          >
            <span className="navbar-item-text">About Us</span>
          </Link>
          
          {/* Dropdown menu example */}
          <div className="navbar-dropdown">
            <button 
              className={`navbar-item dropdown-toggle ${isServicesActive() ? "active" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="navbar-item-text">Services</span>
            </button>
            
            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <Link to="/services/web-development" className="dropdown-item">
                {/* Web Development */} One
              </Link>
              <Link to="/services/app-development" className="dropdown-item">
                {/* App Development */} two
              </Link>
              <Link to="/services/ai-solutions" className="dropdown-item">
                {/* AI Solutions */} three
              </Link>
              {/* <Link to="services/ar-vr" className="dropdown-item">
                AR/VR Solutions
              </Link> */}
            </div>


          </div>
          
          <Link 
            to="/contactus" 
            className={`navbar-item ${isActive("/contactus") ? "active" : ""}`}
          >
            <span className="navbar-item-text">Contact Us</span>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;