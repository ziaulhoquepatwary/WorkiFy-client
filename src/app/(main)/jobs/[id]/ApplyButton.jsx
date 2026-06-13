"use client";

import React from "react";
import { useRouter } from "next/navigation";

function ApplyButton({ jobId, isExpired }) {
    const router = useRouter();

    const handleApply = () => {
        router.push(`/jobs/${jobId}/apply`);
    };

    if (isExpired) {
        return (
            <button disabled className="w-full py-3 rounded-xl bg-slate-300 text-slate-500 dark:bg-[#0f291e] dark:text-slate-600 text-sm font-bold cursor-not-allowed">
                Applications Closed
            </button>
        );
    }

    return (
        <button
            onClick={handleApply}
            className="w-full py-3 rounded-xl bg-[#1c4a36] hover:bg-[#153829] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white text-sm font-bold shadow-md transition-all"
        >
            Apply For This Job
        </button>
    );
}

export default ApplyButton;