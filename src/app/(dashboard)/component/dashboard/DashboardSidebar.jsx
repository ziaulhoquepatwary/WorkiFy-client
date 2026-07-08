"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, Briefcase, FileText, Settings, ChevronRight, User, FilePlusCorner, Users, UserPlus, UserCheck, CreditCard, Heart } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Loading from "@/app/loading";

function DashboardSidebar({ isOpen, closeSidebar }) {
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const seekerMenu = [
        { name: "Dashboard", href: "/seeker", icon: LayoutDashboard },
        { name: "Browse Jobs", href: "/jobs", icon: Briefcase },
        { name: "My Applications", href: "/seeker/applications", icon: FileText },
        { name: "Saved Jobs", href: "/seeker/saved-jobs", icon: Heart },
        { name: "My Profile", href: "/seeker/profile", icon: User },
        { name: "Settings", href: "/seeker/settings", icon: Settings },
    ];

    const recruiterMenu = [
        { name: "Dashboard", href: "/recruiter", icon: LayoutDashboard },
        { name: "Create Job", href: "/recruiter/create-job", icon: FilePlusCorner },
        { name: "My Company", href: "/recruiter/company", icon: Building2 },
        { name: "Manage Jobs", href: "/recruiter/manage-jobs", icon: Briefcase },
        { name: "Applications", href: "/recruiter/applications", icon: FileText },
        { name: "Settings", href: "/recruiter/settings", icon: Settings },
    ];

    const adminMenu = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Pending Users", href: "/admin/pending-users", icon: UserPlus },
        { name: "All Users", href: "/admin/all-users", icon: Users },
        { name: "Change Plan", href: "/admin/change-plan", icon: CreditCard },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    const menuItems =
        user?.role === "seeker" ? seekerMenu :
            user?.role === "recruiter" ? recruiterMenu :
                adminMenu;

    if (isPending) {
        return <Loading />
    }

    if (!user) return null;

    return (
        <aside
            className={`
                w-64 h-screen flex flex-col justify-between border-r transition-all duration-300 z-50
                bg-white border-[#e4f5ee] text-slate-700 
                dark:bg-[#0f291e] dark:border-[#173f2e] dark:text-[#e4f5ee]/80
                fixed inset-y-0 left-0 md:sticky md:top-0
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}
        >
            <div className="flex flex-col pt-6 overflow-y-auto flex-1">
                <div className="px-6 mb-8">
                    <Link href="/" className="text-3xl font-bold font-heading tracking-tight">
                        <span className="text-[#1c4a36] dark:text-[#e4f5ee]">Worki</span>
                        <span className="text-gray-500 dark:text-white/70">Fy</span>
                    </Link>
                </div>

                <div className="px-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-[#e4f5ee] dark:border-[#173f2e]">
                        <div className="w-10 h-10 rounded-full bg-[#1c4a36]/10 dark:bg-[#e4f5ee]/10 flex items-center justify-center font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                            <img
                                src={user?.image || "/user.png"}
                                alt={user?.name}
                                className="object-cover w-10 h-10 rounded-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold truncate text-[#1c4a36] dark:text-[#e4f5ee]">
                                {user.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-[#e4f5ee]/60 truncate">
                                {user.email}
                            </p>
                            {user.isPremium && (
                                <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-[#1c4a36] bg-[#e4f5ee] px-2 py-0.5 rounded">
                                    Premium
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <nav className="px-3 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => closeSidebar?.()}
                                className={`group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                    ? "bg-[#1c4a36] text-white shadow-md shadow-[#1c4a36]/10 dark:bg-[#e4f5ee] dark:text-[#1c4a36]"
                                    : "text-slate-600 hover:bg-[#e4f5ee]/50 hover:text-[#1c4a36] dark:text-[#e4f5ee]/70 dark:hover:bg-[#173f2e] dark:hover:text-[#e4f5ee]"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={18} className={`transition-transform group-hover:scale-110 ${isActive ? "text-white dark:text-[#1c4a36]" : "text-slate-400 dark:text-[#e4f5ee]/50"}`} />
                                    <span>{item.name}</span>
                                </div>
                                {isActive && <ChevronRight size={14} className="opacity-70" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="text-center py-2 px-3 rounded-lg bg-[#e4f5ee]/30 dark:bg-[#173f2e]/40">
                    <p className="text-[11px] font-medium text-gray-400 dark:text-[#e4f5ee]/40 capitalize">
                        Logged in as {user.role.replace("_", " ")}
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default DashboardSidebar;