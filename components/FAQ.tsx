import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const FAQ: React.FC = () => {
  const { t } = useAppContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-green/10 text-brand-green rounded-xl mb-4">
             <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">
            {t.faq.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t.faq.desc}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item: any, idx: number) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-brand-green/30"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white pr-8">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 text-brand-green transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                  {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-slate-800 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;