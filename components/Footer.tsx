import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, X, Briefcase, MapPin as LocationIcon, Clock, Calendar, ArrowRight, Globe } from 'lucide-react';
import { useAppContext } from '../ThemeContext';

const Footer: React.FC = () => {
  const { t } = useAppContext();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (type: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal(type);
  };

  const closeModal = () => setActiveModal(null);

  const isCareers = activeModal === t.footer.careers;
  const isBlog = activeModal === t.footer.blog;
  const isLegal = !isCareers && !isBlog;

  const socialLinks = [
    {
      Icon: Instagram,
      href: 'https://www.instagram.com/cubix.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      label: 'Instagram'
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/company/cbx-branding/',
      label: 'LinkedIn'
    },
    {
      Icon: Globe,
      href: 'https://cubix.co.id/',
      label: 'Website'
    }
  ];

  return (
    <>
      {/* Background set to brand-darkBlue which maps to Grey (#3c3c3B) */}
      <footer className="bg-brand-darkBlue dark:bg-slate-950 text-white pt-20 pb-10 border-t border-brand-green/20 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://opdaipwvz67cprur.public.blob.vercel-storage.com/1.%20JAGO%20KELOLA%20LOGO%20-%20PRIMARY%20CONFIGURATION.png"
                  alt="JagoKelola Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                Product by <span className="font-bold text-white">CBX</span>.<br />
                Platform manajemen bisnis modern untuk membantu operasional bisnis Anda lebih efisien.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 dark:bg-slate-800/50 p-2.5 rounded-full hover:bg-brand-green text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 group"
                    aria-label={label}
                  >
                    <Icon size={18} className="group-hover:rotate-6 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-fresh">{t.footer.product}</h4>
              <ul className="space-y-4 text-gray-300 dark:text-gray-400 text-sm">
                <li><a href="#benefits" className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.nav.solutions}</a></li>
                <li><a href="#industries" className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.nav.industries}</a></li>
                <li><a href="#pricing" className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.nav.pricing}</a></li>
                <li><a href="https://erp.cubix.co.id/login" className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.nav.login}</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-fresh">{t.footer.company}</h4>
              <ul className="space-y-4 text-gray-300 dark:text-gray-400 text-sm">
                <li><a href="#" onClick={openModal(t.footer.careers)} className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.footer.careers}</a></li>
                <li><a href="#" onClick={openModal(t.footer.blog)} className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.footer.blog}</a></li>
                <li><a href="#" onClick={openModal('Terms')} className="hover:text-brand-fresh hover:translate-x-1 inline-block transition-transform">{t.footer.terms}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-fresh">{t.footer.contact}</h4>
              <ul className="space-y-4 text-gray-300 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-3 group">
                  <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:text-brand-fresh transition-colors" />
                  <span>Jl. Pembangunan, Nirwana Townhouse 2 No 3, Cipedak</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone size={18} className="flex-shrink-0 group-hover:text-brand-fresh transition-colors" />
                  <a href="https://wa.me/628567234922" className="hover:text-brand-fresh transition-colors">+62 856 7234 922</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail size={18} className="flex-shrink-0 group-hover:text-brand-fresh transition-colors" />
                  <a href="mailto:support@jagokelola.com" className="hover:text-brand-fresh transition-colors">support@jagokelola.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-sm">{t.footer.copyright}</p>
            <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-500">
              <button onClick={openModal('Privacy Policy')} className="hover:text-white transition-colors">{t.footer.privacy}</button>
              <button onClick={openModal('Terms of Service')} className="hover:text-white transition-colors">{t.footer.terms}</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Content */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-slate-950">
              <h3 className="text-2xl font-bold text-brand-blue dark:text-white">
                {isCareers ? t.careers_modal.title :
                  isBlog ? t.blog_modal.title :
                    activeModal}
              </h3>
              <button onClick={closeModal} className="p-2 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-colors">
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto text-gray-600 dark:text-gray-300 leading-relaxed custom-scrollbar bg-gray-50 dark:bg-slate-900/50">

              {/* Careers */}
              {isCareers && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-medium text-brand-green">{t.careers_modal.subtitle}</h4>
                    <p className="mt-2 text-gray-500">Kirim CV Anda ke <span className="font-bold text-brand-blue dark:text-white">hr@cbx.co.id</span></p>
                  </div>
                  {t.careers_modal.jobs.map((job: any, idx: number) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:border-brand-green transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h5 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            {job.title}
                          </h5>
                          <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                            <span className="flex items-center gap-1"><LocationIcon size={14} /> {job.location}</span>
                          </div>
                        </div>
                        <a href="mailto:hr@cbx.co.id" className="px-5 py-2 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white rounded-lg font-medium text-sm transition-colors text-center">
                          Apply Now
                        </a>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed border-b border-gray-100 dark:border-slate-700 pb-4">
                        {job.desc}
                      </p>
                      <ul className="space-y-2">
                        {job.requirements.map((req: string, rIdx: number) => (
                          <li key={rIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-1.5 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Blog */}
              {isBlog && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <p className="text-gray-500">{t.blog_modal.subtitle}</p>
                  </div>
                  {t.blog_modal.posts.map((post: any, idx: number) => (
                    <div key={idx} className="group cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3 text-xs text-brand-green font-medium mb-2 uppercase tracking-wide">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-green transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="text-brand-blue dark:text-blue-300 text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Legal / Generic Text */}
              {isLegal && (
                <div className="space-y-4">
                  <p className="opacity-75">Last updated: {new Date().toLocaleDateString()}</p>
                  <p>
                    Welcome to JagoKelola. This is a standard template for {activeModal}.
                    In a production environment, this would contain the full legal text regarding the use of our ERP/CRM/POS services.
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-4">1. General Provisions</h4>
                  <p>
                    By accessing and using this platform, you agree to comply with the rules and regulations set forth by CBX.
                    All data input into the system is secured and managed according to our data protection policies.
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-4">2. Usage Rights</h4>
                  <p>
                    Users are granted a non-exclusive, non-transferable license to use the software for business management purposes.
                  </p>
                  <h4 className="font-bold text-gray-900 dark:text-white mt-4">3. Contact</h4>
                  <p>
                    For any questions regarding this {activeModal}, please contact support@jagokelola.com.
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-950 flex justify-end">
              <button onClick={closeModal} className="bg-brand-green text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-darkGreen transition-colors shadow-lg shadow-green-500/20">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;