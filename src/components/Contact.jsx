import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12 p-12 md:p-20 bg-primary-500 rounded-[4rem] text-black relative group overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                            <div className="max-w-xl">
                                <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">Ready to <br /> initiate?</h2>
                                <p className="text-xl md:text-2xl font-bold uppercase tracking-widest opacity-80 italic">
                                    Available for technical consulting & engineering solutions.
                                </p>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="px-10 py-8 bg-black text-white font-black text-3xl uppercase rounded-[2.5rem] shadow-2xl flex items-center gap-4 group/btn"
                            >
                                Get in touch <Send size={32} className="group-hover/btn:rotate-12 transition-transform" />
                            </motion.button>
                        </div>
                        <MessageCircle className="absolute bottom-[-10%] right-[-5%] size-80 opacity-5 rotate-12" />
                    </motion.div>

                    {/* Social Links Bento */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                        {[
                            { icon: <Mail />, label: 'Relay', value: 'princejnv973@gmail.com', href: 'mailto:princejnv973@gmail.com' },
                            { icon: <Linkedin />, label: 'LinkedIn', value: '/in/princekumar973', href: 'https://www.linkedin.com/in/princekumar973/' },
                            { icon: <Github />, label: 'GitHub', value: '@princekumar-973', href: 'https://github.com/princekumar-973' }
                        ].map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 bg-charcoal-900 border border-charcoal-800 rounded-[3rem] hover:border-primary-500 transition-all flex items-center gap-8 group"
                            >
                                <div className="p-5 bg-charcoal-800 text-primary-500 rounded-2xl group-hover:scale-110 transition-transform">
                                    {React.cloneElement(item.icon, { size: 28 })}
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono font-bold text-charcoal-500 uppercase tracking-widest">{item.label}</p>
                                    <p className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors uppercase italic">{item.value.split('/').pop().replace('@','')}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7 p-10 md:p-14 bg-charcoal-900 border border-charcoal-800 rounded-[4rem] flex flex-col justify-center"
                    >
                        <div className="space-y-6">
                            <h3 className="text-4xl font-black text-white italic tracking-tighter">Mission Control.</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Identity" className="bg-charcoal-950/50 border border-charcoal-800 p-5 rounded-2xl text-white outline-none focus:border-primary-500 transition-all" />
                                <input type="email" placeholder="Signal Origin (Email)" className="bg-charcoal-950/50 border border-charcoal-800 p-5 rounded-2xl text-white outline-none focus:border-primary-500 transition-all" />
                            </div>
                            <textarea rows="4" placeholder="Briefing Data" className="w-full bg-charcoal-950/50 border border-charcoal-800 p-5 rounded-2xl text-white outline-none focus:border-primary-500 transition-all resize-none"></textarea>
                            <button className="w-full py-5 bg-white text-black font-black text-xl uppercase rounded-2xl hover:bg-primary-500 transition-colors">
                                Transmit Data
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
