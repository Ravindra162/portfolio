import React from 'react';
import { motion } from 'framer-motion';
import { Code, LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  items: string[];
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, items, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-gray-600 flex items-center">
            <Code className="w-4 h-4 mr-2 text-blue-500" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;