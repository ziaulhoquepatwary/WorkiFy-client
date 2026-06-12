"use client";

import React, { useState } from "react";
import { Eye, CheckCircle, XCircle, Mail, Phone } from "lucide-react";
import UserDetailsModal from "./UserDetailsModal";

export default function UserCard({ user, index, onStatusUpdate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 bg-white dark:bg-[#173f2e] border border-[#e4f5ee] dark:border-transparent rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    {/* <div className="hidden sm:flex justify-center items-center w-10 h-10 rounded-full font-bold bg-[#e4f5ee] text-[#1c4a36] dark:bg-[#0f291e] dark:text-[#e4f5ee]">
                        #{index + 1}
                    </div> */}
                    <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="space-y-1 flex-1">
                        <h3 className="font-semibold text-lg text-[#1c4a36] dark:text-white">
                            {user.name || "N/A"}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm opacity-70">
                            <span className="flex items-center gap-1">
                                <Mail className="w-3.5 h-3.5" /> {user.email}
                            </span>
                            <span className="flex items-center gap-1">
                                <Phone className="w-3.5 h-3.5" /> {user.phoneNumber}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0 w-full md:w-auto justify-end border-t md:border-none pt-3 md:pt-0 border-[#e4f5ee] dark:border-[#0f291e]">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="p-2 rounded-lg bg-[#e4f5ee] hover:bg-[#1c4a36] hover:text-white dark:bg-[#0f291e] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-colors"
                        title="View Details"
                    >
                        <Eye className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => onStatusUpdate(user._id, "approved")}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors cursor-pointer"
                    >
                        <CheckCircle className="w-4 h-4" /> Approve
                    </button>
                    <button
                        onClick={() => onStatusUpdate(user._id, "rejected")}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium transition-colors cursor-pointer"
                    >
                        <XCircle className="w-4 h-4" /> Reject
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <UserDetailsModal
                    user={user}
                    onClose={() => setIsModalOpen(false)}
                    onAction={onStatusUpdate}
                />
            )}
        </>
    );
}