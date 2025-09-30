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
    <div className="relative bg-black text-white py-20 px-6 overflow-hidden" id="music">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10 text-center">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl font-sans md:text-5xl font-light tracking-widest uppercase mb-12 text-orange-400">
          Music
        </h2>

        {/* Album cover with floating icons (desktop) */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src={newMusicData.albumCovers[0]}
              alt="Album Cover"
              className="w-full h-full object-cover"
            />

            {/* Floating icons (desktop only) */}
            <div className="hidden sm:flex absolute inset-0 items-center justify-center gap-8">
              <a
                href={newMusicData.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/30 hover:scale-110 hover:text-orange-400 transition"
              >
                <FaSpotify size={26} />
              </a>
              <a
                href={newMusicData.links.apple}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/30 hover:scale-110 hover:text-orange-400 transition"
              >
                <FaApple size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Music info */}
        <div className="mt-10">
          <h3 className="text-3xl sm:text-4xl font-sans font-semibold tracking-wide text-orange-400">
            {newMusicData.title}
          </h3>
          <p className="mt-2 text-lg sm:text-xl font-sans opacity-70">
            {newMusicData.artists}
          </p>
        </div>

        {/* Glass bar for mobile (icons only) */}
        <div className="mt-6 sm:hidden flex justify-center">
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
