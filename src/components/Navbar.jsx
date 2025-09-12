import React, { useState } from 'react';
import logo from '../assets/logo.png'

const App = () => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for the "More" dropdown menu visibility
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', isActive: true },
    { name: 'Music', href: '#music' },
    { name: 'Videos', href: '#videos' },
    { name: 'About', href: '#about' },
    { name: 'News', href: '#news' },
  ];

  const moreDropdownLinks = [
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // A simple way to generate content to make the page scrollable
  const dummyContent = Array.from({ length: 50 }, (_, i) => (
    <p key={i} className="py-2 text-gray-700">This is some dummy content to make the page scrollable.</p>
  ));

  return (
    <div className="bg-gray-100">
      <nav className="bg-black text-white p-4 font-sans shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Using a placeholder SVG for the logo */}
            <img src={logo} alt="" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  text-lg font-medium transition-colors duration-300
                  ${link.isActive ? 'text-orange-500' : 'text-gray-300 hover:text-white'}
                `}
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
                    isMoreDropdownOpen ? 'rotate-180' : 'rotate-0'
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
                <div
                  className="absolute right-0 mt-2 w-48 bg-black rounded-lg shadow-xl py-2 z-50 transition-opacity duration-300 ease-in-out"
                >
                  {moreDropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-300"
                      onClick={() => setIsMoreDropdownOpen(false)}
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 h-full w-64 z-40 p-4`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-4 mt-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium ${
                link.isActive ? 'text-orange-500' : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              className="flex items-center w-full text-left text-lg font-medium text-gray-300 hover:text-white"
            >
              More
              <svg
                className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                  isMoreDropdownOpen ? 'rotate-180' : 'rotate-0'
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
              <div className="flex flex-col mt-2 pl-4 space-y-2">
                {moreDropdownLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-gray-300 hover:text-white"
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
    </div>
  );
};

export default App;
