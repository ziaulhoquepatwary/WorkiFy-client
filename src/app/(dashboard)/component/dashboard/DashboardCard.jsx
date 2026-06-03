"use client";

function DashboardCard({ title, value, icon: Icon }) {
    return (
        <div className="p-6 rounded-2xl border transition-all duration-300 bg-white border-[#e4f5ee] text-slate-700 dark:bg-[#0f291e] dark:border-[#173f2e] dark:text-[#e4f5ee]/80 shadow-sm hover:shadow-md">
            <div className="flex flex-col gap-4">
                {/* Icon Wrapper */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#e4f5ee] flex items-center justify-center text-[#1c4a36] dark:bg-[#173f2e] dark:border-[#173f2e] dark:text-[#e4f5ee]">
                    {Icon && <Icon size={20} />}
                </div>

                {/* Content */}
                <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-[#e4f5ee]/50">
                        {title}
                    </p>
                    <h3 className="text-3xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                        {value}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;