import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, LayoutPanelLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "ShopCentral – E-Commerce Website",
            category: "Full-Stack Development",
            date: "Feb’2026",
            desc: "Built a full-stack e-commerce platform using Django enabling users to browse products, add items to cart, and place orders with multiple payment options. Integrated user authentication and profile management.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
            tags: ["Python", "Django", "Bootstrap 5", "SQLite"],
            link: "https://github.com/princekumar-973"
        },
        {
            title: "Event Reminder System",
            category: "Software Engineering",
            date: "Nov’2025",
            desc: "Developed a simple and efficient console-based Event Reminder System that applies core Java and OOP concepts for managing events effectively. Implemented Java Collections Framework.",
            image: "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?auto=format&fit=crop&q=80&w=1000",
            tags: ["Java (OOPS)", "SQL", "Collections"],
            link: "https://github.com/princekumar-973"
        },
        {
            title: "U.S. Leading Causes of Death Analysis",
            category: "Data Science",
            date: "Mar’2025",
            desc: "Performed an in-depth Exploratory Data Analysis (EDA) and statistical testing on the NCHS dataset to study major causes of death across the United States. Delivered insights on mortality trends.",
            image: "https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=1000",
            tags: ["NumPy", "Pandas", "Seaborn", "Matplotlib"],
            link: "https://github.com/princekumar-973"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-charcoal-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 text-primary-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-8">
                           <LayoutPanelLeft size={16} />
                           <span>Craft & logic</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tight">Recent <br /> <span className="text-charcoal-500 italic">Arena.</span></h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col bg-charcoal-900 border border-charcoal-800 rounded-[3rem] overflow-hidden hover:border-primary-500/50 transition-all duration-500"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000" />
                                <div className="absolute top-6 right-6 p-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink size={20} className="text-white" />
                                </div>
                            </div>
                            <div className="p-10 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-charcoal-800 text-[10px] font-mono font-bold text-charcoal-400 uppercase tracking-widest rounded-lg border border-charcoal-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-primary-500/60 uppercase tracking-widest">{project.date}</span>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 leading-tight group-hover:text-primary-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-charcoal-400 font-medium leading-relaxed mb-10 flex-grow">
                                    {project.desc}
                                </p>
                                <a href={project.link} className="flex items-center gap-3 text-white font-bold group/link">
                                    View Full Case <ArrowRight size={20} className="text-primary-500 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
