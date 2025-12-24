import React, { useState } from 'react';

const faqs = [
  {
    q: 'What does Cognix Agency actually do?',
    a: 'Cognix Agency builds AI-powered revenue systems for service-based and high-ticket businesses. We combine paid advertising, AI callers (inbound & outbound), automated follow-ups, appointment booking, and sales process optimization to help you close more deals with less manual work.'
  },
  {
    q: 'Who is this service for?',
    a: 'Our systems work best for:\n• Medical & dental clinics\n• Pool construction companies\n• Law firms\n• Home service businesses (HVAC, roofing, solar, etc.)\n• Consulting and high-ticket service companies\n\nIf your business already gets leads or wants to scale lead volume, we’re a strong fit.'
  },
  {
    q: 'How is this different from a marketing agency?',
    a: 'Most agencies only generate leads. We focus on revenue, not vanity metrics.\n\nThat means:\n• We don’t just send traffic — we handle lead response\n• AI callers follow up instantly instead of humans\n• We optimize your sales scripts and process\n• The goal is more booked calls and closed deals, not clicks'
  },
  {
    q: 'Do AI callers replace my sales team?',
    a: 'No. AI callers support and optimize your sales team.\n\nThey:\n• Respond instantly to new leads\n• Follow up automatically\n• Qualify prospects\n• Book appointments\n\nYour team focuses only on high-intent conversations.'
  },
  {
    q: 'How fast can I see results?',
    a: 'Typically:\n• Lead response improvements: immediate\n• More booked appointments: within 3-4 weeks\n• Revenue impact: within 30 days, depending on your offer and sales process'
  },
  {
    q: 'What is the Free AI Audit?',
    a: 'The Free AI Audit shows you where you are losing revenue right now.\n\nIt includes:\n• Lead response speed analysis\n• Follow-up gaps\n• Missed automation opportunities\n• Recommendations for AI and process improvements\n\nNo obligation. No hard pitch.'
  },
  {
    q: 'Do you work with small businesses or only large companies?',
    a: 'We work with both. The main requirement is having a real service, a proven offer, and the intention to grow.\n\nIf your business is not ready for systems or automation, we’ll tell you honestly.'
  },
  {
    q: 'Do I need special software or tools?',
    a: 'No. We handle the setup, integrations, and optimization. If you already use tools like a CRM or calendar system, we integrate with them.'
  },
  {
    q: 'Is this compliant with regulations (healthcare, legal, etc.)?',
    a: 'Yes. We design systems with compliance in mind and adjust workflows depending on the industry.\n\nFinal compliance always depends on your internal policies and local regulations.'
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on:\n• Your industry\n• Lead volume\n• System complexity\n\nWe discuss pricing after the strategy call, once we understand your business.'
  },
  {
    q: 'What if this is not a good fit for my business?',
    a: 'We’ll tell you upfront. If Cognix Agency can’t realistically improve your revenue, we won’t take you on as a client.'
  },
  {
    q: 'How do I get started?',
    a: 'You can:\n• Book a strategy call, or\n• Request a free AI audit\n\nWe’ll review your situation and outline the next steps.'
  }
];

const FAQItem: React.FC<{ faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300">
      <button 
        onClick={onClick}
        className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
      >
        <h4 className="text-lg font-bold text-[#0a1d37] pr-8">{faq.q}</h4>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 md:p-8 pt-2 md:pt-4 text-slate-600 leading-relaxed whitespace-pre-line">
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
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d37] mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about our AI systems and how we work.</p>
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