import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Style/Navbar.css";
const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <span className="ACAA-wrap">ACAA </span>{" "}
      </div>
      <div className="navbar-right">
        <Link 
           to="/" 
           className={`navbar-rightItem ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <Link to="/aboutus" 
        className={`navbar-rightItem ${isActive("/aboutus") ? "active" : ""}`}
        >
          About Us
        </Link>
        {/* <Link to="/services" className="navbar-rightItem">
          Service
        </Link> */}
        <Link to="/contactus" 
        className={`navbar-rightItem ${isActive("/contactus") ? "active" : ""}`}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
