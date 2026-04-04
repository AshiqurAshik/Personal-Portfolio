import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      // Using Font Awesome Path for GitHub
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 496 512" 
          fill="currentColor"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
      ), 
      href: 'https://github.com/AshiqurAshik',
      color: 'hover:text-white hover:bg-zinc-800'
    },
    { 
      name: 'LinkedIn', 
      // Using Font Awesome Path for LinkedIn
      icon: (
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 448 512" 
          fill="currentColor"
        >
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
      ), 
      href: 'https://www.linkedin.com/in/ashiqur-rahman-it/',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    { 
      name: 'Facebook', 
      // Using Font Awesome Path for Facebook
      icon: (
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 512 512" 
          fill="currentColor"
        >
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.75l-11 71.69h-57.75V501C413.31 482.38 504 379.78 504 256z"/>
        </svg>
      ), 
      href: 'https://www.facebook.com/ashik.at.756',
      color: 'hover:text-blue-600 hover:bg-blue-600/10'
    }
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#020617] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
                MD ASHIQUR RAHMAN
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              </h1>
              <p className="text-slate-400 mt-4 max-w-sm leading-relaxed font-medium">
                Crafting high-performance digital experiences where design meets precision engineering. 
                Available for freelance opportunities and collaborations.
              </p>
            </motion.div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 text-slate-400 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Connect */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Direct Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:rashiqur688@gmail.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-indigo-500/50">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm font-medium">rashiqur688@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-indigo-500/50">
                    <ArrowUpRight size={14} />
                  </div>
                  <span className="text-sm font-medium">Hire for Projects</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation/Services */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {['Frontend Arch', 'UI Design', 'Interaction', 'React/Next.js', 'Performance'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs font-medium flex items-center gap-2">
            <span>&copy; {currentYear} MD Ashiqur Rahman</span>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            <span>Built with precision</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            Designed with <Heart size={12} className="text-red-500 fill-red-500/20" /> 
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;