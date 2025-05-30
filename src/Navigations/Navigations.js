import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import Home from "../components/pages/Home";
import Layout from "../Layout/Layout";
import WebDevelopment from "../components/Services/WebDevelopment";
import AppDevelopment from "../components/Services/AppDevelopment";
import AISolutions from "../components/Services/AISolutions";
import ScrollToTop from "../components/Scroll";

const Navigations = () => {
  return (


   <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="services/web-development" element={<WebDevelopment />} />
        <Route path="services/app-development" element={<AppDevelopment />} />
        <Route path="services/ai-solutions" element={<AISolutions />} />
      </Route>
    </Routes></>
  );
};

export default Navigations;
