import { motion } from 'framer-motion';

const AboutPage = () => {
  const photos = [
    { id: 1, url: '/photo1.jpg', rot: -5, x: -20, y: 10 },
    { id: 2, url: '/photo2.jpg', rot: 3, x: 20, y: -10 },
    { id: 3, url: '/photo3.jpg', rot: -8, x: 0, y: 40 },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#888] selection:bg-white/10 overflow-x-hidden font-sans antialiased pt-32">

      {/* 1. THE GRID SYSTEM */}
      <div className="fixed inset-0 flex justify-between px-[10%] md:px-[15%] pointer-events-none z-0">
        <div className="w-px h-full bg-white/3" />
        <div className="w-px h-full bg-white/3" />
        <div className="w-px h-full bg-white/3" />
      </div>

      <div className="relative z-10 max-w-300 mx-auto px-6 md:px-12 pt-16 pb-20">
        {/* HERO SECTION (EXISTING) */}
        <div className="grid grid-cols-12 gap-8 items-start mb-40">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <div className="mb-12">
              <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-10">
                <span className="text-xs">😊</span>
              </div>
              <h2 className="text-[#333] text-[20px] font-serif italic mb-4 text-left">About me.</h2>
              <h1 className="text-3xl md:text-[42px] lg:text-[48px] leading-[1.1] text-[#E5E5E5] font-serif font-medium tracking-tight text-left">
                I design digital products that connect users, business, and technology.
              </h1>
            </div>

            <div className="space-y-6 text-[14px] md:text-[15px] leading-relaxed max-w-120 text-left">
              <p>
                Hey, I'm <span className="text-white">Vansh jain</span>, a full-stack Product Designer with 3+ years of experience...
              </p>
              <div className="flex gap-4 mt-8">
                <button className="text-xs uppercase tracking-widest text-white border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition-all">Invite Me to Speak</button>
                <button className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-all">View My Work ↓</button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PHOTO STACK */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6 relative">
            <div className="flex flex-col items-end text-right mb-16">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-neutral-800" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono">Entrepreneur | Speaker | Educator</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-mono mt-1">Bangalore, India 🤘</p>
            </div>

            <div className="relative flex justify-center h-100 w-full">
              <p className="absolute -top-10 rotate-[-5deg] font-serif italic text-neutral-700 text-[11px] whitespace-nowrap">
                Pssst... You can drag the photographs
              </p>
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  drag
                  dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
                  initial={{ rotate: photo.rot, x: photo.x, y: photo.y }}
                  whileDrag={{ scale: 1.05, zIndex: 50 }}
                  className="absolute w-50 md:w-60 aspect-3/4 bg-[#111] p-2 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing border border-white/5"
                >
                  <div className="w-full h-full overflow-hidden bg-neutral-900 rounded-sm">
                    <img src={photo.url} alt="Personal" className="w-full h-full object-cover grayscale-[0.3] pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- NEW SECTIONS START HERE --- */}

        {/* SECTION 2: PUBLIC SPEAKER INTRODUCTION */}
        <div className="grid grid-cols-12 gap-8 mb-40 border-t border-white/5 pt-20">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-[#E5E5E5] text-2xl font-serif italic">I Am a Public Speaker</h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="max-w-xl space-y-6 text-[15px] leading-relaxed">
              <p>My speaking journey is fueled by a passion for demystifying technology and entrepreneurship for the next generation. I believe that real impact happens when practical knowledge meets an inspired mindset.</p>
              <p>Through keynotes and workshops, I aim to provide students and professionals with the mental frameworks needed to build, scale, and lead in an ever-changing digital landscape.</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-4xl text-white font-serif">500+</span>
                <p className="text-[10px] uppercase tracking-widest mt-2">Students Inspired & Mentored</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 & 4: SCHOOLS & COLLEGES */}
        <div className="space-y-32 mb-40">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-10">Institutions I Have Spoken At</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-[#0A0A0A] p-8 hover:bg-neutral-900/50 transition-colors">
                  <span className="text-[10px] text-neutral-600 font-mono">2024 / City Name</span>
                  <h4 className="text-white font-serif text-lg mt-2 mb-1">Institution Name {i}</h4>
                  <p className="text-[12px] opacity-60 italic">Topic: Building Scalable Startups</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: SKILLS */}
        <div className="mb-40">
           <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-10">Expertise</h3>
           <div className="flex flex-wrap gap-3">
             {["Public Speaking", "Entrepreneurship", "Leadership", "Content Creation", "Digital Marketing", "Community Building"].map((skill) => (
               <span key={skill} className="px-6 py-3 border border-white/5 rounded-full text-[12px] text-white hover:border-white/20 transition-all cursor-default">
                 {skill}
               </span>
             ))}
           </div>
        </div>

        {/* SECTION 6: STARTUP JOURNEY */}
        <div className="mb-40 grid grid-cols-12 gap-8">
           <div className="col-span-12 md:col-span-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">Startup Journey</h3>
           </div>
           <div className="col-span-12 md:col-span-8 space-y-12">
             {[
               { year: "2021", title: "Founded [Startup Name]", desc: "Started the journey by solving X problem." },
               { year: "2022", title: "Scaling Product", desc: "Reached first 1000 users and secured seed funding." },
               { year: "2024", title: "Expansion", desc: "Currently building the future of Y industry." }
             ].map((milestone, idx) => (
               <div key={idx} className="relative pl-8 border-l border-white/10 group">
                 <div className="absolute w-1.5 h-1.5 bg-white rounded-full -left-[3.5px] top-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="text-[11px] font-mono text-neutral-600">{milestone.year}</span>
                 <h4 className="text-white text-xl font-serif mt-1">{milestone.title}</h4>
                 <p className="text-sm mt-2 max-w-md">{milestone.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* SECTION 9: STATS / NUMBERS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-20 border-y border-white/5 mb-40 text-center">
            {[
              { label: "Sessions", val: "50+" },
              { label: "Schools", val: "12" },
              { label: "Colleges", val: "18" },
              { label: "Students", val: "10k+" },
              { label: "Cities", val: "8" },
              { label: "Exp", val: "3yrs" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl text-white font-serif mb-1">{stat.val}</div>
                <div className="text-[9px] uppercase tracking-widest text-neutral-600">{stat.label}</div>
              </div>
            ))}
        </div>

        {/* SECTION 8: GALLERY */}
        <div className="mb-40">
           <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 mb-10">Session Gallery</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="aspect-square bg-neutral-900 border border-white/5 overflow-hidden group grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={`/api/placeholder/400/400`} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;