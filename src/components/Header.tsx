
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Tran Cong Minh
          </h1>
          <p className="text-2xl md:text-3xl font-light text-blue-100 mb-8">
            Front-End Developer
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <Phone size={20} />
            <span>0909821252</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <Mail size={20} />
            <span>congminhk14@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
            <MapPin size={20} />
            <span>Ho Chi Minh, Vietnam</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
