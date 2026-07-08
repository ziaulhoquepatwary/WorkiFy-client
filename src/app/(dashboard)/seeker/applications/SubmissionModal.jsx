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
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white font-bold text-lg"
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
                        <div className="space-[#1c4a36] space-y-4 text-sm">
                            <div>
                                <p className="font-semibold text-gray-500 dark:text-gray-400">Status</p>
                                <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#e4f5ee] text-[#1c4a36] capitalize">
                                    {data.status}
                                </span>
                            </div>

                            {data.resumeUrl && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Resume Link</p>
                                    <a
                                        href={data.resumeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all"
                                    >
                                        {data.resumeUrl}
                                    </a>
                                </div>
                            )}

                            {data.portfolioUrl && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Portfolio</p>
                                    <a
                                        href={data.portfolioUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] underline font-medium hover:opacity-80 break-all"
                                    >
                                        {data.portfolioUrl}
                                    </a>
                                </div>
                            )}

                            {data.coverLetter && (
                                <div>
                                    <p className="font-semibold text-gray-500 dark:text-gray-400">Cover Letter</p>
                                    <p className="mt-1 p-3 rounded-lg bg-[#e4f5ee]/50 dark:bg-[#173f2e] whitespace-pre-line">
                                        {data.coverLetter}
                                    </p>
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
                        className="px-4 py-2 text-sm rounded-lg font-medium bg-[#e4f5ee] text-[#1c4a36] hover:bg-[#1c4a36] hover:text-white dark:bg-[#173f2e] dark:text-[#e4f5ee] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubmissionModal;