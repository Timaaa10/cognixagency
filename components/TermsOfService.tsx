
import React from 'react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-8 inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors bg-transparent border-none cursor-pointer"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-4">Terms of Service</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-12">Last updated: 23.12.2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">2. Services</h2>
            <p className="leading-relaxed">
              Cognix Agency provides AI-powered marketing, automation, and revenue optimization services. All information on this website is provided for general informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">3. No Guarantees</h2>
            <p className="leading-relaxed">
              We do not guarantee specific results, revenue, or performance outcomes. Results depend on multiple factors, including your business model, offer, market, and execution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">4. Client Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use our services lawfully</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            <p className="mt-4 font-semibold">You are responsible for your business decisions and actions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website (text, branding, design) is the property of Cognix Agency and may not be copied or used without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Cognix Agency shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of this website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">7. Third-Party Services</h2>
            <p className="leading-relaxed">
              We may reference or integrate third-party tools or platforms. We are not responsible for their performance or policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">8. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to refuse service or terminate access to the website at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">9. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed and interpreted in accordance with applicable laws. (Jurisdiction to be determined if required.)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">10. Changes to Terms</h2>
            <p className="leading-relaxed">
              We may update these Terms of Service at any time. Continued use of the website means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">11. Contact Information</h2>
            <p className="leading-relaxed">
              For questions regarding these Terms, contact us at:<br />
              <span className="font-bold text-[#0a1d37] dark:text-blue-400">Email: tim@cognix.agency</span>
            </p>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-navy-800">
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-[#0a1d37] dark:bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg border-none cursor-pointer"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
