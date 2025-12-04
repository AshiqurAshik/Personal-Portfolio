import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/img-1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/5 flex justify-center"
      >
        <img
          src={profileImg}
          alt="MD Ashiqur Rahman"
          className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl shadow-2xl border-4 border-purple-500"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-3/5"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          About Me
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          I’m MD Ashiqur Rahman, a MERN stack developer passionate about crafting
          modern, interactive web applications. I love turning ideas into
          clean, efficient code while exploring new technologies. Problem-solving
          and creative challenges excite me the most. Outside of coding, I enjoy
          reading, exploring tech trends, and indulging in hobbies that inspire
          creativity. Always curious, I aim to grow and make an impact through
          my work.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
