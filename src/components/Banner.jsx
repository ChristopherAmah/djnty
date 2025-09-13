import React from 'react';

const Banner = () => {
  return (
    <div className="bg-orange-600 flex justify-between items-center px-8 py-6 sm:px-16 sm:py-8 lg:px-32 lg:py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        NEW MIXES!
      </h1>
      <button className="bg-white text-orange-600 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
        LISTEN
      </button>
    </div>
  );
};

export default Banner;
