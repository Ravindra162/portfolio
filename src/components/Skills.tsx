import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, Layout, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Layout, items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'] },
  { name: 'Backend Development', icon: Server, items: ['Node.js', 'Express', 'Python', 'Java'] },
  { name: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
  { name: 'Tools & Others', icon: Terminal, items: ['Git', 'Docker', 'AWS', 'Linux'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;