import React from 'react';
import { ShoppingBag, Store, UtensilsCrossed, Tag, Truck, Briefcase, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
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
    <section id="industries" className="py-16 lg:py-24 bg-brand-blue dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Dynamic Background Ambience */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-green font-bold tracking-wide uppercase text-sm mb-3">
            {t.industries.subtitle}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.industries.title}
          </h3>
          <p className="text-green-50 text-lg max-w-2xl mx-auto opacity-90">
            {t.industries.desc}
          </p>
        </div>

        {/* Cards Grid - Compact Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {t.industries.items.map((industry: any, idx: number) => {
            const Icon = iconMap[industry.id] || ShoppingBag;
            
            return (
              <div 
                key={idx} 
                className="group relative h-64 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(0,177,79,0.3)] hover:scale-[1.02] cursor-default"
              >
                {/* Default State Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 transition-opacity duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white mb-4 shadow-lg">
                    <Icon size={20} />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {industry.name}
                    </h4>
                    <p className="text-green-100/80 text-xs leading-relaxed line-clamp-2">
                      {industry.problem}
                    </p>
                    <div className="mt-3 flex items-center text-brand-green text-xs font-bold">
                      Lihat Solusi <ArrowRight size={12} className="ml-1" />
                    </div>
                  </div>
                </div>

                {/* Hover State Content (Problem vs Solution) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 bg-brand-darkBlue/90 backdrop-blur-md">
                   <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase mb-1">
                          <AlertCircle size={12} /> Masalah
                        </div>
                        <p className="text-white text-sm leading-snug">
                          {industry.problem}
                        </p>
                      </div>
                      <div className="h-px bg-white/10 w-full"></div>
                      <div>
                        <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase mb-1">
                          <CheckCircle2 size={12} /> Solusi
                        </div>
                        <p className="text-white text-sm leading-snug">
                          {industry.solution}
                        </p>
                      </div>
                   </div>
                </div>

                {/* Decorative Icon Watermark */}
                <div className="absolute -bottom-8 -right-8 text-white/5 rotate-[-15deg] transform group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 z-10">
                  <Icon size={140} />
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