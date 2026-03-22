import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Star, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Cloud Computing',
      provider: 'NPTEL',
      desc: 'Architectural patterns & scalable deployment.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
      link: 'https://archive.nptel.ac.in/noc/B2C/candidate_login/main.php',
      bgClass: 'bg-sky-100 p-4 border-sky-300',
      glowClass: 'group-hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]'
    },
    {
      title: 'Data Analytics',
      provider: 'Deloitte',
      desc: 'Business intelligence & simulation.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg',
      link: 'https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy/completed',
      bgClass: 'bg-emerald-100 p-4 border-emerald-300',
      glowClass: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]'
    },
    {
      title: 'Python for DS',
      provider: 'Board Infinity',
      desc: 'Statistical modeling & scientific computing.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      link: 'https://www.boardinfinity.com/learner/profile',
      bgClass: 'bg-yellow-500/10 p-4 border-yellow-500/30',
      glowClass: 'group-hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]'
    },
    {
      title: 'HACKVERSE 24',
      provider: 'OASIS',
      desc: 'Rapid prototyping & development.',
      image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3c6.svg',
      link: 'https://drive.google.com/file/d/1STo7D49BzSlaCE-geJEmZuUYK8Oh3U1v/view?usp=drive_link',
      bgClass: 'bg-fuchsia-500/10 p-4 border-fuchsia-500/30',
      glowClass: 'group-hover:shadow-[0_0_40px_rgba(217,70,239,0.4)]'
    }
  ];

  return (
    <section id="certifications" className="py-12 relative bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
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
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-charcoal-900 border border-charcoal-800 rounded-[3rem] hover:border-primary-500/30 transition-all flex flex-col items-center text-center overflow-hidden relative"
            >
              <div className={`w-20 h-20 ${cert.bgClass} rounded-full mb-8 shadow-inner group-hover:scale-110 transition-all duration-300 flex items-center justify-center border ${cert.glowClass} overflow-hidden relative backdrop-blur-md`}>
                <img src={cert.image} alt={cert.provider} className="w-full h-full object-contain relative z-10 drop-shadow-sm" />
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors" />
              </div>
              <span className="text-[10px] font-mono font-bold text-charcoal-500 uppercase tracking-widest mb-2 block">{cert.provider}</span>
              <h3 className="text-2xl font-bold text-white mb-4 italic uppercase tracking-tighter leading-tight">{cert.title}</h3>
              <p className="text-charcoal-400 font-medium text-sm leading-relaxed mb-8">{cert.desc}</p>
              
              <div className="mt-auto px-5 py-2.5 bg-charcoal-950 border border-charcoal-800 rounded-full text-[10px] font-bold text-charcoal-400 uppercase tracking-widest group-hover:bg-primary-500 group-hover:text-black group-hover:border-primary-500 transition-all flex items-center gap-2">
                View Certificate <ExternalLink size={14} />
              </div>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
