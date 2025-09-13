import React from "react";
import hero from "../assets/hero.png";
import urbanhero from "../assets/urbanhero.jpg";
import logo from "../assets/logo.png";
import urban2set from "../assets/urban2set.jpg";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white p-6 overflow-hidden">
        {/* Mobile / md background */}
        <div
          className="absolute inset-0 bg-cover bg-center block lg:hidden"
          style={{ backgroundImage: `url(${urban2set})` }}
          aria-hidden="true"
        />

        {/* Large-screen background (swaps in at lg and above) */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden lg:block"
          style={{ backgroundImage: `url(${urbanhero})` }}
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Floating Glow Behind Logo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-3xl animate-fadeIn">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center">
            {/* Uncomment if you want the logo */}
            {/* <img src={logo} alt="Logo" className="w-32 md:w-44 drop-shadow-lg animate-float" /> */}
            <span className="text-xl md:text-2xl font-light mt-3 tracking-wide text-gray-200 animate-slideUp">
              🎶 DJ – Artiste – Producer 🎶
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight animate-slideUp text-orange-400 drop-shadow-md">
            Feel The Vibes. <br /> Own The Night.
          </h1>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center md:items-start">
            <a
              href="#dj-mixes"
              className="relative py-4 px-10 rounded-full bg-orange-500 text-white font-bold text-lg shadow-xl hover:bg-orange-600 hover:shadow-orange-400/50 transition duration-300 transform hover:scale-105"
            >
              🎧 DJ Mixes
            </a>
            <a
              href="#tour-dates"
              className="relative py-4 px-10 rounded-full border-2 border-orange-500 text-orange-400 font-bold text-lg hover:bg-orange-500 hover:text-white transition duration-300 transform hover:scale-105"
            >
              📅 Event Dates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
