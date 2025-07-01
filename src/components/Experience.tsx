
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Techhaus Vietnam JSC",
      position: "Front-End Developer",
      period: "June 2021 – Present",
      responsibilities: [
        "Front-End Lead for multiple projects",
        "Developed SSR web apps for SEO & performance",
        "Built ticketing platforms, integrated payment gateways",
        "Code quality via unit tests and code reviews",
        "Collaborated with UI/UX, PMs, backend engineers"
      ],
      projects: "ActiUp, eWaiver, Fipix, Pickup, Vietnam MTB Series, Acecook App, Limo App, Pensilia App",
      stack: "ReactJS, React Native, Next.js, TailwindCSS, HTML5, SCSS"
    },
    {
      company: "DXC Technology",
      position: "Front-End Developer",
      period: "2019 – June 2021",
      responsibilities: [
        "Developed front-end components for enterprise insurance platforms",
        "Fixed bugs, added features, unit testing"
      ],
      projects: "Insurance Web Application",
      stack: "Angular, Karma, Node.js, HTML5, SCSS"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.position}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Projects:</h4>
                <p className="text-gray-600">{exp.projects}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.split(', ').map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
