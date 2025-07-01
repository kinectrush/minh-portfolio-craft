
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            Interested in working together? Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
            <Phone size={20} />
            <span>0909821252</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
            <Mail size={20} />
            <span>congminhk14@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
            <MapPin size={20} />
            <span>Ho Chi Minh, Vietnam</span>
          </div>
        </div>
        
        <div className="text-center">
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © 2024 Tran Cong Minh. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Interests: Watching Movies, Running
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
