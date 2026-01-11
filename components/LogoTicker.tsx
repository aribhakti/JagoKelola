import React from 'react';
import { useAppContext } from '../ThemeContext';

const LogoTicker: React.FC = () => {
  const { t } = useAppContext();

  // Simple text placeholders simulating logos for demo purposes
  // In production, replace with <img src="..." />
  const logos = [
    { name: "Kopi Kenangan", font: "font-serif" },
    { name: "TechStore Indonesia", font: "font-mono" },
    { name: "Berkah Jaya Abadi", font: "font-sans" },
    { name: "Fashion Daily", font: "italic" },
    { name: "Resto Nusantara", font: "font-serif" },
    { name: "Mart 24/7", font: "font-black" },
    { name: "BuildHub", font: "font-mono" },
    { name: "FreshMarket", font: "font-light" }
  ];

  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-950 border-y border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {t.trusted.label}
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of logos - Accessible */}
          <div className="flex gap-16 mx-8 items-center">
            {logos.map((logo, idx) => (
              <span 
                key={idx} 
                className={`text-xl md:text-2xl text-gray-400 dark:text-gray-600 font-bold ${logo.font} grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default`}
              >
                {logo.name}
              </span>
            ))}
          </div>

          {/* Second set of logos for seamless loop - Hidden from Screen Readers */}
          <div className="flex gap-16 mx-8 items-center" aria-hidden="true">
             {logos.map((logo, idx) => (
              <span 
                key={`dup-${idx}`} 
                className={`text-xl md:text-2xl text-gray-400 dark:text-gray-600 font-bold ${logo.font} grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;