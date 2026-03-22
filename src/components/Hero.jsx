import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center pt-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6"
                >
                    Crafting <br />
                    <span className="text-primary-500">Digital</span> Legacy.
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-base md:text-lg text-charcoal-400 font-medium leading-relaxed max-w-xl mb-8"
                >
                    Independent Software Engineer & Data Architect specialized in building high-performance systems and meaningful digital experiences.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <a href="#projects" className="group px-6 py-3 bg-primary-500 text-black font-bold text-base rounded-xl hover:bg-primary-400 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                        Explore Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </a>

                    <a
                        href="/resume.pdf"
                        download="Prince_Kumar_CV.pdf"
                        className="group px-6 py-3 bg-charcoal-900/60 border border-charcoal-700 text-charcoal-300 hover:text-white hover:border-primary-500 font-bold text-base rounded-xl transition-all flex items-center gap-2"
                    >
                        <Download size={18} className="group-hover:-translate-y-0.5 transition-transform text-primary-500" />
                        Download CV
                    </a>
                    
                    <div className="flex items-center gap-4 bg-charcoal-900/40 p-2 rounded-2xl border border-charcoal-800">
                        <a href="https://github.com/princekumar-973" target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal-800 text-charcoal-300 hover:text-white rounded-xl transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/princekumar973/" target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal-800 text-charcoal-300 hover:text-white rounded-xl transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=princejnv973@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-charcoal-800 text-charcoal-300 hover:text-primary-500 rounded-xl transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="hidden lg:block lg:col-span-4 relative">
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
