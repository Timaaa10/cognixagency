import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { AuditType } from '../App';

interface AIAuditModalProps {
  onClose: () => void;
  type: AuditType;
}

// Define the SelectCard component outside to avoid recreation on every render and for better type handling
interface SelectCardProps {
  name: string;
  value: string;
  label: string;
  current: string;
  onSelect: (name: string, value: string) => void;
}

const SelectCard: React.FC<SelectCardProps> = ({ name, value, label, current, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(name, value)}
    className={`p-4 text-left rounded-xl border-2 transition-all duration-300 relative group flex items-center justify-between ${
      current === value 
        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20' 
        : 'border-slate-100 dark:border-navy-700 bg-white dark:bg-navy-800/50 hover:border-blue-200 dark:hover:border-navy-600'
    }`}
  >
    <span className={`text-sm font-semibold ${current === value ? 'text-blue-700 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
      {label}
    </span>
    {current === value && (
      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
      </div>
    )}
  </button>
);

const AIAuditModal: React.FC<AIAuditModalProps> = ({ onClose, type }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    url: '',
    industry: '',
    industryOther: '',
    leadSource: '',
    leadSourceOther: '',
    responseBehavior: '',
    challenge: '',
    revenue: '',
    openToAI: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Determine collection name based on audit type
      const collectionName = {
        'Free': 'free_ai_audit_clients',
        'Advanced': 'advanced_ai_audit_clients',
        'Strategic': 'strategic_ai_audit_clients'
      }[type];

      const submissionData = {
        ...formData,
        auditType: type,
        submittedAt: serverTimestamp(),
        finalIndustry: formData.industry === 'Other' ? formData.industryOther : formData.industry,
        finalLeadSource: formData.leadSource === 'Other' ? formData.leadSourceOther : formData.leadSource
      };

      await addDoc(collection(db, collectionName), submissionData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting audit form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-xl" onClick={onClose}></div>
        <div className="relative w-full max-w-lg bg-white dark:bg-navy-900 rounded-[2.5rem] p-10 text-center shadow-2xl border border-slate-200 dark:border-navy-700">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-8 shadow-inner">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-[#0a1d37] dark:text-white mb-4">You're All Set!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
            Your data is being analyzed. Our revenue specialists will review your current systems and reach out with your custom {type.toLowerCase()} audit details shortly.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-5 bg-[#0a1d37] dark:bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-lg" onClick={onClose}></div>
      
      {/* Form Container with Shimmer Border */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-navy-900 rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden border border-slate-200 dark:border-navy-700 my-8">
        
        {/* Shimmer Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-600 animate-pulse"></div>

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-2.5 rounded-full bg-slate-50 dark:bg-navy-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header & Progress */}
        <div className="pt-10 px-8 md:px-12 text-center">
          <div className="mb-4 inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-extrabold uppercase tracking-[0.2em]">
            {type} Revenue Audit Request
          </div>
          <h2 className="text-3xl font-black text-[#0a1d37] dark:text-white mb-2 leading-tight">
            {type === 'Free' ? 'Free Revenue Audit' : `${type} Audit Request`}
          </h2>
          <div className="max-w-xs mx-auto mb-8">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-navy-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-8 md:px-12 pb-12">
          
          {/* STEP 1: BASICS */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">The Basics</h3>
                <p className="text-sm text-slate-500">Let's start with your contact information.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Your Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Work Email *</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="name@company.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Company *</label>
                  <input required name="company" value={formData.company} onChange={handleChange} type="text" className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Website URL *</label>
                  <input required name="url" value={formData.url} onChange={handleChange} type="url" className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all" placeholder="https://..." />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: INDUSTRY */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Business Profile</h3>
                <p className="text-sm text-slate-500">What industry do you operate in?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Consulting', 'Pool Construction', 'Medical / Dental', 'Home Services', 'Law Firm', 'Other'].map(opt => (
                  <SelectCard key={opt} name="industry" value={opt} label={opt} current={formData.industry} onSelect={handleSelect} />
                ))}
              </div>
              {formData.industry === 'Other' && (
                <div className="animate-fade-in-up pt-2">
                  <input required name="industryOther" value={formData.industryOther} onChange={handleChange} type="text" className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="Please specify your industry" />
                </div>
              )}
            </div>
          )}

          {/* STEP 3: OPERATIONS */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Operations</h3>
                <p className="text-sm text-slate-500">Tell us about your current lead flow.</p>
              </div>
              
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">How do you get leads? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Paid ads', 'Organic / SEO', 'Referrals', 'Other'].map(opt => (
                    <SelectCard key={opt} name="leadSource" value={opt} label={opt} current={formData.leadSource} onSelect={handleSelect} />
                  ))}
                </div>
                {formData.leadSource === 'Other' && (
                  <input required name="leadSourceOther" value={formData.leadSourceOther} onChange={handleChange} type="text" className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="Specify sources" />
                )}
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Lead Response Speed? *</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { val: 'We call within 5 mins', label: 'Within 5 minutes (Elite)' },
                    { val: 'We call within 1 hour', label: 'Within 1 hour (Average)' },
                    { val: 'Manual / When possible', label: 'Manual / Inconsistent' },
                    { val: 'Not sure', label: 'Not sure / Not tracked' }
                  ].map(opt => (
                    <SelectCard key={opt.val} name="responseBehavior" value={opt.val} label={opt.label} current={formData.responseBehavior} onSelect={handleSelect} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CHALLENGE & REVENUE */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Goals & Revenue</h3>
                <p className="text-sm text-slate-500">Almost done! Let's talk about the future.</p>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Your Biggest Challenge? *</label>
                <textarea required name="challenge" value={formData.challenge} onChange={handleChange} rows={2} className="w-full bg-slate-50 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white resize-none transition-all" placeholder="e.g. Better follow-up, lower acquisition costs..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Monthly Revenue? *</label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Under $10k', '50k', '100k', '$100k+'].map(opt => (
                      <SelectCard key={opt} name="revenue" value={opt} label={opt} current={formData.revenue} onSelect={handleSelect} />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Open to AI? *</label>
                  <div className="grid grid-cols-1 gap-2">
                    {['Yes', 'Maybe', 'No'].map(opt => (
                      <SelectCard key={opt} name="openToAI" value={opt} label={opt} current={formData.openToAI} onSelect={handleSelect} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex items-center justify-between gap-4">
            {currentStep > 1 && (
              <button 
                type="button" 
                onClick={prevStep}
                className="px-8 py-5 text-slate-400 hover:text-slate-900 dark:hover:text-white font-bold transition-all bg-transparent border-none cursor-pointer"
              >
                Back
              </button>
            )}
            
            <div className="flex-grow"></div>

            {currentStep < totalSteps ? (
              <button 
                type="button" 
                onClick={nextStep}
                disabled={currentStep === 1 && (!formData.name || !formData.email || !formData.company || !formData.url)}
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
              >
                Next Step
              </button>
            ) : (
              <button 
                type="submit" 
                disabled={isSubmitting || !formData.revenue || !formData.openToAI || !formData.challenge}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-lg rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-1.5 transition-all disabled:opacity-50 border-none cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>Submitting...</span>
                  </div>
                ) : 'Complete Audit Request'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIAuditModal;