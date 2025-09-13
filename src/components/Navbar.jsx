import React, { useState } from "react";
import logo from "../assets/logo.png";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", isActive: true },
    { name: "Music", href: "#music" },
    { name: "Videos", href: "#videos" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
  ];

  const moreDropdownLinks = [
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 font-sans shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="w-24" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors duration-300 ${
                  link.isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* "More" Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="flex items-center text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
              >
                More
                <svg
                  className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                    isMoreDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isMoreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black rounded-lg shadow-xl py-2 z-50">
                  {moreDropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Nav Links */}
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-2xl font-bold transition duration-300 transform hover:scale-110 ${
                  link.isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* More Dropdown */}
            <div>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="text-2xl font-bold text-gray-300 hover:text-white flex items-center justify-center"
              >
                More
                <svg
                  className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
                    isMoreDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isMoreDropdownOpen && (
                <div className="flex flex-col mt-4 space-y-2">
                  {moreDropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg text-gray-300 hover:text-white transition duration-300"
                      onClick={() => {
                        setIsMoreDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

/* Tailwind Animations (add to global CSS if not using a plugin) */
<style>
{`
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`}
</style>
