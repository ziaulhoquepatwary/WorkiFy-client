"use client";

import { authClient } from "@/lib/auth-client";
import { Briefcase, BookmarkCheck, CheckCircle2, Eye } from "lucide-react";
import DashboardCard from "../component/dashboard/DashboardCard";
import Loading from "@/app/loading";

function SeekerDashboard() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <Loading />
    }

    const stats = [
        { title: "Job Applications", value: "24", icon: Briefcase },
        { title: "Saved Jobs", value: "18", icon: BookmarkCheck },
        { title: "Job Views", value: "542", icon: Eye },
        { title: "Offers Received", value: "3", icon: CheckCircle2 },
    ];

    return (
        <div className="space-y-8 p-4 md:p-6">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                    Welcome back, {user?.name || "Job Seeker"}
                </h1>
                <p className="text-sm text-slate-500 dark:text-[#e4f5ee]/60 mt-1">
                    Here is your job search progress and activity today.
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

export default SeekerDashboard;