import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function LiveArchive() {
  const liveSessions = [
    {
      id: "du-2026",
      title: "The Founder's Narrative: Delhi University Chapter",
      thumbnail: "./src/assets/events/EventDU.webp", // Ensure this exists or use a placeholder
      platform: "University of Delhi",
      date: "Today | 3:30 PM",
      status: "live", 
      link: "#"
    },

  ];
  return (
    <section className="p-6 md:p-12 lg:p-20 bg-[#FBFBFB]">
      {/* HEADER */}
      <div className="mb-16 text-center">
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight"
        >
          Digital Archive
        </h2>
        <p className="text-neutral-500 mt-4 text-sm uppercase tracking-widest">
          Curated Sessions & Live Recordings
        </p>
      </div>

      {/* PINTEREST-STYLE MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {liveSessions.map((live, i) => (
          <div
            key={i}
            className="break-inside-avoid group cursor-pointer bg-white p-4 rounded-3xl border border-neutral-100/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative aspect-square overflow-hidden rounded-2xl mb-5">
              <img
                src={live.thumbnail}
                alt={live.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                onError={(e) => { e.target.src = "https://placehold.co/600x600/000/fff?text=Live+at+DU"; }}
              />

              {/* LIVE/UPCOMING PULSE BADGE */}
              {live.status === "live" && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white text-[8px] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-lg z-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Live @ 3:30 PM
                </div>
              )}

              {/* PLAY BUTTON OVERLAY */}
              {/* <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <PlayCircle
                  size={24}
                  className="text-neutral-900"
                  strokeWidth={1.5}
                />
              </div> */}

              {/* PLATFORM TAG */}
              <div className="absolute bottom-4 left-4 bg-black/80 text-white text-[9px] px-3 py-1.5 rounded-full font-medium uppercase tracking-widest scale-90 group-hover:scale-100 transition-transform duration-300">
                {live.platform}
              </div>
            </div>

            {/* TEXT DETAILS */}
            <div className="px-1 pb-2">
              <h4 className="text-lg font-medium text-neutral-900 leading-snug mb-1 group-hover:text-red-700 transition-colors">
                {live.title}
              </h4>
              <div className="flex items-center justify-between mt-3 text-xs uppercase tracking-widest">
                <p className={live.status === 'live' ? "text-red-600 font-bold animate-pulse" : "text-neutral-500"}>
                  {live.date}
                </p>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-600 font-bold">
                  {live.status === 'live' ? "Join Session →" : "View →"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}