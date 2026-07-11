"use client";

import { authClient } from "@/lib/auth-client";
import { Users, UserPlus, Building2, CreditCard } from "lucide-react";
import DashboardCard from "../component/dashboard/DashboardCard";
import Loading from "@/app/loading";

function AdminDashboard() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <Loading />
    }

    const stats = [
        { title: "Total Users", value: "1,248", icon: Users },
        { title: "Pending Users", value: "32", icon: UserPlus },
        { title: "Pending Recruiters", value: "12", icon: Building2 },
        { title: "Active Plans", value: "148", icon: CreditCard },
    ];

    return (
        <div className="space-y-8 p-4 md:p-6">
            {/* Welcome Section */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                    Welcome back, {user?.name || "Admin"}
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

export default AdminDashboard;