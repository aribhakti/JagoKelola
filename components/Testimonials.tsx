import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Testimonials: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section className="py-24 bg-brand-blue dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-semibold tracking-wide uppercase text-sm mb-3">
            {t.testimonials.subtitle}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.testimonials.title}
          </h3>
          <p className="text-green-50 text-lg max-w-2xl mx-auto opacity-90">
            {t.testimonials.desc}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item: any, idx: number) => (
            <div 
              key={idx}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              <Quote className="absolute top-8 right-8 text-brand-green opacity-30" size={40} />
              
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-white mb-8 leading-relaxed italic relative z-10 font-light">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-green"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-brand-green font-medium uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;