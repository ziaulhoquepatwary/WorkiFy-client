"use client";

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Clock, Bookmark, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { getAllJobsAction } from '@/lib/actions/jobs';

const JobPage = () => {
    const [searchInp, setSearchInp] = useState("");
    const [categoryInp, setCategoryInp] = useState("All Categories");
    const [jobTypesInp, setJobTypesInp] = useState([]);
    const [salaryInp, setSalaryInp] = useState(500000);

    const [activeFilters, setActiveFilters] = useState({
        search: "",
        category: "All Categories",
        jobType: [],
        maxSalary: 500000,
        page: 1
    });

    const [jobs, setJobs] = useState([]);
    const [pagination, setPagination] = useState({ totalPages: 1, currentPage: 1 });
    const [loading, setLoading] = useState(false);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const data = await getAllJobsAction(activeFilters);
            if (data.success) {
                setJobs(data.jobs);
                setPagination({
                    totalPages: data.totalPages,
                    currentPage: data.currentPage
                });
            }
            console.log(data);
        } catch (error) {
            Swal.fire("Error", "Failed to load jobs. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [activeFilters]);

    const handleApplyFilters = () => {
        setActiveFilters({
            search: searchInp,
            category: categoryInp,
            jobType: jobTypesInp,
            maxSalary: salaryInp,
            page: 1
        });
    };

    const handleClearAll = () => {
        setSearchInp("");
        setCategoryInp("All Categories");
        setJobTypesInp([]);
        setSalaryInp(500000);

        setActiveFilters({
            search: "",
            category: "All Categories",
            jobType: [],
            maxSalary: 500000,
            page: 1
        });
    };

    const handleCheckboxChange = (type) => {
        if (jobTypesInp.includes(type)) {
            setJobTypesInp(jobTypesInp.filter(t => t !== type));
        } else {
            setJobTypesInp([...jobTypesInp, type]);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setActiveFilters(prev => ({ ...prev, page: newPage }));
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f291e] text-slate-800 dark:text-[#e4f5ee] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Main Content Layout */}
                {/* Fixed: Added items-start to allow sticky positioning of the aside bar */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

                    {/* Left Side: Filter Section */}
                    <aside className="lg:col-span-1 lg:sticky lg:top-22 bg-[#e4f5ee]/40 dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none backdrop-blur-sm h-fit">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">Filters</h2>
                            <button
                                onClick={handleClearAll}
                                className="text-xs font-semibold text-[#1c4a36] dark:text-[#e4f5ee]/70 hover:underline cursor-pointer"
                            >
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
                                    value={searchInp}
                                    onChange={(e) => setSearchInp(e.target.value)}
                                    placeholder="Job title or keywords..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0f291e] border border-[#1c4a36]/20 dark:border-[#1c4a36]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4a36] dark:focus:ring-[#e4f5ee] text-sm"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2 text-[#1c4a36] dark:text-[#e4f5ee]/80">Category</label>
                            <select
                                value={categoryInp}
                                onChange={(e) => setCategoryInp(e.target.value)}
                                className="w-full px-3 py-2.5 bg-white dark:bg-[#0f291e] border border-[#1c4a36]/20 dark:border-[#1c4a36]/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1c4a36] dark:focus:ring-[#e4f5ee] text-sm cursor-pointer"
                            >
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
                                            checked={jobTypesInp.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-[#1c4a36] focus:ring-[#1c4a36] dark:bg-[#0f291e]"
                                        />
                                        <span className="text-slate-600 dark:text-[#e4f5ee]/70 group-hover:text-[#1c4a36] dark:group-hover:text-white transition-colors">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Salary Range */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2 text-[#1c4a36] dark:text-[#e4f5ee]/80">Salary Range</label>
                            <input
                                type="range"
                                min="0"
                                max="500000"
                                value={salaryInp}
                                onChange={(e) => setSalaryInp(Number(e.target.value))}
                                className="w-full accent-[#1c4a36] dark:accent-[#e4f5ee] h-2 bg-slate-200 dark:bg-[#0f291e] rounded-lg cursor-pointer"
                            />
                            <div className="flex justify-between items-center mt-3 text-xs font-medium text-slate-500 dark:text-[#e4f5ee]/60">
                                <span>$0/mo</span>
                                <span className="text-amber-500 font-bold">${salaryInp.toLocaleString()}/mo</span>
                                <span>$500,000/mo</span>
                            </div>
                        </div>

                        <button
                            onClick={handleApplyFilters}
                            disabled={loading}
                            className="w-full py-3 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-bold rounded-xl transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                            {loading && <Loader2 size={16} className="animate-spin" />}
                            Apply Filters
                        </button>
                    </aside>

                    {/* Right Side: Jobs Cards and Pagination */}
                    <main className="lg:col-span-3 flex flex-col justify-between">

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-3">
                                <Loader2 size={40} className="animate-spin text-[#1c4a36] dark:text-[#e4f5ee]" />
                                <p className="text-sm text-slate-400">Loading premium jobs for you...</p>
                            </div>
                        ) : jobs.length === 0 ? (
                            <div className="text-center py-20 bg-slate-50 dark:bg-[#173f2e]/50 rounded-2xl p-6">
                                <p className="text-lg font-medium text-slate-500 dark:text-gray-400">No jobs found matching your criteria.</p>
                                <p className="text-sm text-slate-400 mt-1">Try resetting the filters or tweaking your keywords.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {jobs.map((job) => (
                                    <div key={job._id} className="bg-white dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none shadow-sm hover:shadow-md transition-all duration-200 relative group">
                                        <button className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 dark:bg-[#0f291e] text-slate-400 hover:text-amber-500 dark:text-[#e4f5ee]/60 dark:hover:text-amber-400 transition-colors cursor-pointer">
                                            <Bookmark className="w-6 h-6" />
                                        </button>

                                        <div className="flex items-start gap-4 pr-8">
                                            <img src={job.author_image} alt={job.author_name} className="w-12 h-12 rounded-xl object-cover" />

                                            <div className="flex-1">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#e4f5ee] dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                                    {job.job_category}
                                                </span>
                                                <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#e4f5ee] transition-colors cursor-pointer">
                                                    {job.job_title}
                                                </h3>
                                                <p className="text-sm font-medium text-slate-500 dark:text-[#e4f5ee]/70 mt-0.5">
                                                    Posted by: {job.author_name}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 pt-4 border-t border-slate-100 dark:border-[#0f291e]/50 text-xs text-slate-500 dark:text-[#e4f5ee]/70">
                                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                                            <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.job_type} ({job.work_mode})</span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {new Date(job.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center mt-5 pt-2">
                                            <span className="text-sm font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                                                ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}
                                                <span className="text-xs font-normal text-slate-400 dark:text-[#e4f5ee]/50">/mo</span>
                                            </span>
                                            <button className="px-5 py-2.5 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-semibold rounded-xl transition-all duration-200 hover:opacity-95 active:scale-95 shadow-sm cursor-pointer">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Dynamic Pagination Section */}
                        {pagination.totalPages > 1 && !loading && (
                            <div className="flex justify-center items-center gap-2 mt-8 pt-4">
                                <button
                                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                                    disabled={pagination.currentPage === 1}
                                    className="p-2 rounded-xl border border-[#1c4a36]/10 dark:border-[#173f2e] bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee] hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer disabled:opacity-50"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>

                                {[...Array(pagination.totalPages)].map((_, index) => {
                                    const pageNum = index + 1;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => handlePageChange(pageNum)}
                                            className={`px-4 py-2 text-sm font-semibold rounded-xl cursor-pointer transition-all ${pagination.currentPage === pageNum
                                                ? "bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36]"
                                                : "bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee]/80 border border-[#1c4a36]/10 dark:border-none hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e]"
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                                    disabled={pagination.currentPage === pagination.totalPages}
                                    className="p-2 rounded-xl border border-[#1c4a36]/10 dark:border-[#173f2e] bg-white dark:bg-[#173f2e] text-slate-600 dark:text-[#e4f5ee] hover:bg-[#e4f5ee]/30 dark:hover:bg-[#0f291e] transition-colors cursor-pointer disabled:opacity-50"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                    </main>
                </div>

            </div>
        </div>
    );
};

export default JobPage;