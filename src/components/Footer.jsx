import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        P
                    </div>
                    <span className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                        Prince Kumar Ram
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Building digital experiences that matter.
                </p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-6">
                <a href="https://github.com/princekumar-973" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:text-primary-600 transition-all hover:-translate-y-1">
                    <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/princekumar973/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:text-primary-600 transition-all hover:-translate-y-1">
                    <Linkedin size={22} />
                </a>
                <a href="mailto:princejnv973@gmail.com" className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:text-primary-600 transition-all hover:-translate-y-1">
                    <Mail size={22} />
                </a>
                </div>
            </div>

            <button 
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-2 text-slate-400 hover:text-primary-600 transition-colors"
            >
                <div className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 group-hover:bg-primary-50 transition-colors">
                    <ArrowUp size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">To Top</span>
            </button>
        </div>

        <div className="text-center pt-8 border-t border-slate-100 dark:border-slate-900">
          <p className="text-slate-500 dark:text-slate-500 font-medium text-sm">
            © {new Date().getFullYear()} Prince Kumar Ram. Designed & Built with ❤️ using <span className="text-primary-500">React</span> & <span className="text-primary-500">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
