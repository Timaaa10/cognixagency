import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const auditLink = "https://docs.google.com/forms/d/e/1FAIpQLSevFTpUzPB5jKWWdjy2gkIjsrTXn27_ti_87tcvhkuS2noqKA/viewform?usp=header";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
          The Future of Sales is AI-Driven
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0a1d37] tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto">
          Scale Your Revenue with <span className="text-blue-600">AI-Powered</span> Sales Systems
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          End-to-end systems that combine elite paid advertising with AI callers to qualify leads, book appointments, and close more deals automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#booking" 
            onClick={(e) => scrollToSection(e, 'booking')}
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-[#0a1d37] rounded-xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
          >
            Book a Strategy Call
          </a>
          <a 
            href={auditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-[#0a1d37] bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
          >
            Get a Free AI Audit
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Built for Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-60">
            <span className="text-xl font-bold">LAW FIRMS</span>
            <span className="text-xl font-bold">POOL CONSTRUCTION</span>
            <span className="text-xl font-bold">HVAC PLUS</span>
            <span className="text-xl font-bold">CONSULTING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;