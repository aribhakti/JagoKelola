import React from 'react';
import { AlertCircle, TrendingUp, ShieldCheck, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const PainPoints: React.FC = () => {
  const { t } = useAppContext();

  // Mapping IDs from translation to Lucide Icons
  const iconMap: Record<string, any> = {
    stock: AlertCircle,
    finance: TrendingUp,
    staff: ShieldCheck
  };

  return (
    <section id="benefits" className="py-24 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Matching other sections */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <XCircle size={14} /> {t.pain.subtitle}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.pain.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t.pain.desc}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.pain.items.map((point: any, idx: number) => {
            const Icon = iconMap[point.id] || AlertCircle;
            return (
              <div 
                key={idx} 
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-1 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Border Effect via p-1 and bg-clip */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-100 to-transparent dark:from-red-900/20 dark:to-transparent rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-green to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative h-full bg-white dark:bg-slate-800 rounded-xl p-8 flex flex-col items-start z-10">
                  
                  {/* Icon State */}
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-0 group-hover:opacity-0 absolute top-0 left-0">
                      <Icon size={28} />
                    </div>
                    <div className="w-14 h-14 bg-brand-green text-white rounded-2xl flex items-center justify-center transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                      <CheckCircle2 size={28} />
                    </div>
                    {/* Placeholder for layout stability */}
                    <div className="w-14 h-14"></div> 
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-green transition-colors">
                    {point.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                    {point.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-green opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {t.pain.solution_label} <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;