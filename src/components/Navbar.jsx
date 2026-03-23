// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // npm install react-icons
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "../assets/logobg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3d3b3b] text-white p-4">
      {/* Mobile Layout */}
      <div className="flex justify-between items-center md:hidden">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        {/* Right: Hamburger */}
        <button onClick={() => setIsOpen(true)}>
          <HiMenuAlt2 size={24} />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 backdrop-blur-md bg-black/50 text-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button (top right) */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={28} />
        </button>

        {/* Links */}
        <div className="flex flex-col space-y-8 text-sm font-semibold">
          <a 
            href="#music" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            MUSIC
          </a>
          <a href="https://nevtooyoung.com" onClick={() => setIsOpen(false)}>SHOP</a>
          <Link 
            to="/events" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            EVENTS
          </Link>
          <Link 
            to="/gallery"
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            GALLERY
          </Link>
          {/* <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            About
          </Link> */}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-center flex-wrap md:flex-nowrap space-x-8">
        {/* Left-side links */}
        <a href="#music" className="text-sm whitespace-nowrap">MUSIC</a>
        <a href="https://nevtooyoung.com" className="text-sm whitespace-nowrap">SHOP</a>
        <Link to="/events" className="text-sm whitespace-nowrap">EVENTS</Link>

        {/* Center logo */}
        <Link to="/">
        <div className="py-2 md:py-0">
          <img src={logo} alt="NTY Logo" className="h-12" />
        </div>
        </Link>

        {/* Right-side links */}
        <Link to="/gallery" className="text-sm whitespace-nowrap">GALLERY</Link>
        {/* <a href="#" className="uppercase text-base whitespace-nowrap">About</a> */}
        <a href="#contact" className="text-sm whitespace-nowrap">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
