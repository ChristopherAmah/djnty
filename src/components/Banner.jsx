import React from "react";

const MixesBanner = () => {
  return (
    <a
      href="https://open.spotify.com/playlist/your-mixes-link" // replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-gray-900 text-gray-100 text-center py-3 px-4 shadow-md hover:bg-gray-800 transition-colors"
    >
      <p className="text-base md:text-lg font-medium tracking-wide">
        New Mixes Out Now
      </p>
    </a>
  );
};

export default MixesBanner;
