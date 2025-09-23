import React, { useState, useEffect } from "react";
import {
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaSpotify,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import logo from "../assets/logobg.png";
import dmw from '../assets/dmw.jpg'
import dmwbg from '../assets/dmwbg.png'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-between">
      {/* Footer */}
      <footer className="relative bg-black text-white py-12 px-6 font-sans overflow-hidden">
        {/* Soft glowing background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[150px]" />

        {/* Content */}
        <div className="relative container mx-auto flex flex-col items-center space-y-8 z-10">
          {/* Logos side by side */}
          <div className="flex items-center justify-center space-x-6">
            <img src={logo} alt="Logo 1" className="h-12 w-auto" />
            <img src={dmwbg} alt="Logo 2" className="h-12 w-auto" />
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 text-xl">
            {[
              { href: "https://x.com/dj_nty", icon: <FaTwitter /> },
              { href: "https://www.youtube.com/@djnty", icon: <FaYoutube /> },
              { href: "https://tiktok.com/@dj_nty", icon: <FaTiktok  /> },
              { href: "https://spotify.com", icon: <FaSpotify /> },
              { href: "https://music.apple.com/ng/artist/dj-nty/1829243415", icon: <SiApplemusic /> },
              { href: "https://instagram.com/dj_nty", icon: <FaInstagram /> },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 text-orange-400 hover:bg-white hover:text-black transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DJ NTY. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-400/90 text-black p-3 rounded-full shadow-lg hover:bg-orange-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 z-50 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};

export default Footer;
