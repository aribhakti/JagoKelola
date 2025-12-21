import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage, t } = useAppContext();

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-blue dark:text-white text-xl leading-tight transition-colors">JagoKelola</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">BY CBX</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green font-medium transition-colors">{t.nav.solutions}</a>
            <a href="#industries" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green font-medium transition-colors">{t.nav.industries}</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-brand-green dark:hover:text-brand-green font-medium transition-colors">{t.nav.pricing}</a>
            
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

            {/* Switchers */}
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              <button 
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 font-semibold text-sm"
                aria-label="Toggle Language"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>

            <div className="flex items-center gap-4 ml-2">
              <a href="https://erp.cubix.co.id/login" className="text-brand-blue dark:text-white font-semibold hover:opacity-80 transition-colors">{t.nav.login}</a>
              <a 
                href="https://erp.cubix.co.id/login" 
                className="bg-brand-green hover:bg-brand-darkGreen text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-green/20"
              >
                {t.nav.trial}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-white hover:text-brand-blue">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#benefits" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green">{t.nav.solutions}</a>
            <a href="#industries" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green">{t.nav.industries}</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green">{t.nav.pricing}</a>
            
            <div className="flex items-center px-3 py-2 gap-2">
               <span className="text-gray-500 dark:text-gray-400 text-sm">Language:</span>
               <button 
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="font-bold text-brand-blue dark:text-brand-green"
              >
                {language === 'id' ? 'Indonesia' : 'English'}
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-3">
              <a href="https://erp.cubix.co.id/login" className="w-full text-center py-2 text-brand-blue dark:text-white font-semibold">{t.nav.login}</a>
              <a href="https://erp.cubix.co.id/login" className="w-full block text-center bg-brand-green text-white py-3 rounded-lg font-medium">{t.nav.trial}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;