import React from 'react';

interface WhyUsProps {
  onBookClick: () => void;
}

const WhyUs: React.FC<WhyUsProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1d37] dark:text-white mb-6">
            Why High-Ticket Businesses Choose Cognix
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Traditional agencies are stuck in the past. We use tomorrow's technology to solve today's sales problems, focusing entirely on measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'AI-First Approach',
              description: 'We don\'t just add AI as a gimmick. We build your entire revenue system around it for maximum performance.',
              icon: (
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              )
            },
            {
              title: 'Instant Lead Response',
              description: 'Humans take minutes or hours. Our AI takes seconds. That speed is the difference between a lead and a customer.',
              icon: (
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              )
            },
            {
              title: 'Drastically Lower Costs',
              description: 'Replace an entire floor of appointment setters with a single scalable AI system at a fraction of the cost.',
              icon: (
                 <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )
            },
            {
              title: 'Infinite Scalability',
              description: 'Whether you get 10 leads or 10,000, our system handles the volume without hiring more staff.',
              icon: (
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              )
            },
            {
              title: 'Revenue-Focused',
              description: 'We don\'t care about likes or impressions. We care about booked calls and closed revenue.',
              icon: (
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              )
            }
          ].map((reason, idx) => (
            <div key={idx} className="group flex flex-col items-start p-8 rounded-2xl border border-slate-100 dark:border-navy-800 bg-white dark:bg-navy-900/50 hover:shadow-xl hover:border-blue-200 dark:hover:border-navy-600 transition-all duration-300">
              <div className="mb-6 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-[#0a1d37] dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{reason.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="flex flex-col items-start p-8 rounded-2xl bg-gradient-to-br from-[#0a1d37] to-[#162d50] dark:from-blue-900 dark:to-navy-900 text-white shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors"></div>
            
            <h4 className="text-2xl font-bold mb-4 relative z-10">Ready to Upgrade?</h4>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed relative z-10">
              Stop settling for slow human follow-ups. Build your AI engine today.
            </p>
            <button 
              onClick={onBookClick}
              className="mt-auto group/btn flex items-center font-bold text-blue-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Get Started
              <svg className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;