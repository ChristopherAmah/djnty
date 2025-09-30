import React from "react";
import urbanneto from "../assets/urbanneto.jpg"; 
import urban2set from "../assets/urban2set.jpg"; 
import praying from "../assets/praying.jpg"; 
import urbanset from "../assets/urbanset.jpg"; 
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background images as grid */}
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <img src={urban2set} alt="Urban 1" className="w-full h-full object-cover" />
        <img src={urbanneto} alt="Urban 2" className="w-full h-full object-cover hidden sm:block" />
        <img src={praying} alt="Urban 3" className="w-full h-full object-cover hidden lg:block" />
        <img src={urbanset} alt="Urban 4" className="w-full h-full object-cover hidden xl:block" />
      </div>

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 space-y-8 animate-fadeIn">
        
        {/* Tagline in its own contrast box */}
        <div className="px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
            Feel the <span className="text-orange-400">Urban Vibe</span>
          </h1>
          <p className="text-gray-100 max-w-2xl mt-3 text-sm md:text-lg">
            Discover mixes, events, and the culture that keeps the rhythm alive 🎶
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <a
            href="#dj-mixes"
            className="px-12 py-4 font-sans bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
              text-white text-lg md:text-xl font-bold rounded-full shadow-lg 
              hover:shadow-pink-500/50 transition-all transform hover:scale-110"
          >
            🎧 Listen Now
          </a>
          <Link
            to="/events"
            className="px-12 py-4 font-sans border border-white/60 text-white text-lg md:text-xl font-medium 
              rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-110 backdrop-blur-md"
          >
            📅 Event Dates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
