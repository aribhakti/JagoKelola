import React from 'react';
import { INDUSTRIES } from '../constants';
import { useAppContext } from '../ThemeContext';

const Industries: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="industries" className="py-24 bg-brand-blue dark:bg-slate-950 overflow-hidden relative transition-colors duration-300">
      <div className="absolute inset-0 bg-brand-blue dark:bg-slate-950 opacity-90"></div>
      
      {/* Abstract Background pattern */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-green rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-3">{t.industries.subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {t.industries.title}
          </h3>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto">{t.industries.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 aspect-[4/3] flex items-center justify-center text-center p-6 hover:shadow-2xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-500"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-green rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-brand-green group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
                  <industry.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{industry.name}</h4>
                <p className="text-blue-100 group-hover:text-white transition-colors">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;