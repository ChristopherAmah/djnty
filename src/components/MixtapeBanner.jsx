import React from 'react';
import fivemix from '../assets/fivemix.avif'

const EPBanner = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Album Cover */}
        <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
          <img
            src={fivemix}
            alt="5IVE PARTY MIX"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <p className="text-orange-500 text-lg font-semibold">
            — NEW MIXTAPE ALERT!
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            5IVE PARTY MIX— <br className="hidden md:inline" />DJ Tunez & Amexin
          </h2>
          <button className="bg-orange-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-orange-500 transition-colors duration-300 mt-4">
            Listen Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EPBanner;
