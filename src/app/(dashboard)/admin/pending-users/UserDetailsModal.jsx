"use client";

import React from "react";
import { CheckCircle2, XCircle, ShieldCheck, CreditCard, Calendar, User } from "lucide-react";

export default function UserDetailsModal({ user, onClose, onAction }) {
    const handleActionClick = (status) => {
        onAction(user._id, status);
        onClose();
    };

    // Format ISO date string to a readable format
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#173f2e] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#e4f5ee] dark:border-[#0f291e] overflow-hidden transform transition-all text-[#1c4a36] dark:text-[#e4f5ee]">

                {/* Modal Header */}
                <div className="p-6 border-b border-[#e4f5ee] dark:border-[#0f291e] bg-gradient-to-r from-[#e4f5ee]/30 to-transparent flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        {/* Profile Image with fallback */}
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#1c4a36] dark:border-[#e4f5ee]"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://api.dicebear.com/7.x/initials/svg?seed=" + user.name;
                                }}
                            />
                        ) : (
                            <div className="w-14 h-14 rounded-full bg-[#e4f5ee] dark:bg-[#0f291e] flex items-center justify-center">
                                <User className="w-6 h-6 opacity-70" />
                            </div>
                        )}

                        <div>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-2xl font-bold text-[#1c4a36] dark:text-white">
                                    {user.name || "User Details"}
                                </h2>
                                <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] rounded">
                                    {user.role}
                                </span>
                            </div>

                            {/* Email Verification Badge */}
                            <div className="flex items-center gap-1 mt-1 text-xs">
                                {user.emailVerified ? (
                                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                                        <ShieldCheck className="w-3.5 h-3.5" /> Verified Email
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium">
                                        <XCircle className="w-3.5 h-3.5" /> Unverified Email
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full text-xl font-bold hover:bg-[#e4f5ee] dark:hover:bg-[#0f291e] transition-colors cursor-pointer"
                    >
                        X
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
                    {/* Meta Information Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f291e]/50">
                            <p className="text-xs opacity-60 uppercase font-semibold tracking-wider">Email Address</p>
                            <p className="font-medium mt-0.5 break-all text-sm">{user.email}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f291e]/50">
                            <p className="text-xs opacity-60 uppercase font-semibold tracking-wider">Phone Number</p>
                            <p className="font-medium mt-0.5 text-sm">{user.phoneNumber || "N/A"}</p>
                        </div>
                    </div>

                    {/* Plan and Date Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f291e]/50 flex items-center justify-between">
                            <div>
                                <p className="text-xs opacity-60 uppercase font-semibold tracking-wider">Subscription Plan</p>
                                <p className="font-bold mt-0.5 text-sm uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                                    {user.plan || "Free"}
                                </p>
                            </div>
                            <CreditCard className="w-5 h-5 opacity-40" />
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f291e]/50 flex items-center justify-between">
                            <div>
                                <p className="text-xs opacity-60 uppercase font-semibold tracking-wider">Registered On</p>
                                <p className="font-medium mt-0.5 text-sm">
                                    {formatDate(user.createdAt)}
                                </p>
                            </div>
                            <Calendar className="w-5 h-5 opacity-40" />
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f291e]/50 border border-slate-100 dark:border-transparent">
                        <p className="text-xs opacity-60 uppercase font-semibold tracking-wider">Biography / Description</p>
                        <p className="font-medium mt-1 text-sm italic opacity-90 whitespace-pre-line">
                            {user.bio || "No biography provided by the user."}
                        </p>
                    </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="p-4 border-t border-[#e4f5ee] dark:border-[#0f291e] bg-slate-50 dark:bg-[#0f291e]/30 flex justify-end gap-2">
                    <button
                        onClick={() => handleActionClick("rejected")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                    >
                        <XCircle className="w-4 h-4" /> Reject Account
                    </button>
                    <button
                        onClick={() => handleActionClick("approved")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors shadow-sm cursor-pointer"
                    >
                        <CheckCircle2 className="w-4 h-4" /> Approve Account
                    </button>
                </div>
            </div>
        </div>
    );
}