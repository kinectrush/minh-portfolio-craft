
import React from 'react';
import { Book } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Education
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Book className="text-blue-600 mr-4" size={48} />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Bachelor of Information Technology
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                HCMC University of Technology and Education
              </p>
              <p className="text-blue-600 font-semibold">2014 – 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
