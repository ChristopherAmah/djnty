import React from 'react';
import hero from '../assets/hero.png';
import logo from '../assets/logo.png';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white p-4"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-2xl">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="w-32 md:w-40" />
            <span className="text-xl font-medium mt-2">
              DJ – Artiste – Producer
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center md:items-start">
            {/* DJ Mixes Button */}
            <a
              href="#dj-mixes"
              className="relative py-4 px-10 rounded-full border border-transparent bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-lg font-bold shadow-lg"
            >
              DJ Mixes
            </a>
            {/* Tour Dates Button */}
            <a
              href="#tour-dates"
              className="relative py-4 px-10 rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-colors duration-300 text-lg font-bold"
            >
              Event Dates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
