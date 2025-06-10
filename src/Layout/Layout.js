import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "120px" }}> {/* Adjust value based on navbar height */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;