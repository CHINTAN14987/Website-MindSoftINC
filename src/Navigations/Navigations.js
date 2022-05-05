import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import Home from "../components/pages/Home";
import Services from "../components/pages/Services";
import Layout from "../Layout/Layout";

const Navigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Route>
    </Routes>
  );
};

export default Navigations;
