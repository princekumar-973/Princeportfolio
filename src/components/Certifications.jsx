import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Star } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Cloud Computing',
      provider: 'NPTEL',
      desc: 'Architectural patterns & scalable deployment.',
      icon: <Star size={24} />,
      color: 'text-primary-500'
    },
    {
      title: 'Data Analytics',
      provider: 'Deloitte',
      desc: 'Business intelligence & simulation.',
      icon: <CheckCircle2 size={24} />,
      color: 'text-amber-400'
    },
    {
      title: 'Python for DS',
      provider: 'Board Infinity',
      desc: 'Statistical modeling & scientific computing.',
      icon: <Trophy size={24} />,
      color: 'text-orange-500'
    },
    {
      title: 'HACKVERSE 24',
      provider: 'OASIS',
      desc: 'Rapid prototyping & development.',
      icon: <CheckCircle2 size={24} />,
      color: 'text-primary-600'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <div className="flex items-center gap-3 text-primary-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-8">
                    <CheckCircle2 size={16} />
                    <span>Validated records</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tight">Merit <br /> <span className="text-charcoal-500 italic">& Certs.</span></h2>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-charcoal-900 border border-charcoal-800 rounded-[3rem] hover:border-primary-500/30 transition-all flex flex-col items-center text-center overflow-hidden relative"
            >
              <div className={`p-6 bg-charcoal-800 ${cert.color} rounded-full mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                {cert.icon}
              </div>
              <span className="text-[10px] font-mono font-bold text-charcoal-500 uppercase tracking-widest mb-2 block">{cert.provider}</span>
              <h3 className="text-2xl font-bold text-white mb-4 italic uppercase tracking-tighter leading-tight">{cert.title}</h3>
              <p className="text-charcoal-400 font-medium text-sm leading-relaxed">{cert.desc}</p>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
