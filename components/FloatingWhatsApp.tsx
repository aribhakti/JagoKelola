import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const FloatingWhatsApp: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/628567234922"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 md:pr-6 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
        aria-label="Chat via WhatsApp"
      >
        <div className="relative">
           <MessageCircle size={28} />
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
        <span className="hidden md:block font-bold">
          {t.whatsapp.label}
        </span>
        
        {/* Tooltip for Mobile - Adjusted to appear on the left since button is now on right */}
        <span className="md:hidden absolute right-full mr-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
           {t.whatsapp.label}
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;