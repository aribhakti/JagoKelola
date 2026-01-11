import React from 'react';
import { CheckCircle2, MoreHorizontal, TrendingUp, Users, DollarSign, Package, Bell, AlertTriangle } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const InteractiveDashboard: React.FC = () => {
  const { t } = useAppContext();
  const labels = t.dashboard.labels || {
    revenue: 'Omzet', 
    stock: 'Stok', 
    branches: ['A','B','C'], 
    alerts: ['Alert 1', 'Alert 2']
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side - Mock Dashboard UI */}
          <div className="order-2 lg:order-1 relative group perspective-1000">
             {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-green/20 dark:bg-brand-green/10 blur-3xl rounded-full transform -translate-x-10 translate-y-10"></div>
            
            {/* The Dashboard Card Container */}
            <div className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-2">
              
              {/* Header */}
              <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 p-4 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Search Bar / Menu simulation */}
                <div className="hidden sm:block h-2 w-32 bg-gray-100 dark:bg-slate-700 rounded-full"></div>
                
                {/* Notification Bell with Badge */}
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <Bell size={18} className="text-gray-400" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs">
                     JK
                   </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 grid gap-6">
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Stat Card 1: Revenue */}
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:border-brand-green transition-colors group/stat">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-brand-blue dark:text-blue-300 group-hover/stat:bg-brand-blue group-hover/stat:text-white transition-colors"><DollarSign size={16} /></div>
                      <span className="text-xs text-green-500 font-medium flex items-center">+12.5% <TrendingUp size={10} className="ml-1"/></span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{labels.revenue}</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">Rp 124.5jt</div>
                  </div>
                  {/* Stat Card 2: Low Stock Alert */}
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:border-red-400 transition-colors group/stat">
                     <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-red-50 dark:bg-red-900/30 rounded-lg text-red-500 group-hover/stat:bg-red-500 group-hover/stat:text-white transition-colors"><AlertTriangle size={16} /></div>
                      <span className="text-xs text-red-500 font-medium flex items-center">Critical</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{labels.stock}</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">3 Item</div>
                  </div>
                </div>

                {/* Chart Mockup: Branch Performance */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
                   <div className="flex justify-between items-center mb-6">
                     <div className="text-sm font-bold text-gray-800 dark:text-gray-200">Performa Cabang</div>
                     <MoreHorizontal size={16} className="text-gray-400" />
                   </div>
                   <div className="flex items-end gap-2 h-32 justify-between px-2">
                      {[40, 65, 45, 80, 55].map((h, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 w-full group/bar">
                           <div 
                              className="w-full bg-brand-green/20 dark:bg-brand-green/10 rounded-t-sm relative cursor-pointer group-hover/bar:bg-brand-green transition-all duration-300" 
                              style={{height: `${h}%`}}
                           >
                              {/* Tooltip */}
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                                 {labels.branches[i] || `Cabang ${i+1}`}
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* List Mockup: Real Alerts */}
                 <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm space-y-3">
                   <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Alerts</div>
                   {labels.alerts.map((alert: string, i: number) => (
                     <div key={i} className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                         <AlertTriangle size={14} className="text-red-500"/>
                       </div>
                       <div className="flex-1">
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{alert}</div>
                       </div>
                       <div className="text-[10px] text-gray-400">2m ago</div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

             {/* Floating Badge */}
             <div className="absolute top-20 -right-5 md:-right-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 z-20 animate-float hidden sm:block">
               <div className="flex items-center gap-3">
                 <div className="relative">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                 </div>
                 <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">{t.dashboard.active_badge}</span>
               </div>
               <div className="mt-2 text-xs text-gray-400 font-mono">{t.dashboard.uptime}</div>
             </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
              {t.dashboard.title_1} <br />
              <span className="text-brand-green">{t.dashboard.title_2}</span>
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              {t.dashboard.desc}
            </p>

            <ul className="space-y-4">
              {t.dashboard.features.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-green-100 dark:bg-green-900/40 rounded-full text-brand-green">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="group text-brand-green font-semibold inline-flex items-center gap-2 hover:text-brand-darkGreen transition-colors">
              {t.dashboard.cta} <span className="h-px w-0 group-hover:w-full bg-brand-green transition-all duration-300"></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveDashboard;