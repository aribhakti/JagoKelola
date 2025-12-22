import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, setLanguage, t } = useAppContext();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" onClick={() => window.scrollTo(0,0)} className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-blue dark:text-white text-xl leading-tight transition-colors">JagoKelola</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">BY CBX</span>
            </div>
          </a>

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
              <a 
                href="https://erp.cubix.co.id/login" 
                className="text-brand-blue dark:text-white font-semibold hover:opacity-80 transition-colors"
                rel="noopener noreferrer"
              >
                {t.nav.login}
              </a>
              <a 
                href="https://erp.cubix.co.id/login" 
                className="bg-brand-green hover:bg-brand-darkGreen text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-green/20"
                rel="noopener noreferrer"
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
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 dark:text-white hover:text-brand-blue"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-100 dark:border-slate-800 h-screen overflow-y-auto">
          <div className="px-4 pt-4 pb-20 space-y-2 sm:px-3">
            <a href="#benefits" onClick={handleLinkClick} className="block px-3 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green border-b border-gray-50 dark:border-slate-800">{t.nav.solutions}</a>
            <a href="#industries" onClick={handleLinkClick} className="block px-3 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green border-b border-gray-50 dark:border-slate-800">{t.nav.industries}</a>
            <a href="#pricing" onClick={handleLinkClick} className="block px-3 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-green border-b border-gray-50 dark:border-slate-800">{t.nav.pricing}</a>
            
            <div className="flex items-center px-3 py-4 gap-3 mt-4">
               <span className="text-gray-500 dark:text-gray-400 text-sm">Language:</span>
               <button 
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="font-bold text-brand-blue dark:text-brand-green"
              >
                {language === 'id' ? 'Indonesia' : 'English'}
              </button>
            </div>

            <div className="pt-4 flex flex-col gap-4 px-3">
              <a 
                href="https://erp.cubix.co.id/login" 
                onClick={handleLinkClick}
                className="w-full text-center py-3 text-brand-blue dark:text-white font-semibold text-lg"
                rel="noopener noreferrer"
              >
                {t.nav.login}
              </a>
              <a 
                href="https://erp.cubix.co.id/login" 
                onClick={handleLinkClick}
                className="w-full block text-center bg-brand-green text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-green/20"
                rel="noopener noreferrer"
              >
                {t.nav.trial}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;