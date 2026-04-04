import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, Building2, CheckCircle2, Timer } from 'lucide-react';

const educationData = [
  {
    degree: 'BSc in Computer Science',
    field: 'AIUB',
    university: 'American International University-Bangladesh',
    status: 'Studying',
    expected: '2027',
    icon: <GraduationCap size={24} />,
    color: 'from-purple-500 to-cyan-400',
    accent: 'purple'
  },
  {
    degree: 'HSC',
    field: 'Science',
    university: 'Adamjee Cantonment College',
    status: 'Completed',
    expected: '2022',
    icon: <School size={24} />,
    color: 'from-blue-500 to-indigo-500',
    accent: 'blue'
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <GraduationCap size={14} className="text-purple-400" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Academic Path</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">& History</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Center Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-800 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node (Icon) */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-20">
                   <div className={`absolute inset-0 bg-gradient-to-tr ${edu.color} blur-md opacity-40 rounded-xl animate-pulse`} />
                   <div className={`relative w-full h-full bg-[#0a0a0a] border border-white/20 rounded-xl flex items-center justify-center text-white shadow-2xl`}>
                      {edu.icon}
                   </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-20 md:pl-0">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl"
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        edu.status === 'Completed' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {edu.status === 'Completed' ? <CheckCircle2 size={10} /> : <Timer size={10} />}
                        {edu.status}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                        <Calendar size={12} />
                        {edu.expected}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="p-2 rounded-lg bg-white/5">
                          <Building2 size={16} className="text-purple-400" />
                        </div>
                        <span className="text-sm font-semibold tracking-tight">{edu.university}</span>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Specializing in <span className="text-white font-medium">{edu.field}</span>. 
                        Dedicated to mastering core engineering principles and modern computational theories.
                      </p>
                    </div>

                    {/* Decorative Bottom Corner Accent */}
                    <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity blur-2xl rounded-full`} />
                  </motion.div>
                </div>
                
                {/* Spacer for Desktop Grid alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;