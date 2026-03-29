import React from 'react';
import { Calendar, Tag, ArrowRight, ArrowUpRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      category: 'Development',
      title: 'Building Fluid Motion with Framer & React',
      excerpt: 'Exploring the intersection of performance and aesthetics in modern web animations and micro-interactions.',
      date: 'March 24, 2026',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Design',
      title: 'The Return of High-Contrast Serif Typography',
      excerpt: 'Why minimalist brands are moving away from sans-serif and embracing the elegance of classical type.',
      date: 'March 18, 2026',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'Product',
      title: 'Engineering for the Modern Web Founder',
      excerpt: 'A deep dive into the tech stack required to launch scalable products as a solo full-stack designer.',
      date: 'March 10, 2026',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">

        {/* Blog Header */}
        <header className="pt-32 pb-16 px-8 border-b border-dashed border-white/10">
          <div className="flex justify-between items-end">
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[12vw] leading-[0.8] uppercase tracking-tighter"
            >
              Journal
            </h1>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.3em] hidden md:block pb-2">
              Thoughts & Insights
            </p>
          </div>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-r border-b border-dashed border-white/10 group cursor-pointer overflow-hidden"
            >
              {/* Featured Image Container */}
              <div className="relative h-72 overflow-hidden border-b border-dashed border-white/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-2">
                    <Tag size={10} /> {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3 text-neutral-500 text-[10px] uppercase tracking-widest">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>

                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl leading-tight group-hover:text-neutral-400 transition-colors"
                >
                  {post.title}
                </h2>

                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold group/btn">
                    Read More
                    <div className="p-2 border border-white/10 rounded-full group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / Load More (Matching Grid) */}
        <div className="p-12 border-b border-dashed border-white/10 flex justify-center">
          <button className="px-12 py-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-[10px] uppercase tracking-widest font-bold">
            View All Posts
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPage;