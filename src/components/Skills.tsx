
import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skills = [
    'ReactJS',
    'React Native',
    'Next.js',
    'HTML5',
    'SCSS',
    'TailwindCSS',
    'Unit Testing'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Code className="mx-auto mb-3 text-blue-600" size={32} />
              <span className="text-gray-800 font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
