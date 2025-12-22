import React, { useState, useEffect } from 'react';
import { useAppContext } from '../ThemeContext';

const CookieConsent: React.FC = () => {
  const { t } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Delay slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] p-4 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200 dark:border-slate-700 p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-center md:text-left">
            {t.cookie.text}
          </p>
          <button 
            onClick={handleAccept}
            className="whitespace-nowrap bg-brand-blue dark:bg-white text-white dark:text-brand-blue px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {t.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;