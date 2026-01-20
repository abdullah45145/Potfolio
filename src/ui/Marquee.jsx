import React from "react";
import { motion } from "framer-motion";

const MarqueeRow = ({ items, duration = 20, reverse = false }) => {
  return (
    <div className="relative w-full overflow-hidden bg-black py-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-60 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-60 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex gap-5 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-7 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex-shrink-0 hover:bg-white/10 transition-colors"
          >
            <span className="text-xl">{skill.icon}</span>
            <span className="text-white font-inter font-medium text-sm">
              {skill.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsMarquee = () => {
  const skills = [
    { icon: "🔍", label: "SEO" },
    { icon: "🎨", label: "Framer Expert" },
    { icon: "💬", label: "WhatsApp Bots" },
    { icon: "📄", label: "Landing Pages" },
    { icon: "⚡", label: "Optimization" },
    { icon: "💻", label: "Custom Code" },
    { icon: "🖼️", label: "Wireframing" },
    { icon: "✍️", label: "Copywriting" },
    { icon: "📊", label: "CMS Setup" },
    { icon: "🔄", label: "n8n Workflows" },
  ];

  const skills2 = [
    { icon: "🚀", label: "Performance" },
    { icon: "🎯", label: "Conversion" },
    { icon: "📱", label: "Responsive" },
    { icon: "🔐", label: "Security" },
    { icon: "♿", label: "Accessibility" },
    { icon: "🌐", label: "Multilingual" },
    { icon: "📈", label: "Analytics" },
    { icon: "🎭", label: "Animation" },
    { icon: "🧪", label: "Testing" },
    { icon: "🔄", label: "Deployment" },
  ];

  return (
    <>
      {/* Left → Right */}
      <MarqueeRow items={skills} duration={5} />

      {/* Right → Left (FASTER) */}
      <MarqueeRow items={skills2} duration={10} reverse />
    </>
  );
};

export default SkillsMarquee;
