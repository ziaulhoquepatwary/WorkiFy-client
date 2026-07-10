"use client";

function ViewSubmissionModal({ applicant, onClose }) {
    if (!applicant) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl dark:bg-[#0f291e] border border-gray-200 dark:border-[#173f2e] text-gray-800 dark:text-[#e4f5ee]">

                {/* Modal Header */}
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-[#173f2e]">
                    <div>
                        <h3 className="text-xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                            {applicant.seekerDetails?.name || "Candidate"} Submission
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            Review all documents and external links submitted by the applicant.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-white font-bold text-lg p-1"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body Content */}
                <div className="py-5 space-y-5 text-sm max-h-[65vh] overflow-y-auto pr-1">

                    {/* Cover Letter Section */}
                    <div className="space-y-1.5">
                        <span className="font-semibold text-gray-500 dark:text-gray-400 block uppercase text-xs tracking-wider">
                            Cover Letter / Statement
                        </span>
                        {applicant.coverLetter ? (
                            applicant.coverLetter.startsWith("http") ? (
                                <div className="p-3 rounded-lg bg-[#e4f5ee]/40 dark:bg-[#173f2e] border border-gray-100 dark:border-transparent">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Provided as an external document link:</p>
                                    <a
                                        href={applicant.coverLetter}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#1c4a36] dark:text-[#e4f5ee] font-medium underline break-all inline-flex items-center gap-1 hover:opacity-80"
                                    >
                                        Open Cover Letter Link ↗
                                    </a>
                                </div>
                            ) : (
                                <p className="p-4 rounded-lg bg-[#e4f5ee]/40 dark:bg-[#173f2e] whitespace-pre-line leading-relaxed border border-gray-100 dark:border-transparent">
                                    {applicant.coverLetter}
                                </p>
                            )
                        ) : (
                            <p className="text-gray-400 italic p-3 rounded-lg bg-gray-50 dark:bg-[#173f2e]/40">
                                No cover letter provided by the applicant.
                            </p>
                        )}
                    </div>

                    {/* Core Attachments & Professional Assets */}
                    <div className="space-y-2">
                        <span className="font-semibold text-gray-500 dark:text-gray-400 block uppercase text-xs tracking-wider">
                            Submitted Attachments & Professional Networks
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            {/* Primary Resume Attachment */}
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-[#173f2e] bg-white dark:bg-[#173f2e]/30 flex flex-col justify-between">
                                <div>
                                    <span className="font-bold text-[#1c4a36] dark:text-[#e4f5ee] block text-xs uppercase">Resume / CV</span>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Primary verification document</p>
                                </div>
                                {applicant.resumeUrl ? (
                                    <a href={applicant.resumeUrl} target="_blank" rel="noreferrer" className="mt-3 text-xs font-semibold px-3 py-2 text-center rounded bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] hover:opacity-90 block transition-all">
                                        View Resume Document ↗
                                    </a>
                                ) : (
                                    <span className="mt-3 text-xs text-red-500 italic block">Not Available</span>
                                )}
                            </div>

                            {/* Portfolio Link */}
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-[#173f2e] bg-white dark:bg-[#173f2e]/30 flex flex-col justify-between">
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-[#e4f5ee] block text-xs uppercase">Personal Portfolio</span>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Showcase of work and projects</p>
                                </div>
                                {applicant.portfolioUrl ? (
                                    <a href={applicant.portfolioUrl} target="_blank" rel="noreferrer" className="mt-3 text-xs font-semibold px-3 py-2 text-center rounded border border-[#1c4a36] text-[#1c4a36] dark:border-[#e4f5ee] dark:text-[#e4f5ee] hover:bg-[#1c4a36] hover:text-white dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] block transition-all">
                                        Open Portfolio Website ↗
                                    </a>
                                ) : (
                                    <span className="mt-3 text-xs text-gray-400 italic block">Not Provided</span>
                                )}
                            </div>

                            {/* LinkedIn Profile */}
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-[#173f2e] bg-white dark:bg-[#173f2e]/30 flex flex-col justify-between">
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-[#e4f5ee] block text-xs uppercase">LinkedIn Network</span>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Professional profile & background</p>
                                </div>
                                {applicant.linkedinUrl ? (
                                    <a href={applicant.linkedinUrl} target="_blank" rel="noreferrer" className="mt-3 text-xs font-semibold px-3 py-2 text-center rounded border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 block transition-all">
                                        Open LinkedIn Profile ↗
                                    </a>
                                ) : (
                                    <span className="mt-3 text-xs text-gray-400 italic block">Not Provided</span>
                                )}
                            </div>

                            {/* Supplemental Link / Other Platform */}
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-[#173f2e] bg-white dark:bg-[#173f2e]/30 flex flex-col justify-between">
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-[#e4f5ee] block text-xs uppercase">Other Resource Link</span>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Additional credentials or profiles</p>
                                </div>
                                {applicant.otherLink ? (
                                    <a href={applicant.otherLink} target="_blank" rel="noreferrer" className="mt-3 text-xs font-semibold px-3 py-2 text-center rounded border border-gray-400 text-gray-600 dark:border-gray-500 dark:text-gray-300 hover:bg-gray-500 hover:text-white block transition-all">
                                        Open Additional Link ↗
                                    </a>
                                ) : (
                                    <span className="mt-3 text-xs text-gray-400 italic block">Not Provided</span>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* Submission Timestamp Information */}
                    <div className="text-[11px] text-gray-400 dark:text-gray-500 pt-1 flex justify-between items-center border-t border-gray-100 dark:border-[#173f2e]">
                        <span>Application State: <strong className="capitalize text-yellow-600 dark:text-yellow-400">{applicant.status}</strong></span>
                        {applicant.createdAt && (
                            <span>Submitted on: {new Date(applicant.createdAt).toLocaleDateString()}</span>
                        )}
                    </div>

                </div>

                {/* Modal Action Footer */}
                <div className="flex justify-end pt-3 border-t border-gray-200 dark:border-[#173f2e]">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 text-sm rounded-lg font-semibold bg-[#e4f5ee] text-[#1c4a36] hover:bg-[#1c4a36] hover:text-white dark:bg-[#173f2e] dark:text-[#e4f5ee] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-all"
                    >
                        Done Reviewing
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewSubmissionModal;