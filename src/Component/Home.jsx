import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, MousePointer2 } from 'lucide-react';
import profileImage from '../assets/myImage.png';

const Home = () => {
  // Array for the typing effect
  const words = [
    'Front-end Developer',
    'MERN Full-stack Developer',
    'Web Developer',
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Native typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)),
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-23 sm:pt-0 flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              MD Ashiqur Rahman
            </span>
          </h1>

          <div className="h-10">
            <h2 className="text-2xl md:text-3xl text-gray-300">
              <span className="text-cyan-400 font-semibold">
                {words[index].substring(0, subIndex)}
                <span className="animate-pulse inline-block w-1 h-8 bg-cyan-400 ml-1 translate-y-1" />
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 font-light">
            I build modern, responsive, and dynamic web applications using the
            MERN stack and front-end technologies. I focus on clean, efficient
            code and real-world projects that deliver results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              download="Resume of MD Ashiqur Rahman - Google Docs.pdf"
              className="px-6 py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg text-white font-semibold shadow-lg transition-all"
            >
              <FileText size={18} />
              View Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all text-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Updated Image Section - Cleaned up borders */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Animated Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-[-20px] border border-purple-500/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glowing Backdrop */}
            <div className="absolute inset-10 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 blur-[100px] rounded-full animate-pulse" />

            {/* The Image Wrapper - Clean style without heavy border/padding */}
            <div className="relative z-10 w-full h-full">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative group">
                <img
                  src={profileImage}
                  alt="MD Ashiqur Rahman"
                  className="w-full h-full object-cover object-top grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />

                {/* Subtle Overlay to blend with dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />

                {/* Floating Tech Badge */}
                <motion.div
                  className="absolute bottom-10 right-10 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
