import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background Glow */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 opacity-20 blur-3xl -z-10 animate-blob"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-gray-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto"
      >
        I’m always excited to work on new projects and collaborate with amazing
        people. Feel free to send me a message or connect via social platforms.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex-1 relative bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col gap-4 overflow-hidden"
        >
          {/* Animated Glow */}
          <motion.div
            className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-cyan-400 opacity-30 rounded-full blur-3xl -z-10 animate-blob"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="bg-gray-800 text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links / Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 relative bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-800 flex flex-col gap-6 justify-center items-center text-center overflow-hidden"
        >
          {/* Animated Glow */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-gradient-to-r from-green-400 to-teal-400 opacity-30 rounded-full blur-3xl -z-10 animate-blob"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <h3 className="text-2xl font-bold text-white mb-4">Connect with me</h3>
          <div className="flex gap-6 text-white text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="text-gray-300 mt-4">
            Or send me a message directly through the form. I’ll get back to you
            as soon as possible!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
