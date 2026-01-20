import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ListChecks, Wand2, Rocket, Smile } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      icon: <MousePointer2 size={20} />,
      title: "Let's Get In Touch",
      desc: "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas in even greater detail.",
    },
    {
      id: 2,
      icon: <ListChecks size={20} />,
      title: "Grab Your Designs",
      desc: "Tell me your unique vision, and I'll create stunning, functional designs that perfectly align with your goals and bring your ideas to life seamlessly.",
    },
    {
      id: 3,
      icon: <Wand2 size={20} />,
      title: "Kickstart Development",
      desc: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch and optimized for performance, usability, and growth.",
    },
    {
      id: 4,
      icon: <Rocket size={20} />,
      title: "And Hand Over",
      desc: "Receive a fully tested, polished, high-quality product tailored to your needs with support for seamless performance and long-term success.",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 font-sans rounded-t-3xl">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-bold tracking-tight mb-4">Process is Everything</h2>
        <p className="text-gray-400 text-lg">Simple, streamlined process is what gets you results</p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#111111] border border-[#222222] p-8 rounded-[2rem] flex flex-col h-full hover:border-gray-600 transition-colors duration-300"
          >
            <div className="text-gray-300 mb-8">{step.icon}</div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-4 leading-tight">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-12">
                {step.desc}
              </p>
            </div>

            <div className="mt-auto">
              <span className="inline-block bg-[#1a1a1a] border border-[#333333] px-4 py-1.5 rounded-full text-xs font-medium text-gray-300">
                Step {step.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-md mx-auto mt-20 p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl text-center shadow-2xl"
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Smile size={18} className="text-white" />
          <span className="font-semibold text-white">I am with you in every step</span>
        </div>
        <p className="text-gray-500 text-sm">alongside you at each step for seamless experience</p>
      </motion.div>
    </section>
  );
};

export default ProcessSection;