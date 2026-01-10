import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-[#06142a] scroll-mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-6">
            Offers & Systems
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            We don’t sell scattered services. We build cohesive systems that solve specific revenue problems.
          </p>
        </div>

        {/* --- CORE OFFER --- */}
        <div className="mb-24">
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a1d37] dark:bg-navy-900 shadow-2xl transition-transform hover:scale-[1.01] duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-600/30 to-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 items-start">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
                  Core Offer (Monthly)
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Revenue Generation System
                </h3>
                
                {/* Special Offer Badge */}
                <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-2xl px-5 py-3 mb-8 backdrop-blur-sm shadow-lg shadow-green-900/20">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-green-400 tracking-tight">
                    First 30 days — 0 agency fee
                  </span>
                </div>

                <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
                  Best for businesses that want more booked calls and closed deals — fast. 
                  This is our core monthly service that generates demand, responds instantly to leads, and turns them into paying customers.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    'Paid Ads (Meta / Google / TikTok)',
                    'Funnel Strategy (Lead → Call → Sale)',
                    'AI Callers (Inbound/Outbound)',
                    'AI Chatbots (24/7 Response)',
                    'Automated Follow-ups',
                    'Sales Scripts & Optimization'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                      <span className="font-medium text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl lg:translate-y-8">
                <h4 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Results You Can Expect</h4>
                <ul className="space-y-4">
                  {[
                    'Predictable flow of booked sales calls',
                    'Instant lead response — zero missed opportunities',
                    'Higher-quality leads that are ready to buy',
                    'Increased revenue without hiring more staff',
                    'Automated follow-ups that convert leads into deals',
                    'Less time spent managing leads and sales',
                  ].map((res, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      <span className="leading-snug">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- INFRASTRUCTURE OFFERS --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a1d37] dark:text-white">
              Infrastructure Setup
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Best for businesses needing the foundation to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Setup */}
            <div className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg group">
              <h4 className="text-xl font-bold text-[#0a1d37] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Revenue Infrastructure Setup</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">
                Best for businesses without a proper system in place.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Conversion-Focused Website',
                  'Custom CRM Setup (Pipelines)',
                  'Lead Capture Automation',
                  'AI Caller Integration',
                  'Appointment Booking System',
                  'Analytics & Tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                     <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Setup */}
            <div className="relative p-8 rounded-3xl bg-white dark:bg-navy-800 border-2 border-blue-600 dark:border-blue-500 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl tracking-wide">
                PREMIUM
              </div>
              <h4 className="text-xl font-bold text-[#0a1d37] dark:text-white mb-2">Fully Automated Sales Machine</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">
                Best for owners who want sales handled end-to-end.
              </p>
              
              <ul className="space-y-3">
                {[
                  'All Infrastructure Features',
                  'Advanced CRM (Roles & Reports)',
                  'Full Sales Process Setup',
                  'AI Lead Reactivation Campaigns',
                  'KPI Tracking & Optimization',
                  'Minimal Owner Involvement'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- OPTIONAL / UPSELLS --- */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a1d37] dark:text-white">
              Optional Services & Add-Ons
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Specific solutions to plug gaps in your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Brand Identity',
                desc: 'Logo, colors, typography, and brand guidelines.'
              },
              {
                title: 'Visual Content',
                desc: 'Photo editing, retouching, and conversion-focused visuals.'
              },
              {
                title: 'Ad Creatives',
                desc: 'High-performing photo & video variations for testing.'
              },
              {
                title: 'Website Only',
                desc: 'Conversion-focused, fast, and integration-ready.'
              },
              {
                title: 'CRM Optimization',
                desc: 'Pipelines, automations, and task logic setup.'
              },
              {
                title: 'AI Caller Setup',
                desc: 'Standalone inbound/outbound setup with scripts.'
              },
              {
                title: 'AI Chatbot Setup',
                desc: 'WhatsApp, web, or social media automated chat.'
              },
              {
                title: 'Sales Scripts',
                desc: 'Closing frameworks, objection handling, and flow.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg transition-all cursor-default">
                <h4 className="text-lg font-bold text-[#0a1d37] dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium">Need something specific? We can build a custom offer for you.</p>
          <a href="mailto:cognix.agency@gmail.com" className="inline-flex items-center font-bold text-blue-600 dark:text-blue-400 hover:underline">
            Contact us at cognix.agency@gmail.com
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;