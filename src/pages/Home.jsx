import React from "react";
import { motion } from "framer-motion";
import Homepageimage from "../assets/Homepagebg.png";
import Services from "./Services.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import { Contact } from "lucide-react";
import ContactPage from "./Contactpage.jsx";

const Home = () => {
  return (
    <>
    <div className="relative w-screen h-screen  overflow-hidden rounded-4xl">
      {/* Background Image */}
     <img
  src={Homepageimage}
  loading="lazy"
  alt="Homepage Background"
  className="
    absolute top-0 left-0 w-full h-full
    object-cover
    object-right           /* default for all screens */
    sm:object-right   /* ensure left alignment on small screens */
  "
/>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Animated Bottom Text */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] select-none text-center mb-8">
  {/* Black Layer */}
  <motion.div
    className="
      absolute inset-0
      font-extrabold font-inter
      text-black
      stroke-black
      leading-[1] 
      text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem] 
    "
    initial={{ opacity: 0, y: 50, scale: 1.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
  >
    AbdullaH
  </motion.div>

  {/* White Layer */}
  <motion.div
    className="
      relative
      font-extrabold font-inter
      text-white
      stroke-white
      leading-[1]
      translate-x-[2px] sm:translate-x-[3px] md:translate-x-[4px]
      translate-y-[2px] sm:translate-y-[3px] md:translate-y-[4px]
      text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem]
    "
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.05 }}
  >
    AbdullaH
  </motion.div>
</div>


      <motion.div
        className="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2 
             text-white max-w-[90%] md:max-w-[70%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <motion.h1
          className="font-sekuya font-extrabold
               text-[#0a0808] text-[4rem] md:text-[4rem] sm:text-[2rem]
               leading-[4rem] tracking-tighter uppercase
               drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]
               mb-4"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Full Stack <br />
          Developer
        </motion.h1>

        <p
          className="font-[var(--font-inter)]
               text-base md:text-lg lg:text-xl
               drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]
               leading-6"
        >
          I design and build high converting <br />
          websites and save your time with <br />
          AI automations.
        </p>
      </motion.div>

      {/* Button */}
      {/* <motion.button
          className="mt-4 bg-black/25 text-white px-6 py-1.5 rounded-2xl border-1 
               border-black font-inter
           transition-colors duration-300 
               text-sm md:text-base lg:text-lg flex items-center gap-2 
               hover:bg-black/40"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span>Start Your Project</span>
          <motion.span
            className="border-1 border-red-50 rounded-full px-2 text-center flex align-center justify-center"
            initial={{ x: 0 }}
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            ↗
          </motion.span>
        </motion.button> */}
    </div>

<Services />
<AboutMe />
<Projects />
<ContactPage />

</>
  );
};

export default Home;
