import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import WaveBackground from './WaveBackground';
import { useAppContext } from '../ThemeContext';

const Hero: React.FC = () => {
  const { t } = useAppContext();
  
  // Use translations for title words logic
  const titleString = t.hero.title;
  const titleWords = titleString.split(' ');

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Dynamic Backgrounds - Optimized */}
      <ParticleBackground />
      <WaveBackground />

      {/* Background Blobs with Animation - Using Palette */}
      <div className="blob bg-brand-mist/30 dark:bg-brand-green/10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-blob will-change-transform"></div>
      <div className="blob bg-brand-fresh/40 dark:bg-brand-blue/20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-blob will-change-transform" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 text-brand-green dark:text-green-400 font-medium text-sm border border-brand-fresh/50 dark:border-slate-600 shadow-sm hover:shadow-md transition-all cursor-default group">
              <Sparkles size={16} className="mr-2 group-hover:animate-pulse text-brand-green dark:text-green-400" />
              <span className="font-semibold tracking-wide">{t.hero.badge}</span>
            </div>
            
            {/* SEO Friendly H1 */}
            <h1 
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-brand-blue dark:text-white tracking-tight leading-[1.1]"
              aria-label={titleString}
            >
              {titleWords.map((word, index) => (
                <span 
                  key={index} 
                  className="word-enter mr-2 lg:mr-3 inline-block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word.includes('JagoKelola') ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-mist to-brand-green">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Headline with fixed animation */}
            <h2 className="text-xl lg:text-3xl font-bold text-brand-darkBlue dark:text-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {t.hero.headline}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {t.hero.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <a 
                href="https://erp.cubix.co.id/login"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-brand-green to-brand-darkGreen text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-1 active:scale-95"
                aria-label={t.hero.cta_primary}
              >
                {t.hero.cta_primary}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/628567234922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-brand-darkBlue dark:text-white border border-gray-200 dark:border-slate-600 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:border-brand-green hover:text-brand-green dark:hover:text-green-400 hover:shadow-lg active:scale-95"
                aria-label={t.hero.cta_secondary}
              >
                <MessageCircle size={20} className="text-brand-green dark:text-green-400" /> {t.hero.cta_secondary}
              </a>
            </div>
          </div>

          {/* Hero Image / Dashboard Preview */}
          <div className="relative group perspective-1000 mt-8 lg:mt-0">
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-blue to-brand-darkGreen dark:from-slate-800 dark:to-slate-900 p-2 shadow-2xl transition-all duration-700 group-hover:rotate-0 group-hover:scale-[1.02] transform rotate-1">
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Mock Dashboard UI Structure - Fixed Aspect Ratio to prevent CLS */}
              <div className="relative bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] border border-gray-200 dark:border-slate-700 flex group-hover:saturate-[1.1] transition-all duration-500">
                {/* Sidebar Mock */}
                <div className="w-16 md:w-48 bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 hidden sm:flex flex-col p-4 gap-4">
                  <div className="h-8 w-8 bg-brand-blue dark:bg-brand-green rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xs">JK</div>
                  <div className="h-2 w-20 bg-gray-100 dark:bg-slate-600 rounded"></div>
                  <div className="h-2 w-24 bg-gray-100 dark:bg-slate-600 rounded"></div>
                  <div className="h-2 w-16 bg-gray-100 dark:bg-slate-600 rounded"></div>
                  <div className="mt-auto h-8 w-full bg-green-50 dark:bg-slate-700 rounded-lg border border-green-100 dark:border-slate-600 flex items-center justify-center text-xs text-brand-green dark:text-green-400 font-medium">Pro Plan</div>
                </div>
                {/* Content Mock */}
                <div className="flex-1 p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                       <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded"></div>
                       <div className="h-6 w-48 bg-gray-300 dark:bg-slate-600 rounded"></div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-slate-700 border-2 border-white dark:border-slate-600 shadow-sm"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 h-28 flex flex-col justify-between hover:border-brand-blue/30 transition-colors">
                      <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900 rounded-lg text-brand-blue dark:text-blue-300 flex items-center justify-center font-bold text-sm">Rp</div>
                      <div className="space-y-1">
                        <div className="h-3 w-12 bg-gray-100 dark:bg-slate-700 rounded"></div>
                        <div className="h-5 w-20 bg-gray-800 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 h-28 flex flex-col justify-between hover:border-brand-green/30 transition-colors">
                       <div className="h-8 w-8 bg-green-100 dark:bg-green-900 rounded-lg text-brand-green dark:text-green-300 flex items-center justify-center">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                       </div>
                       <div className="space-y-1">
                        <div className="h-3 w-16 bg-gray-100 dark:bg-slate-700 rounded"></div>
                        <div className="h-5 w-16 bg-gray-800 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 h-28 flex flex-col justify-between hover:border-brand-fresh transition-colors">
                       <div className="h-8 w-8 bg-orange-100 dark:bg-orange-900 rounded-lg text-orange-500 dark:text-orange-300 flex items-center justify-center">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                       </div>
                       <div className="space-y-1">
                        <div className="h-3 w-10 bg-gray-100 dark:bg-slate-700 rounded"></div>
                        <div className="h-5 w-12 bg-gray-800 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element with Hover Effect */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 animate-bounce duration-[3000ms] group-hover:scale-110 transition-transform hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-brand-fresh/30 dark:bg-green-900 p-2 rounded-lg text-brand-green dark:text-green-300">
                  <ArrowRight size={20} className="rotate-[-45deg]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.hero.stats_revenue}</p>
                  <p className="text-lg font-bold text-brand-blue dark:text-white">Rp 12.450.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;