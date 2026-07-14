
import React from 'react';

interface ServicesProps {
  onBookClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-[#06142a] scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Our offers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-6">
            Choose your growth plan
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Every package is built around one outcome: more qualified clients coming through your door. Pick the level that fits where you are right now — you can always scale up.
          </p>
        </div>

        {/* --- GROWTH PLANS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Starter: Launch */}
          <div className="group p-8 rounded-[2.5rem] bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Starter</span>
              <h3 className="text-3xl font-extrabold text-[#0a1d37] dark:text-white mt-1 mb-3">Launch</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold italic mb-4">"Get found. Get calls."</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The foundation. For businesses that need a professional online presence and a reliable way to turn website visitors into booked appointments.
              </p>
            </div>

            <div className="flex-grow space-y-6 mb-10">
              <h4 className="text-sm font-black uppercase tracking-widest text-[#0a1d37] dark:text-white">Includes</h4>
              <ul className="space-y-4">
                {[
                  'High-converting website built for your service and market',
                  'Google Business Profile optimization',
                  'AI chatbot — books appointments and answers questions 24/7',
                  'Automated review generation system',
                  'Basic CRM setup with lead tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={onBookClick}
              className="w-full py-5 text-base font-black text-white bg-[#0a1d37] dark:bg-navy-800 rounded-2xl hover:bg-slate-800 dark:hover:bg-navy-700 transition-all duration-300 flex items-center justify-center group/btn"
            >
              Get a free strategy call
              <svg className="ml-2 w-5 h-5 transform transition-transform group-hover/btn:translate-x-1 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

          {/* Growth Plan (Most Popular) */}
          <div className="relative p-8 rounded-[2.5rem] bg-white dark:bg-navy-800 border-2 border-blue-600 dark:border-blue-500 shadow-xl hover:shadow-2xl transition-all flex flex-col group overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em] shadow-lg z-20">
              Most popular
            </div>
            
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Scale</span>
              <h3 className="text-3xl font-extrabold text-[#0a1d37] dark:text-white mt-1 mb-3">Growth</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold italic mb-4">"A full client acquisition system — running every day."</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Everything in Launch, plus paid advertising and AI that contacts every new lead in under 60 seconds — qualifying them and booking the appointment before they look elsewhere.
              </p>
            </div>

            <div className="flex-grow space-y-6 mb-10">
              <h4 className="text-sm font-black uppercase tracking-widest text-[#0a1d37] dark:text-white">Everything in Launch, plus</h4>
              <ul className="space-y-4">
                {[
                  'Paid ads on Meta and/or Google — setup, creatives, and ongoing management',
                  'AI voice caller & chatbot — calls & texts every new lead within 60 seconds, qualifies, and books',
                  'Automated SMS and email follow-up sequences for no-shows and cold leads',
                  'Full CRM pipeline with deal stages and automation',
                  'Monthly performance report — leads, appointments, cost per booking'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={onBookClick}
              className="relative w-full py-5 text-base font-black text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:-translate-y-1 flex items-center justify-center overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center">
                Get a free strategy call
                <svg className="ml-2 w-5 h-5 transform transition-transform group-hover/btn:translate-x-1 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Full Service: Brand & Online Presence */}
          <div className="group p-8 rounded-[2.5rem] bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Full service</span>
              <h3 className="text-3xl font-extrabold text-[#0a1d37] dark:text-white mt-1 mb-3 text-balance">Brand & Online Presence</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold italic mb-4">"Your marketing department — without the overhead."</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Everything in Growth, plus brand-building, outbound, and a dedicated strategist. For businesses serious about becoming the dominant name in their market.
              </p>
            </div>

            <div className="flex-grow space-y-6 mb-10">
              <h4 className="text-sm font-black uppercase tracking-widest text-[#0a1d37] dark:text-white">Everything in Growth, plus</h4>
              <ul className="space-y-4">
                {[
                  'Social media content — Reels, carousels, and Stories produced and posted for you',
                  'Personal or business brand strategy and positioning',
                  'Hyper-personalized cold email outreach for B2B client acquisition',
                  'Sales optimization — objection handling, closing scripts, and pitch refinement',
                  'Dedicated account strategist with bi-weekly strategy calls',
                  'Priority support and faster turnaround on all deliverables'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={onBookClick}
              className="w-full py-5 text-base font-black text-white bg-[#0a1d37] dark:bg-navy-800 rounded-2xl hover:bg-slate-800 dark:hover:bg-navy-700 transition-all duration-300 flex items-center justify-center group/btn"
            >
              Get a free strategy call
              <svg className="ml-2 w-5 h-5 transform transition-transform group-hover/btn:translate-x-1 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

        </div>

        {/* --- STANDALONE SERVICES --- */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a1d37] dark:text-white mb-4">
              Standalone Services
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Need just one thing? Standalone projects with a fixed scope. No retainer required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Website build',
                desc: 'Conversion-focused site with copy, design, local SEO, and booking integration'
              },
              {
                title: 'AI caller setup',
                desc: 'Voice AI with custom qualification script and direct calendar booking'
              },
              {
                title: 'AI chatbot setup',
                desc: 'Trained chatbot for your website, Instagram DM, or WhatsApp'
              },
              {
                title: 'CRM & automation',
                desc: 'Full pipeline setup and follow-up automation in HubSpot or GoHighLevel'
              },
              {
                title: 'Strategy session',
                desc: '90-minute marketing audit and growth roadmap — no upsell pressure'
              },
              {
                title: 'Sales optimization',
                desc: 'Objection handling frameworks and closing scripts for your sales calls'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all cursor-default group">
                <h4 className="text-lg font-bold text-[#0a1d37] dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium italic">Don't see what you need?</p>
          <button 
            onClick={onBookClick}
            className="inline-flex items-center font-black text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-transparent border-none cursor-pointer text-lg tracking-tight"
          >
            Book a custom project inquiry
            <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
