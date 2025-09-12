import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSpotify,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";

const App = () => {
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
    <div className="bg-gray-100 flex flex-col justify-between">

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-4 font-sans border-t-4 border-orange-500">
        <div className="container mx-auto flex flex-col items-center space-y-8">
          {/* Social Media */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-orange-500 hover:text-white transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-orange-500 hover:text-white transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="text-orange-500 hover:text-white transition transform hover:scale-110"
            >
              <FaYoutube />
            </a>
            <a
              href="https://spotify.com"
              aria-label="Spotify"
              className="text-orange-500 hover:text-white transition transform hover:scale-110"
            >
              <FaSpotify />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-orange-500 hover:text-white transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 z-50"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};

export default App;
