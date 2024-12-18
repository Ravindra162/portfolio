import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.h1>
        <nav className="flex gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Ravindra162"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/tarakaravindra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:tarakravindra242005@gmail.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;