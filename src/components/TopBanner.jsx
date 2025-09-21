import React, { useState } from "react";

const MusicBanner = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile popup state
  const [isVisible, setIsVisible] = useState(true); // desktop visibility
  const [activeTab, setActiveTab] = useState("spotify"); // active player

  if (!isVisible) return null;

  const renderPlayer = () => {
    if (activeTab === "spotify") {
      return (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/6Xvog0WSh2IWLCBNipFuJN?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
          className="overflow-hidden"
        ></iframe>
      );
    } else {
      return (
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="175"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            background: "transparent",
            borderRadius: "12px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/track-id"
          title="Apple Music Player"
        ></iframe>
      );
    }
  };

  return (
    <>
      {/* Mobile: floating NEW MUSIC pill */}
      <div className="md:hidden fixed bottom-4 inset-x-0 flex justify-center z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transition animate-pulse"
        >
          🎵 NEW MUSIC
        </button>
      </div>

      {/* Mobile: Fullscreen popup */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center animate-slide-down">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
          >
            ✖
          </button>

          {/* Tabs */}
          <div className="flex gap-4 mt-10 mb-4">
            <button
              onClick={() => setActiveTab("spotify")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === "spotify"
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Spotify
            </button>
            <button
              onClick={() => setActiveTab("apple")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === "apple"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Apple Music
            </button>
          </div>

          {/* Player */}
          <div className="w-11/12 max-w-md">{renderPlayer()}</div>
        </div>
      )}

      {/* Desktop floating card */}
      <div
        className="
          hidden md:block
          fixed bottom-6 right-6 z-50
          bg-black text-white rounded-2xl shadow-xl p-4
          w-96 animate-slide-up
        "
      >
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
        >
          ✖
        </button>

        {/* Tabs */}
        <div className="flex gap-3 mb-3">
          <button
            onClick={() => setActiveTab("spotify")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
              activeTab === "spotify"
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Spotify
          </button>
          <button
            onClick={() => setActiveTab("apple")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
              activeTab === "apple"
                ? "bg-pink-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Apple Music
          </button>
        </div>

        {/* Player */}
        {renderPlayer()}
      </div>
    </>
  );
};

export default MusicBanner;
