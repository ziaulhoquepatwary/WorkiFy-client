"use client";

import { useForm } from "react-hook-form";
import { Briefcase, MapPin, UserCheck, FileText, Calendar, Plus, X, DollarSign } from "lucide-react";
import { useState } from "react";
import { createJob } from "@/lib/actions/jobs";
import Swal from "sweetalert2";

// Shared validation error message component
const ErrorMessage = ({ message }) => (
    message ? <span className="text-xs font-medium text-red-500 mt-1 block">{message}</span> : null
);

function CreateJob() {
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues: { job_type: "Full-time", work_mode: "On-site", vacancy: 1, experience_level: "Entry", required_skills: [] }
    });

    const handleSkill = (action, value) => {
        let updated = action === "add" ? [...skills, value.trim()] : skills.filter(s => s !== value);
        if (action === "add" && (!value.trim() || skills.includes(value.trim()))) return;

        setSkills(updated);
        setValue("required_skills", updated, { shouldValidate: action === "add" });
        if (action === "add") setSkillInput("");
    };

    const onSubmit = async (data) => {
        console.log("Submitted Data:", data);

        try {
            const res = await createJob(data);

            if (res?.success) {
                await Swal.fire({
                    icon: "success",
                    title: "Job Published 🚀",
                    text: res.message || "Your Job was submitted successfully.",
                    background: "#0A0A0A",
                    color: "#ffffff",
                    confirmButtonColor: "#10b981",
                    timer: 2200,
                    showConfirmButton: false,
                });
                reset();
                setSkills([]);
            }
        } catch (error) {
            const message = error?.response?.data?.message || "Something went wrong!";

            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: message,
                background: "#0A0A0A",
                color: "#ffffff",
                confirmButtonColor: "#ef4444",
            });
        }
    };

    // Shared styling classes to make inputs visible, structured, and consistent across light/dark modes
    const inputBaseClass = "w-full px-3 py-2 text-sm rounded-xl border bg-slate-50 border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1c4a36] focus:border-transparent dark:bg-[#133325] dark:border-[#1d4f3a] dark:text-white dark:focus:ring-[#e4f5ee]";



    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-12 p-4 md:p-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">Post a New Job</h1>
                <p className="text-sm text-slate-500 dark:text-[#e4f5ee]/60 mt-1">Fill out the information below to find the best talent.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Section 1: Job Info */}
                <div className="p-6 rounded-2xl border bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e] space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#e4f5ee] dark:border-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee]">
                        <Briefcase size={18} /> <h2 className="font-semibold">1. Job Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Job Title *</label>
                            <input type="text" placeholder="e.g. Frontend Developer" {...register("job_title", { required: "Job title is required" })} className={`${inputBaseClass} ${errors.job_title ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                            <ErrorMessage message={errors.job_title?.message} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Job Category *</label>
                            <select {...register("job_category", { required: "Job category is required" })} className={`${inputBaseClass} ${errors.job_category ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`}>
                                <option value="" className="text-slate-500 dark:bg-[#0f291e]">Select Category</option>
                                <option value="Software & IT" className="dark:bg-[#0f291e]">Software & IT</option>
                                <option value="Marketing" className="dark:bg-[#0f291e]">Marketing</option>
                                <option value="Design" className="dark:bg-[#0f291e]">Design</option>
                                <option value="Healthcare" className="dark:bg-[#0f291e]">Healthcare</option>
                            </select>
                            <ErrorMessage message={errors.job_category?.message} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Job Type *</label>
                            <select {...register("job_type")} className={inputBaseClass}>
                                <option value="Full-time" className="dark:bg-[#0f291e]">Full-time</option>
                                <option value="Part-time" className="dark:bg-[#0f291e]">Part-time</option>
                                <option value="Internship" className="dark:bg-[#0f291e]">Internship</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Work Mode *</label>
                            <select {...register("work_mode")} className={inputBaseClass}>
                                <option value="On-site" className="dark:bg-[#0f291e]">On-site</option>
                                <option value="Remote" className="dark:bg-[#0f291e]">Remote</option>
                                <option value="Hybrid" className="dark:bg-[#0f291e]">Hybrid</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Vacancy *</label>
                            <input type="number" min="1" {...register("vacancy", { required: "Vacancy count is required", min: { value: 1, message: "Vacancy must be at least 1" } })} className={`${inputBaseClass} ${errors.vacancy ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                            <ErrorMessage message={errors.vacancy?.message} />
                        </div>
                    </div>
                </div>

                {/* Section 2: Salary & Location */}
                <div className="p-6 rounded-2xl border bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e] space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#e4f5ee] dark:border-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee]">
                        <MapPin size={18} /> <h2 className="font-semibold">2. Salary & Location</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Min Salary</label>
                            <div className="relative">
                                <DollarSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                <input type="number" placeholder="40000" {...register("salary_min")} className={`${inputBaseClass} pl-8`} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Max Salary</label>
                            <div className="relative">
                                <DollarSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                <input type="number" placeholder="60000" {...register("salary_max")} className={`${inputBaseClass} pl-8`} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Location *</label>
                            <input type="text" placeholder="Dhaka, Bangladesh" {...register("location", { required: "Location is required" })} className={`${inputBaseClass} ${errors.location ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                            <ErrorMessage message={errors.location?.message} />
                        </div>
                    </div>
                </div>

                {/* Section 3: Candidate Profile */}
                <div className="p-6 rounded-2xl border bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e] space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#e4f5ee] dark:border-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee]">
                        <UserCheck size={18} /> <h2 className="font-semibold">3. Candidate Requirements</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Experience Level *</label>
                            <select {...register("experience_level")} className={inputBaseClass}>
                                <option value="Entry" className="dark:bg-[#0f291e]">Entry Level</option>
                                <option value="Mid" className="dark:bg-[#0f291e]">Mid Level</option>
                                <option value="Senior" className="dark:bg-[#0f291e]">Senior Level</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Experience (Years) *</label>
                            <input type="number" min="0" {...register("experience_years", { required: "Experience years is required", min: { value: 0, message: "Experience cannot be negative" } })} className={`${inputBaseClass} ${errors.experience_years ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                            <ErrorMessage message={errors.experience_years?.message} />
                        </div>
                    </div>

                    {/* Skills Tag Input */}
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Required Skills *</label>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Type skill and press enter..." value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleSkill("add", skillInput))} className={`${inputBaseClass} flex-1 ${errors.required_skills ? "border-red-500 dark:border-red-500" : ""}`} />
                            <button type="button" onClick={() => handleSkill("add", skillInput)} className="px-4 bg-[#1c4a36] text-white rounded-xl hover:bg-[#163b2b] dark:bg-[#e4f5ee] dark:text-[#1c4a36] flex items-center justify-center border border-transparent dark:hover:bg-white"><Plus size={16} /></button>
                        </div>
                        {skills.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2 p-2 rounded-xl bg-slate-50 border border-dashed border-slate-300 dark:bg-[#173f2e]/40 dark:border-[#173f2e]">
                                {skills.map(skill => (
                                    <span key={skill} className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-[#e4f5ee] text-[#1c4a36] dark:bg-[#173f2e] dark:text-[#e4f5ee]">
                                        {skill} <X size={12} onClick={() => handleSkill("remove", skill)} className="cursor-pointer hover:text-red-500" />
                                    </span>
                                ))}
                            </div>
                        )}
                        <input type="hidden" {...register("required_skills", { validate: v => v.length > 0 || "Please add at least one skill" })} />
                        <ErrorMessage message={errors.required_skills?.message} />
                    </div>
                </div>

                {/* Section 4: Descriptions */}
                <div className="p-6 rounded-2xl border bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e] space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#e4f5ee] dark:border-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee]">
                        <FileText size={18} /> <h2 className="font-semibold">4. Detailed Description</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Responsibilities *</label>
                        <textarea rows={3} placeholder="Day-to-day tasks..." {...register("responsibilities", { required: "Responsibilities description is required" })} className={`${inputBaseClass} resize-none py-2 ${errors.responsibilities ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                        <ErrorMessage message={errors.responsibilities?.message} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Requirements *</label>
                        <textarea rows={3} placeholder="Requirements..." {...register("requirements", { required: "Requirements description is required" })} className={`${inputBaseClass} resize-none py-2 ${errors.requirements ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                        <ErrorMessage message={errors.requirements?.message} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Benefits (Optional)</label>
                        <textarea rows={2} placeholder="Bonuses, health insurance..." {...register("benefits")} className={`${inputBaseClass} resize-none py-2`} />
                    </div>
                </div>

                {/* Section 5: Deadline */}
                <div className="p-6 rounded-2xl border bg-white border-[#e4f5ee] dark:bg-[#0f291e] dark:border-[#173f2e] space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#e4f5ee] dark:border-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee]">
                        <Calendar size={18} /> <h2 className="font-semibold">5. Application Settings</h2>
                    </div>
                    <div className="flex flex-col gap-1 max-w-xs">
                        <label className="text-xs font-semibold text-slate-600 dark:text-[#e4f5ee]/80">Application Deadline *</label>
                        <input type="date" {...register("application_deadline", { required: "Application deadline date is required" })} className={`${inputBaseClass} ${errors.application_deadline ? "border-red-500 dark:border-red-500 focus:ring-red-500" : ""}`} />
                        <ErrorMessage message={errors.application_deadline?.message} />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 pt-2">
                    <button type="button" onClick={() => { reset(); setSkills([]); }} className="px-6 py-2.5 rounded-xl text-sm font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-[#173f2e] dark:text-[#e4f5ee]/70 dark:hover:bg-[#173f2e]">Cancel</button>
                    <button type="submit" disabled={isSubmitting} className="px-8 py-2.5 rounded-xl text-sm font-semibold shadow-md bg-[#1c4a36] text-white hover:bg-[#163b2b] disabled:opacity-50 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white">{isSubmitting ? "Posting..." : "Publish Job"}</button>
                </div>
            </form>
        </div>
    );
}

export default CreateJob;