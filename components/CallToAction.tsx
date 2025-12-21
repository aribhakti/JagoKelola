import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of businesses using CBX to streamline their operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-green hover:bg-brand-darkGreen text-white px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-lg">
                Get Started Now
              </button>
              <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;