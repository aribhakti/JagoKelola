import React from 'react';
import { PAIN_POINTS } from '../constants';
import { useAppContext } from '../ThemeContext';

const PainPoints: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="benefits" className="py-24 bg-green-50/50 dark:bg-slate-800 relative transition-colors duration-300">
       {/* Subtle background gradient splash */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/50 via-green-50/30 to-white/50 dark:from-slate-900/50 dark:via-slate-800/50 dark:to-slate-900/50 opacity-80 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-3">{t.pain.subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">
            {t.pain.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t.pain.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((point, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-700 p-8 rounded-2xl border border-gray-100 dark:border-slate-600 shadow-sm hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/30 text-red-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <point.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{point.problem}</h4>
              <div className="h-px w-full bg-gray-100 dark:bg-slate-600 mb-4 group-hover:bg-brand-green/30 transition-colors"></div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-brand-green">{t.pain.solution_label} </span>
                {point.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;