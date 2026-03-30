import React from "react";
import { motion } from "framer-motion";

const images = [
  { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400", text: "Mixing aesthetics with the landscape.", aspect: "aspect-[3/4.2]", mt: "mt-0" },
  { url: "https://images.unsplash.com/photo-1529139513055-07f9127e6db2?w=400", text: "My mom says I'm extra...", aspect: "aspect-[4/5]", mt: "mt-16" },
  { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400", text: "Starbucks goal", aspect: "aspect-square", mt: "mt-4" },
  { url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=400", text: "I followed a trend", aspect: "aspect-[2/3]", mt: "mt-24" },
  { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", text: "Graduated 2022", aspect: "aspect-[3/4]", mt: "mt-8" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", text: "Hobbies after USA", aspect: "aspect-[4/5]", mt: "mt-20" },
];

const duplicatedImages = [...images, ...images];

const DarkPortfolioSlider = () => {
  return (
    // Background changed to deep dark zinc
    <section className="w-full bg-[#0a0a0a] py-12 overflow-hidden border-t border-zinc-900">

      {/* 1. THE HEADING - Soft white text */}
      <div className="max-w-6xl mx-auto px-6 mb-18">
        <h2 className="text-[26px] md:text-[30px] text-center text-zinc-200 tracking-tight leading-snug">
          <span className="font-serif italic mr-2 text-zinc-400">Outside of</span>
          <span className="font-light">designing screens</span>
          <span className="font-serif italic mx-2 text-zinc-400">and</span>
          <span className="font-light">defending design decisions</span>
        </h2>
      </div>

      {/* 2. THE SLIDER */}
      <div className="max-w-6xl mx-auto relative px-4">
        <motion.div
          className="flex gap-6 items-start"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-48 md:w-52 ${item.mt} group`}
            >
              {/* Added a subtle border to images for dark mode separation */}
              <div className={`${item.aspect} w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800/50 transition-all duration-700`}>
                <img
                  src={item.url}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  alt="portfolio-lifestyle"
                />
              </div>

              {/* Captions in soft grey */}
              <p className="mt-3 text-[12px] font-serif leading-[1.4] text-zinc-500 italic tracking-wide group-hover:text-zinc-300 transition-colors duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Side Fades - Changed from white to #0a0a0a */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default DarkPortfolioSlider;