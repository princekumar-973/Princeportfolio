import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Sparkles, Coffee, ExternalLink, ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-10 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bento Main Block */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8 p-6 md:p-8 lg:p-10 bg-charcoal-900/40 border border-charcoal-800 rounded-3xl md:rounded-[3rem] relative overflow-hidden group"
            >
                <div className="relative z-10">
                    <div className="flex items-center gap-3 text-primary-500 font-mono text-xs font-bold uppercase tracking-[0.4em] mb-6">
                        <Sparkles size={16} />
                        <span>Core Identity</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
                        Bridging the gap between <span className="text-charcoal-500">data</span> and <span className="text-primary-500">experience</span>.
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-charcoal-400 font-medium leading-relaxed max-w-2xl">
                        I'm Prince, a software engineer with a surgical focus on building products that matter. I thrive in the middle of complexity, translating abstract requirements into elegant, high-impact architectures.
                    </p>
                </div>
            </motion.div>

            {/* Side Card 1 - Logic & Craft Code Block */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 p-6 md:p-8 bg-primary-500 border border-charcoal-900 rounded-3xl md:rounded-[3rem] flex flex-col justify-between shadow-2xl overflow-hidden relative group min-h-[350px]"
            >
                <div className="relative z-10 text-black">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-black/10 rounded-xl">
                            <Coffee size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-tight">Logic & Craft.</h3>
                    </div>
                    
                    {/* IDE-style Code Block */}
                    <div className="bg-charcoal-950/95 backdrop-blur-sm rounded-2xl p-5 border border-black/10 shadow-2xl font-mono text-[11px] md:text-xs text-charcoal-300 leading-relaxed relative overflow-hidden">
                        <div className="flex gap-1.5 mb-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-primary-500/80 italic mb-2">// Developer philosophy</p>
                            <p><span className="text-purple-400">if</span> (<span className="text-white">complexProblem</span>) {'{'}</p>
                            <p className="pl-4">
                                <span className="text-blue-400">const</span> solution = 
                                <span className="text-white"> Logic</span>
                                <span className="text-amber-400">.analyze</span>(data);
                            </p>
                            <p className="pl-4">
                                <span className="text-purple-400">return</span> 
                                <span className="text-white"> Craft</span>
                                <span className="text-amber-400">.refine</span>(solution);
                            </p>
                            <p className="text-white/80">{'}'}</p>
                        </div>
                        
                        {/* Interactive scanline effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 w-full -translate-y-full group-hover:animate-[scan_3s_linear_infinite]" />
                    </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-between mt-8">
                    <p className="text-black/80 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                        Fuelled by deep <br /> curiosity & data.
                    </p>
                    <div className="p-3 bg-black/10 rounded-xl hover:bg-black/20 transition-all cursor-pointer group/btn">
                        <ArrowUpRight size={20} className="text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -z-0" />
            </motion.div>

            {/* Side Card 2 */}
            <motion.a 
                href="https://earth.google.com/web/search/Lovely+Professional+University,+Punjab,+India"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-4 p-6 md:p-8 bg-charcoal-900/40 border border-charcoal-800 rounded-3xl md:rounded-[3rem] flex items-center gap-4 md:gap-5 hover:border-primary-500/50 hover:bg-charcoal-900 transition-all cursor-pointer group shadow-xl"
            >
                <div className="p-4 bg-charcoal-800 text-primary-500 rounded-2xl group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-black transition-all">
                    <MapPin size={28} />
                </div>
                <div>
                   <p className="text-charcoal-500 font-mono text-[10px] uppercase mb-1 tracking-widest group-hover:text-charcoal-400 transition-colors">Base Of Operations</p>
                   <p className="text-2xl font-bold text-white italic group-hover:text-primary-500 transition-colors">India</p>
                </div>
            </motion.a>

            {/* Wide Card bottom */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8 p-6 md:p-8 bg-charcoal-900/40 border border-charcoal-800 rounded-3xl md:rounded-[3rem] flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden"
            >
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">Engineering for <span className="text-primary-500">tomorrow</span>.</h3>
                    <p className="text-charcoal-400 font-medium">Currently building at the intersection of AI and full-stack development.</p>
                </div>
                <div className="flex items-center gap-6 bg-charcoal-800/50 p-6 rounded-3xl border border-charcoal-700/50">
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                            <div key={i} className={`w-10 h-10 rounded-full border-2 border-charcoal-900 bg-charcoal-700 flex items-center justify-center text-[10px] font-bold text-white`}>
                                {i === 1 ? 'JS' : i === 2 ? 'PY' : 'JV'}
                            </div>
                        ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-charcoal-300 uppercase">Core Stack</span>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
