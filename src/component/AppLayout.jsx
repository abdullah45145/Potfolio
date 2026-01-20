import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import PageTransition from "./PageTransition";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
};

export default AppLayout;
