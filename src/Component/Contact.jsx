import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Send, CheckCircle2, AlertCircle, Globe, Zap, ArrowRight } from 'lucide-react';

// Custom SVG Social Icons
const SocialIcons = {
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  )
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const getEnv = (key) => {
      try {
        return import.meta.env[key];
      } catch (e) {
        return '';
      }
    };

    const serviceId = getEnv('VITE_EMAILJS_SERVICE_ID');
    const templateId = getEnv('VITE_EMAILJS_TEMPLATE_ID');
    const publicKey = getEnv('VITE_EMAILJS_PUBLIC_KEY');

    // Creating a formatted message string to ensure details appear in Gmail
    const formattedMessage = `
Sender Name: ${form.name}
Sender Email: ${form.email}

Message Content:
-------------------
${form.message}
    `;

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            user_name: form.name,
            user_email: form.email,
            from_name: form.name,
            reply_to: form.email,
            // Passing the formatted message string
            message: formattedMessage,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden selection:bg-indigo-500/30">
      {/* Refined Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,6,23,1)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Narrative */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <Zap size={14} className="text-indigo-400 fill-indigo-400/20" />
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase">Connect with Excellence</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05]">
                Let's evolve your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-slate-400 italic">digital presence.</span>
              </h2>

              <p className="text-lg text-slate-400 font-medium max-w-lg leading-relaxed">
                Whether you're looking for a full-scale build or an expert consultation, I bring a refined eye to every project.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                  <Globe size={18} />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Global Reach</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Accepting projects from innovative teams worldwide.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <Zap size={18} />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Rapid Delivery</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Agile development cycles with uncompromising quality.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Subtle card glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-indigo-500/20 via-transparent to-blue-500/20 rounded-[2.5rem] blur-xl opacity-40" />
            
            <div className="relative bg-[#0a0f1d]/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden">
              {/* Decorative glass elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Client Identity</label>
                    <User size={12} className="text-slate-600" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Pierce"
                    required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Secure Email</label>
                    <Mail size={12} className="text-slate-600" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alexander@company.com"
                    required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Briefing</label>
                    <Zap size={12} className="text-slate-600" />
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Explain your vision..."
                    rows={4}
                    required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group overflow-hidden bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-300">
                    {loading ? 'Processing...' : (
                      <>
                        Ignite Project
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>

                <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                  <a href="https://github.com/AshiqurAshik" target="_blank" rel="noopener noreferrer" className="text-white"><SocialIcons.Github /></a>
                  <a href="https://www.linkedin.com/in/ashiqur-rahman-it/" target="_blank" rel="noopener noreferrer" className="text-white"><SocialIcons.Linkedin /></a>
                </div>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center gap-3 p-4 rounded-xl border ${
                        status === 'success' 
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                          : 'bg-red-500/10 border-red-500/20 text-red-400'
                      }`}
                    >
                      {status === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {status === 'success' ? 'Transmission successful' : 'System error occurred'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;