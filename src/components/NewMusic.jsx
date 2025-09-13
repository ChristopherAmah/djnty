import React from "react";
import { FaSpotify, FaApple } from "react-icons/fa"; // Spotify + Apple Music icons
import loupiano from "../assets/loupiano.png";

const NewMusic = () => {
  const newMusicData = {
    title: "Loupiano",
    artists: "Kobilou, DJ NTY",
    albumCovers: [loupiano, loupiano, loupiano],
    links: {
      spotify:
        "https://open.spotify.com/track/6Xvog0WSh2IWLCBNipFuJN?si=swE6QwfzTc6G7cZIV3XE5g",
      apple:
        "https://music.apple.com/ng/album/loupiano/1829243414?i=1829243416",
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="container mx-auto text-center relative z-10">
        {/* Title */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-10 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          New Music
        </h2>

        {/* Album covers */}
        <div className="flex justify-center md:justify-center items-center md:space-x-10">
          {/* Only show one cover on small screens */}
          <div className="w-64 sm:w-72 md:w-72 lg:w-80 flex-shrink-0 relative group">
            <div className="overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
              <img
                src={newMusicData.albumCovers[0]}
                alt="Album Cover"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Glow hover effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 bg-orange-500 blur-3xl transition duration-500"></div>
          </div>

          {/* Extra covers only visible on medium+ screens */}
          <div className="hidden md:flex space-x-10">
            {newMusicData.albumCovers.slice(1).map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-72 lg:w-80 group"
              >
                <div className="overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src={src}
                    alt={`Album Cover ${index + 2}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 bg-orange-500 blur-3xl transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Music info */}
        <div className="mt-10">
          <h3 className="text-4xl sm:text-5xl font-bold tracking-wide drop-shadow-md">
            {newMusicData.title}
          </h3>
          <p className="mt-3 text-lg sm:text-2xl font-medium opacity-80">
            {newMusicData.artists}
          </p>

          {/* Buttons - always two side by side */}
          <div className="mt-8 flex justify-center items-center gap-3 flex-wrap">
            {/* Spotify */}
            <a
              href={newMusicData.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 text-white font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow-lg hover:shadow-green-400/40 transition duration-300 text-sm sm:text-base"
            >
              <FaSpotify size={20} className="" />
              Spotify
            </a>

            {/* Apple Music */}
            <a
              href={newMusicData.links.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-full shadow-lg hover:shadow-pink-400/40 transition duration-300 text-sm sm:text-base"
            >
              <FaApple size={20} className="" />
              Apple Music
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMusic;
