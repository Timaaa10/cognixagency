import React from 'react';

const AIAudit: React.FC = () => {
  const auditLink = "https://docs.google.com/forms/d/e/1FAIpQLSevFTpUzPB5jKWWdjy2gkIjsrTXn27_ti_87tcvhkuS2noqKA/viewform?usp=header";

  return (
    <section id="audit" className="py-24 relative overflow-hidden scroll-mt-24 transition-colors duration-300 bg-white dark:bg-navy-950">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-4">
            AI Revenue Audits
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Identify exactly where you are losing money and how to recapture it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Free Audit */}
          <div className="md:-mt-4 md:-mb-4 bg-white dark:bg-navy-800 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-navy-700 relative z-10 flex flex-col hover:border-blue-500 transition-colors duration-300">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-3xl"></div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-2">Free Audit</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">Best for first contact & qualification</p>
            
            <div className="space-y-6 mb-8 flex-grow">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Includes Review Of</div>
                <ul className="space-y-3">
                  {['Lead sources', 'Response speed', 'Follow-up process'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Deliverables</div>
                <ul className="space-y-3">
                  {['Gap identification', 'Automation gaps', 'Short summary'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a 
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-[#0a1d37] to-[#1e3a63] dark:from-blue-600 dark:to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all"
            >
              Request Free Audit
            </a>
          </div>

          {/* Advanced Audit */}
          <div className="bg-slate-50 dark:bg-navy-900/50 rounded-3xl p-8 border border-slate-200 dark:border-navy-700 flex flex-col hover:bg-white dark:hover:bg-navy-900 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#0a1d37] dark:text-white mb-2">Advanced Audit</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Best for scaling businesses</p>
            
            <div className="space-y-6 mb-8 flex-grow">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Deep Analysis Of</div>
                <ul className="space-y-3">
                  {['Ads & Funnels', 'CRM & Pipelines', 'Lead Logic'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Deliverables</div>
                <ul className="space-y-3">
                  {['Custom Roadmap', 'ROI Estimation', 'AI Opportunities'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-slate-500 font-medium pt-4 border-t border-slate-200 dark:border-navy-800">
              Paid / Included in Strategy
            </div>
          </div>

          {/* Strategic Audit */}
          <div className="bg-slate-50 dark:bg-navy-900/50 rounded-3xl p-8 border border-slate-200 dark:border-navy-700 flex flex-col hover:bg-white dark:hover:bg-navy-900 transition-colors duration-300">
            <h3 className="text-xl font-bold text-[#0a1d37] dark:text-white mb-2">Strategic Audit</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Deep dive for high-ticket clients</p>
            
            <div className="space-y-6 mb-8 flex-grow">
              <div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Full Analysis</div>
                <ul className="space-y-3">
                  {['Workflow (Lead→Sale)', 'Sales Automation', 'AI Architecture'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Deliverables</div>
                <ul className="space-y-3">
                  {['Integration Plan', 'Revenue Model', 'Step-by-step Plan'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-slate-500 font-medium pt-4 border-t border-slate-200 dark:border-navy-800">
              Consulting Service
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAudit;