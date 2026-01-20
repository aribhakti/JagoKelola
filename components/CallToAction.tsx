import React from 'react';
import { Smartphone, Download } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const CallToAction: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="download" className="py-24 bg-brand-blue dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-fresh border border-brand-green/30 text-sm font-semibold mb-6">
                <Smartphone size={16} /> Mobile App
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               {t.download.title}
             </h2>
             <p className="text-green-50 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0">
               {t.download.desc}
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               {/* Google Play Button */}
               <button 
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl border border-white/20 hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
                aria-label="Download on Google Play"
               >
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                    alt="Google Play" 
                    width="32" 
                    height="32" 
                    loading="lazy"
                    className="w-8 h-8" 
                 />
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-medium text-gray-400">Get it on</div>
                   <div className="text-base font-bold leading-none">{t.download.google}</div>
                 </div>
               </button>

               {/* App Store Button */}
               <button 
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl border border-white/20 hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
                aria-label="Download on App Store"
               >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.05.05-2.31.72-3.06 1.64-.68.82-1.27 2.18-1.11 3.24 1.17.09 2.36-.96 3.1-1.77z"/></svg>
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-medium text-gray-400">Download on</div>
                   <div className="text-base font-bold leading-none">{t.download.apple}</div>
                 </div>
               </button>
             </div>
          </div>

          {/* Visual Mockup (CSS only to save assets and bandwidth) */}
          <div className="relative">
             <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-white dark:bg-slate-800 pt-8 px-4 flex flex-col">
                   <div className="flex justify-between items-center mb-6">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                      <div className="w-20 h-4 bg-gray-200 dark:bg-slate-700 rounded-full"></div>
                   </div>
                   <div className="w-full h-32 bg-brand-green/10 rounded-2xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                         <div className="text-2xl font-bold text-brand-green">Rp 15.2jt</div>
                         <div className="text-xs text-gray-400">Today's Sales</div>
                      </div>
                   </div>
                   <div className="space-y-3">
                      {[1,2,3,4].map(i => (
                         <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                            <div className="w-10 h-10 bg-gray-200 dark:bg-slate-600 rounded-lg"></div>
                            <div className="flex-1">
                               <div className="w-24 h-3 bg-gray-200 dark:bg-slate-600 rounded mb-1"></div>
                               <div className="w-16 h-2 bg-gray-200 dark:bg-slate-600 rounded"></div>
                            </div>
                         </div>
                      ))}
                   </div>
                   
                   {/* Floating Add Button */}
                   <div className="absolute bottom-6 right-6 w-12 h-12 bg-brand-green rounded-full shadow-lg flex items-center justify-center text-white">
                      <Download size={20} />
                   </div>
                </div>
             </div>
             
             {/* Decorative blob behind phone */}
             <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green to-teal-500 rounded-[3.5rem] -z-10 blur-md opacity-40"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;