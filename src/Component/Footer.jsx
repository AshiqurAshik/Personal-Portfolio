import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900/70 backdrop-blur-md border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            MD Ashiqur Rahman
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Building modern web experiences with passion
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-white text-xl">
          <a
            href="https://github.com/AshiqurAshik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ashiqur-rahman-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/ashik.at.756"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MD Ashiqur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
