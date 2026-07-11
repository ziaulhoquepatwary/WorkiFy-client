"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { getMyPostedJobs, deleteJobById } from "@/lib/actions/jobs";

export default function ManageJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(10);

    const router = useRouter();

    const fetchJobs = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getMyPostedJobs(page, limit);
            setJobs(res.jobs || []);
            setTotalPages(res.pagination?.totalPages || 1);
        } catch (error) {
            console.error("Failed to load posted jobs:", error);
        } finally {
            setLoading(false);
        }
    }, [page, limit]);

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    const handleDelete = (jobId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this! All applications for this job will also be removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1c4a36",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: "#0f291e",
            color: "#e4f5ee"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteJobById(jobId);
                    setJobs((prev) => prev.filter((job) => job._id !== jobId));

                    Swal.fire({
                        title: "Deleted!",
                        text: "Job posting has been deleted.",
                        icon: "success",
                        background: "#0f291e",
                        color: "#e4f5ee"
                    });
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: error?.response?.data?.message || "Failed to delete the job.",
                        icon: "error",
                        background: "#0f291e",
                        color: "#e4f5ee"
                    });
                }
            }
        });
    };

    return (
        <div className="min-h-screen p-6 bg-white dark:bg-[#0f291e] text-gray-800 dark:text-[#e4f5ee] transition-colors duration-200">
            <div className="mx-auto space-y-6">

                <div className="border-b pb-4 border-gray-200 dark:border-[#173f2e]">
                    <h1 className="text-2xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                        Manage Job Postings
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        View, edit, or remove your active job listings.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#173f2e] shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#e4f5ee] dark:bg-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee] text-sm uppercase">
                            <tr>
                                <th className="p-4">Job Title</th>
                                <th className="p-4">Category / Level</th>
                                <th className="p-4">Type / Mode</th>
                                <th className="p-4">Deadline / Location</th>
                                <th className="p-4">Total Applicants</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-[#173f2e] text-sm">
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="text-center p-8">
                                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#e4f5ee] border-t-[#1c4a36]"></div>
                                    </td>
                                </tr>
                            ) : jobs.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center p-8 text-gray-500 dark:text-gray-400">
                                        No posted jobs found to manage.
                                    </td>
                                </tr>
                            ) : (
                                jobs.map((job) => (
                                    <tr key={job._id} className="hover:bg-[#e4f5ee]/30 dark:hover:bg-[#173f2e]/50 transition-colors">
                                        <td className="p-4 font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                                            {job.job_title}
                                        </td>
                                        <td className="p-4">
                                            <span className="font-medium">{job.job_category}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 block">{job.experience_level}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="font-medium">{job.job_type}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 block">{job.work_mode}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="font-medium">{job.location}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 block">
                                                {job.application_deadline ? new Date(job.application_deadline).toLocaleDateString('en-US') : 'N/A'}
                                            </span>
                                        </td>
                                        <td className="p-2">
                                            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#e4f5ee] text-[#1c4a36] text-center inline-block">
                                                {job.applicants_count || 0} Candidates
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => router.push(`/jobs/${job._id}`)}
                                                    className="px-3 py-1.5 text-xs font-semibold rounded-md border border-gray-300 dark:border-[#173f2e] hover:bg-gray-100 dark:hover:bg-[#173f2e] cursor-pointer"
                                                >
                                                    View Details
                                                </button>
                                                <button
                                                    onClick={() => router.push(`/recruiter/manage-jobs/edit/${job._id}`)}
                                                    className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#1c4a36] text-white hover:bg-opacity-90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] transition-all cursor-pointer"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(job._id)}
                                                    className="px-3 py-1.5 text-xs font-semibold rounded-md bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {!loading && totalPages > 1 && (
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Showing Page <span className="font-semibold text-gray-800 dark:text-white">{page}</span> of <span className="font-semibold text-gray-800 dark:text-white">{totalPages}</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                disabled={page === 1}
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-300 dark:border-[#173f2e] bg-white dark:bg-[#173f2e] text-gray-700 dark:text-[#e4f5ee] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-opacity-80 transition-all cursor-pointer"
                            >
                                Previous
                            </button>

                            <button
                                disabled={page >= totalPages}
                                onClick={() => setPage((prev) => prev + 1)}
                                className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-300 dark:border-[#173f2e] bg-white dark:bg-[#173f2e] text-gray-700 dark:text-[#e4f5ee] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-opacity-80 transition-all cursor-pointer"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}