import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  icon: string;
  delay?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="flex flex-col items-center justify-center p-4"
    >
      <img 
        src={icon} 
        alt={name} 
        className="w-12 h-12 mb-2"
      />
      <span className="text-sm text-gray-600">{name}</span>
    </motion.div>
  );
};

export default TechIcon;