import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative bg-[#0a0a0a] min-h-screen py-24 px-6 flex flex-col items-center overflow-hidden font-sans text-white">

      {/* 1. Background Fine-Line Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">

        {/* 2. Side Label (Vertical + Eye Icon) */}
        <div className="absolute -left-10 top-0 hidden xl:flex flex-col items-center gap-8">
          <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl">
            <Eye size={20} className="text-white/70" />
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 font-medium select-none"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)'
            }}>
            About Me
          </p>
        </div>

        {/* 3. Main Heading (Cormorant Garamond Style) */}
        <div className="text-center mb-20 relative w-full">
          <h1 className="text-6xl md:text-[5.5rem] font-serif italic leading-[1.1] border-y border-white/5 py-12 px-4">
            I craft digital <br />
            <span className="relative inline-block mt-2">
              experiences that
              <div className="absolute -bottom-1 left-0 w-full h-px bg-white/10" />
            </span> <br />
            drive impact.
          </h1>
        </div>

        {/* 4. Draggable Image 1 (Top Right) */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.7}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          initial={{ rotate: 6, x: 140, y: -40 }}
          whileDrag={{ zIndex: 50, scale: 1.05 }}
          className="absolute right-0 top-1/4 w-64 h-80 hidden xl:block cursor-grab active:cursor-grabbing"
        >
          <div className="relative w-full h-full p-2 bg-white/5 backdrop-blur-xl rounded-md shadow-2xl border border-white/10 overflow-hidden">
            <img
              src="/path-to-your-workspace.jpg"
              alt="Workspace"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 rounded-sm"
              draggable="false"
            />
            {/* Hidden reveal message behind image */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-neutral-500 italic text-sm text-center px-6">
              Currently working with <br /> her at Loco.
            </div>
          </div>
        </motion.div>

        {/* 5. Draggable Image 2 (Bottom Left) */}
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.7}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          initial={{ rotate: -10, x: -140, y: 160 }}
          whileDrag={{ zIndex: 50, scale: 1.05 }}
          className="absolute left-0 bottom-20 w-60 h-72 hidden xl:block cursor-grab active:cursor-grabbing"
        >
          <div className="relative w-full h-full p-2 bg-white/5 backdrop-blur-xl rounded-md shadow-2xl border border-white/10 overflow-hidden">
            <img
              src="/path-to-your-event.jpg"
              alt="Vansh"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 rounded-sm"
              draggable="false"
            />
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-neutral-500 italic text-sm text-center px-6">
              Met at the <br /> Design Conference '25
            </div>
          </div>
        </motion.div>

        {/* 6. Bio Text with Hover Blur Effect */}
        <div className="max-w-xl space-y-8 leading-relaxed text-lg font-light text-center md:text-left">
          <p className="text-white/30 hover:blur-0 hover:text-neutral-300 transition-all duration-700 cursor-default">
            Hey, I'm <span className="text-white font-medium">Vansh</span>, a full-stack Product Designer with 3+ years of experience creating user-focused digital products across <span className="text-white/80">Web3, fintech, and gaming industries.</span>
          </p>

          <p className="text-neutral-400">
            My journey into design didn't start in a classroom—it started at a
            <span className="italic text-white"> hackathon</span>. While everyone around me was busy coding, I noticed something missing: nobody was thinking about the <span className="italic text-white">user experience</span>.
          </p>

          <p className="text-white/30 blur-xs hover:blur-0 hover:text-neutral-300 transition-all duration-700 cursor-default">
            Fast forward a few years, I’ve worked with fast-moving startups to turn ambiguous ideas into products that find market fit, fast. Whether it's building from scratch or shaping MVPs, I've thrived in mess.
          </p>
        </div>

        {/* 7. CTA Button (Frosted Glass Effect) */}
        <div className="relative mt-15 group">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-6 bg-white/5 backdrop-blur-lg text-white border border-white/10 px-4 py-2 rounded-full font-bold text-[11px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black hover:border-white overflow-hidden shadow-2xl"
          >
            Read more about me
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <ArrowRight size={16} />
            </div>
          </motion.button>

          {/* Subtle Glow behind button */}
          <div className="absolute inset-0 bg-white/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity -z-10" />
        </div>

      </div>

      {/* Footer Hint */}
      <p className="mt-auto pt-20 text-neutral-600 text-[9px] tracking-[0.5em] uppercase font-medium opacity-50">
        Interact with the elements
      </p>
    </section>
  );
};

export default AboutSection;