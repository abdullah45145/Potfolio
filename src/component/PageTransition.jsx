import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Animate page entrance
    const tl = gsap.timeline();

    tl.fromTo(
      ".page-transition-wrapper",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Optional: Add a subtle scale animation
    tl.fromTo(
      ".page-transition-wrapper",
      {
        scale: 0.95,
      },
      {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return <div className="page-transition-wrapper min-h-screen">{children}</div>;
};

export default PageTransition;
