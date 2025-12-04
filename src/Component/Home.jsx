import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import myImage from '../assets/myImage.png'; // replace with your image

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-10"
    >
      {/* Text Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col gap-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            MD Ashiqur Rahman
          </span>
        </h1>

        {/* Dynamic Typing Text */}
        <h2 className="text-2xl md:text-3xl text-gray-300">
          <span className="text-cyan-400 font-semibold">
            <Typewriter
              words={[
                'Front-end Developer',
                'MERN Full-stack Developer',
                'Web Developer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        {/* Short Intro */}
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          I build modern, responsive, and dynamic web applications using the
          MERN stack and front-end technologies. I focus on clean, efficient
          code and real-world projects that deliver results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          <a
            href="/Resume of MD Ashiqur Rahman - Google Docs.pdf"
            download
            className="px-5 py-2 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Image with Premium Glow/Border */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative flex justify-center items-center w-full max-w-md"
      >
        {/* Decorative Glow */}
        <motion.div
          className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-400 blur-2xl opacity-30 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Actual Image */}
        <motion.img
          src={myImage}
          alt="Ashiqur Rahman"
          className="w-full rounded-2xl shadow-2xl object-cover border-2 border-gray-700 relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
