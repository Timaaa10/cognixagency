import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Attract Leads',
    description: 'We launch and manage high-intent paid ad campaigns across Google, Meta, and LinkedIn.'
  },
  {
    number: '02',
    title: 'Instant AI Response',
    description: 'Our AI callers & AI chatbots respond to inbound leads in seconds, ensuring 100% lead coverage.'
  },
  {
    number: '03',
    title: 'Qualification',
    description: 'AI handles the heavy lifting—qualifying prospects based on your specific criteria.'
  },
  {
    number: '04',
    title: 'Auto-Booking',
    description: 'Qualified leads are automatically scheduled onto your sales team\'s calendar.'
  },
  {
    number: '05',
    title: 'Process Optimization',
    description: 'We refine your sales scripts and funnels to maximize every dollar spent.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-navy-950 scroll-mt-24 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1d37] dark:text-white mb-4">
            The Revenue Engine
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            How we transform your marketing spend into predictable, high-ticket sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 bg-slate-50 dark:bg-navy-900 rounded-2xl border border-slate-100 dark:border-navy-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-900/10 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl font-black text-slate-200 dark:text-navy-800 group-hover:text-blue-100 dark:group-hover:text-blue-900/40 transition-colors mb-4 font-sans">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#0a1d37] dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;