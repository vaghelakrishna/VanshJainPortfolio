import React, { useState } from 'react';
// Switched to React Icons - io5 for clean UI icons, fa6 for social brands
import {
  IoArrowBackOutline,
  IoSearchOutline,
  IoArrowRedoOutline,
  IoChatbubbleEllipsesOutline
} from "react-icons/io5";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Startup Strategy', 'Education', 'Mindset', 'Growth', 'Leadership'];

  const posts = [
    {
      id: 1,
      category: 'Startup Strategy',
      author: 'Vansh Jain',
      title: 'Why Most Founders Fail at Execution (And How to Avoid It)',
      excerpt: 'A breakdown of why perfect planning kills startups, and why speed and iteration beat perfection every time.',
      content: `
        <p>Execution is the only thing that separates a dreamer from a founder. In my journey building ventures, I've seen countless brilliant ideas die in the "planning phase."</p>
        <h3>The Perfection Trap</h3>
        <p>Most founders wait for the perfect product-market fit before launching. The truth? Perfection doesn't exist at Day 0. It's built through messy iterations and real user feedback.</p>
        <blockquote>Speed is a feature. Iteration is a strategy.</blockquote>
        <p>Real-world examples from my own ventures have taught me that shipping a 70% ready product today is better than a 100% ready product six months late.</p>
      `,
      date: 'March 24, 2026',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000'
    },
    {
      id: 2,
      category: 'Education',
      author: 'Vansh Jain',
      title: "The Education System is Broken—Here's What We're Building",
      excerpt: "Why traditional schooling doesn't prepare students for real life. A deep dive into the Kattalyx Labs approach.",
      content: '<p>Traditional education focuses on memorization. At Kattalyx Labs, we focus on creation. We are building a framework where students learn by doing, not just by listening...</p>',
      date: 'March 18, 2026',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000'
    },
    {
      id: 3,
      category: 'Mindset',
      author: 'Vansh Jain',
      title: "Confidence Isn't Fake It Till You Make It—It's This",
      excerpt: 'Real framework for building genuine confidence based on competence, not motivation.',
      content: '<p>Stop trying to feel confident. Start becoming competent. Confidence is a byproduct of repetition and mastery...</p>',
      date: 'March 10, 2026',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000'
    },
    {
      id: 4,
      category: 'Growth',
      author: 'Vansh Jain',
      title: 'Building in Public: Scaling to 2000 Subscribers',
      excerpt: 'The exact strategy I used to grow a newsletter from 0 to 2000+ engaged subscribers without hacks.',
      content: '<p>Consistency beats intensity. I shared my wins, my losses, and my raw numbers. That transparency built a community...</p>',
      date: 'March 05, 2026',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d8?q=80&w=1000'
    },
    {
      id: 5,
      category: 'Mindset',
      author: 'Vansh Jain',
      title: "The Founder's Mental Health: Burnout is Real",
      excerpt: "Honest conversation about the mental health challenges of building startups. Not toxic hustle culture.",
      content: '<p>Building is hard. Doing it while compromising your sanity is unsustainable. Here is my toolkit for mental resilience...</p>',
      date: 'Feb 28, 2026',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000'
    },
    {
      id: 6,
      category: 'Startup Strategy',
      author: 'Vansh Jain',
      title: 'From Idea to MVP in 6 Weeks: The Framework',
      excerpt: 'Step-by-step breakdown of how I go from idea validation to MVP launch quickly.',
      content: '<p>The six-week sprint is my gold standard. Week 1 is for validation, Week 2-5 for core feature build, and Week 6 for beta launch...</p>',
      date: 'Feb 20, 2026',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1000'
    },
    {
      id: 7,
      category: 'Education',
      author: 'Vansh Jain',
      title: "Why I'm Teaching 10K+ Students Instead of Just Scaling",
      excerpt: 'The decision to shift focus toward education and why impact matters more than pure growth.',
      content: '<p>Scale isn’t just about revenue; it’s about the number of minds you can influence to build a better future...</p>',
      date: 'Feb 12, 2026',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000'
    },
    {
      id: 8,
      category: 'Leadership',
      author: 'Vansh Jain',
      title: 'The Soft Skills Nobody Teaches You',
      excerpt: 'Beyond communication—the hidden skills that actually determine founder success.',
      content: '<p>Empathy, conflict resolution, and the ability to say "No" are more important than your ability to code or design...</p>',
      date: 'Feb 05, 2026',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000'
    },
    {
      id: 9,
      category: 'Growth',
      author: 'Vansh Jain',
      title: 'How to Get Your First 1000 Customers Without Ads',
      excerpt: 'Grassroots strategy that actually works for bootstrapped startups. Real examples from the field.',
      content: '<p>Forget Meta ads for Day 1. Go to communities where your users hang out. Be a person, not a brand...</p>',
      date: 'Jan 28, 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
    },
    {
      id: 10,
      category: 'Education',
      author: 'Vansh Jain',
      title: "Entrepreneurship is a Skill You Can Learn",
      excerpt: 'Why entrepreneurship isn’t just for "special" people. A practical guide for everyone.',
      content: '<p>Risk management, resourcefulness, and sales are skills, not personality traits. Anyone can be trained to build...</p>',
      date: 'Jan 15, 2026',
      image: 'https://images.unsplash.com/photo-1454165833767-027eeef1593e?q=80&w=1000'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // --- SINGLE POST VIEW ---
  if (selectedPost) {
    return (
      <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-red-500">
        <div className="w-full h-[60vh] relative">
          <img src={selectedPost.image} className="w-full h-full object-cover" alt={selectedPost.title} />
          <div className="absolute inset-0 bg-black/60" />
          <button
            onClick={() => { setSelectedPost(null); window.scrollTo(0, 0); }}
            className="absolute top-10 left-6 md:left-12 flex items-center gap-2 text-white bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all uppercase text-[10px] tracking-widest"
          >
            <IoArrowBackOutline size={16} /> Back to Blog
          </button>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red-600 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">{selectedPost.category}</span>
            <span className="text-neutral-500 text-[10px] uppercase tracking-widest">{selectedPost.date}</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-7xl mb-10 leading-[1.1] tracking-tighter">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 border-y border-white/10 py-6">
            <span className="text-xs text-neutral-400">Written by <span className="text-white font-medium">{selectedPost.author}</span></span>
            <div className="ml-auto flex gap-4 text-neutral-400">
              <FaXTwitter size={18} className="hover:text-white cursor-pointer transition-colors" />
              <FaLinkedinIn size={18} className="hover:text-white cursor-pointer transition-colors" />
              <IoChatbubbleEllipsesOutline size={18} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-relaxed font-light space-y-6"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />

          {/* Related Stories */}
          <div className="mt-32 pt-16 border-t border-white/10">
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl mb-12 uppercase tracking-tighter">Read More</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                <div key={post.id} className="group cursor-pointer" onClick={() => { setSelectedPost(post); window.scrollTo(0, 0); }}>
                  <div className="aspect-video overflow-hidden mb-6 bg-neutral-900">
                    <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                  </div>
                  <h4 className="text-xl font-light leading-snug group-hover:text-red-500 transition-colors">{post.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MODERN LISTING VIEW ---
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
      <header className="pt-32 pb-16 px-8 md:px-16 text-center border-b border-white/5">
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-[18vw] md:text-[12vw] leading-none uppercase tracking-tighter mb-4">
          2AM Thoughts
        </h1>
        <p className="text-neutral-500 uppercase tracking-[0.4em] text-[10px]">Strategies, Stories, and Startup Lessons</p>
      </header>

      {/* Navigation & Filters */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all ${activeCategory === cat ? 'text-red-500 font-bold' : 'text-neutral-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72 border-b border-white/10 focus-within:border-white transition-colors">
          <IoSearchOutline className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-600" size={14} />
          <input
            type="text"
            placeholder="SEARCH THE ARCHIVE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent py-2 pl-8 text-[10px] uppercase tracking-widest focus:outline-none placeholder:text-neutral-800 text-white"
          />
        </div>
      </div>

      <main className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {filteredPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer" onClick={() => { setSelectedPost(post); window.scrollTo(0, 0); }}>
            <div className="relative aspect-4/5 overflow-hidden mb-8 bg-neutral-900">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <IoArrowRedoOutline size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-red-500 font-bold">
                <span>{post.category}</span>
                <span className="w-1 h-px bg-neutral-800" />
                <span className="text-neutral-500 font-normal">{post.date}</span>
              </div>

              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl md:text-4xl leading-[1.1] tracking-tight group-hover:text-neutral-400 transition-colors">
                {post.title}
              </h2>

              <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 font-light">
                {post.excerpt}
              </p>

              <div className="pt-4">
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-red-500/0 group-hover:border-red-500 pb-1 transition-all">
                  Read Full Entry
                </button>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default BlogPage;