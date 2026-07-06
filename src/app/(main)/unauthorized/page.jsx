'use client';

import Link from 'next/link';
import { Lock, ArrowLeft, Home } from 'lucide-react';

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f291e] flex items-center justify-center px-4 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#1c4a36]/10 dark:bg-[#1c4a36]/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#e4f5ee]/40 dark:bg-[#173f2e]/40 rounded-full blur-3xl opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-md mx-auto">

                {/* Lock Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#1c4a36]/20 dark:bg-[#1c4a36]/30 animate-pulse"></div>
                        <div className="relative w-20 h-20 bg-[#e4f5ee] dark:bg-[#173f2e] rounded-full flex items-center justify-center">
                            <Lock className="w-10 h-10 text-[#1c4a36] dark:text-[#e4f5ee] animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* 403 Error Code */}
                <h1 className="text-8xl md:text-9xl font-black text-[#1c4a36] dark:text-[#e4f5ee] mb-2 animate-pulse">
                    403
                </h1>

                {/* Underline */}
                <div className="h-1.5 w-32 mx-auto mb-8 bg-gradient-to-r from-[#1c4a36] to-[#1c4a36]/70 dark:from-[#e4f5ee] dark:to-[#e4f5ee]/70 rounded-full animate-pulse"></div>

                {/* Text */}
                <div className="space-y-3 mb-8">
                    <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                        Access Denied
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        You don't have permission to access this resource
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        This page is restricted to authorized users only
                    </p>
                </div>

                {/* Buttons */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] rounded-xl font-semibold hover:bg-[#1c4a36]/90 dark:hover:bg-white hover:shadow-lg shadow-[#1c4a36]/20 dark:shadow-[#e4f5ee]/20 active:scale-95 transition-all duration-300 group"
                >
                    <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Home
                </Link>

                {/* Info Box */}
                <div className="mt-8 p-4 bg-[#e4f5ee] dark:bg-[#173f2e] border border-[#1c4a36]/20 dark:border-[#e4f5ee]/20 rounded-xl">
                    <p className="text-sm text-[#1c4a36] dark:text-[#e4f5ee]">
                        If you believe this is a mistake, please contact support or try logging in with a different account.
                    </p>
                </div>
            </div>
        </div>
    );
}