import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const stats = [
    {
      label: 'LeetCode Problems',
      value: '150+',
      icon: <Code2 className="text-yellow-500" />,
      tag: 'Problem Solver',
      description: 'Mastering Data Structures & Algorithms'
    },
    {
      label: 'AtCoder Rank',
      value: '1647',
      icon: <Target className="text-red-500" />,
      tag: 'Global Rank',
      description: 'Competitive Programming Excellence'
    },
    {
      label: 'LeetCode Badge',
      value: '50 Days',
      icon: <Trophy className="text-blue-500" />,
      tag: 'Consistency',
      description: 'Consecutive Coding Streak'
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Milestones & Achievements</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              
              <div className="relative h-full bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl transition-all flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                
                <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                    {stat.tag}
                </span>

                <h3 className="text-4xl font-black text-slate-800 dark:text-white mb-2">
                  {stat.value}
                </h3>
                
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 font-sans">
                  {stat.label}
                </p>

                <div className="mt-auto py-4 px-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 w-full transition-colors group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10">
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {stat.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
