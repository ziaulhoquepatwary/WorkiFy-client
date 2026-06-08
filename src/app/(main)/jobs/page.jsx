import React from 'react';
import { Search, MapPin, Briefcase, Clock, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';

const JobPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f291e] text-slate-800 dark:text-[#e4f5ee] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Left Side: Filter Section */}
                    <aside className="lg:col-span-1 bg-[#e4f5ee]/40 dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none backdrop-blur-sm h-fit">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">Filters</h2>
                            <button className="text-xs font-semibold text-[#1c4a36] dark:text-[#e4f5ee]/70 hover:underline cursor-pointer">
                                Clear All
                            </button>
                        </div>

                        {/* Search Option */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2 text-[#1c4a36] dark:text-[#e4f5ee]/80">Search Job</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-[#1c4a36]/50 dark:text-[#e4f5ee]/50" />
                                <input
                                    type="text"
                                    placeholder="Job title or keywords..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0f291e] border border-[#1c4a36]/20 dark:border-[#1c4a36]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4a36] dark:focus:ring-[#e4f5ee] text-sm"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2 text-[#1c4a36] dark:text-[#e4f5ee]/80">Category</label>
                            <select className="w-full px-3 py-2.5 bg-white dark:bg-[#0f291e] border border-[#1c4a36]/20 dark:border-[#1c4a36]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4a36] dark:focus:ring-[#e4f5ee] text-sm cursor-pointer">
                                <option>All Categories</option>
                                <option>Software & IT</option>
                                <option>Marketing</option>
                                <option>Design</option>
                                <option>Health</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-3 text-[#1c4a36] dark:text-[#e4f5ee]/80">Job Type</label>
                            <div className="space-y-2.5">
                                {['Full-time', 'Part-time', 'Internship'].map((type) => (
                                    <label key={type} className="flex items-center space-x-3 text-sm cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-[#1c4a36] focus:ring-[#1c4a36] dark:bg-[#0f291e]"
                                        />
                                        <span className="text-slate-600 dark:text-[#e4f5ee]/70 group-hover:text-[#1c4a36] dark:group-hover:text-white transition-colors">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Salary Range */}
                        <div className="mb-2">
                            <label className="block text-sm font-semibold mb-2 text-[#1c4a36] dark:text-[#e4f5ee]/80">Salary Range</label>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                defaultValue="5000"
                                className="w-full accent-[#1c4a36] dark:accent-[#e4f5ee] h-2 bg-slate-200 dark:bg-[#0f291e] rounded-lg cursor-pointer"
                            />
                            <div className="flex justify-between items-center mt-3 text-xs font-medium text-slate-500 dark:text-[#e4f5ee]/60">
                                <span>$0/mo</span>
                                <span>$10,000/mo</span>
                            </div>
                        </div>
                    </aside>

                    {/* Right Side: Jobs Cards and Pagination */}
                    <main className="lg:col-span-3 flex flex-col justify-between">
                        <div className="space-y-4">

                            {/* Card 1 */}
                            <div className="bg-white dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none shadow-sm hover:shadow-md transition-all duration-200 relative group">
                                <button className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 dark:bg-[#0f291e] text-slate-400 hover:text-amber-500 dark:text-[#e4f5ee]/60 dark:hover:text-amber-400 transition-colors cursor-pointer">
                                    <Bookmark className="w-6 h-6" />
                                </button>

                                <div className="flex items-start gap-4 pr-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#e4f5ee] dark:bg-[#0f291e] flex items-center justify-center font-bold text-[#1c4a36] dark:text-[#e4f5ee] shrink-0 text-lg">
                                        TV
                                    </div>

                                    <div className="flex-1">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#e4f5ee] dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                            Software & IT
                                        </span>
                                        <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#e4f5ee] transition-colors cursor-pointer">
                                            Senior Full Stack Developer
                                        </h3>
                                        <p className="text-sm font-medium text-slate-500 dark:text-[#e4f5ee]/70 mt-0.5">TechVerse Solutions Inc.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 pt-4 border-t border-slate-100 dark:border-[#0f291e]/50 text-xs text-slate-500 dark:text-[#e4f5ee]/70">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
                                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Full-time</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 2 days ago</span>
                                </div>

                                <div className="flex justify-between items-center mt-5 pt-2">
                                    <span className="text-sm font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                                        $6,500 - $8,000<span className="text-xs font-normal text-slate-400 dark:text-[#e4f5ee]/50">/mo</span>
                                    </span>
                                    <button className="px-5 py-2.5 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-semibold rounded-xl transition-all duration-200 hover:opacity-95 active:scale-95 shadow-sm cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none shadow-sm hover:shadow-md transition-all duration-200 relative group">
                                <button className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 dark:bg-[#0f291e] text-slate-400 hover:text-amber-500 dark:text-[#e4f5ee]/60 dark:hover:text-amber-400 transition-colors cursor-pointer">
                                    <Bookmark className="w-6 h-6" />
                                </button>

                                <div className="flex items-start gap-4 pr-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#e4f5ee] dark:bg-[#0f291e] flex items-center justify-center font-bold text-[#1c4a36] dark:text-[#e4f5ee] shrink-0 text-lg">
                                        TV
                                    </div>

                                    <div className="flex-1">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#e4f5ee] dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                            Software & IT
                                        </span>
                                        <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#e4f5ee] transition-colors cursor-pointer">
                                            Senior Full Stack Developer
                                        </h3>
                                        <p className="text-sm font-medium text-slate-500 dark:text-[#e4f5ee]/70 mt-0.5">TechVerse Solutions Inc.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 pt-4 border-t border-slate-100 dark:border-[#0f291e]/50 text-xs text-slate-500 dark:text-[#e4f5ee]/70">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
                                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Full-time</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 2 days ago</span>
                                </div>

                                <div className="flex justify-between items-center mt-5 pt-2">
                                    <span className="text-sm font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                                        $6,500 - $8,000<span className="text-xs font-normal text-slate-400 dark:text-[#e4f5ee]/50">/mo</span>
                                    </span>
                                    <button className="px-5 py-2.5 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-semibold text-xs rounded-xl transition-all duration-200 hover:opacity-95 active:scale-95 shadow-sm cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none shadow-sm hover:shadow-md transition-all duration-200 relative group">
                                <button className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 dark:bg-[#0f291e] text-slate-400 hover:text-amber-500 dark:text-[#e4f5ee]/60 dark:hover:text-amber-400 transition-colors cursor-pointer">
                                    <Bookmark className="w-6 h-6" />
                                </button>

                                <div className="flex items-start gap-4 pr-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#e4f5ee] dark:bg-[#0f291e] flex items-center justify-center font-bold text-[#1c4a36] dark:text-[#e4f5ee] shrink-0 text-lg">
                                        TV
                                    </div>

                                    <div className="flex-1">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#e4f5ee] dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                            Software & IT
                                        </span>
                                        <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#e4f5ee] transition-colors cursor-pointer">
                                            Senior Full Stack Developer
                                        </h3>
                                        <p className="text-sm font-medium text-slate-500 dark:text-[#e4f5ee]/70 mt-0.5">TechVerse Solutions Inc.</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 pt-4 border-t border-slate-100 dark:border-[#0f291e]/50 text-xs text-slate-500 dark:text-[#e4f5ee]/70">
                                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh</span>
                                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Full-time</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 2 days ago</span>
                                </div>

                                <div className="flex justify-between items-center mt-5 pt-2">
                                    <span className="text-sm font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                                        $6,500 - $8,000<span className="text-xs font-normal text-slate-400 dark:text-[#e4f5ee]/50">/mo</span>
                                    </span>
                                    <button className="px-5 py-2.5 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-semibold text-xs rounded-xl transition-all duration-200 hover:opacity-95 active:scale-95 shadow-sm cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* Pagination Section */}
                        <div className="flex justify-center items-center gap-2 mt-8 pt-4">
                            <button className="p-2 rounded-xl border border-[#1c4a36]/10 dark:border-[#173f2e] bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee] hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer disabled:opacity-50">
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            <button className="px-4 py-2 text-sm font-semibold rounded-xl bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36]">
                                1
                            </button>

                            <button className="px-4 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee]/80 border border-[#1c4a36]/10 dark:border-none hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer">
                                2
                            </button>

                            <button className="px-4 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee]/80 border border-[#1c4a36]/10 dark:border-none hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer">
                                3
                            </button>

                            <span className="text-slate-400 dark:text-[#e4f5ee]/40 px-1">...</span>

                            <button className="px-4 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee]/80 border border-[#1c4a36]/10 dark:border-none hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer">
                                12
                            </button>

                            <button className="p-2 rounded-xl border border-[#1c4a36]/10 dark:border-[#173f2e] bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee] hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                    </main>
                </div>

            </div>
        </div>
    );
};

export default JobPage;