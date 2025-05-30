import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, ArrowRight, Phone } from "lucide-react";
import "../../Style/ContactUs.css";

const ContactCard = ({ icon, title, details }) => {
  return (
    <motion.div 
      className="contact-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="contact-card-icon">
        {icon}
      </div>
      <div className="contact-card-content">
        <h3>{title}</h3>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </motion.div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        
        // Reset submission success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-section">
      <Container>
        <div className="contact-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.div 
            className="contact-divider"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We'd love to hear from you. Here's how you can reach us.
          </motion.p>
        </div>

        <Row className="contact-cards-container">
          <Col lg={4} md={6} sm={12}>
            <ContactCard 
              icon={<Mail size={24} />}
              title="Email Address"
              details={["info@ACAA.com", "support@ACAA.com"]}
            />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ContactCard 
              icon={<MapPin size={24} />}
              title="Our Location"
              details={["B-19 4th-Floor", "Gurugram, India"]}
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="mx-auto">
            <ContactCard 
              icon={<Calendar size={24} />}
              title="Working Hours"
              details={["Mon-Fri: 9am - 5pm", "Sat-Sun: Closed"]}
            />
          </Col>
        </Row>
        
        <div className="contact-form-section">
          <Row>
            <Col lg={5} md={12}>
              <motion.div 
                className="contact-info"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>Get In Touch</h2>
                <p>
                  Have a question or need assistance? Our team is here to help.
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
                <div className="contact-quick-info">
                  <div className="quick-info-item">
                    <Phone size={18} />
                    <span>+91 123 456 7890</span>
                  </div>
                  <div className="quick-info-item">
                    <Mail size={18} />
                    <span>info@ACAA.com</span>
                  </div>
                  <div className="quick-info-item">
                    <MapPin size={18} />
                    <span>B-19 4th-Floor, Gurugram</span>
                  </div>
                </div>
                
              </motion.div>
            </Col>
            <Col lg={7} md={12}>
              <motion.div 
                className="contact-form-container"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>Send a Message</h2>
                {submitted ? (
                  <motion.div 
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="success-icon">✓</div>
                    <h3>Thank you!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col md={6}>
                        <div className="form-group">
                          <label htmlFor="name">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "error" : ""}
                            placeholder="Enter your name"
                          />
                          {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                            placeholder="Enter your email"
                          />
                          {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number (Optional)</label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <label htmlFor="subject">Subject (Optional)</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter subject"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "error" : ""}
                        placeholder="How can we help you?"
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    <motion.button 
                      type="submit" 
                      className="submit-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="loading-spinner"></span>
                      ) : (
                        <>
                          Book a Consultation <ArrowRight size={16} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.127859966417!2d77.0833!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDQnNTkuOSJF!5e0!3m2!1sen!2sin!4v1652962418111!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;