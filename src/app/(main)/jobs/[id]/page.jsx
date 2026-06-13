import { getSingleJobAction } from "@/lib/actions/jobs";
import { Briefcase, MapPin, Calendar, DollarSign, Users, Award, CheckCircle2, ShieldAlert } from "lucide-react";
import Link from "next/link";
import ApplyButton from "./ApplyButton";


async function JobDetailsPage({ params }) {
    const { id } = await params;
    const data = await getSingleJobAction(id);

    if (!data || !data.job) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-white dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee]">
                <ShieldAlert className="w-16 h-16 text-rose-500 mb-4" />
                <h2 className="text-2xl font-bold">Job Post Not Found</h2>
                <Link href="/jobs" className="mt-4 text-sm font-semibold underline">Back to Job Portal</Link>
            </div>
        );
    }

    const { job, isExpired } = data;

    return (
        <div className="p-4 md:p-8 bg-white dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] transition-colors duration-300">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6Heading">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="p-6 md:p-8 bg-slate-50 dark:bg-[#173f2e] border border-[#e4f5ee] dark:border-transparent rounded-2xl relative">
                        {isExpired && (
                            <span className="absolute top-4 right-4 bg-rose-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-md">Expired</span>
                        )}
                        <span className="text-xs font-bold uppercase bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] px-2.5 py-1 rounded">
                            {job.job_category}
                        </span>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1c4a36] dark:text-white mt-4">{job.job_title}</h1>
                        <p className="text-sm opacity-70 mt-1 font-medium">Posted by: {job.author_name}</p>

                        <div className="flex flex-wrap gap-4 mt-6 text-sm font-medium">
                            <span className="flex items-center gap-1.5 bg-white dark:bg-[#0f291e] px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 dark:border-transparent">
                                <Briefcase className="w-4 h-4 text-emerald-600" /> {job.job_type}
                            </span>
                            <span className="flex items-center gap-1.5 bg-white dark:bg-[#0f291e] px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 dark:border-transparent">
                                <MapPin className="w-4 h-4 text-rose-500" /> {job.work_mode}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 bg-white dark:bg-[#173f2e] border border-[#e4f5ee] dark:border-transparent rounded-2xl space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white mb-2 border-b border-[#e4f5ee] dark:border-[#0f291e] pb-2">Key Responsibilities</h3>
                            <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">{job.responsibilities}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white mb-2 border-b border-[#e4f5ee] dark:border-[#0f291e] pb-2">Requirements</h3>
                            <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">{job.requirements}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white mb-2 border-b border-[#e4f5ee] dark:border-[#0f291e] pb-2">Benefits</h3>
                            <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">{job.benefits}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-[#1c4a36] dark:text-white mb-3">Skills Required</h3>
                            <div className="flex flex-wrap gap-2">
                                {job.required_skills?.map((skill, index) => (
                                    <span key={index} className="text-xs font-semibold bg-[#e4f5ee] text-[#1c4a36] dark:bg-[#0f291e] dark:text-[#e4f5ee] px-3 py-1.5 rounded-lg flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-6 ml-2">
                    <div className="p-6 bg-slate-50 dark:bg-[#173f2e] border border-[#e4f5ee] dark:border-transparent rounded-2xl space-y-5">
                        <h3 className="text-md font-bold uppercase tracking-wider opacity-80 mb-2">Job Summary</h3>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white dark:bg-[#0f291e] shadow-sm"><DollarSign className="w-5 h-5 text-emerald-600" /></div>
                            <div>
                                <p className="text-xs opacity-60 font-medium">Salary</p>
                                <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">৳ {job.salary_min?.toLocaleString()} - ৳ {job.salary_max?.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white dark:bg-[#0f291e] shadow-sm"><Award className="w-5 h-5 text-amber-500" /></div>
                            <div>
                                <p className="text-xs opacity-60 font-medium">Experience</p>
                                <p className="text-sm font-semibold">{job.experience_level} ({job.experience_years}+ Years)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white dark:bg-[#0f291e] shadow-sm"><MapPin className="w-5 h-5 text-rose-500" /></div>
                            <div>
                                <p className="text-xs opacity-60 font-medium">Location</p>
                                <p className="text-sm font-semibold">{job.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white dark:bg-[#0f291e] shadow-sm"><Users className="w-5 h-5 text-blue-500" /></div>
                            <div>
                                <p className="text-xs opacity-60 font-medium">Open Positions</p>
                                <p className="text-sm font-semibold">{job.vacancy}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white dark:bg-[#0f291e] shadow-sm"><Calendar className="w-5 h-5 text-indigo-500" /></div>
                            <div>
                                <p className="text-xs opacity-60 font-medium">Deadline</p>
                                <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                                    {new Date(job.application_deadline).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-[#173f2e] border border-[#e4f5ee] dark:border-transparent rounded-2xl">
                        <ApplyButton jobId={job._id} isExpired={isExpired} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobDetailsPage