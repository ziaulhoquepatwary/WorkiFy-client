"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const pathname = usePathname();


    const navLinks = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/pricing" },
    ];

    const isActive = (path) => pathname === path;

    const themeClass = isDarkMode ? "dark bg-[#0f291e] border-[#173f2e]" : "bg-white border-[#e4f5ee]";

    return (
        <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-300 ${themeClass}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* 1. Brand Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            <span className="text-[#1c4a36] dark:text-[#e4f5ee]">Worki</span>
                            <span className="text-gray-500 dark:text-white/70">Fy</span>
                        </Link>
                    </div>

                    {/* 2. Desktop Navigation & Actions */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {/* Nav Links Container (Capsule style) */}
                        <div className="flex items-center space-x-1 rounded-full bg-[#e4f5ee]/40 dark:bg-[#173f2e]/50 p-1.5 border border-[#e4f5ee] dark:border-[#173f2e]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${isActive(link.href)
                                        ? "bg-[#1c4a36] text-white shadow-sm dark:bg-[#e4f5ee] dark:text-[#1c4a36]"
                                        : "text-[#1c4a36] hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Vertical Separator */}
                        <div className="h-5 w-px bg-[#e4f5ee] dark:bg-[#173f2e]" />

                        {/* Theme & Auth Actions */}
                        <div className="flex items-center space-x-6">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="rounded-full p-2 text-[#1c4a36] hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e] transition-colors"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
                            </button>

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
                                href="/get-started"
                                className="rounded-xl bg-[#1c4a36] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white transition-all duration-200"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* 3. Mobile Right-side Items */}
                    <div className="flex items-center space-x-3 md:hidden">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="rounded-full p-2 text-[#1c4a36] hover:bg-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
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
                            href="/get-started"
                            onClick={() => setIsOpen(false)}
                            className="block w-full rounded-xl bg-[#1c4a36] py-3 text-center text-base font-semibold text-white shadow-md hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar