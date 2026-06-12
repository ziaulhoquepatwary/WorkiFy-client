"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/component/ThemeToggle";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
    const { theme, toggleTheme, mounted } = useTheme();
    const { data: session, isPending } = authClient.useSession();
    const pathname = usePathname();

    const user = session?.user;

    const role = user?.role;
    const dashboardHref = role === "recruiter" ? "/recruiter" : "/admin";

    const navLinks = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/pricing" },
    ];

    const isActive = (path) => pathname === path;

    const themeClass = theme === "dark" ? "dark bg-[#0f291e] border-[#173f2e]" : "bg-white border-[#e4f5ee]";

    return (
        <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300 ${themeClass}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* 1. Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-3xl font-bold font-heading tracking-tight">
                            <span className="text-[#1c4a36] dark:text-[#e4f5ee]">Worki</span>
                            <span className="text-gray-500 dark:text-white/70">Fy</span>
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation & Actions */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <div className="flex items-center space-x-1 rounded-full bg-[#e4f5ee]/40 dark:bg-[#173f2e]/50 p-1.5 border border-[#e4f5ee] dark:border-[#173f2e]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(link.href)
                                        ? "bg-[#1c4a36] text-white shadow-sm dark:bg-[#e4f5ee] dark:text-[#1c4a36]"
                                        : "text-[#1c4a36] hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]"
                                        }`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Vertical Separator */}
                        <div className="h-5 w-px bg-[#e4f5ee] dark:bg-[#173f2e]" />

                        {/* Theme & Auth Actions */}
                        <div className="flex items-center space-x-6">
                            <ThemeToggle />

                            {/* ── Auth: Desktop ── */}
                            {isPending ? (
                                <div className="w-10 h-10 rounded-full bg-[#e4f5ee] dark:bg-[#173f2e] animate-pulse" />
                            ) : user ? (
                                <div className="relative">
                                    {/* Avatar Button */}
                                    <button
                                        onClick={() => setAvatarMenuOpen((prev) => !prev)}
                                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1c4a36] dark:border-[#e4f5ee] hover:opacity-90 transition-opacity"
                                    >
                                        <img
                                            src={user?.image || "/user.png"}
                                            alt={user?.name}
                                            className="object-cover w-10 h-10"
                                        />
                                    </button>

                                    {/* Dropdown */}
                                    {avatarMenuOpen && (
                                        <div className="absolute right-0 top-12 w-56 bg-white dark:bg-[#0f291e] rounded-xl border border-[#e4f5ee] dark:border-[#173f2e] shadow-lg z-50">
                                            {/* User Info */}
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
                                            {/* Actions */}
                                            <div className="p-2">
                                                {role && (
                                                    <Link
                                                        href={dashboardHref}
                                                        onClick={() => setAvatarMenuOpen(false)}
                                                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#1c4a36] dark:text-[#e4f5ee] rounded-lg hover:bg-[#e4f5ee] dark:hover:bg-[#173f2e] transition-colors font-medium"
                                                    >
                                                        <LayoutDashboard size={15} /> Dashboard
                                                    </Link>
                                                )}

                                                <Link
                                                    href="/my-profile"
                                                    onClick={() => setAvatarMenuOpen(false)}
                                                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#1c4a36] dark:text-[#e4f5ee] rounded-lg hover:bg-[#e4f5ee] dark:hover:bg-[#173f2e] transition-colors"
                                                >
                                                    <User size={15} /> My Profile
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
                                                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                                                >
                                                    <LogOut size={15} /> Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href="/signin"
                                        className={`text-sm font-semibold transition-colors ${isActive("/signin")
                                            ? "text-[#1c4a36] dark:text-white"
                                            : "text-[#1c4a36]/80 hover:text-[#1c4a36] dark:text-[#e4f5ee]/80 dark:hover:text-white"
                                            }`}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="rounded-xl bg-[#1c4a36] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white transition-all duration-200"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* 3. Mobile Right-side Items */}
                    <div className="flex items-center space-x-3 md:hidden">
                        <ThemeToggle />

                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="inline-flex items-center justify-center rounded-lg p-2 text-[#1c4a36] hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e] focus:outline-none"
                        >
                            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* 4. Mobile Menu Panel */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                <div className="space-y-1 border-t border-[#e4f5ee] dark:border-[#173f2e] bg-white dark:bg-[#0f291e] px-4 py-4 shadow-inner">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-lg px-4 py-2.5 text-base font-medium ${isActive(link.href)
                                ? "bg-[#e4f5ee] text-[#1c4a36] dark:bg-[#173f2e] dark:text-white"
                                : "text-[#1c4a36] hover:bg-[#e4f5ee]/50 dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]/50"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="my-4 h-px w-full bg-[#e4f5ee] dark:bg-[#173f2e]" />

                    {/* ── Auth: Mobile ── */}
                    {isPending ? (
                        <div className="w-full h-12 bg-[#e4f5ee] dark:bg-[#173f2e] animate-pulse rounded-xl" />
                    ) : user ? (
                        <div className="flex flex-col space-y-3">
                            {/* User Info */}
                            <div className="flex items-center gap-3 px-2 py-1">
                                <img
                                    src={user?.image || "/user.png"}
                                    alt={user?.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-[#1c4a36] dark:border-[#e4f5ee]"
                                />
                                <div className="overflow-hidden">
                                    <p className="text-sm font-semibold text-[#1c4a36] dark:text-[#e4f5ee] truncate">{user?.name}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{user?.email}</p>
                                </div>
                            </div>

                            {/* {dashboard} */}
                            {role && (
                                <Link
                                    href={dashboardHref}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] w-full py-3 rounded-xl font-medium hover:opacity-90 transition-colors"
                                >
                                    <LayoutDashboard size={16} /> Dashboard
                                </Link>
                            )}
                            {/* My Profile */}
                            <Link
                                href="/my-profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 border border-[#e4f5ee] dark:border-[#173f2e] w-full py-3 rounded-xl font-medium text-[#1c4a36] dark:text-[#e4f5ee] hover:bg-[#e4f5ee]/50 dark:hover:bg-[#173f2e]/50 transition-colors"
                            >
                                <User size={16} /> My Profile
                            </Link>
                            {/* Logout */}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    authClient.signOut({
                                        fetchOptions: {
                                            onSuccess: () => { window.location.href = "/"; }
                                        }
                                    });
                                }}
                                className="flex items-center justify-center gap-2 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 w-full py-3 rounded-xl font-medium hover:bg-red-100 dark:hover:bg-red-950/40 transition-colors"
                            >
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link
                                href="/signin"
                                onClick={() => setIsOpen(false)}
                                className={`block rounded-lg px-4 py-2.5 text-base font-medium ${isActive("/signin")
                                    ? "text-[#1c4a36] dark:text-white"
                                    : "text-[#1c4a36] hover:bg-[#e4f5ee]/50 dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]/50"
                                    }`}
                            >
                                Sign In
                            </Link>
                            <div className="mt-2 px-4">
                                <Link
                                    href="/register"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full rounded-xl bg-[#1c4a36] py-3 text-center text-base font-semibold text-white shadow-md hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar