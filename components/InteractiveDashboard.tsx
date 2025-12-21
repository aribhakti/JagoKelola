import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const InteractiveDashboard: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-brand-green/5 blur-3xl rounded-full"></div>
            <img 
              src="https://picsum.photos/800/600?random=101" 
              alt="Analytics Dashboard" 
              className="relative rounded-2xl shadow-2xl border border-gray-100 z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
             {/* Floating Badge */}
             <div className="absolute top-10 -right-10 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 hidden md:block">
               <div className="flex items-center gap-3">
                 <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="font-semibold text-gray-700">System Active</span>
               </div>
               <div className="mt-2 text-xs text-gray-400">Uptime 99.9%</div>
             </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue">
              Real-time insights for <br />
              <span className="text-brand-green">smarter decisions.</span>
            </h3>
            <p className="text-lg text-gray-500">
              Stop guessing. Our comprehensive reporting tools give you detailed insights into sales, employee performance, and inventory turnover.
            </p>

            <ul className="space-y-4">
              {[
                'Automated Financial Reports',
                'Employee Attendance Tracking',
                'Inventory Low-Stock Alerts',
                'Customer Purchase History'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-green flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="text-brand-green font-semibold border-b-2 border-brand-green pb-1 hover:text-brand-darkGreen transition-colors">
              Explore Analytics Features
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboard;