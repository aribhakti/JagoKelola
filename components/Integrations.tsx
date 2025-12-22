import React from 'react';
import { ShoppingBag, CreditCard, Truck, Link } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Integrations: React.FC = () => {
  const { t } = useAppContext();

  // Helper to get icon for category
  const getIcon = (category: string) => {
    switch (category) {
      case 'Marketplace': return ShoppingBag;
      case 'Payment': return CreditCard;
      case 'Logistics': return Truck;
      default: return Link;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-3">
            {t.integrations.subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-6">
            {t.integrations.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t.integrations.desc}
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Marketplace */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
                 <ShoppingBag size={24} />
               </div>
               <h4 className="font-bold text-lg text-gray-900 dark:text-white">{t.integrations.marketplace}</h4>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {t.integrations.partners.filter((p: any) => p.category === 'Marketplace').map((partner: any, idx: number) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 text-sm shadow-sm hover:border-brand-green transition-colors cursor-default">
                    {partner.name}
                  </div>
                ))}
             </div>
          </div>

          {/* Payment */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                 <CreditCard size={24} />
               </div>
               <h4 className="font-bold text-lg text-gray-900 dark:text-white">{t.integrations.payment}</h4>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {t.integrations.partners.filter((p: any) => p.category === 'Payment').map((partner: any, idx: number) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 text-sm shadow-sm hover:border-brand-green transition-colors cursor-default">
                    {partner.name}
                  </div>
                ))}
             </div>
          </div>

          {/* Logistics */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                 <Truck size={24} />
               </div>
               <h4 className="font-bold text-lg text-gray-900 dark:text-white">{t.integrations.logistics}</h4>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {t.integrations.partners.filter((p: any) => p.category === 'Logistics').map((partner: any, idx: number) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 text-sm shadow-sm hover:border-brand-green transition-colors cursor-default">
                    {partner.name}
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Integrations;