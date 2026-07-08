"use client";
import { useEffect, useState, useCallback } from "react";
import ApplicationActions from "./ApplicationActions";
import { getMyApplications } from "@/lib/actions/application";

function ApplicationsTable() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination states
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;

    const fetchApplications = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getMyApplications(page, limit);
            setApplications(res.applications || []);
            setTotalPages(res.pagination?.totalPages || 1);
        } catch (error) {
            console.error("Failed to fetch applications:", error);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

    const handleDeleteSuccess = (deletedId) => {
        setApplications((prev) => prev.filter((item) => item._id !== deletedId));
    };

    return (
        <div className="min-h-screen p-3 bg-white dark:bg-[#0f291e] text-gray-800 dark:text-[#e4f5ee] transition-colors duration-200">
            <div className="px-4 mx-auto space-y-6">

                {/* Page Header */}
                <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-[#173f2e]">
                    <h1 className="text-2xl font-heading text-[#1c4a36] dark:text-[#e4f5ee]">
                        My Applied Jobs
                    </h1>
                </div>

                {/* Applications Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#173f2e] shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#e4f5ee] dark:bg-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee] text-sm uppercase">
                            <tr>
                                <th className="p-4">Job Title</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Type / Mode</th>
                                <th className="p-4">Location</th>
                                <th className="p-4">Applied Date</th>
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
                            ) : applications.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center p-8 text-gray-500 dark:text-gray-400">
                                        No applications found.
                                    </td>
                                </tr>
                            ) : (
                                applications.map((app) => (
                                    <tr
                                        key={app._id}
                                        className="hover:bg-[#e4f5ee]/30 dark:hover:bg-[#173f2e]/50 transition-colors"
                                    >
                                        <td className="p-4 font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                                            {app.jobDetails?.job_title || "N/A"}
                                        </td>
                                        <td className="p-4">{app.jobDetails?.job_category || "N/A"}</td>
                                        <td className="p-4">
                                            <span className="font-medium">{app.jobDetails?.job_type}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400 block">
                                                {app.jobDetails?.work_mode}
                                            </span>
                                        </td>
                                        <td className="p-4">{app.jobDetails?.location || "N/A"}</td>
                                        <td className="p-4">
                                            {new Date(app.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 text-center">
                                            <ApplicationActions
                                                applicationId={app._id}
                                                jobId={app.jobId}
                                                onDeleteSuccess={handleDeleteSuccess}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                {totalPages > 1 && (
                    <div className="flex justify-end items-center gap-2 pt-4">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((prev) => prev - 1)}
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#e4f5ee] text-[#1c4a36] disabled:opacity-50 dark:bg-[#173f2e] dark:text-[#e4f5ee]"
                        >
                            Previous
                        </button>

                        <span className="text-sm font-semibold px-2">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#e4f5ee] text-[#1c4a36] disabled:opacity-50 dark:bg-[#173f2e] dark:text-[#e4f5ee]"
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default ApplicationsTable;