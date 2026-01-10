import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is the Revenue Generation System?',
    a: 'This is our core monthly service designed for speed and results. We combine three pillars: \n1. **Ads Management** (to generate demand)\n2. **AI Callers & Chatbots** (to respond instantly 24/7)\n3. **Sales Support** (scripts & optimization to close deals)\n\nUnlike traditional agencies that just run ads, we take responsibility for the entire flow from click to booked appointment.'
  },
  {
    q: 'Do you just build websites?',
    a: 'We offer "Conversion-Focused Websites" as a specific service for businesses that need a high-performance foundation. \n\nHowever, our main focus is building complete revenue systems. A website is just one part of the machine. If you only need a website, we can build one that is specifically designed to capture leads, not just look pretty.'
  },
  {
    q: 'What is the difference between Infrastructure Setup and the Core Offer?',
    a: '**Infrastructure Setup** is a one-time project to build your assets (CRM, Website, Automation). \n\n**The Core Offer** is an ongoing monthly service where we actively manage your ads, optimize your AI agents, and drive consistent lead volume into that infrastructure.'
  },
  {
    q: 'Who is this for?',
    a: 'Our systems work best for high-ticket service businesses, such as:\n• Medical & dental clinics\n• Pool construction & Home Improvement\n• Law firms\n• Consulting & Coaching\n\nIf you have a proven offer and want to scale without hiring more sales staff, this is for you.'
  },
  {
    q: 'Do AI callers replace my sales team?',
    a: 'No, they empower them. AI callers handle the initial speed-to-lead, qualification, and appointment booking. \n\nThis means your human sales team only speaks to qualified prospects who are ready to buy, rather than chasing cold leads.'
  },
  {
    q: 'What is included in the Free AI Audit?',
    a: 'The Free Audit is a review of your current situation. We look at your lead sources, response speed, and follow-up process to identify where you are losing money. \n\nWe provide a short summary of gaps and high-level recommendations. There is no obligation to buy.'
  },
  {
    q: 'Can I just buy an AI Chatbot or Caller setup?',
    a: 'Yes. We have "Optional Services" where you can purchase specific setups like AI Callers, AI Chatbots, or CRM Optimization as standalone one-time projects.'
  },
  {
    q: 'How fast can I see results?',
    a: 'With the Revenue Generation System:\n• **Lead response:** Instant (Day 1)\n• **Booked appointments:** Typically within weeks of launching ads\n• **Revenue impact:** Usually within 30 days, depending on your sales cycle length.'
  },
  {
    q: 'How much does it cost?',
    a: 'We create custom offers based on your needs. \n• **Core Offer:** Monthly retainer + Ad spend.\n• **Infrastructure:** One-time project fee.\n\nWe discuss exact pricing during the strategy call once we assess your specific requirements.'
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