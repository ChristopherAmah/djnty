// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // npm install react-icons
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
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
        <div className="flex flex-col space-y-8 text-2xl font-semibold uppercase">
          <a 
            href="#music" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            Music
          </a>
          <a href="https://nevtooyoung.com" onClick={() => setIsOpen(false)}>Shop</a>
          <Link 
            to="/events" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            Events
          </Link>
          <Link 
            to="/gallery"
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            Gallery
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-orange-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-center flex-wrap md:flex-nowrap space-x-8">
        {/* Left-side links */}
        <a href="#music" className="uppercase text-base whitespace-nowrap">Music</a>
        <a href="https://nevtooyoung.com" className="uppercase text-base whitespace-nowrap">Shop</a>
        <a href="#" className="uppercase text-base whitespace-nowrap">Events</a>

        {/* Center logo */}
        <div className="py-2 md:py-0">
          <img src={logo} alt="NTY Logo" className="h-12" />
        </div>

        {/* Right-side links */}
        <a href="#" className="uppercase text-base whitespace-nowrap">Gallery</a>
        <a href="#" className="uppercase text-base whitespace-nowrap">About</a>
        <a href="#" className="uppercase text-base whitespace-nowrap">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
