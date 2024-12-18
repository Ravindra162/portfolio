import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Taraka Ravindra</span>
            </h1>
            <h2 className="text-2xl text-gray-700 mb-6">
              Pre-Final year student | Full Stack Developer | Student at National Institute of Technology, Karnataka
            </h2>
            <p className="text-gray-600 mb-8">
              Passionate about creating beautiful and functional web applications.
              Currently pursuing my degree while building amazing projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <Code2 className="text-blue-600 w-8 h-8" />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <Database className="text-blue-600 w-8 h-8" />
            </div>
            <div className="absolute top-1/2 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <Globe className="text-blue-600 w-8 h-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;