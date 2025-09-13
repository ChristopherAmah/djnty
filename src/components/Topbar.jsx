import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-sans hidden">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        {/* Announcement text */}
        <span className="font-semibold text-xs md:text-sm tracking-wider uppercase">
          🎶 New Music Out Now!
        </span>

        {/* Call-to-action button */}
        <button className="bg-white text-orange-600 font-bold text-xs md:text-sm py-1.5 px-5 rounded-full shadow-md hover:bg-orange-100 hover:scale-105 transform transition duration-300">
          Listen
        </button>
      </div>
    </div>
  );
};

export default Topbar;
