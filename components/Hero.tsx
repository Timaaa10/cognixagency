
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-40 overflow-hidden transition-colors duration-300">
      {/* Background Grids & Gradients */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none -z-20"></div>
      
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[100px] animate-blob pointer-events-none -z-10"></div>
      <div className="absolute top-40 left-0 -translate-x-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/3 translate-y-1/2 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 dark:bg-navy-800/50 backdrop-blur-md border border-slate-200 dark:border-navy-700 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Stop just selling ads. <span className="text-[#0a1d37] dark:text-white font-black underline decoration-blue-500/30 decoration-4">Scale your revenue.</span>
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black text-[#0a1d37] dark:text-white tracking-tight leading-[1.05] mb-10 max-w-6xl mx-auto drop-shadow-sm">
          Generate Demand. Respond Instantly. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
             Close More Deals.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The elite <strong>Revenue Generation System</strong> combining premium advertising, AI calling infrastructure, and automated sales funnels. Built for high-ticket scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up">
          <button 
            onClick={onBookClick}
            className="group relative w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 text-xl font-bold text-white bg-[#0a1d37] dark:bg-blue-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1.5 border-none cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            Book Strategy Call
          </button>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSevFTpUzPB5jKWWdjy2gkIjsrTXn27_ti_87tcvhkuS2noqKA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 text-xl font-bold text-[#0a1d37] dark:text-white bg-white/70 dark:bg-navy-900/50 backdrop-blur-md border-2 border-slate-200 dark:border-navy-700 rounded-2xl hover:bg-white dark:hover:bg-navy-800 transition-all hover:-translate-y-1.5 shadow-lg"
          >
            Get Free AI Audit
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-navy-800/50 max-w-5xl mx-auto">
          <p className="text-xs font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.3em] mb-10">The Revenue Standard For</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-80 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['LAW FIRMS', 'POOL BUILDERS', 'HVAC & SOLAR', 'CONSULTING'].map((item, i) => (
              <span key={i} className="text-sm md:text-base font-black text-slate-500 dark:text-slate-300 hover:text-[#0a1d37] dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
