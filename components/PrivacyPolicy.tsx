import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1d37] dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-12">Last updated: 23.12.2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Cognix Agency (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you visit our website or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following information when you use our website:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Website URL</li>
              <li>Any information you submit through forms (e.g. Free AI Audit request)</li>
            </ul>
            <p className="mt-4 italic">We do not knowingly collect sensitive personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to inquiries and requests</li>
              <li>Schedule strategy calls</li>
              <li>Provide free audits and consultations</li>
              <li>Communicate about our services</li>
              <li>Improve our website and offerings</li>
            </ul>
            <p className="mt-4 font-semibold">We do not sell or rent your personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">4. Data Sharing</h2>
            <p className="mb-4">We may share your information only with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Internal team members</li>
              <li>Service providers (e.g. scheduling tools, email services)</li>
              <li>Platforms required to deliver our services</li>
            </ul>
            <p className="mt-4">All third parties are required to keep your data secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">5. Cookies & Analytics</h2>
            <p className="leading-relaxed">
              Our website may use basic cookies or analytics tools to understand website usage and improve performance. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to your data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of communications at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at:<br />
              <span className="font-bold text-[#0a1d37] dark:text-blue-400">Email: cognix.agency@gmail.com</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">8. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">9. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0a1d37] dark:text-white mb-4">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, contact us at:<br />
              <span className="font-bold text-[#0a1d37] dark:text-blue-400">Email: cognix.agency@gmail.com</span>
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

export default PrivacyPolicy;