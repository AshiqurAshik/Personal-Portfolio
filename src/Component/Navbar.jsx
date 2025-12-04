import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiHomeAlt, BiUser, BiCodeAlt, BiMessageDetail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", icon: <BiHomeAlt /> },
  { name: "About", href: "#about", icon: <BiUser /> },
  { name: "Skills", href: "#skills", icon: <BiCodeAlt /> },
  { name: "Projects", href: "#projects", icon: <MdWorkOutline /> },
  { name: "Contact", href: "#contact", icon: <BiMessageDetail /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Track scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(link.name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="leading-tight"
        >
          <span className="block text-gray-400 text-sm">MD</span>
          <span className="block text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            ASHIQUR RAHMAN
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex gap-10 items-center"
        >
          {navLinks.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1, color: "#00D1FF" }}
              className={`flex items-center gap-1 relative cursor-pointer transition-all duration-300 ${
                active === item.name.toLowerCase()
                  ? "text-cyan-400 font-semibold"
                  : "text-gray-300"
              }`}
            >
              <a href={item.href} className="flex items-center gap-1">
                {item.icon}
                {item.name}
              </a>
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all ${
                  active === item.name.toLowerCase() ? "w-full" : ""
                }`}
              ></span>
            </motion.li>
          ))}

          {/* Resume Button */}
          <li>
            <a
              href="#resume"
              className="px-5 py-2 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <HiOutlineDocumentText size={18} />
              View Resume
            </a>
          </li>
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-gray-300 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-4 bg-black/90 backdrop-blur-lg px-6 py-4 border-t border-white/10"
        >
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`block text-lg flex items-center gap-2 transition-colors ${
                  active === item.name.toLowerCase()
                    ? "text-cyan-400 font-semibold"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#resume"
              className="block mt-2 px-5 py-2 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg text-white font-semibold text-center shadow-lg hover:scale-105 transition-transform"
            >
              <HiOutlineDocumentText size={18} />
              View Resume
            </a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
