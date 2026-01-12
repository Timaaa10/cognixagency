
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const FloatingChatWidget: React.FC<{ onBookClick: () => void }> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your Cognix AI consultant. How can I help you build a high-performance revenue system today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatInstance.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are Cognix AI, the expert consultant for Cognix Agency. Your goal is to explain our offers and convert visitors into strategy calls.

CORE KNOWLEDGE BASE:
- Agency Name: Cognix Agency.
- Focus: AI-Powered Revenue Systems for high-ticket service businesses (Law firms, Pool Construction, HVAC, Solar, Consulting).
- Core Offer (Monthly): "Revenue Generation System". Includes Paid Ads (Meta/Google), Funnel Strategy, AI Callers (inbound/outbound), AI Chatbots (24/7), Automated Follow-ups. 
- SPECIAL PROMO: First 30 days — 0 agency fee.
- Infrastructure Setup (One-time): Building websites, CRM setup, lead capture automation.
- Pricing: Customized based on business volume. Never give fixed prices.

CONCISENESS RULES (CRITICAL):
- BE EXTREMELY BRIEF. Users are on a small floating widget.
- NEVER write long paragraphs.
- AIM for 1-3 short sentences per response. 
- Use short bullet points only if absolutely necessary.
- Your primary job is to provide quick answers and move them to a "Strategy Call" or "Free Audit".

KEY POLICIES:
- PRICING: Say pricing is tailored and discussed during a strategy call.
- OBJECTION HANDLING: Briefly mention AI ensures 100% lead coverage and scale.
- CONVERSION GOAL: Guide users to "Book a Strategy Call" or "Free AI Audit".

TONE: Professional, direct, and efficient. Do not over-explain.`,
      },
    });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatInstance.current) initChat();
      
      const response: GenerateContentResponse = await chatInstance.current!.sendMessage({ 
        message: userMessage 
      });
      
      const modelText = response.text || "I'm sorry, I couldn't process that. Would you like to speak with our team directly?";
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Technical error. Let's talk over a call instead!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-navy-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-navy-700 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-[#0a1d37] p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a1d37] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm">Cognix AI</h4>
                <p className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">Live Consultant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 bg-transparent border-none cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-slate-50 dark:bg-navy-950/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white dark:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-navy-700 rounded-tl-none'
                }`}>
                  <div className="whitespace-pre-line">{msg.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-navy-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-navy-700 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-800">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="How can we help?"
                className="flex-grow bg-slate-100 dark:bg-navy-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all disabled:opacity-50 border-none cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <div className="mt-3 flex justify-center">
              <button 
                onClick={() => { setIsOpen(false); onBookClick(); }}
                className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter hover:underline bg-transparent border-none cursor-pointer"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-[#0a1d37] dark:bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-none cursor-pointer"
      >
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-4 border-white dark:border-navy-950 flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
        </div>
        {isOpen ? (
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingChatWidget;
