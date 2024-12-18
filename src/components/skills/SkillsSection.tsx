import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Terminal } from 'lucide-react';
import SkillCard from './SkillCard';

const skills = [
  { 
    name: 'Frontend Development',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    name: 'Backend Development',
    icon: Server,
    items: ['Node.js', 'Express', 'Python', 'Java']
  },
  {
    name: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    name: 'Tools & Others',
    icon: Terminal,
    items: ['Git', 'Docker', 'AWS', 'Linux']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              items={skill.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;