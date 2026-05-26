import { FileText, Award, Headphones } from 'lucide-react';

function HowItWorks() {
    const steps = [
        {
            icon: <FileText className="w-12 h-12 stroke-[1.2] text-[#1c4a36] dark:text-[#e4f5ee]" />,
            title: "Resume Assessments",
            description: "Submit your resume to get instant feedback and structural improvements tailored for top ATS systems."
        },
        {
            icon: <Award className="w-12 h-12 stroke-[1.2] text-[#1c4a36] dark:text-[#e4f5ee]" />,
            title: "Job Fit Scoring",
            description: "Our intelligent matching algorithm scores how well your profile aligns with open job requirements."
        },
        {
            icon: <Headphones className="w-12 h-12 stroke-[1.2] text-[#1c4a36] dark:text-[#e4f5ee]" />,
            title: "Top-Notch Help",
            description: "Access 24/7 personalized guidance and professional career advice from industry experts."
        }
    ];


    return (
        <section className="w-full bg-white text-[#1c4a36] transition-colors duration-300 dark:bg-[#0f291e] dark:text-[#e4f5ee] py-10 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

                {/* Upper Small Badge */}
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-[#e4f5ee] dark:bg-[#173f2e]/60 text-[#1c4a36] dark:text-[#e4f5ee] text-xs font-semibold tracking-wide border border-[#e4f5ee] dark:border-[#173f2e]/40">
                    Build your future with us
                </div>

                {/* Main Heading */}
                <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1c4a36] dark:text-white">
                    How WorkiFy Works
                </h2>

                {/* 3-Column Grid Section */}
                <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 lg:gap-x-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-4 group transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Icon Container */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e4f5ee]/40 dark:bg-[#173f2e]/30 transition-colors duration-300 group-hover:bg-[#e4f5ee] dark:group-hover:bg-[#173f2e]">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-6 text-xl font-bold font-heading tracking-tight text-[#1c4a36] dark:text-white">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm sm:text-base text-[#1c4a36]/70 dark:text-[#e4f5ee]/60 max-w-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HowItWorks