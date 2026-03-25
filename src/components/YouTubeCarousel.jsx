import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const YouTubeCarousel = () => {
  const videos = [
    { id: 'W3S905gB-Ko' },
    { id: 'cNiXH6ERZ9k' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextVideo();
    }
    if (isRightSwipe) {
      prevVideo();
    }
  };

  return (
    <section className="text-white py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-widest uppercase mb-16 text-center text-orange-400">
            Mixes
        </h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-orange-400 transition-colors duration-300 text-2xl"
            aria-label="Previous video"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-orange-400 transition-colors duration-300 text-2xl"
            aria-label="Next video"
          >
            <FaChevronRight />
          </button>

          {/* Video Display */}
          <div 
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div key={video.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 hover:shadow-orange-500/20">
                    <iframe
                      width="100%"
                      height="250"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeCarousel;