import React from 'react';
import { Check } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Pricing: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-3">{t.pricing.subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">
            {t.pricing.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.pricing.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.pricing.tiers.map((tier: any) => (
            <div 
              key={tier.name}
              className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-sm p-8 border ${
                tier.recommended 
                  ? 'border-brand-green ring-2 ring-brand-green/20 dark:ring-green-900' 
                  : 'border-gray-100 dark:border-slate-700'
              } flex flex-col hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium shadow-md shadow-green-200 dark:shadow-none">
                  {t.pricing.popular}
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-xl font-bold text-brand-blue dark:text-white mb-2 group-hover:text-brand-green transition-colors">{tier.name}</h4>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{tier.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-1">{t.pricing.month}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 pb-6 border-b border-gray-100 dark:border-slate-800 min-h-[80px]">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <div className="bg-green-100 dark:bg-green-900/40 rounded-full p-1 text-brand-green dark:text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check size={14} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  tier.recommended 
                    ? 'bg-brand-green hover:bg-brand-darkGreen text-white shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:scale-[1.02]' 
                    : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-brand-blue dark:text-white hover:bg-brand-blue hover:text-white dark:hover:bg-slate-700 hover:border-brand-blue dark:hover:border-slate-600'
                }`}
              >
                {t.pricing.select}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;