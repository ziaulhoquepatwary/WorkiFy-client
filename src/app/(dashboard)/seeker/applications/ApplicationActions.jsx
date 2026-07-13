"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import SubmissionModal from "./SubmissionModal";
import { deleteApplication } from "@/lib/actions/application";

function ApplicationActions({ applicationId, jobId, onDeleteSuccess }) {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewJob = () => {
        router.push(`/jobs/${jobId}`);
    };

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this application deletion!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1c4a36",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: "#0f291e",
            color: "#e4f5ee"
        });

        if (result.isConfirmed) {
            try {
                await deleteApplication(applicationId);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your application has been removed.",
                    icon: "success",
                    confirmButtonColor: "#1c4a36"
                });

                if (onDeleteSuccess) onDeleteSuccess(applicationId);
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: error?.response?.data?.message || "Failed to delete application.",
                    icon: "error"
                });
            }
        }
    };

    return (
        <>
            <div className="flex items-center gap-2">
                {/* View Submission Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[#1c4a36] text-[#1c4a36] hover:bg-[#1c4a36] hover:text-white dark:border-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-all"
                >
                    Submission & Status
                </button>

                {/* View Job Details Button */}
                <button
                    onClick={handleViewJob}
                    className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#e4f5ee] text-[#1c4a36] hover:bg-[#1c4a36] hover:text-white dark:bg-[#173f2e] dark:text-[#e4f5ee] dark:hover:bg-[#e4f5ee] dark:hover:text-[#1c4a36] transition-all"
                >
                    Job Details
                </button>

                {/* Delete Button */}
                <button
                    onClick={handleDelete}
                    className="px-3 py-1.5 text-xs font-semibold rounded-md bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                >
                    Delete
                </button>
            </div>

            {/* Submission Modal */}
            {isModalOpen && (
                <SubmissionModal
                    applicationId={applicationId}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
}

export default ApplicationActions;