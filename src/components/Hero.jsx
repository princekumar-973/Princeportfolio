import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center pt-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-8">

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-4 md:mb-6"
                >
                    Crafting <br />
                    <span className="text-primary-500">Digital</span> Legacy.
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base lg:text-lg text-charcoal-400 font-medium leading-relaxed max-w-xl mb-6 md:mb-8"
                >
                    Independent Software Engineer & Data Architect specialized in building high-performance systems and meaningful digital experiences.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-6"
                >
                    <div className="flex flex-row w-full md:w-auto justify-between md:justify-start gap-3 md:gap-6 order-2 md:order-1">
                        <a href="#projects" className="group flex-1 md:flex-none justify-center px-2 sm:px-4 md:px-6 py-3 bg-primary-500 text-black font-bold text-xs sm:text-sm md:text-base rounded-xl hover:bg-primary-400 transition-all flex items-center gap-1.5 md:gap-2 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                            Explore Work <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={16} />
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Prince_Kumar_CV.pdf"
                            className="group flex-1 md:flex-none justify-center px-2 sm:px-4 md:px-6 py-3 bg-charcoal-900/60 border border-charcoal-700 text-charcoal-300 hover:text-white hover:border-primary-500 font-bold text-xs sm:text-sm md:text-base rounded-xl transition-all flex items-center gap-1.5 md:gap-2"
                        >
                            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform text-primary-500 flex-shrink-0" />
                            Download CV
                        </a>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-charcoal-900/40 p-2 rounded-2xl border border-charcoal-800 order-1 md:order-2">
                        <a href="https://github.com/princekumar-973" target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal-800 border border-transparent text-charcoal-300 hover:text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 rounded-xl transition-all duration-300" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/princekumar973/" target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal-800 border border-transparent text-charcoal-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:-translate-y-1 rounded-xl transition-all duration-300" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=princejnv973@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal-800 border border-transparent text-charcoal-300 hover:text-[#EA4335] hover:bg-[#EA4335]/10 hover:border-[#EA4335]/30 hover:shadow-[0_0_20px_rgba(234,67,53,0.4)] hover:-translate-y-1 rounded-xl transition-all duration-300" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="lg:col-span-4 relative">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 p-6 bg-charcoal-900/50 border border-charcoal-800 rounded-[4rem] backdrop-blur-xl group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img src="/profile.jpg" className="w-full rounded-[3rem] hover:scale-105 transition-all duration-1000 object-cover" alt="Prince Kumar" />
                </motion.div>
                

            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
