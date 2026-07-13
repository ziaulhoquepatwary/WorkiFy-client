"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Bell, Menu, User as UserIcon, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import ThemeToggle from "@/component/ThemeToggle";
import Loading from "@/app/loading";

function DashboardHeader({ onMenuClick }) {
    const { data: session, isPending } = authClient.useSession();
    const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

    const user = session?.user;

    if (isPending) {
        return <Loading />
    }

    return (
        <header className="sticky top-0 z-40 h-16 border-b flex items-center justify-between px-4 lg:px-6 transition-colors duration-300 bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e]">

            {/* Search and Mobile Menu Button */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                {/* 1024px (lg) এর নিচে মেনু বাটন দেখাবে */}
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg lg:hidden text-slate-600 hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]"
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

            {/* Right Side Actions */}
            <div className="flex items-center ml-1 gap-3 md:gap-4">
                <ThemeToggle />

                <div className="h-8 w-[1px] bg-[#e4f5ee] dark:bg-[#173f2e]"></div>

                {/* User Profile & Dropdown */}
                <div className="flex items-center gap-3 relative">

                    {/* User Name & Role (Visible on Large Screens) */}
                    <div className="text-right hidden lg:block">
                        <h5 className="text-sm font-semibold text-[#1c4a36] dark:text-[#e4f5ee]">
                            {user?.name}
                        </h5>
                        <p className="text-xs text-gray-400 dark:text-[#e4f5ee]/50 capitalize">
                            {user?.role}
                        </p>
                    </div>

                    {/* Interactive Avatar Button */}
                    <button
                        onClick={() => setAvatarMenuOpen((prev) => !prev)}
                        className="w-9 h-9 rounded-full overflow-hidden border border-[#1c4a36]/20 dark:border-[#e4f5ee]/20 hover:opacity-90 transition-all focus:outline-none cursor-pointer"
                    >
                        <img
                            src={user?.image || "/user.png"}
                            alt={user?.name}
                            className="object-cover w-full h-full"
                        />
                    </button>

                    {/* Avatar Dropdown Menu */}
                    {avatarMenuOpen && (
                        <div className="absolute right-0 top-12 w-56 bg-white dark:bg-[#0f291e] rounded-xl border border-[#e4f5ee] dark:border-[#173f2e] shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">

                            {/* User Info Section */}
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#e4f5ee] dark:border-[#173f2e]">
                                <img
                                    src={user?.image || "/user.png"}
                                    alt={user?.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="overflow-hidden">
                                    <p className="text-sm font-semibold text-[#1c4a36] dark:text-[#e4f5ee] truncate">{user?.name}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{user?.email}</p>
                                </div>
                            </div>

                            {/* Actions List */}
                            <div className="p-2">
                                <Link
                                    href="/my-profile"
                                    onClick={() => setAvatarMenuOpen(false)}
                                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#1c4a36] dark:text-[#e4f5ee] rounded-lg hover:bg-[#e4f5ee] dark:hover:bg-[#173f2e] transition-colors"
                                >
                                    <UserIcon size={15} /> My Profile
                                </Link>

                                <button
                                    onClick={() => {
                                        setAvatarMenuOpen(false);
                                        authClient.signOut({
                                            fetchOptions: {
                                                onSuccess: () => { window.location.href = "/"; }
                                            }
                                        });
                                    }}
                                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                                >
                                    <LogOut size={15} /> Logout
                                </button>
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </header>
    );
}

export default DashboardHeader;