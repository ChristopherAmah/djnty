import React, { useState } from "react";

const Banner = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="bg-orange-600 px-6 py-4 sm:px-12 sm:py-6 lg:px-24 lg:py-8 shadow-md">
      {/* Banner Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-md sm:text-2xl md:text-3xl font-medium text-white tracking-wide">
          🎶 NEW MUSIC OUT NOW!
        </h1>
        <button
          onClick={() => setShowPlayer(!showPlayer)}
          className="bg-white text-orange-600 font-medium text-sm lg:text-[16px] py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          {showPlayer ? "HIDE" : "LISTEN"}
        </button>
      </div>

      {/* Spotify Embed */}
      {showPlayer && (
        <div className="mt-6 animate-fadeIn">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/6Xvog0WSh2IWLCBNipFuJN?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Banner;

/* Add this animation in global.css or tailwind.config if using custom animations */
<style>
{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.4s ease-out forwards;
  }
`}
</style>
