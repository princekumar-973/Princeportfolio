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
import Footer from './components/Footer';
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
        <div className="bg-charcoal-950 text-white selection:bg-primary-500 selection:text-black min-h-screen flex flex-col">
            <MeshBackground />
            
            {/* Custom Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-[101] origin-left"
                style={{ scaleX }}
            />

            <Navbar navLinks={navLinks} />
            
            <main className="flex-grow">
                <Hero />
                <Marquee text="SOFTWARE ENGINEER · DATA ARCHITECT · SCALABLE SYSTEMS · FULL STACK DEVELOPMENT" />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Certifications />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default App;
