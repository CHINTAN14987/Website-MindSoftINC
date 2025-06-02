import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoSvg from "../../Images/logo/logo.svg";
import "../../Style/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fixed click outside detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.navbar-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src={logoSvg} alt="Logo" /> */}
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          { <Menu size={24} />}
        </button>

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

          <div className="navbar-dropdown">
            <button
              className={`navbar-item dropdown-toggle ${
                location.pathname.includes("/services") ? "active" : ""
              }`}
              onClick={handleDropdownClick}
            >
              <span className="navbar-item-text">Services</span>
            </button>

         {dropdownOpen &&    <div className={`glass-dropdown-alt ${dropdownOpen ? "open" : ""}`}>
              <Link 
                to="/services/web-development" 
                className="dropdown-item"
                onClick={handleDropdownItemClick}
              >
                <div
                  className="service-card-alt"
                
                >
                  <div className="outer">
                    <h3>Web Development</h3>
                    <p>
                      Craft unique digital experiences for modern audiences.
                      Elevate your brand with cutting-edge designs.
                    </p>
                  </div>
                  <div className="arrow-icon">→</div>
                </div>
              </Link>

              <Link 
                to="/services/app-development" 
                className="dropdown-item"
                onClick={handleDropdownItemClick}
              >
                <div
                  className="service-card-alt"
                
                >
                  <div className="outer">
                    <h3>App Development</h3>
                    <p>
                      Build innovative mobile apps that resonate with your
                      audience.
                      From concept to launch, we craft secure, high-performance
                      solutions.
                    </p>
                  </div>
                  <div className="arrow-icon">→</div>
                </div>
              </Link>

              <Link 
                to="/services/ai-solutions" 
                className="dropdown-item"
                onClick={handleDropdownItemClick}
              >
                <div
                  className="service-card-alt"
                >
                  <div className="outer">
                    <h3>AI Solutions</h3>
                    <p>
                      Leverage artificial intelligence to transform your business.
                      Smart automation and data-driven insights for growth.
                    </p>
                  </div>
                  <div className="arrow-icon">→</div>
                </div>
              </Link>
            </div>}
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