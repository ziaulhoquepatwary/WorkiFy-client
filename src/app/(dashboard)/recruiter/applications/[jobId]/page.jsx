"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import ViewSubmissionModal from "./ViewSubmissionModal";
import { getJobApplicants, updateApplicationStatus } from "@/lib/actions/application";

function JobApplicantsList() {
    const { jobId } = useParams();
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const router = useRouter()

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10;

    const fetchApplicants = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getJobApplicants(jobId, page, limit);
            setApplicants(res.applicants || []);
            setTotalPages(res.pagination?.totalPages || 1);
        } catch (error) {
            console.error("Failed to fetch applicants:", error);
        } finally {
            setLoading(false);
        }
    }, [jobId, page]);

    useEffect(() => {
        if (jobId) fetchApplicants();
    }, [jobId, fetchApplicants]);

    const handleStatusChange = async (applicationId, newStatus) => {
        try {
            await updateApplicationStatus(applicationId, newStatus);
            setApplicants((prev) =>
                prev.map((app) => (app._id === applicationId ? { ...app, status: newStatus } : app))
            );

            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: `Status set to ${newStatus}`,
                showConfirmButton: false,
                timer: 2000,
                background: "#0f291e",
                color: "#e4f5ee"
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Processing Failed",
                text: error?.response?.data?.message || "Something went wrong."
            });
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "selected": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
            case "interview": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
            case "rejected": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
        }
    };

    return (
        <div className="min-h-screen p-4 bg-white dark:bg-[#0f291e] text-gray-800 dark:text-[#e4f5ee] transition-colors duration-200">
            <div className="mx-5 xl:mx-8 space-y-6">

                <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-[#173f2e]">
                    <h1 className="text-2xl font-bold text-[#1c4a36] font-heading dark:text-[#e4f5ee]">
                        Candidate Pipelines
                    </h1>
                    <button onClick={() => router.back()} className="bg-[#1c4a36] hover:bg-[#153526] text-[#e4f5ee] font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer">
                        Back
                    </button>
                </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-[#173f2e] shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[#e4f5ee] dark:bg-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee] text-sm uppercase">
                        <tr>
                            <th className="p-4">Applicant Profile</th>
                            <th className="p-4">Contact Mapping</th>
                            <th className="p-4">Pipeline Status</th>
                            <th className="p-4 text-center">Change State</th>
                            <th className="p-4 text-center">Submissions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-[#173f2e] text-sm">
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="text-center p-8">
                                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-[#e4f5ee] border-t-[#1c4a36]"></div>
                                </td>
                            </tr>
                        ) : applicants.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center p-8 text-gray-500 dark:text-gray-400">
                                    No candidacies have been submitted for this open position yet.
                                </td>
                            </tr>
                        ) : (
                            applicants.map((app) => (
                                <tr key={app._id} className="hover:bg-[#e4f5ee]/30 dark:hover:bg-[#173f2e]/50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            {app.seekerDetails?.image ? (
                                                <img src={app.seekerDetails.image} alt="Avatar" className="h-10 w-10 rounded-full object-cover" />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-[#e4f5ee] text-[#1c4a36] flex items-center justify-center font-bold">
                                                    {app.seekerDetails?.name?.charAt(0) || "S"}
                                                </div>
                                            )}
                                            <span className="font-semibold">{app.seekerDetails?.name || "Anonymous Seeker"}</span>
                                        </div>
                                    </td>

                                    <td className="p-4">{app.seekerDetails?.email}</td>

                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${getStatusClass(app.status)}`}>
                                            {app.status}
                                        </span>
                                    </td>

                                    <td className="p-4 text-center">
                                        <select
                                            value={app.status}
                                            onChange={(e) => handleStatusChange(app._id, e.target.value)}
                                            className="text-xs font-medium rounded-lg p-2 border border-gray-300 bg-white text-gray-700 dark:bg-[#173f2e] dark:border-[#173f2e] dark:text-[#e4f5ee] focus:outline-none"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="interview">Interview</option>
                                            <option value="selected">Selected</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                    </td>

                                    <td className="p-4 text-center">
                                        <button
                                            onClick={() => setSelectedApplicant(app)}
                                            className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[#1c4a36] text-[#1c4a36] hover:bg-[#1c4a36] hover:text-white dark:border-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-all"
                                        >
                                            View Submission
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-end items-center gap-2 pt-4">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((prev) => prev - 1)}
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-[#e4f5ee] text-[#1c4a36] disabled:opacity-50 dark:bg-[#173f2e] dark:text-[#e4f5ee]"
                    >
                        Previous
                    </button>
                    <span className="text-sm font-semibold">Page {page} of {totalPages}</span>
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

            {
        selectedApplicant && (
            <ViewSubmissionModal
                applicant={selectedApplicant}
                onClose={() => setSelectedApplicant(null)}
            />
        )
    }
        </div >
    );
}

export default JobApplicantsList;