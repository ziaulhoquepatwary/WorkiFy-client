"use client";
import { getSingleApplication } from "@/lib/actions/application";
import { useEffect, useState } from "react";

function SubmissionModal({ applicationId, onClose }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!applicationId) return;

        const fetchSingleApp = async () => {
            setLoading(true);
            try {
                const res = await getSingleApplication(applicationId);
                setData(res.application);
            } catch (error) {
                console.error("Failed to fetch application details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSingleApp();
    }, [applicationId]);

    const getStatusStyles = (status) => {
        switch (status?.toLowerCase()) {
            case "pending":
                return "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 dark:border dark:border-amber-800/50";
            case "interview":
                return "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 dark:border dark:border-blue-800/50";
            case "selected":
                return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border dark:border-emerald-800/50";
            case "rejected":
                return "bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 dark:border dark:border-rose-800/50";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-[#0f291e] dark:border dark:border-[#173f2e] text-gray-800 dark:text-[#e4f5ee]">
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-[#173f2e]">
                    <h3 className="text-xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                        Application Details
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white font-bold text-lg cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body / Loading State */}
                <div className="py-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center space-y-3 py-8">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#e4f5ee] border-t-[#1c4a36]"></div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Fetching submission data...
                            </p>
                        </div>
                    ) : data ? (
                        <div className="space-y-4 text-sm">
                            {/* Status Section */}
                            <div>
                                <p className="font-semibold text-gray-500 dark:text-gray-400">Status</p>
                                <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyles(data.status)}`}>
                                    {data.status}
                                </span>
                                
                                {/* Conditional Professional Message for Interview/Selected */}
                                {(data.status === "interview" || data.status === "selected") && (
                                    <div className="mt-3 p-3 rounded-lg border border-blue-200 bg-blue-50/50 text-blue-900 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-200">
                                        <p className="text-xs font-medium leading-relaxed">
                                            📢 <strong>Notice:</strong> Your application status has been updated to <span className="font-bold capitalize">{data.status}</span>. Please check your registered email inbox (and spam folder) for further instructions and next steps from the recruitment team.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Resume Link */}
                            {data.resumeUrl && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Resume Link</p>
                                    <a
                                        href={data.resumeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all block mt-0.5"
                                    >
                                        View Resume
                                    </a>
                                </div>
                            )}

                            {/* Cover Letter */}
                            {data.coverLetter && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Cover Letter</p>
                                    <a
                                        href={data.coverLetter}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all block mt-0.5"
                                    >
                                        View Cover Letter Document
                                    </a>
                                </div>
                            )}

                            {/* LinkedIn Profile */}
                            {data.linkedinUrl && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">LinkedIn Profile</p>
                                    <a
                                        href={data.linkedinUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all block mt-0.5"
                                    >
                                        {data.linkedinUrl}
                                    </a>
                                </div>
                            )}

                            {/* Portfolio */}
                            {data.portfolioUrl && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Portfolio</p>
                                    <a
                                        href={data.portfolioUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all block mt-0.5"
                                    >
                                        {data.portfolioUrl}
                                    </a>
                                </div>
                            )}

                            {/* Other Link */}
                            {data.otherLink && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Other Link</p>
                                    <a
                                        href={data.otherLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all block mt-0.5"
                                    >
                                        {data.otherLink}
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-center text-red-500">Failed to load submission data.</p>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end pt-3 border-t border-gray-200 dark:border-[#173f2e]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm rounded-lg font-medium bg-[#e4f5ee] text-[#1c4a36] hover:bg-[#1c4a36] hover:text-white dark:bg-[#173f2e] dark:text-[#e4f5ee] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-all cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubmissionModal;