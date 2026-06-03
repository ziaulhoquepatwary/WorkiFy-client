"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, Briefcase, FileText, Settings, ChevronRight } from "lucide-react";

function DashboardSidebar() {
    const pathname = usePathname();

    const user = {
        name: "Alex Sterling",
        role: "Recruiter",
        isPremium: true,
    };

    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "My Company", href: "/dashboard/company", icon: Building2 },
        { name: "Manage Jobs", href: "/dashboard/manage-jobs", icon: Briefcase },
        { name: "Applications", href: "/dashboard/applications", icon: FileText },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ];

    return (
        <aside className="w-64 min-h-screen flex flex-col justify-between border-r transition-colors duration-300 bg-white border-[#e4f5ee] text-slate-700 dark:bg-[#0f291e] dark:border-[#173f2e] dark:text-[#e4f5ee]/80"
        >
            {/* Top Section: Logo & Profile */}
            <div className="flex flex-col pt-6">
                {/* Application Logo */}
                <div className="px-6 mb-8">
                    <Link href="/" className="text-3xl font-bold font-heading tracking-tight">
                        <span className="text-[#1c4a36] dark:text-[#e4f5ee]">Worki</span>
                        <span className="text-gray-500 dark:text-white/70">Fy</span>
                    </Link>
                </div>

                {/* User Profile Summary */}
                <div className="px-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-[#e4f5ee] dark:border-[#173f2e]">
                        {/* Profile Avatar */}
                        <div className="w-10 h-10 rounded-full bg-[#1c4a36]/10 dark:bg-[#e4f5ee]/10 flex items-center justify-center font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                            {user.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold truncate text-[#1c4a36] dark:text-[#e4f5ee]">
                                {user.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-[#e4f5ee]/60 truncate">
                                {user.role}
                            </p>
                            {user.isPremium && (
                                <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-[#1c4a36] bg-[#e4f5ee] dark:text-[#1c4a36] dark:bg-[#e4f5ee] px-2 py-0.5 rounded">
                                    Premium
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="px-3 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                    ? /* Active State */
                                    "bg-[#1c4a36] text-white shadow-md shadow-[#1c4a36]/10 dark:bg-[#e4f5ee] dark:text-[#1c4a36]"
                                    : /* Idle State */
                                    "text-slate-600 hover:bg-[#e4f5ee]/50 hover:text-[#1c4a36] dark:text-[#e4f5ee]/70 dark:hover:bg-[#173f2e] dark:hover:text-[#e4f5ee]"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {/* Icon size controlled via lucide-react props */}
                                    <Icon size={18} className={`transition-transform group-hover:scale-110 ${isActive ? "text-white dark:text-[#1c4a36]" : "text-slate-400 dark:text-[#e4f5ee]/50"}`} />
                                    <span>{item.name}</span>
                                </div>
                                {isActive && <ChevronRight size={14} className="opacity-70" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Workspace Indicator */}
            <div className="p-4 border-t border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="text-center py-2 px-3 rounded-lg bg-[#e4f5ee]/30 dark:bg-[#173f2e]/40">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-[#e4f5ee]/40">
                        Logged in as {user.role}
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default DashboardSidebar