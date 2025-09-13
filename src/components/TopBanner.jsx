import React from "react";

const Banner = () => {
  return (
    <div className="bg-orange-600 flex justify-between items-center px-6 py-4 sm:px-12 sm:py-6 lg:px-24 lg:py-8 shadow-md">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
        🎶 NEW MUSIC OUT NOW!
      </h1>
      <button className="bg-white text-orange-600 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
        LISTEN
      </button>
    </div>
  );
};

export default Banner;
