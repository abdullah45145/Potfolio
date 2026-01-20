import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiGreensock, SiFramer, SiVercel } from "react-icons/si";

// Skills array
const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Framer Motion", icon: SiFramer, color: "#E10098" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" }
];

export default function SkillsShowcase() {
  const sparkLayers = [...Array(60)];

  // Cursor effect
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    setCursor({ x, y });
  };

  return (
    <section
      className="relative min-h-80 bg-black flex items-start justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Sparkling lights */}
      {sparkLayers.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: `blur(${Math.random() * 2}px)`
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Skills grid */}
      <motion.div
        className="relative z-10 flex flex-wrap justify-center gap-8"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const xMotion = useMotionValue(0);
          const yMotion = useMotionValue(0);
          xMotion.set(cursor.x * 15);
          yMotion.set(cursor.y * 15);

          return (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center text-white w-[120px] h-[120px] rounded-xl bg-black/20 border-2 border-white/30  backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{
                cursor : "pointer",
                x: xMotion,
                y: yMotion,
                boxShadow: `0 0 10px ${skill.color}`
              }}
            >
              <Icon size={40} color={skill.color} />
              <span className="mt-2 text-sm tracking-wide text-center">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
