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
    description: 'Our AI callers respond to inbound leads in seconds, ensuring 100% lead coverage.'
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
    <section id="how-it-works" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d37] mb-4">The Revenue Engine</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">How we transform your marketing spend into predictable, high-ticket sales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-blue-100 absolute top-4 right-6 leading-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-[#0a1d37] mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;