import React from "react";
import steps from "../assets/Steps.png";
import ProgramMarquee from "../ui/Marquee";
import Skills from "../ui/Skills.jsx";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ok from "../assets/ok.png";

const ServiceCard = ({ title, children, img }) => {
  return (
    <motion.div
      className="
        bg-[#141414]
        rounded-2xl
        p-6 md:p-8 sm:p-0
        shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]
        "
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <h3 className="flex items-center gap-3 text-lg md:text-xl font-inter font-semibold mb-3">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded text-sm">
          ▣
        </span>
        {title}
      </h3>

      <div className="text-sm md:text-[15px] text-gray-300 leading-6">
        {children}
      </div>

      {img && (
        <motion.div className="mt-6 overflow-hidden rounded-xl">
          <motion.img
            loading="lazy"
            src={img}
            alt={title}
            className="w-full h-auto object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    const handleWheel = (e) => {
      // Increase scroll speed
      window.scrollBy({
        top: e.deltaY * 1, // 3x faster
        left: 0,
        behavior: "auto", // instant scroll
      });
      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="bg-black text-white rounded-4xl">
      <div className="max-w-7xl mx-auto px-10 md:px-10 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold tracking-tight max-w-3xl">
            How I Can Help Your Business
          </h2>

          <button className="self-start bg-neutral-900/60 border border-white/10 text-white px-5 py-2.5 rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition-all">
            <span>Get in Touch</span>
            <span className="w-7 h-7 bg-white text-black rounded-full grid place-items-center">
              ↗
            </span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-0">
          <div className="md:col-span-2">
            <ServiceCard title="Website Design & Development" img={steps}>
              Get a unique website built by a hybrid designer-developer. I
              combine modern aesthetics with robust coding and advanced SEO to
              create a fast, sales-focused digital experience.
            </ServiceCard>
          </div>

          <div className="flex flex-col gap-8">
            <ServiceCard title="UI/UX Design">
              Elevate your user experience. I design intuitive, high-converting
              interfaces for web and mobile apps that strengthen your brand
              value.
            </ServiceCard>
            <ServiceCard
              title="AI Automations"
              img={
             ok
              }
            >
              Streamline your operations. I build custom AI chatbots and smart
              n8n workflows to automate your marketing and repetitive tasks.
            </ServiceCard>
          </div>

          <div className="md:col-span-2">
            <ServiceCard title="Strategic Consultations">
              Get clarity on your next digital move. Whether it's a website
              audit, a redesign roadmap, or brainstorming custom AI workflows, I
              provide actionable insights tailored to your goals.
            </ServiceCard>
          </div>
        </div>

        {/* Program Marquee */}
        <ProgramMarquee />

        <div>
          <h2 className="text-3xl md:text-4xl mx-10 my-14 lg:text-5xl font-inter font-extrabold tracking-tight max-w-3xl">
            What I Use
          </h2>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Services;
