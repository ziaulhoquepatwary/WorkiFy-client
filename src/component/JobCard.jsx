import { Bookmark, Briefcase, Clock, MapPin } from 'lucide-react'
import Link from "next/link";

function JobCard({ job }) {
    return (
        <div className="bg-white dark:bg-[#173f2e] p-6 rounded-2xl border border-[#1c4a36]/10 dark:border-none shadow-sm hover:shadow-md transition-all duration-200 relative group">
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
                <Link href={`/jobs/${job._id}`} className="px-5 py-2.5 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-semibold rounded-xl transition-all duration-200 hover:opacity-95 active:scale-95 shadow-sm cursor-pointer">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default JobCard