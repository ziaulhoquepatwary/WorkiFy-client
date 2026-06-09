"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Briefcase, User, Loader2 } from "lucide-react";
import Swal from "sweetalert2";

export default function RoleModal({ isOpen, onRoleUpdated }) {
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleRoleSelect = async (selectedRole) => {
        setLoading(true);
        try {
            // Better Auth 404 ফিক্সড মেথড
            const { error } = await authClient.updateUser({
                role: selectedRole,
            });

            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Configuration Failed",
                    text: error.message || "Failed to update role",
                    customClass: {
                        popup: 'rounded-2xl bg-white dark:bg-[#173f2e] text-slate-800 dark:text-[#e4f5ee] border border-[#1c4a36]/10'
                    }
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Profile Configured!",
                    text: `Your pipeline environment is now set as a ${selectedRole === 'seeker' ? 'Job Seeker' : 'Recruiter'}.`,
                    timer: 2000,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'rounded-2xl bg-white dark:bg-[#173f2e] text-slate-800 dark:text-[#e4f5ee] border border-[#1c4a36]/10'
                    }
                });

                onRoleUpdated();
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "System Error",
                text: "Something went wrong during data sync!",
                customClass: {
                    popup: 'rounded-2xl bg-white dark:bg-[#173f2e] text-slate-800 dark:text-[#e4f5ee] border border-[#1c4a36]/10'
                }
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
            {/* Modal Box */}
            <div className="max-w-md w-full bg-[#173f2e] border border-[#1c4a36]/20 p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Background Deco Light */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#1c4a36] opacity-40 rounded-full filter blur-2xl pointer-events-none" />

                {/* Typography Header */}
                <div className="space-y-1.5 relative z-10">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                        Pipeline Setup
                    </h2>
                    <p className="text-[#e4f5ee]/60 text-xs font-medium uppercase tracking-wider">
                        Select identity parameters to deploy experience
                    </p>
                </div>

                {/* Grid Choice Layout */}
                <div className="grid grid-cols-2 gap-4 relative z-10">

                    {/* Job Seeker Choice */}
                    <button
                        onClick={() => handleRoleSelect("seeker")}
                        disabled={loading}
                        className="p-6 bg-[#0f291e] border border-[#1c4a36]/20 rounded-2xl hover:border-[#e4f5ee] hover:bg-[#1c4a36]/30 transition-all duration-200 flex flex-col items-center gap-3 text-[#e4f5ee] group disabled:opacity-50 cursor-pointer active:scale-95"
                    >
                        <div className="p-3 bg-[#173f2e] text-[#e4f5ee] rounded-xl border border-[#1c4a36]/10 group-hover:bg-[#e4f5ee] group-hover:text-[#1c4a36] transition-colors duration-200">
                            <User size={28} />
                        </div>
                        <span className="font-bold text-xs uppercase tracking-widest text-[#e4f5ee]/90 group-hover:text-white">Job Seeker</span>
                    </button>

                    {/* Recruiter Choice */}
                    <button
                        onClick={() => handleRoleSelect("recruiter")}
                        disabled={loading}
                        className="p-6 bg-[#0f291e] border border-[#1c4a36]/20 rounded-2xl hover:border-[#e4f5ee] hover:bg-[#1c4a36]/30 transition-all duration-200 flex flex-col items-center gap-3 text-[#e4f5ee] group disabled:opacity-50 cursor-pointer active:scale-95"
                    >
                        <div className="p-3 bg-[#173f2e] text-[#e4f5ee] rounded-xl border border-[#1c4a36]/10 group-hover:bg-[#e4f5ee] group-hover:text-[#1c4a36] transition-colors duration-200">
                            <Briefcase size={28} />
                        </div>
                        <span className="font-bold text-xs uppercase tracking-widest text-[#e4f5ee]/90 group-hover:text-white">Recruiter</span>
                    </button>
                </div>

                {/* Global Sync Loading Indicator */}
                {loading && (
                    <div className="flex items-center justify-center gap-2 text-[#e4f5ee] bg-[#0f291e] py-2.5 rounded-xl border border-[#1c4a36]/20 text-[11px] font-bold uppercase tracking-wider animate-pulse">
                        <Loader2 size={14} className="animate-spin text-emerald-400" />
                        <span>Synchronizing Node Parameters...</span>
                    </div>
                )}
            </div>
        </div>
    );
}