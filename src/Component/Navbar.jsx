import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  MessageSquare,
  Briefcase,
  GraduationCap,
  FileText,
  Download,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Education', href: '#education', icon: <GraduationCap size={18} /> },
  { name: 'Skills', href: '#skills', icon: <Code2 size={18} /> },
  { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
  { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // ✅ Added download handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume of MD Ashiqur Rahman - Google Docs.pdf';
    link.download = 'Resume of MD Ashiqur Rahman - Google Docs.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(link.name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo Section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group cursor-pointer"
        >
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
              Portfolio
            </span>
            <span className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
              ASHIQUR RAHMAN
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.name.toLowerCase())}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === item.name.toLowerCase()
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {active === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 border border-white/20 rounded-full"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ Desktop Resume Button FIXED */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-purple-500 to-cyan-500 text-white rounded-full font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all"
          >
            <FileText size={16} />
            Resume
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-all"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-2">
              {navLinks.map((item, idx) => (
                <motion.li
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      setActive(item.name.toLowerCase());
                      setOpen(false);
                    }}
                    className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all ${
                      active === item.name.toLowerCase()
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-400 hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                {/* ✅ Mobile Resume Button FIXED */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-purple-500 to-cyan-500 text-white rounded-full font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all"
                >
                  <FileText size={16} />
                  Resume
                </motion.button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;