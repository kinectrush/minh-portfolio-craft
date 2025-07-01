
import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "ActiUp",
      url: "https://actiup.net",
      description: "Event management and ticketing platform"
    },
    {
      name: "eWaiver",
      url: "https://ewaiver.actiup.net",
      description: "Digital waiver management system"
    },
    {
      name: "Fipix",
      url: "https://fipix.actiup.net",
      description: "Photo sharing and management platform"
    },
    {
      name: "Pickup",
      url: "https://pickup.actiup.net",
      description: "Sports event pickup system"
    },
    {
      name: "Vietnam MTB Series",
      url: "https://vietnammtbseries.vn",
      description: "Mountain biking event series website"
    },
    {
      name: "Film dán nội thất Perfect",
      url: "https://giaiphapperfect.com",
      description: "Interior film solution company website"
    },
    {
      name: "Goglobal Web",
      url: "https://goglobal-web.com",
      description: "Global business solutions platform"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Mobile Applications</h3>
            <p className="text-gray-600">Acecook App, Limo App, Pensilia App (Private/Internal Apps)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
