import React from 'react';
import { UserPlus, Settings, TrendingUp } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const HowItWorks: React.FC = () => {
  const { t } = useAppContext();

  const icons = [UserPlus, Settings, TrendingUp];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-3">
            {t.howItWorks.subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-6">
            {t.howItWorks.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t.howItWorks.desc}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-gray-200 via-brand-green to-gray-200 dark:from-slate-700 dark:via-brand-green dark:to-slate-700 z-0"></div>

          {t.howItWorks.steps.map((step: any, idx: number) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-gray-100 dark:border-slate-700 flex items-center justify-center mb-8 shadow-sm group-hover:border-brand-green group-hover:scale-110 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-brand-blue dark:text-blue-300 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white dark:border-slate-900 shadow-md">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;