import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");
        setResult("Transmitting Signal...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult("Signal Transmitted Successfully.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setStatus("error");
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setStatus("error");
            setResult("Signal Interrupted. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 p-10 md:p-14 bg-primary-500 rounded-[3rem] text-black relative group overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tight mb-6 uppercase">Ready to <br /> initiate?</h2>
                                <p className="text-base md:text-lg font-bold uppercase tracking-widest opacity-80 italic">
                                    Available for technical consulting & engineering solutions.
                                </p>
                            </div>
                            <form action="mailto:princejnv973@gmail.com" method="get">
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    type="submit"
                                    className="px-8 py-5 bg-black text-white font-black text-xl uppercase rounded-2xl shadow-2xl flex items-center gap-4 group/btn"
                                >
                                    Get in touch <Send size={24} className="group-hover/btn:rotate-12 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                        <MessageCircle className="absolute bottom-[-10%] right-[-5%] size-64 opacity-5 rotate-12" />
                    </motion.div>

                    {/* Social Links Bento */}
                    <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                        {[
                            { icon: <Mail />, label: 'Relay', value: 'princejnv973@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=princejnv973@gmail.com' },
                            { icon: <Linkedin />, label: 'LinkedIn', value: '/in/princekumar973', href: 'https://www.linkedin.com/in/princekumar973/' },
                            { icon: <Github />, label: 'GitHub', value: '@princekumar-973', href: 'https://github.com/princekumar-973' }
                        ].map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
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
                        viewport={{ once: true }}
                        className="lg:col-span-7 p-10 md:p-14 bg-charcoal-900 border border-charcoal-800 rounded-[4rem] flex flex-col justify-center"
                    >
                        <form onSubmit={onSubmit} className="space-y-6">
                            <h3 className="text-4xl font-black text-white italic tracking-tighter">Mission Control.</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input name="name" type="text" placeholder="Identity" required className="bg-charcoal-950/50 border border-charcoal-800 p-5 rounded-2xl text-white outline-none focus:border-primary-500 transition-all" />
                                <input name="email" type="email" placeholder="Signal Origin (Email)" required className="bg-charcoal-950/50 border border-charcoal-800 p-5 rounded-2xl text-white outline-none focus:border-primary-500 transition-all" />
                            </div>
                            <textarea name="message" rows="4" placeholder="Briefing Data" required className="w-full bg-charcoal-950/50 border border-charcoal-800 p-5 rounded-2xl text-white outline-none focus:border-primary-500 transition-all resize-none"></textarea>
                            
                            <button 
                                type="submit"
                                disabled={status === "sending"}
                                className={`w-full py-5 font-black text-xl uppercase rounded-2xl transition-all flex items-center justify-center gap-3 ${
                                    status === "sending" ? "bg-charcoal-800 text-charcoal-500 cursor-not-allowed" :
                                    status === "success" ? "bg-primary-500 text-black" :
                                    status === "error" ? "bg-red-500 text-white" :
                                    "bg-white text-black hover:bg-primary-500"
                                }`}
                            >
                                {status === "sending" ? <Loader2 className="animate-spin" /> : 
                                 status === "success" ? <CheckCircle2 /> : 
                                 status === "error" ? <AlertCircle /> : null}
                                {status === "idle" ? "Transmit Data" : result}
                            </button>

                            {status === "success" && (
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-primary-500 font-mono text-xs font-bold uppercase tracking-widest text-center"
                                >
                                    Message received. Expect a response soon.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
