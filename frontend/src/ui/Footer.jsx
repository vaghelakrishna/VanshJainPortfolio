import React from 'react';
import { Share2, Mail, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
        {/* Left Section: Branding & Bio */}
        <div className="p-6 border-white/10 text-left">
          <h3 className="font-bold text-lg mb-2">Get in touch</h3>
          <div className="text-gray-400 text-sm space-y-1">
            <p>© 2026 Vansh Jain. Built with intention. Always shipping.</p>
            <p className="text-gray-500">
              Founder @<a href="https://kattalyxlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/20 transition-colors">Kattalyx Labs</a> |
              Founder @<a href="https://eliteversesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/20 transition-colors ml-1">Elite Verse Solutions</a> |
              Builder | Speaker | Mentor | Startup Enthusiast
            </p>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="p-8 flex items-center justify-end gap-3">
          {[Share2, MessageSquare, Mail, Globe].map((Icon, i) => (
            <div
              key={i}
              className="px-4 py-2 border border-white/10 rounded-md cursor-pointer transition-colors hover:bg-white/5"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;