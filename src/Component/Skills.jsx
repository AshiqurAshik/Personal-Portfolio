import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Terminal, Heart, Code2, Cpu, Globe, Cloud, Layout, ShieldCheck } from 'lucide-react';

// Custom SVG Icons for brands not in Lucide
const BrandIcons = {
  Postgres: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19.088 11.233c-.046-.062-.12-.08-.19-.053l-.117.04c-.11.04-.216.08-.32.124-.092.036-.183.076-.273.117a8.773 8.773 0 0 1-1.37.5c-.407.11-.823.187-1.246.23-.393.04-.79.057-1.186.057h-.01c-.13 0-.256-.003-.383-.01a6.452 6.452 0 0 1-1.78-.387 6.645 6.645 0 0 1-1.423-.747c-.207-.15-.403-.31-.586-.484l-.173-.173c-.053-.053-.133-.06-.196-.02-.27.167-.52.36-.75.57-.226.207-.433.43-.616.67-.19.24-.356.5-.496.77-.13.25-.236.52-.316.793a4.57 4.57 0 0 0-.173.863c-.027.31-.027.62 0 .93.033.3.093.6.176.89.09.313.21.616.356.91.15.3.326.586.526.853.213.283.453.546.716.786.27.246.56.466.866.656.31.196.64.363.98.5a6.59 6.59 0 0 0 1.2.333c.123.017.25.03.376.04h.01c.42.02.84.02 1.263 0 .42-.02.84-.067 1.253-.143.413-.08.82-.193 1.216-.343a8.87 8.87 0 0 0 1.543-.76c.143-.086.286-.176.423-.27l.08-.056c.07-.05.153-.04.21.026.06.066.053.166-.013.226l-.04.036c-.15.13-.306.253-.466.37a9.77 9.77 0 0 1-2.5 1.25c-.53.176-1.076.306-1.636.38a9.49 9.49 0 0 1-1.713.06 9.42 9.42 0 0 1-1.67-.23 9.49 9.49 0 0 1-1.57-.54 9.68 9.68 0 0 1-1.426-.81 9.5 9.5 0 0 1-1.233-1.04 9.77 9.77 0 0 1-2.486-4.66 9.59 9.59 0 0 1-.03-3.41c.143-.84.406-1.653.776-2.42a9.66 9.66 0 0 1 2.37-3.08c.5-.436 1.04-.813 1.62-1.12.593-.313 1.22-.56 1.866-.733a9.67 9.67 0 0 1 3.526-.11 9.77 9.77 0 0 1 5.346 3.1c.1.11.1.28 0 .39l-.023.023c-.11.11-.29.11-.4 0a8.85 8.85 0 0 0-4.823-2.776 8.78 8.78 0 0 0-3.173.08 8.8 8.8 0 0 0-1.69.65 8.7 8.7 0 0 0-1.46.99 8.77 8.77 0 0 0-2.14 2.77 8.73 8.73 0 0 0-.7 2.18c-.06.406-.096.82-.1 1.233v.01c.003.55.056 1.103.16 1.646.106.543.27 1.073.493 1.58.23.506.523.98.87 1.413.353.44.753.836 1.2 1.183a8.81 8.81 0 0 0 1.47.93c.53.276 1.096.48 1.683.61a8.62 8.62 0 0 0 1.766.19c.306.01.616 0 .92-.023.32-.023.636-.067.95-.13.313-.06.626-.143.93-.246.303-.1.603-.223.89-.36.286-.136.566-.29.83-.46.26-.166.506-.346.733-.54.06-.056.153-.053.213.01a.152.152 0 0 1-.001.213z"/>
    </svg>
  ),
  Mongo: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M17.193 9.555c-1.047-4.135-4.46-7.394-5.06-7.944a.262.262 0 0 0-.348-.002c-.785.69-4.004 3.655-5.023 7.828-.68 2.787-.193 5.37.525 7.158.468 1.164 1.133 2.213 1.956 3.036l.24.238c.677.674 1.637 1.085 2.682 1.127.152.006.304.009.456.009.96 0 1.849-.24 2.63-.66l.16-.088a4.576 4.576 0 0 0 1.74-2.128c.783-1.921 1.251-4.704.042-8.574zm-5.187 11.236c-.463-.03-.9-.202-1.212-.513l-.226-.226c-.732-.732-1.328-1.686-1.745-2.723-.623-1.552-1.047-3.832-.455-6.263.856-3.504 3.42-6.108 4.223-6.883.674.62 3.178 3.084 4.103 6.74.966 3.107.604 5.35-.04 6.93a3.54 3.54 0 0 1-1.35 1.65l-.048.026c-.66.353-1.428.535-2.25.535-.12 0-.236-.003-.356-.01l-.044-.001a1.91 1.91 0 0 1-.844-.262zM11.516 4.09l-.025.1c-.244.97-.852 3.865-.01 7.234.05.203.04.42-.03.616-.07.195-.213.354-.4.444l-.1.05a2.26 2.26 0 0 0-.583.425c-.324.323-.556.716-.677 1.144-.136.48-.152 1.002-.032 1.503.226.942.84 1.737 1.674 2.164l.11.05c.187.09.4.088.586-.002a.66.66 0 0 0 .34-.582V4.767a.667.667 0 0 0-.67-.677h-.003c-.06 0-.12.01-.18.03z"/>
    </svg>
  )
};

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: <Layers size={20} className="text-purple-400" />,
    skills: [
      { name: 'HTML5', icon: <Layout size={18} />, color: '#E34F26' },
      { name: 'CSS3', icon: <Code2 size={18} />, color: '#1572B6' },
      { name: 'JavaScript', icon: <Cpu size={18} />, color: '#F7DF1E' },
      { name: 'React.js', icon: <Globe size={18} />, color: '#61DAFB' },
      { name: 'Next.js', icon: <Cloud size={18} />, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: <ShieldCheck size={18} />, color: '#38BDF8' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: <Database size={20} className="text-cyan-400" />,
    skills: [
      { name: 'Node.js', icon: <Cpu size={18} />, color: '#339933' },
      { name: 'Express.js', icon: <Terminal size={18} />, color: '#ffffff' },
      { name: 'PostgreSQL', icon: <BrandIcons.Postgres />, color: '#4169E1' },
      { name: 'MongoDB', icon: <BrandIcons.Mongo />, color: '#47A248' },
      { name: 'Firebase', icon: <Cloud size={18} />, color: '#FFCA28' },
    ],
  },
  {
    title: 'Development Workflow',
    icon: <Terminal size={20} className="text-blue-400" />,
    skills: [
      { name: 'Git', icon: <Code2 size={18} />, color: '#F05032' },
      { name: 'GitHub', icon: <Terminal size={18} />, color: '#ffffff' },
      { name: 'Postman', icon: <Globe size={18} />, color: '#FF6C37' },
      { name: 'Vercel', icon: <Cloud size={18} />, color: '#ffffff' },
      { name: 'Netlify', icon: <Layout size={18} />, color: '#00C7B7' },
    ],
  },
  {
    title: 'Professional Values',
    icon: <Heart size={20} className="text-pink-400" />,
    skills: [
      { name: 'Fast Learner', color: '#A78BFA' },
      { name: 'Teamwork', color: '#22D3EE' },
      { name: 'Collaboration', color: '#FBBF24' },
      { name: 'Mentorship', color: '#F472B6' },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter text-center"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Toolkit</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 20px -10px ${skill.color}80`
                    }}
                    style={{ '--hover-color': skill.color }}
                    className="relative flex items-center gap-2.5 bg-white/5 text-gray-300 px-5 py-2.5 rounded-xl border border-white/5 hover:border-white/20 hover:text-white transition-all cursor-pointer group/skill"
                  >
                    {/* Hover Background Accent */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/skill:opacity-10 transition-opacity rounded-xl"
                      style={{ backgroundColor: skill.color }}
                    />
                    
                    {skill.icon && (
                      <span 
                        className="text-xl transition-colors duration-300 flex items-center justify-center"
                        style={{ color: 'inherit' }}
                      >
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-sm font-medium tracking-wide">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Corner Background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;