"use client";
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import UserTabs from './UserTabs';
import { ShieldAlert } from 'lucide-react';
import { getPendingUsersAction, updateApprovalStatusAction } from '@/lib/actions/admin';
import Swal from 'sweetalert2';

function PendingUsers() {
    const [activeTab, setActiveTab] = useState("recruiter");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const data = await getPendingUsersAction(activeTab);
            setUsers(activeTab === "recruiter" ? data.recruiters : data.seekers);
        } catch (error) {
            console.error("Failed to load users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [activeTab]);

    const handleStatusUpdate = async (id, status) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to ${status} this user?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: status === "approved" ? '#10b981' : '#e11d48',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, proceed!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // 2. API Call & State Update
                    await updateApprovalStatusAction(id, status);
                    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));

                    // 3. Simple Success Message
                    Swal.fire({
                        title: 'Success!',
                        text: `User has been ${status}.`,
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false
                    });
                } catch (error) {
                    console.error("Action failed:", error);

                    // 4. Simple Error Message
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong.',
                        icon: 'error'
                    });
                }
            }
        });
    };


    return (
        <div className="p-6 min-h-screen bg-white dark:bg-[#0f291e] text-[#1c4a36] dark:text-[#e4f5ee] transition-colors duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#e4f5ee] dark:border-[#173f2e] pb-5 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[#1c4a36] dark:text-white flex items-center gap-2">
                        <ShieldAlert className="w-6 h-6" />
                        Pending Approvals
                    </h1>
                    <p className="text-sm opacity-70 mt-1">Review and manage incoming registrations sequentially (FIFO).</p>
                </div>

                <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1c4a36] dark:border-[#e4f5ee]"></div>
                </div>
            ) : users.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-[#e4f5ee] dark:border-[#173f2e] rounded-2xl">
                    <p className="text-lg font-medium opacity-60">No pending {activeTab}s found.</p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {users.map((user, index) => (
                        <UserCard
                            key={user._id}
                            user={user}
                            index={index}
                            onStatusUpdate={handleStatusUpdate}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default PendingUsers