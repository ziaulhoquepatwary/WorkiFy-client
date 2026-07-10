"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMyPostedJobs } from "@/lib/actions/jobs";

export default function ApplicationsOverview() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await getMyPostedJobs();
                setJobs(res.jobs || []);
            } catch (error) {
                console.error("Failed to load posted jobs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="min-h-screen p-6 bg-white dark:bg-[#0f291e] text-gray-800 dark:text-[#e4f5ee] transition-colors duration-200">
            <div className="mx-auto space-y-6">

                <div className="border-b pb-4 border-gray-200 dark:border-[#173f2e]">
                    <h1 className="text-2xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                        Job Applications Overview
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Select a job below to evaluate incoming applications and handle screening.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#173f2e] shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#e4f5ee] dark:bg-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee] text-sm uppercase">
                            <tr>
                                <th className="p-4">Job Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Type / Mode</th>
                                <th className="p-4">Total Applicants</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-[#173f2e] text-sm">
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="text-center p-8">
                                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#e4f5ee] border-t-[#1c4a36]"></div>
                                    </td>
                                </tr>
                            ) : jobs.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center p-8 text-gray-500 dark:text-gray-400">
                                        No posted jobs available for tracking applications.
                                    </td>
                                </tr>
                            ) : (
                                jobs.map((job) => (
                                    <tr key={job._id} className="hover:bg-[#e4f5ee]/30 dark:hover:bg-[#173f2e]/50 transition-colors">
                                        <td className="p-4 font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                                            {job.job_title}
                                        </td>
                                        <td className="p-4">{job.job_category}</td>
                                        <td className="p-4">
                                            <span className="font-medium">{job.job_type}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 block">{job.work_mode}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#e4f5ee] text-[#1c4a36]">
                                                {job.applicants_count || 0} Candidates
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                {/* Applicants Screening Button */}
                                                <button
                                                    onClick={() => router.push(`/recruiter/applications/${job._id}`)}
                                                    className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#1c4a36] text-white hover:bg-opacity-90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] transition-all cursor-pointer"
                                                >
                                                    Applicants
                                                </button>
                                                {/* View Job Post Details */}
                                                <button
                                                    onClick={() => router.push(`/jobs/${job._id}`)}
                                                    className="px-3 py-1.5 text-xs font-semibold rounded-md border border-gray-300 dark:border-[#173f2e] hover:bg-gray-100 dark:hover:bg-[#173f2e] cursor-pointer"
                                                >
                                                    View Job
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}