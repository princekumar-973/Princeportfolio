import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`bg-charcoal-900/60 backdrop-blur-xl border border-charcoal-800 rounded-3xl px-6 h-16 flex items-center justify-between transition-all ${scrolled ? 'shadow-2xl' : ''}`}>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <span className="text-white font-bold tracking-tight text-xl">Prince<span className="text-primary-500">.</span></span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.title} 
                                href={link.href}
                                className="text-sm font-mono font-medium text-charcoal-400 hover:text-primary-500 transition-colors uppercase tracking-widest"
                            >
                                {link.title}
                            </a>
                        ))}
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-500 text-black px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary-400 transition-colors"
                        >
                            Work with me <ArrowUpRight size={16} />
                        </motion.button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-charcoal-400" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden fixed top-24 left-6 right-6 bg-charcoal-900/95 backdrop-blur-2xl border border-charcoal-800 rounded-3xl p-8 z-[101] shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.title} 
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-primary-500 transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <button className="w-full bg-primary-500 text-black py-4 rounded-2xl font-bold text-lg mt-4">
                                Contact Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
