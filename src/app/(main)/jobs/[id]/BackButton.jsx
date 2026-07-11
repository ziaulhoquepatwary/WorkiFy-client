"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-[#173f2e] dark:hover:bg-[#1f543e] border border-[#e4f5ee] dark:border-transparent transition-all duration-200 group"
        >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Explore More</span>
        </button>
    );
}