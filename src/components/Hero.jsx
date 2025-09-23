import React from "react";
import urbanhero from "../assets/urbanhero.jpg"; // desktop bg
import urban2set from "../assets/urban2set.jpg"; // mobile bg
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center block lg:hidden"
        style={{ backgroundImage: `url(${urban2set})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${urbanhero})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        {/* Tagline */}
        <span className="text-sm md:text-base tracking-widest uppercase text-orange-400 mb-8 animate-fadeIn">
          DJ NTY - URBAN FUSION
        </span>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-5">
          <a
            href="#dj-mixes"
            className="px-10 py-4 font-sans bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-pink-500/50 transition-all transform hover:scale-105"
          >
            🎧 Listen Now
          </a>
          <Link
            to="/events"
            className="px-10 py-4 font-sans bg-transparent border border-white/40 text-white text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            📅 Event Dates
          </Link>
        </div>
      </div>

      {/* Floating Glow Circle */}
      {/* <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div> */}
    </section>
  );
};

export default Hero;
