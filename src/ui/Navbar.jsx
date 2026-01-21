import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🧠 Scroll handler for show/hide behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.2, staggerChildren: 0.12, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItems = [
    { name: "", path: "/" },
    { name: "", path: "/" },
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Github", path: "https://github.com/abdullah45145" },
    { name: "About Me", path: "/about" },
    {name : "Projects", path: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: showNav ? 0 : -100, 
        opacity: showNav ? 1 : 0.5,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 
                 w-[95%] sm:w-[95%] lg:w-[92%] 
                 px-5 py-3 flex justify-between items-center 
                 rounded-full backdrop-blur-md bg-[#17171759] 
                 text-white transition-all duration-300"
    >
      {/* 🔹 Logo */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-xl sm:text-2xl font-black tracking-tight font-paytone ml-6"
      >
        Chabby<span className="text-white">.</span>
      </motion.div>

      {/* 🔹 Desktop Menu */}
      <motion.ul
        className="hidden md:flex items-center space-x-12 text-sm lg:text-base text-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item, i) => (
          <motion.li key={i} variants={itemVariants}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-paytone transition cursor-pointer ${
                  isActive ? "text-[#0d0d0d] pb-1" : "hover:text-[#ecec3ef8]"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      {/* 🔹 Buttons (Desktop) */}
      <motion.div
        className="hidden md:flex items-center space-x-3 lg:space-x-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/contact">
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 lg:px-8 py-2 lg:py-3 cursor-pointer font-paytone font-semibold rounded-full bg-[#1a1326] hover:bg-gray-700 transition text-xs sm:text-sm"
          >
           Get in Touch
          </motion.button>
        </Link>
      </motion.div>

      {/* 🔹 Mobile Menu Toggle */}
      <motion.button
        whileTap={{ scale: 0.9, rotate: open ? 180 : 0 }}
        className="md:hidden text-white p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </motion.button>

      {/* 🔹 Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[100%] left-0 w-full 
                       bg-[#f8f6f4] backdrop-blur-xl text-black
                       rounded-3xl px-6 py-6 flex flex-col 
                       space-y-4 md:hidden z-40"
          >
            {menuItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  `block text-base font-paytone transition ${
                    isActive
                      ? "text-[#271502] font-bold"
                      : "hover:text-blue-900"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex flex-col sm:flex-row sm:space-x-3 pt-4">
             <Link to="/contact" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 w-full py-3 text-white rounded-full bg-[#8b4917e1] hover:bg-gray-700 transition font-paytone text-sm"
              >
                Get in Touch
              </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
