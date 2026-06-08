"use client";

import { authClient } from "@/lib/auth-client";
import { FileText, Users, Briefcase, CheckCircle2 } from "lucide-react";
import DashboardCard from "../component/dashboard/DashboardCard";
import Loading from "@/app/loading";

function RecruiterDashboard() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <Loading />
    }

    const stats = [
        { title: "Total Job Posts", value: "48", icon: FileText },
        { title: "Total Applicants", value: "1,284", icon: Users },
        { title: "Active Jobs", value: "18", icon: Briefcase },
        { title: "Jobs Closed", value: "32", icon: CheckCircle2 },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                    Welcome back, {user?.name || "Recruiter"}
                </h1>
                <p className="text-sm text-slate-500 dark:text-[#e4f5ee]/60 mt-1">
                    Here is what's happening with your job listings today.
                </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <DashboardCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                    />
                ))}
            </div>


        </div>
    );
}

export default RecruiterDashboard;