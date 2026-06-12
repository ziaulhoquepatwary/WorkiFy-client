"use client";

import React from "react";
import { Briefcase, Users } from "lucide-react";

export default function UserTabs({ activeTab, setActiveTab }) {
    return (
        <div className="flex gap-2 mt-4 sm:mt-0 p-1 bg-[#e4f5ee] dark:bg-[#173f2e] rounded-lg">
            <button
                onClick={() => setActiveTab("recruiter")}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "recruiter"
                        ? "bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] shadow-sm"
                        : "opacity-70 hover:opacity-100"
                    }`}
            >
                <Briefcase className="w-4 h-4" /> Recruiters
            </button>
            <button
                onClick={() => setActiveTab("seeker")}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "seeker"
                        ? "bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] shadow-sm"
                        : "opacity-70 hover:opacity-100"
                    }`}
            >
                <Users className="w-4 h-4" /> Job Seekers
            </button>
        </div>
    );
}