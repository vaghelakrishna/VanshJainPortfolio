import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#050505] text-white flex items-center justify-center p-6 md:pt-36 px-10 overflow-hidden font-sans">
      
      {/* Background Grid - Tight & Subtle */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Radial Glow for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-between relative z-10 gap-8 md:gap-4">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">
          <span className="text-gray-400 text-lg font-medium  ">Namaste!</span>
          
          <h1 className="font-semibold leading-[1.2] mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <span className="text-white">I'm </span>
            <span className="text-gray-500">amajay</span>
            <span className="text-white">ing – a design wizard</span>
            <br />
            <span className="text-white">here to sprinkle creativity into every project!</span>
          </h1>

          {/* Status Capsule */}
          <div className="flex items-center gap-2 bg-[#121212] border border-[#222] rounded-full px-4 py-1 text-[13px] md:text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <p>
              Currently doing magic with creativity and caffeine at <span className="text-white opacity-90">UXMagic.ai</span>
            </p>
          </div>

          {/* Location Breadcrumbs */}
{/* Location Breadcrumbs with Strike-through */}
          <div className="flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-wider font-bold">

            {/* Step 1 */}
            <span className="text-gray-500 line-through decoration-blue-500 decoration-2">
              Idea
            </span>

            <span className="text-blue-500 scale-75">⏭</span>

            {/* Step 2 */}
            <span className="text-gray-500 line-through decoration-blue-500 decoration-2">
              Wireframe
            </span>

            <span className="text-blue-500 scale-75">⏭</span>

            {/* Current Step - Highlighted */}
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-sm">
              Final Design
            </span>

          </div>
        </div>

        {/* Right Image - Responsive Portrait */}
        <div className="relative mt-10 md:mt-2">
          <div className="w-50 h-70 md:w-60 md:h-75 rounded-xl overflow-hidden border border-[#333] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="/your-photo.jpg" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale contrast-[1.1]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;