"use client";

import { authClient } from "@/lib/auth-client";
import { Briefcase, Calendar, Award, BookOpen } from "lucide-react";
import DashboardCard from "../component/dashboard/DashboardCard";

function JobSeekerDashboard() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <div className="text-[#1c4a36] dark:text-[#e4f5ee]">Loading...</div>;
    }

    const stats = [
        { title: "Applied Jobs", value: "24", icon: Briefcase },
        { title: "Interviews", value: "5", icon: Calendar },
        { title: "Offers Received", value: "2", icon: Award },
        { title: "Profile Views", value: "148", icon: BookOpen },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                    Welcome back, {user?.name || "Job Seeker"}
                </h1>
                <p className="text-sm text-slate-500 dark:text-[#e4f5ee]/60 mt-1">
                    Track your applications and premium career opportunities.
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

export default JobSeekerDashboard;