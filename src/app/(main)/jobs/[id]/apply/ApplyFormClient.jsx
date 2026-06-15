"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { ArrowLeft, Send, Link2, FileText, Linkedin, Briefcase } from "lucide-react";
import { applyToJobAction } from "@/lib/actions/jobs";

function ApplyFormClient({ jobId, user }) {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            jobId,
            resumeUrl: data.resumeUrl,
            coverLetter: data.coverLetter || undefined,
            linkedinUrl: data.linkedinUrl || undefined,
            portfolioUrl: data.portfolioUrl,
            otherLink: data.otherLink || undefined,
        };

        try {
            const response = await applyToJobAction(payload);

            if (response.success) {
                Swal.fire({
                    title: "Success!",
                    text: response.message || "Application submitted successfully.",
                    icon: "success",
                    timer: 3000,
                    showConfirmButton: false
                });
                router.push(`/jobs/${jobId}`);
            }
        } catch (error) {
            Swal.fire({
                title: "Application Failed",
                text: error.response?.data?.message || "Something went wrong. Please check your limits.",
                icon: "error"
            });
        }
    };


    return (
        <div className="w-full max-w-2xl bg-slate-50 dark:bg-[#173f2e] border border-[#e4f5ee] dark:border-transparent p-6 md:p-8 rounded-2xl shadow-sm">

            {/* Back Arrow */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-xs font-semibold opacity-70 hover:opacity-100 mb-6 transition-opacity"
            >
                <ArrowLeft className="w-4 h-4" /> Cancel & Go Back
            </button>

            <h1 className="text-2xl font-black text-[#1c4a36] dark:text-white mb-1">
                Apply for Position
            </h1>
            <p className="text-xs opacity-70 mb-6 font-medium">
                Job ID: <span className="font-mono bg-white dark:bg-[#0f291e] px-1.5 py-0.5 rounded text-rose-500">{jobId}</span>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* ---  READ ONLY SECTION (User cannot modify) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/50 dark:bg-[#0f291e]/40 p-4 rounded-xl border border-[#e4f5ee]/40">
                    <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold uppercase tracking-wider opacity-60 mb-1">Full Name</label>
                        <input type="text" disabled value={user?.name} className="w-full px-3 py-2 text-sm bg-slate-200/60 dark:bg-[#0f291e] rounded-lg cursor-not-allowed opacity-80" />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider opacity-60 mb-1">Email Address</label>
                        <input type="email" disabled value={user?.email} className="w-full px-3 py-2 text-sm bg-slate-200/60 dark:bg-[#0f291e] rounded-lg cursor-not-allowed opacity-80" />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider opacity-60 mb-1">Phone Number</label>
                        <input type="text" disabled value={user?.phone} className="w-full px-3 py-2 text-sm bg-slate-200/60 dark:bg-[#0f291e] rounded-lg cursor-not-allowed opacity-80" />
                    </div>
                </div>

                <hr className="border-[#e4f5ee]/40 dark:border-[#0f291e]" />

                {/* --- INTERACTIVE ZOD FIELDS --- */}

                {/* Resume URL */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-emerald-600" /> Resume Link <span className="text-rose-500">*</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://drive.google.com/... (Must be a valid URL)"
                        {...register("resumeUrl", { required: "Resume URL is required" })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#0f291e] border ${errors.resumeUrl ? 'border-rose-500' : 'border-[#e4f5ee] dark:border-transparent'} focus:outline-none focus:ring-2 focus:ring-[#1c4a36] text-sm font-medium`}
                    />
                    {errors.resumeUrl && <p className="text-xs text-rose-500 mt-1 font-semibold">{errors.resumeUrl.message}</p>}
                </div>

                {/* Portfolio URL */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-blue-500" /> Portfolio Link <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        {...register("portfolioUrl")}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#0f291e] border focus:outline-none focus:ring-2 focus:ring-[#1c4a36] text-sm font-medium`}
                    />
                </div>

                {/* LinkedIn URL (Optional) */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-sky-600" /> LinkedIn Profile Link <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        {...register("linkedinUrl")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#0f291e] border border-[#e4f5ee] dark:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1c4a36] text-sm font-medium"
                    />
                </div>

                {/* Cover Letter URL (Optional) */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-amber-500" /> Document Cover Letter Link <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://docs.google.com/... (Optional)"
                        {...register("coverLetter")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#0f291e] border border-[#e4f5ee] dark:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1c4a36] text-sm font-medium"
                    />
                </div>

                {/* Other Link (Optional) */}
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 flex items-center gap-1.5">
                        <Link2 className="w-3.5 h-3.5 text-purple-500" /> Additional Link <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://github.com/username"
                        {...register("otherLink")}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#0f291e] border border-[#e4f5ee] dark:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1c4a36] text-sm font-medium"
                    />
                </div>

                {/* Submit Action Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 mt-4 rounded-xl bg-[#1c4a36] hover:bg-[#153829] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white dark:border-[#1c4a36]"></div>
                    ) : (
                        <>
                            <Send className="w-4 h-4" /> Submit Application
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

export default ApplyFormClient