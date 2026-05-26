import Image from 'next/image';
import { Check, Grid, Search, TrendingUp } from 'lucide-react';

function FeatureSection() {
    const features = [
        {
            icon: <Grid className="w-5 h-5 text-[#1c4a36] dark:text-[#e4f5ee]" />,
            title: "#1 Jobs site in Global Market",
            description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches."
        },
        {
            icon: <Search className="w-5 h-5 text-[#1c4a36] dark:text-[#e4f5ee]" />,
            title: "Seamless searching",
            description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test seamlessly."
        },
        {
            icon: <TrendingUp className="w-5 h-5 text-[#1c4a36] dark:text-[#e4f5ee]" />,
            title: "Hired in top companies",
            description: "Podcasting operational change management inside of workflows to establish a solid career path."
        }
    ];

    return (
        <section className="w-full bg-white text-[#1c4a36] transition-colors duration-300 dark:bg-[#0f291e] dark:text-[#e4f5ee] py-16 lg:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-center">

                    {/* LEFT SIDE: ASYMMETRIC IMAGE GRID WITH JOB ALERT CARD */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
                        {/* Decorative Dot Matrix Background */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none hidden sm:block bg-[radial-gradient(#1c4a36_2px,transparent_2px)] [background-size:12px_12px] dark:bg-[radial-gradient(#e4f5ee_2px,transparent_2px)]" />

                        {/* Top Left Image */}
                        <div className="relative h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src="/job-banner3.png"
                                alt="Team Interview"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Top Right Image */}
                        <div className="relative h-[200px] sm:h-[240px] rounded-2xl overflow-hidden shadow-md mt-6">
                            <Image
                                src="/job-banner1.png"
                                alt="Professional Working"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Bottom Left Image */}
                        <div className="relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-md -mt-6 sm:-mt-10">
                            <Image
                                src="/job-banner2.png"
                                alt="Office Desk Focus"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                suppressHydrationWarning
                            />
                        </div>

                        {/* Bottom Right Box: Dynamic Job Alert Card (Uses Brand Colors) */}
                        <div className="rounded-2xl p-6 flex flex-col justify-between shadow-xl bg-[#1c4a36] text-white dark:bg-[#173f2e] dark:text-[#e4f5ee] aspect-square max-h-[220px]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e4f5ee]/20 text-white dark:bg-[#0f291e]">
                                <Check className="w-5 h-5 stroke-[2.5]" />
                            </div>
                            <div>
                                <h4 className="font-heading text-xl font-bold tracking-tight">Job alert!</h4>
                                <p className="mt-1 text-sm text-[#e4f5ee]/80 dark:text-[#e4f5ee]/60">
                                    104 new jobs are available in this week!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: CONTENT & FEATURE LIST */}
                    <div className="lg:col-span-6 space-y-10">
                        {/* Heading Section */}
                        <div className="space-y-4">
                            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1c4a36] dark:text-white leading-[1.2]">
                                Help You To Get The <br />
                                Best Job That Fits You
                            </h2>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 items-start group">
                                    {/* Icon Container */}
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e4f5ee] dark:bg-[#173f2e]/60 flex-shrink-0 transition-colors duration-300 group-hover:bg-[#1c4a36] group-hover:text-white dark:group-hover:bg-[#e4f5ee] dark:group-hover:text-[#1c4a36]">
                                        {feature.icon}
                                    </div>

                                    {/* Feature Details */}
                                    <div className="space-y-1">
                                        <h3 className="font-heading text-lg font-bold tracking-tight text-[#1c4a36] dark:text-white">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#1c4a36]/70 dark:text-[#e4f5ee]/60 leading-relaxed max-w-xl">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeatureSection