
import React from 'react';
import { AuditType } from '../App';

interface AIAuditProps {
  onAuditClick: (type: AuditType) => void;
}

const AIAudit: React.FC<AIAuditProps> = ({ onAuditClick }) => {
  // Standard badge class for all cards
  const badgeBaseClass = "inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border transition-all duration-300";

  return (
    <section id="audit" className="py-32 relative overflow-hidden scroll-mt-24 transition-colors duration-300 bg-white dark:bg-navy-950">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Diagnostic Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0a1d37] dark:text-white mb-6 tracking-tight">
            AI Revenue Audits
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Identify exactly where you are losing money and how to recapture it with specialized AI frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Free Audit Card */}
          <div className="group relative flex flex-col bg-slate-50/50 dark:bg-navy-900/40 backdrop-blur-sm rounded-[2.5rem] p-10 border-2 border-slate-100 dark:border-navy-800 shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span className={`${badgeBaseClass} bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50`}>
                Free
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-[#0a1d37] dark:text-white mb-2">Free AI Revenue Audit</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Best for first contact & qualification</p>
            
            <div className="space-y-8 flex-grow">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</div>
                <ul className="space-y-4">
                  {[
                    'Review of lead sources, speed & follow-up', 
                    'Identify lost leads & manual gaps', 
                    'High-level AI/Automation recommendations',
                    'Short summary with next steps'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-100 dark:border-navy-800">
                <button 
                  onClick={() => onAuditClick('Free')}
                  className="w-full py-4 rounded-2xl bg-[#228B22] text-white font-black text-lg hover:bg-[#10B981] transition-all shadow-md hover:-translate-y-1 border-none cursor-pointer"
                >
                  Get Free Audit
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Audit Card */}
          <div className="group relative flex flex-col bg-slate-50/50 dark:bg-navy-900/40 backdrop-blur-sm rounded-[2.5rem] p-10 border-2 border-slate-100 dark:border-navy-800 shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className={`${badgeBaseClass} bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-800/50`}>
                Advanced
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-[#0a1d37] dark:text-white mb-2">Advanced AI Revenue Audit</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Best for businesses considering automation or scaling</p>
            
            <div className="space-y-8 flex-grow">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</div>
                <ul className="space-y-4">
                  {[
                    'Analysis of ads, funnels, CRM & pipelines', 
                    'AI caller & qualification opportunities', 
                    'Custom automation roadmap',
                    'ROI estimation & scaling model'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-100 dark:border-navy-800">
                <button 
                  onClick={() => onAuditClick('Advanced')}
                  className="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 border-none cursor-pointer"
                >
                  Request Advanced Audit
                </button>
              </div>
            </div>
          </div>

          {/* Strategic Audit Card */}
          <div className="group relative flex flex-col bg-slate-50/50 dark:bg-navy-900/40 backdrop-blur-sm rounded-[2.5rem] p-10 border-2 border-slate-100 dark:border-navy-800 shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
              </div>
              <span className={`${badgeBaseClass} bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800/50`}>
                Deep / Strategic
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-[#0a1d37] dark:text-white mb-2">Strategic AI Revenue Audit</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Best for serious businesses & high-ticket clients</p>
            
            <div className="space-y-8 flex-grow">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</div>
                <ul className="space-y-4">
                  {[
                    'Full workflow analysis (Traffic to Sale)', 
                    'CRM, sales & automation breakdown', 
                    'AI Architecture (Callers & Workflows)',
                    'KPI & Revenue optimization model',
                    'Step-by-step implementation plan'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-slate-100 dark:border-navy-800">
                <button 
                  onClick={() => onAuditClick('Strategic')}
                  className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20 border-none cursor-pointer"
                >
                  Request Strategic Audit
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIAudit;
