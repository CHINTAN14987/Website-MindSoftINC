import React from "react";
import Footer from "./components/Footer/Footer";
import OurApproach from "./components/Home/OurApproach";
import Testimonial from "./components/Home/Testimonial";
import WhoWeAre from "./components/Home/WhoWeAre";
import ContactUs from "./components/pages/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import "./Style/index.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <WhoWeAre />
      <ContactUs />
      <Testimonial />
      <OurApproach />
      <Footer />
    </>
  );
};

export default App;
