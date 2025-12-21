import React, { useState } from 'react';
import { useAppContext } from '../ThemeContext';
import { FEATURE_ICONS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const { t } = useAppContext();
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = t.features.categories;

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-500 font-semibold tracking-wide uppercase text-sm mb-3">
            {t.features.subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">
            {t.features.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t.features.desc}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category: any, index: number) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-brand-green text-white shadow-lg shadow-green-500/30 scale-105'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in key={activeCategory}">
          {categories[activeCategory].items.map((feature: any) => {
            const Icon = FEATURE_ICONS[feature.id] || FEATURE_ICONS['settings']; // Fallback icon
            
            return (
              <div 
                key={feature.id} 
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-brand-green/30 dark:hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700 text-brand-blue dark:text-blue-300 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-green transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                  {feature.desc}
                </p>

                <div className="flex items-center text-brand-green font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action within Features */}
        <div className="mt-16 text-center">
          <a href="https://erp.cubix.co.id/login" className="inline-flex items-center justify-center gap-2 text-brand-blue dark:text-blue-300 font-semibold hover:text-brand-green dark:hover:text-green-400 transition-colors">
            Lihat dokumentasi lengkap fitur
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Features;