"use client";

import { Search, Bell, Menu } from "lucide-react";
import ThemeToggle from "@/component/ThemeToggle";

function DashboardHeader({ onMenuClick }) {

    const user = {
        name: "Alex Sterling",
        company: "TechFlow Inc.",
        avatar: "A"
    };
    return (
        <header className="h-16 border-b flex items-center justify-between px-4 md:px-6 transition-colors duration-300 bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e]"
        >
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg md:hidden text-slate-600 hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]"
                >
                    <Menu size={20} />
                </button>

                <div className="relative w-full hidden sm:block">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#e4f5ee]/40"
                    />
                    <input
                        type="text"
                        placeholder="Search applications, jobs, or talent..."
                        className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border outline-none transition-all bg-slate-50 border-[#e4f5ee] text-slate-800 placeholder-slate-400 focus:border-[#1c4a36] dark:bg-[#173f2e]/50 dark:border-[#173f2e] dark:text-[#e4f5ee] dark:placeholder-[#e4f5ee]/30 dark:focus:border-[#e4f5ee]"
                    />
                </div>
            </div>

            <div className="flex items-center ml-1 gap-3 md:gap-4">

                <button
                    className="p-2 rounded-xl border relative transition-colors bg-slate-50 border-[#e4f5ee] text-slate-600 hover:bg-[#e4f5ee] dark:bg-[#173f2e] dark:border-[#173f2e] dark:text-[#e4f5ee] dark:hover:bg-[#0f291e]"
                >
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <ThemeToggle />

                <div className="h-8 w-[1px] bg-[#e4f5ee] dark:bg-[#173f2e]"></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                        <h5 className="text-sm font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                            {user.name}
                        </h5>
                        <p className="text-xs text-gray-400 dark:text-[#e4f5ee]/50">
                            {user.company}
                        </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] flex items-center justify-center font-bold text-sm shadow-sm">
                        {user.avatar}
                    </div>
                </div>

            </div>
        </header>
    )
}

export default DashboardHeader