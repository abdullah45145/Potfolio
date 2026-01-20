import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import darkcube2 from "../assets/dark_cube2.png";
import whitecube1 from "../assets/white_cube1.png";
import whitecube2 from "../assets/white_cube2.png";
import purpleromb1 from "../assets/purple_romb1.png";
import purpleromb2 from "../assets/purple_romb2.png";
import darkromb from "../assets/dark_romb.png";
import spherelg from "../assets/sphere_lg.png";
import spheresm from "../assets/sphere_sm.png";
import spheremd from "../assets/sphere_md.png";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const { scrollY } = useScroll();

  // Parallax effect for decorative images
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -80]);
  const y3 = useTransform(scrollY, [0, 300], [0, 60]);
  const y4 = useTransform(scrollY, [0, 300], [0, -100]);
  const y5 = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Floating decorative images with parallax */}
      <motion.img
        src={darkcube2}
        alt="decoration"
        className="absolute top-10 right-20 w-32 h-32 opacity-80"
        style={{ y: y1 }}
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src={whitecube1}
        alt="decoration"
        className="absolute bottom-32 left-10 w-24 h-24 opacity-70"
        style={{ y: y2 }}
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.img
        src={purpleromb1}
        alt="decoration"
        className="absolute top-1/2 right-10 w-28 h-28 opacity-60"
        style={{ y: y3 }}
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.img
        src={purpleromb2}
        alt="decoration"
        className="absolute bottom-20 right-1/4 w-20 h-20 opacity-75"
        style={{ y: y4 }}
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10">
          <h1 className="text-black font-inter  text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">About me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading & Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h1 className="font-sekuya text-gray-800 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Hi, I'm Abdullah <br />
                <motion.img
                  src={whitecube2}
                  alt="decoration"
                  className="absolute top-1/3 left-1/4 w-32 h-32 opacity-65"
                  animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 9, repeat: Infinity }}
                />
                <motion.img
                  src={darkromb}
                  alt="decoration"
                  className="absolute top-20 left-20 w-28 h-28 opacity-70"
                  animate={{ x: [0, -20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.img
                  src={spherelg}
                  alt="decoration"
                  className="absolute bottom-40 left-1/3 w-40 h-40 opacity-60"
                  animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.img
                  src={spheresm}
                  alt="decoration"
                  className="absolute top-2/3 right-20 w-20 h-20 opacity-75"
                  animate={{ y: [0, 15, 0], rotate: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity }}
                />
                <span className="text-gray-600">Web Developer</span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl">
                JavaScript Enthusiast / Creative Problem Solver
              </p>
            </div>
          </motion.div>

          {/* Right Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Professionally connected to the web development world.
              </p>
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I'm a detail-oriented engineer who enjoys building thoughtful,
              high-quality user experiences.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I'm passionate about solving problems, collaborating with great
              people, and continuously learning.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Outside of work, you'll find me boxing, exploring the outdoors, or
              diving into a good video game — and, of course, experimenting with
              new tech.
            </p>

            {/* CTA Button */}
            <Link to="/more-about-me">
            
            <motion.button
              className="mt-8 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
            >
              <span>More about Me</span>
              <span>↗</span>
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
