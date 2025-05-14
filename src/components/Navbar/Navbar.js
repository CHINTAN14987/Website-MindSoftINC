import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSvg from "../../Images/logo/logo.svg"
import "../../Style/Navbar.css";  

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

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
      <Link to="/" className="logo-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="#212529" />

            <g className="rotate-circle">
              <circle cx="400" cy="200" r="180" stroke="#404040" strokeWidth="1" fill="none" />
              <circle cx="400" cy="200" r="150" stroke="#505050" strokeWidth="1" fill="none" />
            </g>

            <g className="pulse-circle">
              <circle cx="400" cy="200" r="120" className="circle" />
            </g>

            <g transform="translate(180, 220)">
              <text id="A1" x="0" y="0" className="letter">A</text>
              <text id="C" x="120" y="0" className="letter">C</text>
              <text id="A2" x="240" y="0" className="letter">A</text>
              <text id="A3" x="360" y="0" className="letter">A</text>
              <text x="220" y="60" className="technologies tech">TECHNOLOGIES</text>
            </g>
          </svg>
        </Link>

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
          <Link 
            to="/" 
            className={`navbar-item ${isActive("/") ? "active" : ""}`}
          >
            <span className="navbar-item-text">Home</span>
          </Link>
          
          <Link 
            to="/aboutus" 
            className={`navbar-item ${isActive("/aboutus") ? "active" : ""}`}
          >
            <span className="navbar-item-text">About Us</span>
          </Link>
          
          {/* Dropdown menu example */}
          <div className="navbar-dropdown">
            <button 
              className={`navbar-item dropdown-toggle ${isActive("/services") ? "active" : ""}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="navbar-item-text">Services</span>
            </button>
            
            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <Link to="/services/consulting" className="dropdown-item">
                Consulting
              </Link>
              <Link to="/services/development" className="dropdown-item">
                Development
              </Link>
              <Link to="/services/design" className="dropdown-item">
                Design
              </Link>
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