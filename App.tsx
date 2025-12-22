import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AppProvider } from './ThemeContext';
import Loading from './components/Loading';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieConsent from './components/CookieConsent';

// Lazy load non-critical components for better performance (Code Splitting)
const PainPoints = React.lazy(() => import('./components/PainPoints'));
const Industries = React.lazy(() => import('./components/Industries'));
const Features = React.lazy(() => import('./components/Features'));
const InteractiveDashboard = React.lazy(() => import('./components/InteractiveDashboard'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Consultation = React.lazy(() => import('./components/Consultation'));
const Footer = React.lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-gray-900 dark:text-gray-100 selection:bg-brand-green selection:text-white transition-colors duration-300">
        <Navbar />
        <main>
          {/* Hero is critical, load immediately */}
          <Hero />
          
          {/* Lazy load the rest */}
          <Suspense fallback={<Loading />}>
            <PainPoints />
            <Industries />
            <Features />
            <InteractiveDashboard />
            <HowItWorks />
            <Pricing />
            <FAQ />
            <Consultation />
          </Suspense>
        </main>
        
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </AppProvider>
  );
};

export default App;