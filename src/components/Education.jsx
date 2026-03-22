import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, GraduationCap as CapIcon } from 'lucide-react';

const Education = () => {
    const education = [
        {
            year: "2023 - Present",
            title: "B.Tech in Computer Science",
            institution: "Lovely Professional University, Punjab",
            desc: "Focusing on Full-Stack Engineering, Data Structures, and Cloud Architectures.",
            result: "CGPA: 7.23",
            current: true
        },
        {
            year: "2021 - 2022",
            title: "Higher Secondary (12th)",
            institution: "Jawahar Navodaya Vidyalaya, Siwan",
            desc: "Specialized in Computer Science and Mathematics.",
            result: "Percentage: 73%"
        },
        {
            year: "2019 - 2020",
            title: "Secondary (10th)",
            institution: "Jawahar Navodaya Vidyalaya, Siwan ",
            desc: "Foundation in basic sciences and analytical thinking.",
            result: "Percentage: 77%"
        }
    ];

    return (
        <section id="education" className="py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 text-primary-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-8">
                            <GraduationCap size={16} />
                            <span>Roots & growth</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-white leading-none tracking-tight">Academic <br /> <span className="text-charcoal-500 italic">Timeline.</span></h2>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] md:left-[215px] top-0 bottom-0 w-[2px] bg-charcoal-800" />

                    <div className="space-y-16">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col md:flex-row gap-10 md:gap-20 pl-12 md:pl-0"
                            >
                                {/* Year/Date */}
                                <div className="md:w-[200px] flex md:justify-end items-start pt-1">
                                    <span className={`text-sm font-mono font-bold uppercase tracking-widest ${item.current ? 'text-primary-500' : 'text-charcoal-500'}`}>
                                        {item.year}
                                    </span>
                                </div>

                                {/* Timeline Marker */}
                                <div className="absolute left-0 md:left-[200px] flex items-center justify-center w-[32px] h-[32px] bg-black border-2 border-charcoal-800 rounded-full z-10 transition-colors group-hover:border-primary-500">
                                    <div className={`w-2 h-2 rounded-full ${item.current ? 'bg-primary-500' : 'bg-charcoal-700'}`} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-10 border-b border-charcoal-800/50">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-lg text-primary-500 font-bold italic mb-4">{item.institution}</p>
                                    <p className="text-charcoal-400 font-medium leading-relaxed max-w-2xl mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-3 px-4 py-2 bg-charcoal-900 border border-charcoal-800 rounded-xl w-fit">
                                        <Award size={16} className="text-primary-500" />
                                        <span className="text-sm font-bold text-charcoal-300">{item.result}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
