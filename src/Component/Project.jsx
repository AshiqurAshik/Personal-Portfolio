import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const projects = [
  {
    title: "Book Haven – Online Library (CRUD App)",
    description:
      "Book Haven is a full-stack online library where users can browse, add, update, and delete books. It features a responsive UI and clean CRUD functionality.",
    techPercent: { React: 80, "Node.js": 60, Express: 60, MongoDB: 50 },
    live: "https://lnkd.in/gk_uDna2",
    github: "https://lnkd.in/gudhSubX",
    gradient: "from-purple-500 to-cyan-400",
  },
  {
    title: "Green Nest – Plant Store with Firebase Auth",
    description:
      "Green Nest is a plant store app with secure Firebase authentication, offering a smooth and clean shopping experience with Tailwind CSS styling.",
    techPercent: { React: 80, Tailwind: 70, Firebase: 50 },
    live: "https://lnkd.in/gmfadc3c",
    github: "https://lnkd.in/gEmXsmWk",
    gradient: "from-green-400 to-teal-400",
  },
  {
    title: "Gadget Management System",
    description:
      "Gadget Management System allows users to add, update, view, and delete gadgets in real time. Includes Firebase authentication and responsive UI with Next.js.",
    techPercent: { NextJS: 70, Tailwind: 60, MongoDB: 50, Firebase: 40 },
    live: "https://lnkd.in/gBakRY6v",
    github: "https://lnkd.in/g_fe9q7F",
    gradient: "from-yellow-400 to-orange-400",
  },
];

const techIcons = {
  React: <SiReact color="#61DAFB" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  Express: <SiExpress color="#AAAAAA" />,
  MongoDB: <SiMongodb color="#47A248" />,
  Firebase: <SiFirebase color="#FFCA28" />,
  NextJS: <SiNextdotjs color="#FFFFFF" />,
  Tailwind: <SiTailwindcss color="#38BDF8" />,
};

const techColors = {
  React: "#61DAFB",
  "Node.js": "#339933",
  Express: "#AAAAAA",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  NextJS: "#FFFFFF",
  Tailwind: "#38BDF8",
};

const Project = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
        My Projects
      </h2>

      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col md:flex-row bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl hover:scale-105 transition-transform overflow-hidden"
          >
            {/* Left Side - Project Details */}
            <div className="md:w-3/5 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex gap-4 flex-wrap mt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-semibold hover:scale-105 transition-transform`}
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>

            {/* Right Side - Tech Usage */}
            <div className="md:w-2/5 flex flex-col gap-4 mt-6 md:mt-0 md:pl-8">
              {Object.entries(project.techPercent).map(([tech, percent], index) => (
                <div key={index}>
                  <div className="flex justify-between items-center text-white text-sm mb-1">
                    <span className="flex items-center gap-2">
                      {techIcons[tech]} {tech}
                    </span>
                    <span>{percent}%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${percent}%`,
                        background: techColors[tech],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
