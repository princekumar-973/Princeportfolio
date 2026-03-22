import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, Laptop, Cpu } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: <Code />,
            skills: ["Python", "Java", "C++", "JavaScript", "SQL"],
            span: "lg:col-span-7"
        },
        {
            title: "Data Science",
            icon: <Database />,
            skills: ["Pandas", "Numpy", "Power BI", "EDA"],
            span: "lg:col-span-5"
        },
        {
            title: "Web Backend",
            icon: <Layers />,
            skills: ["Django", "PostgreSQL", "MySQL"],
            span: "lg:col-span-4"
        },
        {
            title: "Infrastructure",
            icon: <Cpu />,
            skills: ["Git", "GitHub", "Vite", "Linux"],
            span: "lg:col-span-8"
        }
    ];

    const skillLinks = {
        "Python": "https://docs.python.org/3/",
        "Java": "https://docs.oracle.com/en/java/",
        "C++": "https://en.cppreference.com/w/",
        "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "SQL": "https://www.postgresql.org/docs/",
        "Pandas": "https://pandas.pydata.org/docs/",
        "Numpy": "https://numpy.org/doc/",
        "Power BI": "https://learn.microsoft.com/en-us/power-bi/",
        "EDA": "https://en.wikipedia.org/wiki/Exploratory_data_analysis",
        "Django": "https://docs.djangoproject.com/",
        "PostgreSQL": "https://www.postgresql.org/docs/",
        "MySQL": "https://dev.mysql.com/doc/",
        "Git": "https://git-scm.com/doc",
        "GitHub": "https://docs.github.com/",
        "Vite": "https://vitejs.dev/guide/",
        "Linux": "https://www.linux.org/docs/"
    };

    return (
        <section id="skills" className="py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 text-primary-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-8">
                           <Laptop size={16} />
                           <span>Technical arsenal</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tight underline decoration-charcoal-800 underline-offset-[1.5rem]">Arsenal <br /> <span className="text-charcoal-500 italic">& Tools.</span></h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${cat.span} p-10 bg-charcoal-900 border border-charcoal-800 rounded-[3rem] hover:border-primary-500/30 transition-all duration-500 group relative overflow-hidden`}
                        >
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-charcoal-800 text-primary-500 rounded-2xl group-hover:scale-110 transition-transform">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {cat.skills.map(skill => (
                                        <a 
                                            key={skill} 
                                            href={skillLinks[skill] || "#"} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-charcoal-950 border border-charcoal-800 rounded-2xl text-charcoal-400 font-bold text-sm hover:border-primary-500 hover:text-primary-500 transition-all cursor-pointer inline-block"
                                        >
                                            {skill}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl -z-0" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
