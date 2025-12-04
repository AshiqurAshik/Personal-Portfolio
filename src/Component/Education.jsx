import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    degree: 'BSc in Computer Science',
    field: 'AIUB',
    university: 'American International University-Bangladesh',
    status: 'Studying',
    expected: '2027',
    icon: <FaGraduationCap />,
    color: 'from-purple-500 to-cyan-400',
  },
  {
    degree: 'HSC',
    field: 'Science',
    university: 'Adamjee Cantonment College',
    status: 'Completed',
    expected: '2022',
    icon: <FaSchool />,
    color: 'from-green-400 to-teal-400',
  },
];

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
      >
        Education
      </motion.h2>

      <div className="relative flex flex-col md:flex-row gap-12">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700 rounded-full"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col md:flex-row items-center gap-6 md:w-1/2"
          >
            {/* Icon Circle */}
            <div className="z-10 flex-shrink-0">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${edu.color} text-white shadow-lg`}>
                {edu.icon}
              </div>
            </div>

            {/* Education Info */}
            <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-3xl p-6 shadow-xl flex-1 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <p className="text-gray-300 font-semibold">{edu.field}</p>
              <p className="text-gray-400">{edu.university}</p>
              <p className="text-gray-400 mt-1">
                {edu.status} • {edu.expected}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
