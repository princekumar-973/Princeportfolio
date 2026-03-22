import React from 'react';

const MeshBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#0d0d0e] overflow-hidden pointer-events-none">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1b,transparent_70%)] opacity-40" />
      
      {/* Subtle Dot Grid - Enhanced contrast */}
      <div 
        className="absolute inset-0 opacity-[0.25]" 
        style={{ 
          backgroundImage: `radial-gradient(#3f3f46 1px, transparent 1px)`, 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* Vibrant Amber Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[140px] bg-primary-500/10 animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full blur-[140px] bg-primary-600/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full blur-[120px] bg-primary-400/5" />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg' className="w-full h-full">
          <filter id='noiseFilter'>
            <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/>
          </filter>
          <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
      </div>
    </div>
  );
};

export default MeshBackground;
