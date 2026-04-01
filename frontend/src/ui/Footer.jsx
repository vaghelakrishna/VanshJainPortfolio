import React from 'react';
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      link: "https://linkedin.com/in/vansh-jain26",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/vansh_jain_26",
      label: "Instagram"
    },
    {
      icon: FaXTwitter,
      link: "https://twitter.com/vansh_jain_26",
      label: "Twitter"
    },
    {
      icon: IoMailOutline,
      link: "mailto:connect@vanshjain.in",
      label: "Email"
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white w-full border-t border-white/10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">

        {/* Left Section: Branding & Bio */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 text-left">
          <h3 className="font-bold text-xl mb-4 uppercase tracking-[0.2em] text-red-500">
            Get in touch
          </h3>
          <div className="text-neutral-400 text-sm space-y-3">
            <p className="font-medium">
              © 2026 Vansh Jain. Built with intention. Always shipping.
            </p>
            <p className="text-neutral-500 leading-relaxed max-w-md">
              Founder @<a href="https://kattalyxlabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/20 transition-colors">Kattalyx Labs</a> |
              Founder @<a href="https://eliteversesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-white/20 transition-colors ml-1">Elite Verse Solutions</a> |
              Builder | Speaker | Mentor | Startup Enthusiast
            </p>
            {/* Added your primary email here for quick access */}
            <p className="pt-2">
              <a href="mailto:connect@vanshjain.in" className="text-white hover:text-red-500 transition-colors border-b border-white/10 pb-1">
                connect@vanshjain.in
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="p-8 md:p-12 flex items-center justify-center md:justify-end gap-4">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative p-4 border border-white/10 rounded-full transition-all duration-500 hover:border-red-500 hover:scale-110 active:scale-95"
            >
              <div className="absolute inset-0 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <item.icon
                size={22}
                className="relative z-10 text-white transition-colors duration-300"
              />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;