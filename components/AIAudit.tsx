import React from 'react';

const AIAudit: React.FC = () => {
  const auditLink = "https://docs.google.com/forms/d/e/1FAIpQLSevFTpUzPB5jKWWdjy2gkIjsrTXn27_ti_87tcvhkuS2noqKA/viewform?usp=header";

  return (
    <section id="audit" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 navy-gradient -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1d37] mb-6 leading-tight">
              Get Your Free <span className="text-blue-600">AI Revenue Audit</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Discover exactly how much revenue you are leaving on the table and how AI automation can recapture it for you.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Lead response speed analysis',
                'Missed revenue opportunity calculation',
                'Follow-up gap identification',
                'Custom AI automation roadmap'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href={auditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 text-xl font-bold text-white bg-[#0a1d37] rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
            >
              Request Free AI Audit
            </a>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-inner overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-bold text-slate-400">COGNIX ANALYTICS V2.0</div>
              </div>
              <div className="space-y-6">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-[10px] text-blue-400 font-bold mb-1 uppercase tracking-tight">Efficiency</div>
                    <div className="text-2xl font-black text-blue-700">+84%</div>
                  </div>
                  <div className="h-20 bg-green-50 rounded-xl p-4 border border-green-100">
                    <div className="text-[10px] text-green-400 font-bold mb-1 uppercase tracking-tight">Revenue Lift</div>
                    <div className="text-2xl font-black text-green-700">3.2x</div>
                  </div>
                </div>
                <div className="h-32 bg-slate-200 rounded-xl animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAudit;