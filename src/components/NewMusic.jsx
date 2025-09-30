import React from "react";
import { FaSpotify, FaApple } from "react-icons/fa";
import loupiano from "../assets/loupiano.png";

const NewMusic = () => {
  const newMusicData = {
    title: "LOUPIANO",
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
    <div
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
      id="music"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-widest uppercase mb-16 text-center text-orange-400">
          Music
        </h2>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Album cover */}
          <div className="flex justify-center">
            <div className="relative w-64 sm:w-72 lg:w-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:shadow-orange-500/30 transition duration-500">
              <img
                src={newMusicData.albumCovers[0]}
                alt="Album Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Music info + buttons */}
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-4xl md:text-5xl font-extrabold text-orange-400 drop-shadow-lg">
              {newMusicData.title}
            </h3>
            <p className="text-lg md:text-xl opacity-80 font-light">
              {newMusicData.artists}
            </p>

            <div className="flex justify-center lg:justify-start gap-6 mt-6">
              <a
                href={newMusicData.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-medium shadow-lg hover:shadow-green-500/40 transform hover:scale-110 transition"
              >
                <FaSpotify size={22} />
                Spotify
              </a>
              <a
                href={newMusicData.links.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 text-black font-medium shadow-lg hover:shadow-white/40 transform hover:scale-110 transition"
              >
                <FaApple size={22} />
                Apple Music
              </a>
            </div>
          </div>
        </div>

        {/* Glass bar for mobile (icons only) */}
        <div className="mt-10 sm:hidden flex justify-center">
          <div className="flex items-center gap-8 px-6 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
            <a
              href={newMusicData.links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaSpotify size={28} className="text-white" />
            </a>
            <a
              href={newMusicData.links.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaApple size={28} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMusic;
