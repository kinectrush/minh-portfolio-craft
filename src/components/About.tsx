
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About Me
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
          <p className="text-lg leading-relaxed text-gray-600 text-center">
            I'm a Senior Software Engineer with over six years of experience building production web
            applications across fintech, events, and enterprise platforms. My journey has taken me from
            front-end development at DXC Technology to leading teams at Techhaus Vietnam, and now
            architecting digital banking solutions at Galaxy Technology Services — giving me a strong
            command of both the React and Angular ecosystems, and a clear understanding of what it takes
            to ship reliable software at scale.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 text-center">
            Beyond writing code, I focus on system design, reusable architecture, and raising the bar
            through code reviews and mentorship. I'm driven to grow further in technical leadership —
            shaping engineering direction, elevating team capability, and turning complex business
            requirements into secure, performant products that users can trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
