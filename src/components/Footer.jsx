import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowUp, Mail, Code2 } from 'lucide-react';

const Footer = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-20 pb-10 px-6 md:px-12 relative w-full mt-auto overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 mb-20">
                        {/* BRAND COLUMN */}
                        <div className="md:w-5/12 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <Code2 size={24} className="text-primary-500" />
                                <span className="text-2xl font-black text-white tracking-widest uppercase italic">Prince Kumar Ram</span>
                            </div>
                            <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm font-medium">
                                Architecting scalable systems and engineering premium digital experiences at the intersection of AI and full-stack development.
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                                <a href="https://github.com/princekumar-973" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-black hover:bg-primary-500 hover:border-primary-500 transition-all shadow-lg aria-label='GitHub'">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/princekumar973/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-black hover:bg-primary-500 hover:border-primary-500 transition-all shadow-lg aria-label='LinkedIn'">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-black hover:bg-primary-500 hover:border-primary-500 transition-all shadow-lg aria-label='Instagram'">
                                    <Instagram size={18} />
                                </a>
                                <a href="mailto:princejnv973@gmail.com" className="w-10 h-10 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-black hover:bg-primary-500 hover:border-primary-500 transition-all shadow-lg aria-label='Email'">
                                    <Mail size={18} />
                                </a>
                            </div>
                        </div>

                        {/* LINKS AREA */}
                        <div className="md:w-7/12 grid grid-cols-2 sm:flex sm:flex-nowrap justify-start md:justify-end gap-6 md:gap-12 w-full">
                            {/* NAVIGATION */}
                            <div className="flex flex-col gap-2.5">
                                <h3 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Navigation</h3>
                                <a href="#hero" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Home</a>
                                <a href="#about" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Identity</a>
                                <a href="#skills" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Arsenal</a>
                                <a href="#projects" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Arena</a>
                                <a href="#education" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Timeline</a>
                                <a href="#contact" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Relay</a>
                            </div>

                            {/* PROBLEM SOLVING STATS */}
                            <div className="flex flex-col gap-2.5">
                                <h3 className="text-white font-black uppercase tracking-widest text-xs mb-3 italic">Problem Solving</h3>
                                <a href="https://codolio.com/profile/princejp" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Codolio</a>
                                <a href="https://leetcode.com/u/prince_kumar_ram/" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">LeetCode</a>
                                <a href="https://www.hackerrank.com/profile/princejnv973" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">HackerRank</a>
                                <a href="https://www.geeksforgeeks.org/profile/princej9zx2" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">GeeksForGeeks</a>
                                <a href="#" className="text-charcoal-400 hover:text-primary-500 transition-colors w-fit text-sm font-bold uppercase tracking-wider">Codeforces</a>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM BAR */}
                    <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row items-center justify-between text-charcoal-500 text-[10px] font-mono uppercase tracking-widest gap-4">
                        <p>© {new Date().getFullYear()} Prince Kumar Ram. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <p className="flex items-center gap-2">
                                Operating from <span className="text-primary-500 font-bold bg-primary-500/10 px-2 py-1 rounded">Base India</span>
                            </p>
                            <button 
                                onClick={scrollToTop} 
                                className="w-8 h-8 flex items-center justify-center bg-charcoal-900 border border-charcoal-800 text-charcoal-500 hover:bg-primary-500 hover:border-primary-500 hover:text-black rounded-lg transition-all group"
                                aria-label="Scroll to top"
                                title="Scroll to Top"
                            >
                                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
