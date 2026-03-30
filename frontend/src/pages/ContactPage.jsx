import React from 'react';
import { Mail, Phone, MapPin, Camera, Globe, Send, ArrowUpRight, MessageSquare, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap');`}
      </style>

      {/* Main Wrapper: overflow-x-hidden zaroori hai mobile ke liye */}
      <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">

        {/* CENTERED CONTAINER: Ye badi screen par content ko beech mein rakhega */}
        <div className="max-w-[1600px] mx-auto w-full border-x border-dashed border-white/5">

          {/* Header Section: Clamp use kiya hai taaki zoom 100% par giant na lage */}
          <header className="pt-24 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 border-b border-dashed border-white/10">
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[clamp(60px,12vw,180px)] leading-[0.8] uppercase tracking-tighter text-center mb-4"
            >
              Contact
            </h1>
          </header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">

            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 p-6 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-dashed border-white/10 space-y-16">

              <div className="space-y-10">
                {[
                  { label: 'Email address', value: 'hello@abhishekvaghela.com', icon: <Mail size={18} /> },
                  { label: 'Phone number', value: '+91 98765 43210', icon: <Phone size={18} /> },
                  { label: 'City / Base', value: 'Bangalore, India', icon: <MapPin size={18} /> }
                ].map((item, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-3">{item.label}</p>
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 group-hover:border-white transition-colors">
                      <span className="text-lg md:text-xl font-light break-all">{item.value}</span>
                      <div className="text-neutral-500 group-hover:text-white transition-colors flex-shrink-0">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials Grid */}
              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10">
                {[
                  { name: 'Instagram', icon: <Camera size={16} /> },
                  { name: 'LinkedIn', icon: <MessageSquare size={16} /> },
                  { name: 'YouTube', icon: <Camera size={16} /> },
                  { name: 'Twitter / X', icon: <Globe size={16} /> }
                ].map((social) => (
                  <div key={social.name} className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-white hover:text-black transition-all cursor-pointer group">
                    <div className="mb-6 opacity-40 group-hover:opacity-100">{social.icon}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest">{social.name}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form Section */}
            <div className="lg:col-span-7 p-6 md:p-12 lg:p-16 bg-[#0d0d0d]/30 flex flex-col justify-start">
              <form className="space-y-12 w-full max-w-2xl mx-auto lg:ml-0">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Name</label>
                    <input
                      type="text"
                      placeholder="Abhishek Vaghela"
                      className="bg-transparent w-full outline-none text-lg md:text-xl placeholder:text-neutral-800 font-light"
                    />
                  </div>
                  <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Email</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="bg-transparent w-full outline-none text-lg md:text-xl placeholder:text-neutral-800 font-light"
                    />
                  </div>
                </div>

                {/* Dropdown */}
                <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4 relative group">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">I'm interested in...</label>
                  <div className="relative flex items-center">
                    <select
                      className="bg-transparent w-full outline-none text-lg md:text-xl appearance-none cursor-pointer pr-10 text-white font-light"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#0a0a0a] text-neutral-700">Select an option</option>
                      <option value="speaking" className="bg-[#0a0a0a]">Book a Speaking Session</option>
                      <option value="mentorship" className="bg-[#0a0a0a]">1-on-1 Interaction / Mentorship</option>
                      <option value="internship" className="bg-[#0a0a0a]">Internship / Collaboration</option>
                      <option value="course" className="bg-[#0a0a0a]">Course Enquiry</option>
                      <option value="media" className="bg-[#0a0a0a]">Media / Press</option>
                      <option value="hello" className="bg-[#0a0a0a]">Just Say Hello</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-0 pointer-events-none text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="border-b border-white/10 focus-within:border-white transition-colors pb-4">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block mb-4">Your Message</label>
                  <textarea
                    rows="5"
                    placeholder="Describe your project or just say hi..."
                    className="bg-transparent w-full outline-none text-lg md:text-xl placeholder:text-neutral-800 resize-none font-light leading-relaxed"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button className="group w-full md:w-auto flex items-center justify-center md:justify-start gap-8 bg-white text-black px-10 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-neutral-200 transition-all active:scale-95">
                    <span>Send Inquiry</span>
                    <Send size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;