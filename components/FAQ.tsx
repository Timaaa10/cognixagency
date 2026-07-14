import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do the growth plans work?',
    a: 'We offer three levels of service designed to grow with you:\n1. **Launch:** Builds your foundation (Website, AI Chatbot, CRM).\n2. **Growth:** Our full client acquisition system (Ads + AI Voice Caller + Follow-ups).\n3. **Brand & Online Presence:** Your complete marketing department including social content and outbound strategy.'
  },
  {
    q: 'Do you just build websites?',
    a: 'We build high-converting websites as part of our **Launch** package or as an **À la carte** project. \n\nHowever, our focus is on the entire revenue system. A website alone rarely scales a business—you need the traffic, follow-up, and booking systems that we provide in our Growth and Full Service plans.'
  },
  {
    q: 'What is the "Growth" package?',
    a: 'The Growth package is our most popular "full acquisition system." It combines paid advertising (Meta/Google) with our proprietary AI Voice Caller. When a lead comes in, the AI calls them within 60 seconds, qualifies them, and books the appointment on your calendar automatically.'
  },
  {
    q: 'Who is this for?',
    a: 'Our systems work best for high-ticket service businesses, such as:\n• Home Services (HVAC, Solar, Roofing, Landscaping)\n• Professional Services (Law Firms, Consulting)\n• Medical & Dental Clinics\n• Real Estate & Aesthetic Centers'
  },
  {
    q: 'Do AI callers replace my sales team?',
    a: 'No, they empower them. The AI handles the "speed-to-lead" and qualification. This means your sales team only spends time on the phone with qualified prospects who are ready to close, rather than chasing cold leads who won\'t pick up.'
  },
  {
    q: 'What is included in the Free AI Audit?',
    a: 'The Free Audit reviews your current lead flow, response times, and follow-up gaps. We identify exactly where you are losing revenue and provide high-level AI recommendations on which growth plan fits your current stage.'
  },
  {
    q: 'Can I purchase services separately?',
    a: 'Yes. See our **À la carte** section for standalone projects like Website builds, AI caller setup, AI chatbot training, or 90-minute Strategy Sessions with no retainer required.'
  },
  {
    q: 'How fast can I see results?',
    a: '• **Launch:** Your infrastructure is usually live within 10-14 days.\n• **Growth:** Leads typically start coming in within 72 hours of ad launch.\n• **Revenue impact:** Most clients see a significant increase in booked appointments within the first 30 days.'
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on the level of growth you need. We have fixed-scope projects and monthly growth plans. We discuss exactly which plan fits your revenue goals during the free strategy call once we assess your current system.'
  }
];

const FAQItem: React.FC<{ faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700 overflow-hidden transition-all duration-300">
      <button 
        onClick={onClick}
        className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-navy-750 transition-colors focus:outline-none bg-transparent border-none cursor-pointer"
      >
        <h4 className="text-lg font-bold text-[#0a1d37] dark:text-white pr-8">{faq.q}</h4>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 border-t border-slate-50 dark:border-navy-700' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 md:p-8 pt-2 md:pt-4 text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
          {faq.a}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-navy-900 scroll-mt-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d37] dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about our offers and how we work.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onClick={() => toggleFAQ(i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;