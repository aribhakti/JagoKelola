import React, { useState } from 'react';
import { useAppContext } from '../ThemeContext';
import { Calendar, Clock, ArrowRight, X } from 'lucide-react';

const Blog: React.FC = () => {
    const { t } = useAppContext();
    const allPosts = t.blog_modal.posts;
    const featuredPosts = allPosts.slice(0, 3);
    const [isListModalOpen, setIsListModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<any>(null);

    const openFullPost = (post: any) => {
        setSelectedPost(post);
    };

    const closeFullPost = () => {
        setSelectedPost(null);
    };

    return (
        <section id="blog" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-500 font-semibold tracking-wide uppercase text-sm mb-3">
                        {t.blog_modal.subtitle}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white mb-4">
                        {t.blog_modal.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Tips, strategi, dan wawasan terbaru untuk membantu bisnis Anda tumbuh lebih cerdas dan efisien.
                    </p>
                </div>

                {/* Blog Grid - Showing only top 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredPosts.map((post: any, idx: number) => (
                        <div
                            key={idx}
                            className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex items-center gap-3 text-xs text-brand-green font-medium mb-4 uppercase tracking-wide">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 dark:bg-slate-600 rounded-full"></span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-green transition-colors leading-tight">
                                    {post.title}
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="pt-4 border-t border-gray-50 dark:border-slate-700 mt-auto">
                                    <button
                                        onClick={() => openFullPost(post)}
                                        className="text-brand-blue dark:text-blue-300 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                                    >
                                        Baca Selengkapnya <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button
                        onClick={() => setIsListModalOpen(true)}
                        className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-green-500/20 active:scale-95 flex items-center gap-2 mx-auto"
                    >
                        Lihat Semua Artikel <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* List All Blogs Modal */}
            {isListModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white dark:bg-slate-950 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center bg-gray-50 dark:bg-slate-900 backdrop-blur-md">
                            <div>
                                <h3 className="text-2xl font-bold text-brand-blue dark:text-white">
                                    {t.blog_modal.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {allPosts.length} Artikel Wawasan Bisnis
                                </p>
                            </div>
                            <button
                                onClick={() => setIsListModalOpen(false)}
                                className="p-2 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90"
                            >
                                <X size={28} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="p-6 lg:p-10 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-950">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {allPosts.map((post: any, idx: number) => (
                                    <div
                                        key={idx}
                                        onClick={() => openFullPost(post)}
                                        className="group bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-brand-green transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 text-xs text-brand-green font-medium mb-2 uppercase tracking-wide">
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                            <span className="w-1 h-1 bg-gray-300 dark:bg-slate-700 rounded-full"></span>
                                            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-green transition-colors">
                                            {post.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="text-brand-blue dark:text-blue-300 text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Baca Selengkapnya <ArrowRight size={14} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 flex justify-end">
                            <button
                                onClick={() => setIsListModalOpen(false)}
                                className="bg-brand-green text-white px-8 py-2.5 rounded-xl font-bold hover:bg-brand-darkGreen transition-all shadow-lg shadow-green-500/20 active:scale-95"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Full Blog Article Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
                    <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
                        <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-start bg-gray-50 dark:bg-slate-950">
                            <div>
                                <div className="flex items-center gap-3 text-xs text-brand-green font-bold mb-2 uppercase tracking-wide">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 dark:bg-slate-700 rounded-full"></span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.readTime}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-blue dark:text-white leading-tight">
                                    {selectedPost.title}
                                </h3>
                            </div>
                            <button
                                onClick={closeFullPost}
                                className="p-2 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90 flex-shrink-0"
                            >
                                <X size={28} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 font-medium italic">
                                    {selectedPost.excerpt}
                                </p>
                                <div className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed space-y-4">
                                    {selectedPost.content.split('\n').map((paragraph: string, pIdx: number) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-12 p-6 bg-brand-green/5 rounded-2xl border border-brand-green/10">
                                    <h5 className="font-bold text-brand-blue dark:text-white mb-2">Tertarik meningkatkan bisnis Anda?</h5>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Mulai kelola stok, keuangan, dan tim Anda secara profesional dengan JagoKelola.</p>
                                    <a
                                        href="https://erp.cubix.co.id/login"
                                        className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-darkGreen transition-all text-sm"
                                    >
                                        Coba Gratis Sekarang <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-950 flex justify-center">
                            <button
                                onClick={closeFullPost}
                                className="text-gray-500 hover:text-brand-blue font-bold transition-colors"
                            >
                                Tutup Artikel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};


export default Blog;
