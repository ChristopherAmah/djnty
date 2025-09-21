import React from 'react';
import fivemix from '../assets/fivemix.avif';

const EPBanner = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12 relative z-10">
        {/* Album Cover with Glow */}
        <div className="relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3 group">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 opacity-30 blur-3xl group-hover:opacity-50 transition duration-500"></div>
          <img
            src={fivemix}
            alt="5IVE PARTY MIX"
            className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <p className="text-orange-400 text-lg font-semibold tracking-widest animate-pulse">
            — NEW MIXTAPE ALERT!
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-text-shine">
            5IVE PARTY MIX <br className="hidden md:inline" /> DJ NTY
          </h2>

          {/* Button with blur styling */}
          <button className="px-10 py-4 bg-transparent border border-white/40 text-white text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105 backdrop-blur-sm">
            🎧 Listen Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EPBanner;
