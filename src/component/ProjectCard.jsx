import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, onClick, direction = "left" }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
        x: direction === "left" ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ loop: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="w-full h-full group transition-all relative rounded-xl hover:rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        loading="lazy"
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        src={image}
        alt=""
      />

      <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/15">
        <h2 className="uppercase text-4xl md:text-5xl font-[font1] border-3 pt-4 px-8 text-white border-white rounded-full">
          View Project
        </h2>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
