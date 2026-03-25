import React from "react";
import urban1set from "../assets/fusion2.jpg";
import urban2set from "../assets/fusion1.jpg";
import urban3set from "../assets/u7.jpeg";

const EventSection = () => {
  const events = [
    {
      id: 1,
      title: "Urban Fusion",
      date: "2025-12-23",
      image: urban3set,
      // ticketLink: "https://myevents.com/summer-party"
    },
    {
      id: 2,
      title: "Urban Fusion",
      date: "2025-08-29",
      image: urban1set,
      // ticketLink: "https://myevents.com/summer-party"
    },
    {
      id: 3,
      title: "Urban Fusion",
      date: "2025-06-28",
      image: urban2set,
      // ticketLink: "https://myevents.com/beach-festival"
    },
  ];

  const today = new Date().setHours(0, 0, 0, 0);

  // Separate upcoming and past events
  const upcomingEvents = events.filter(
    (event) => new Date(event.date).setHours(0, 0, 0, 0) >= today
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date).setHours(0, 0, 0, 0) < today
  );

  return (
    <section className="bg-black text-white py-16 px-6 animate-fadeIn">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-orange-400 animate-slideUp">
          Events
        </h2>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform animate-scaleIn"
                >
                  {/* Full image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-contain"
                  />

                  {/* Dark overlay with details */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
                    <h4 className="text-xl font-bold">{event.title}</h4>
                    <p className="text-sm opacity-80">
                      {new Date(event.date).toDateString()}
                    </p>
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-6 py-2 bg-transparent border border-white/40 
                                 text-white text-sm font-medium rounded-full 
                                 hover:bg-white hover:text-black 
                                 transition-all transform hover:scale-105 
                                 backdrop-blur-sm"
                    >
                      🎟 Buy Ticket
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 opacity-70">
              Past Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="relative rounded-lg overflow-hidden shadow-md opacity-60"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-contain grayscale"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
                    <h4 className="text-lg font-bold">{event.title}</h4>
                    <p className="text-sm opacity-60">
                      {new Date(event.date).toDateString()}
                    </p>
                    <p className="text-red-400 font-semibold">Event Ended</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;
