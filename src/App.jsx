import React from 'react';
import Marquee from './components/Marquee';
import MeshBackground from './components/MeshBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

const App = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navLinks = [
        { title: 'Home', href: '#hero' },
        { title: 'Identity', href: '#about' },
        { title: 'Arsenal', href: '#skills' },
        { title: 'Arena', href: '#projects' },
        { title: 'Timeline', href: '#education' },
        { title: 'Relay', href: '#contact' },
    ];

    return (
        <div className="bg-charcoal-950 text-white selection:bg-primary-500 selection:text-black">
            <MeshBackground />
            
            {/* Custom Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-[101] origin-left"
                style={{ scaleX }}
            />

            <Navbar navLinks={navLinks} />
            
            <main>
                <Hero />
                <Marquee text="SOFTWARE ENGINEER · DATA ARCHITECT · SCALABLE SYSTEMS · FULL STACK DEVELOPMENT" />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Contact />
            </main>

            <footer className="py-24 border-t border-charcoal-900 bg-charcoal-950/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                                <span className="text-black font-black text-2xl">P</span>
                            </div>
                            <span className="text-white font-black text-2xl tracking-tighter uppercase">Prince Kumar</span>
                        </div>
                        
                        <div className="flex items-center gap-10">
                            {navLinks.slice(1, -1).map(link => (
                                <a key={link.title} href={link.href} className="text-charcoal-500 hover:text-white transition-colors uppercase font-mono text-[10px] font-bold tracking-widest">{link.title}</a>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="https://github.com/princekumar-973" className="text-charcoal-400 hover:text-primary-500 transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/princekumar973/" className="text-charcoal-400 hover:text-primary-500 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    <div className="mt-20 pt-10 border-t border-charcoal-900 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-charcoal-600 font-mono text-[10px] uppercase tracking-[0.4em]">
                            © 2026 Developed by Prince . All rights reserved
                        </p>
                        <p className="text-charcoal-600 font-mono text-[10px] uppercase tracking-[0.4em]">
                            Inspired by Excellence
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
