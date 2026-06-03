"use client";
import DashboardHeader from "@/component/dashboard/DashboardHeader";
import DashboardSidebar from "@/component/dashboard/DashboardSidebar"
import { useState } from "react";

function Dashboard({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-[#0f291e]/95 transition-colors duration-300">

            <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <DashboardSidebar />
            </div>

            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            <div className="flex-1 flex flex-col min-w-0">
                <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                    {children}
                </main>
            </div>

        </div>
    )
}

export default Dashboard