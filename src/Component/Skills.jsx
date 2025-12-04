import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiNetlify,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Skills',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
    ],
  },
  {
    title: 'Backend Skills',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGitAlt />, color: '#181717' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
      { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Fast learner', color: '#8B5CF6' }, // purple
      { name: 'Teamwork', color: '#06B6D4' }, // cyan
      { name: 'Collaboration', color: '#F59E0B' }, // amber
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-transform"
          >
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/20 pb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: skill.color,
                    color: '#fff', // always white on hover
                  }}
                  className="flex items-center gap-2 bg-black/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-all cursor-pointer"
                >
                  {skill.icon && <span className="text-xl">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
