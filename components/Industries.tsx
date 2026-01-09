import React from 'react';
import { Coffee, ShoppingBag, Shirt, Store, UtensilsCrossed, Tag, Truck, Briefcase } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Industries: React.FC = () => {
  const { t } = useAppContext();

  // Enhanced Icon Mapping to match new translation IDs
  const iconMap: Record<string, any> = {
    fnb: UtensilsCrossed,
    retail: Store,
    fashion: Tag,
    distributor: Truck,
    services: Briefcase
  };

  return (
    <section id="industries" className="py-24 bg-brand-blue dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">
            {t.industries.subtitle}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.industries.title}
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto opacity-90">
            {t.industries.desc}
          </p>
        </div>

        {/* Cards Grid - Adjusted to flexible grid for 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {t.industries.items.map((industry: any, idx: number) => {
            const Icon = iconMap[industry.id] || ShoppingBag;
            
            return (
              <div 
                key={idx} 
                className="group relative h-80 rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(0,177,79,0.3)] hover:scale-[1.02]"
              >
                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 group-hover:from-brand-green group-hover:to-emerald-600 transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {industry.name}
                    </h4>
                    <p className="text-blue-200 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Icon Watermark */}
                <div className="absolute -bottom-10 -right-10 text-white/5 rotate-[-15deg] transform group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 z-10">
                  <Icon size={200} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;