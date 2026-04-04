import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Globe, Database, Cpu, Layers, Layout, ShieldCheck, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Book Haven – Online Library',
    subtitle: 'Full-Stack CRUD Application',
    description:
      'A comprehensive library management system where users can browse, add, and manage a digital collection with real-time updates and seamless CRUD operations.',
    techPercent: { React: 85, 'Node.js': 60, Express: 60, MongoDB: 50 },
    live: 'https://book-haven-library.netlify.app/',
    github: 'https://github.com/AshiqurAshik/The-Book-Haven-client-?tab=readme-ov-file',
    gradient: 'from-purple-500 via-indigo-500 to-cyan-400',
    accentColor: '#A855F7',
  },
  {
    title: 'Green Nest – Plant Store',
    subtitle: 'E-commerce with Firebase Auth',
    description:
      'A boutique plant shopping experience featuring secure authentication and a highly responsive catalog styled with tailored Tailwind components.',
    techPercent: { React: 80, Tailwind: 75, Firebase: 55 },
    live: 'https://green-nest-plant.netlify.app/',
    github: 'https://github.com/AshiqurAshik/GreenNest-plant-shop',
    gradient: 'from-emerald-400 via-teal-500 to-green-600',
    accentColor: '#10B981',
  },
  {
    title: 'Gadget Management System',
    subtitle: 'Next.js Real-time Dashboard',
    description:
      'Real-time inventory management for modern gadgets. Built on Next.js to provide optimized performance and a smooth, dashboard-style user interface.',
    techPercent: { NextJS: 75, Tailwind: 65, MongoDB: 50, Firebase: 40 },
    live: 'https://gadget-management-system.vercel.app/',
    github: 'https://github.com/AshiqurAshik/Gadget-Management-System',
    gradient: 'from-orange-400 via-amber-500 to-yellow-600',
    accentColor: '#F59E0B',
  },
];

const techIcons = {
  React: <Globe size={14} className="text-[#61DAFB]" />,
  'Node.js': <Cpu size={14} className="text-[#339933]" />,
  Express: <TerminalIcon />,
  MongoDB: <DatabaseIcon />,
  Firebase: <ShieldCheck size={14} className="text-[#FFCA28]" />,
  NextJS: <Layers size={14} className="text-white" />,
  Tailwind: <Layout size={14} className="text-[#38BDF8]" />,
};

const techColors = {
  React: '#61DAFB',
  'Node.js': '#339933',
  Express: '#94A3B8',
  MongoDB: '#10B981',
  Firebase: '#FFCA28',
  NextJS: '#FFFFFF',
  Tailwind: '#38BDF8',
};

// SVG Fallback for Github to avoid external dependency issues
function GithubSVG({ size = 20, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}

const Project = () => {
  return (
    <section id="projects" className="relative py-40 bg-[#020617] overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Zap size={14} className="text-yellow-400 fill-yellow-400/20" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-white/70 uppercase">Featured Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Masterpieces</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-500 max-w-2xl text-lg font-medium"
          >
            A collection of full-stack projects focusing on performance, 
            scalability, and user-centric design.
          </motion.p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                
                {/* Visual/Description Half */}
                <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-8">
                    <span className={`h-px w-12 bg-gradient-to-r ${project.gradient}`} />
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">{project.subtitle}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                    {project.title}
                  </h3>
                  
                  <div className="relative mb-10">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    <p className="text-gray-400 text-xl leading-relaxed font-light pl-6 italic">
                      "{project.description}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-5">
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} rounded-2xl text-white font-extrabold shadow-2xl transition-all hover:brightness-110`}
                    >
                      Explore Project 
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      whileTap={{ scale: 0.98 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold transition-all hover:text-white"
                    >
                      <GithubSVG size={20} />
                      Code Repository
                    </motion.a>
                  </div>
                </div>

                {/* Technical Stats Half */}
                <div className="lg:col-span-5 relative bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/10 p-10 lg:p-16 flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/[0.01] pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-1">Architecture</h4>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Performance Metrics</p>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                        <Database size={20} />
                      </div>
                    </div>

                    <div className="space-y-8">
                      {Object.entries(project.techPercent).map(([tech, percent], i) => (
                        <div key={i} className="group/stat">
                          <div className="flex justify-between items-end mb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover/stat:border-white/20 transition-all">
                                {techIcons[tech] || <Code2 size={16} />}
                              </div>
                              <span className="text-xs font-bold text-gray-300 tracking-wider uppercase group-hover/stat:text-white transition-colors">{tech}</span>
                            </div>
                            <span className="text-[11px] font-black text-gray-500 group-hover/stat:text-white transition-colors">{percent}%</span>
                          </div>
                          
                          <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${percent}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                              className="h-full rounded-full relative"
                              style={{ backgroundColor: techColors[tech] }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-[shimmer_3s_infinite] translate-x-[-100%]" />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-14 p-6 rounded-3xl bg-white/[0.03] border border-white/5 flex items-start gap-4">
                      <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <ShieldCheck size={16} />
                      </div>
                      <p className="text-[10px] text-gray-500 leading-normal uppercase tracking-tight font-bold">
                        Analysis complete: High efficiency code distribution verified for {project.title}.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Hover Glow */}
                <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-[100px] transition-opacity duration-1000 rounded-full pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;