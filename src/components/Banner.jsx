import React from "react";

const MixesBanner = () => {
  return (
    <a
      href="https://audiomack.com/djnty/song/5ive-party-mix-2" // replace with your actual link
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full overflow-hidden"
    >
      {/* Background with blur + subtle gradient */}
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-black/60 via-gray-900/50 to-black/60 border-y border-white/10" />

      {/* Content */}
      <div className="relative text-center py-4 px-6 z-10">
        <p className="text-lg md:text-xl font-semibold tracking-wide text-orange-400">
          🎧 New Mixes Out Now – Tap to Listen
        </p>
      </div>

      {/* Glow accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-transparent to-orange-400/10 animate-pulse" />
    </a>
  );
};

export default MixesBanner;
