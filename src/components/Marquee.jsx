import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text }) => {
  return (
    <div className="relative w-full py-7 bg-primary-500 overflow-hidden border-y-2 border-black transform -rotate-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10" />
      <div className="flex whitespace-nowrap animate-marquee-3d py-1 transform-style-3d">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="text-black font-display text-4xl mx-8 tracking-tighter uppercase italic inline-block drop-shadow-2xl">
            {text} <span className="text-black/20 mx-4">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
