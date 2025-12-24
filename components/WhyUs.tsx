
import React from 'react';

const reasons = [
  {
    title: 'AI-First Approach',
    description: 'We don\'t just add AI as a gimmick. We build your entire revenue system around it for maximum performance.'
  },
  {
    title: 'Instant Lead Response',
    description: 'Humans take minutes or hours. Our AI takes seconds. That speed is the difference between a lead and a customer.'
  },
  {
    title: 'Drastically Lower Costs',
    description: 'Replace an entire floor of appointment setters with a single scalable AI system at a fraction of the cost.'
  },
  {
    title: 'Infinite Scalability',
    description: 'Whether you get 10 leads or 10,000, our system handles the volume without hiring more staff.'
  },
  {
    title: 'Revenue-Focused',
    description: 'We don\'t care about likes or impressions. We care about booked calls and closed revenue.'
  }
];

const WhyUs: React.FC = () => {
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d37] mb-6">Why High-Ticket Businesses Choose Cognix</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Traditional agencies are stuck in the past. We use tomorrow's technology to solve today's sales problems, focusing entirely on measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-start p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all">
              <div className="mb-4 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              </div>
              <h4 className="text-xl font-bold text-[#0a1d37] mb-3">{reason.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
          
          <div className="flex flex-col items-start p-6 rounded-2xl bg-[#0a1d37] text-white">
            <h4 className="text-xl font-bold mb-3">Ready to Upgrade?</h4>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Stop settling for slow human follow-ups. Build your AI engine today.
            </p>
            <a 
              href="#booking" 
              onClick={(e) => scrollToSection(e, 'booking')}
              className="mt-auto text-blue-400 font-bold hover:text-blue-300 transition-colors inline-flex items-center"
            >
              Get Started
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
