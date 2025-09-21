import React from "react";
import { FaSpotify, FaApple } from "react-icons/fa";
import loupiano from "../assets/loupiano.png";

const NewMusic = () => {
  const newMusicData = {
    title: "Loupiano",
    artists: "Kobilou, DJ NTY",
    albumCovers: [loupiano],
    links: {
      spotify:
        "https://open.spotify.com/track/6Xvog0WSh2IWLCBNipFuJN?si=swE6QwfzTc6G7cZIV3XE5g",
      apple:
        "https://music.apple.com/ng/album/loupiano/1829243414?i=1829243416",
    },
  };

  return (
    <div className="relative bg-black text-white py-20 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10 text-center">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest uppercase mb-12 text-orange-400">
          New Music Out Now
        </h2>

        {/* Album cover */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src={newMusicData.albumCovers[0]}
              alt="Album Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Music info */}
        <div className="mt-10">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-wide text-orange-400">
            {newMusicData.title}
          </h3>
          <p className="mt-2 text-lg sm:text-xl opacity-70">
            {newMusicData.artists}
          </p>

          {/* Blurred consistent buttons */}
          <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
            <a
              href={newMusicData.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 
                         px-10 py-4 bg-transparent border border-white/40 
                         text-white text-lg font-medium rounded-full 
                         hover:bg-white hover:text-black transition-all 
                         transform hover:scale-105 backdrop-blur-sm 
                         min-w-[180px]"
            >
              <FaSpotify size={18} /> Spotify
            </a>

            <a
              href={newMusicData.links.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 
                         px-10 py-4 bg-transparent border border-white/40 
                         text-white text-lg font-medium rounded-full 
                         hover:bg-white hover:text-black transition-all 
                         transform hover:scale-105 backdrop-blur-sm 
                         min-w-[180px]"
            >
              <FaApple size={18} /> Apple Music
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMusic;
