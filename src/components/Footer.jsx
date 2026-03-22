import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Navigation2 } from 'lucide-react';

const Footer = () => {


    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-6">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-charcoal-900/80 backdrop-blur-2xl border border-charcoal-800 p-2 pl-6 rounded-2xl flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5"
            >


                <div className="flex items-center gap-1 sm:gap-4">
                    <a href="https://github.com/princekumar-973" target="_blank" rel="noopener noreferrer" className="p-2.5 text-charcoal-400 hover:text-primary-500 transition-colors tooltip" title="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/princekumar973/" target="_blank" rel="noopener noreferrer" className="p-2.5 text-charcoal-400 hover:text-primary-500 transition-colors" title="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=princejnv973@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2.5 text-charcoal-400 hover:text-primary-500 transition-colors" title="Email">
                        <Mail size={18} />
                    </a>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-primary-500 hover:bg-white text-black p-3 rounded-xl transition-all group flex items-center gap-2 shadow-lg shadow-primary-500/20"
                >

                    <Navigation2 size={16} className="rotate-0 group-hover:-rotate-45 transition-transform" />
                </button>
            </motion.div>
        </div>
    );
};

export default Footer;
