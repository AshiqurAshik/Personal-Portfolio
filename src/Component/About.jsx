import React from "react";
import { motion } from "framer-motion";
import { User, Code, Lightbulb, Target } from "lucide-react";
import previewImg from "../assets/img-1.jpg"


// Note: Local assets cannot be resolved in this preview environment.
// For your local project, uncomment the line below and use your asset.
// import profileImg from "../assets/img-1.jpg";

const About = () => {
  // Fallback image for preview purposes

  const stats = [
    { icon: <Code size={20} />, label: "Clean Code", color: "text-purple-400" },
    { icon: <Lightbulb size={20} />, label: "Creative", color: "text-cyan-400" },
    { icon: <Target size={20} />, label: "Solution Minded", color: "text-blue-400" },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[40%] relative"
          >
            {/* Multi-layered Border Effect */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
              
              <div className="relative aspect-square md:w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={previewImg}
                  alt="MD Ashiqur Rahman"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Identity</p>
                    <p className="text-sm font-bold text-white tracking-tight">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%]"
          >
            {/* Sub-header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-purple-500/50" />
              <span className="text-xs uppercase tracking-[0.4em] text-purple-400 font-black">WHO I AM</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">Me</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I’m <span className="text-white font-medium">MD Ashiqur Rahman</span>, a MERN stack developer passionate about crafting
                modern, interactive web applications. I love turning ideas into
                clean, efficient code while exploring new technologies.
              </p>
              
              <p>
                Problem-solving and creative challenges excite me the most. Outside of coding, I enjoy
                reading, exploring tech trends, and indulging in hobbies that inspire
                creativity. Always curious, I aim to grow and make an impact through
                my work.
              </p>
            </div>

            {/* Premium Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors"
                >
                  <div className={`${stat.color} mb-3`}>
                    {stat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase">{stat.label}</h4>
                </motion.div>
              ))}
            </div>

            {/* Signature Area (Optional style element) */}
            <div className="mt-12 flex items-center gap-4 opacity-50">
                <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden grayscale">
                   <img src={previewImg} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                   <p className="text-xs text-white font-bold italic tracking-widest opacity-80 underline underline-offset-4 decoration-purple-500">M. Ashiqur Rahman</p>
                   <p className="text-[10px] uppercase text-gray-500 font-medium">Crafting the future</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;