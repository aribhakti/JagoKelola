import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Check, Send } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Consultation: React.FC = () => {
  const { t } = useAppContext();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formState);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-blue to-blue-900 dark:from-slate-800 dark:to-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-slate-700">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Column: Content */}
            <div className="p-10 md:p-14 relative flex flex-col justify-center">
              {/* Decorative Circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t.consultation.title}
                </h2>
                <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                  {t.consultation.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/628567234922"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-green-500/50 hover:-translate-y-1"
                  >
                    <MessageCircle size={20} />
                    {t.consultation.cta_wa}
                  </a>
                  <a 
                    href="https://erp.cubix.co.id/login"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-colors"
                  >
                    {t.consultation.cta_trial} <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-14 border-t lg:border-t-0 lg:border-l border-white/10">
               {isSuccess ? (
                 <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                   <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
                     <Check size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Terima Kasih!</h3>
                   <p className="text-blue-100">{t.consultation.form.success}</p>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-5">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">{t.consultation.form.name}</label>
                     <input 
                       type="text" 
                       id="name"
                       name="name"
                       required
                       value={formState.name}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-700/50 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                       placeholder="John Doe"
                     />
                   </div>
                   
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">{t.consultation.form.email}</label>
                     <input 
                       type="email" 
                       id="email"
                       name="email"
                       required
                       value={formState.email}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-700/50 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                       placeholder="john@company.com"
                     />
                   </div>

                   <div>
                     <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">{t.consultation.form.subject}</label>
                     <input 
                       type="text" 
                       id="subject"
                       name="subject"
                       required
                       value={formState.subject}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-700/50 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                       placeholder="Demo Request"
                     />
                   </div>

                   <div>
                     <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1.5 ml-1">{t.consultation.form.message}</label>
                     <textarea 
                       id="message"
                       name="message"
                       required
                       rows={4}
                       value={formState.message}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl bg-blue-950/40 border border-blue-700/50 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none"
                     ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-brand-green hover:bg-brand-darkGreen disabled:bg-gray-500 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-green-500/30 mt-2 flex items-center justify-center gap-2"
                   >
                     {isSubmitting ? (
                       <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                     ) : (
                       <>
                         {t.consultation.form.submit} <Send size={18} />
                       </>
                     )}
                   </button>
                 </form>
               )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;