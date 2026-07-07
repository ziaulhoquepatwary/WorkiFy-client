"use client";

import { Briefcase, Users, Target, TrendingUp, Lock, Zap, Award, Globe } from "lucide-react";

function CompanyAbout() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f291e]">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-[#e4f5ee]/40 dark:from-[#173f2e]/50 to-transparent py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-heading md:text-6xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee] mb-6">
                        About WorkiFy
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-[#e4f5ee]/80 max-w-2xl">
                        Connecting talented professionals with their dream jobs. We're building the future of hiring and job searching.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 md:py-24 border-b border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-[#e4f5ee]/80 mb-4">
                                WorkiFy is dedicated to transforming the hiring landscape by making it simpler, faster, and more effective for both recruiters and job seekers.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-[#e4f5ee]/80 mb-4">
                                We believe that finding the right job or the right candidate shouldn't be complicated. Our platform bridges the gap between talent and opportunity with intelligent matching, seamless communication, and transparent pricing.
                            </p>
                            <p className="text-lg text-gray-700 dark:text-[#e4f5ee]/80">
                                Whether you're a recruiter looking to fill positions or a job seeker pursuing your dream role, WorkiFy is your trusted partner in career growth.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#e4f5ee]/30 dark:bg-[#173f2e]/40 rounded-lg p-6">
                                <Target size={32} className="text-[#1c4a36] dark:text-[#e4f5ee] mb-3" />
                                <h3 className="font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Precision Matching
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    Connect with the right opportunities
                                </p>
                            </div>
                            <div className="bg-[#e4f5ee]/30 dark:bg-[#173f2e]/40 rounded-lg p-6">
                                <Zap size={32} className="text-[#1c4a36] dark:text-[#e4f5ee] mb-3" />
                                <h3 className="font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Fast & Efficient
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    Save time with smart tools
                                </p>
                            </div>
                            <div className="bg-[#e4f5ee]/30 dark:bg-[#173f2e]/40 rounded-lg p-6">
                                <Lock size={32} className="text-[#1c4a36] dark:text-[#e4f5ee] mb-3" />
                                <h3 className="font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Secure & Safe
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    Your data is protected
                                </p>
                            </div>
                            <div className="bg-[#e4f5ee]/30 dark:bg-[#173f2e]/40 rounded-lg p-6">
                                <TrendingUp size={32} className="text-[#1c4a36] dark:text-[#e4f5ee] mb-3" />
                                <h3 className="font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Grow Your Career
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    Unlock new opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works - Recruiters */}
            <div className="py-16 md:py-24 border-b border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-4 text-center">
                        How It Works for Recruiters
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-[#e4f5ee]/80 text-center mb-12 max-w-2xl mx-auto">
                        Streamline your hiring process and find qualified candidates in minutes
                    </p>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    1
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Create Your Account
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Sign up and set up your recruiter profile. Complete your company information and add team members if needed.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Free Plan:</strong> Start posting jobs immediately with our free plan.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    2
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Post Your Jobs
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Create detailed job postings with required skills, experience level, and salary information. Use our templates to save time.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Free Plan:</strong> Post up to 3 jobs | <strong>Pro Plan:</strong> Post up to 30 jobs | <strong>Premium Plan:</strong> Unlimited postings
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    3
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Review Applicants
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    View detailed candidate profiles, resumes, and portfolios. Use our advanced filtering to find the perfect match.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Pro Plan:</strong> Get advanced analytics and candidate screening | <strong>Premium Plan:</strong> AI-powered candidate matching
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    4
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Communicate & Hire
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Send interview invitations, conduct video interviews, and communicate directly with candidates through our platform.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Premium Plan:</strong> Get priority support and collaboration tools for faster hiring
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works - Job Seekers */}
            <div className="py-16 md:py-24 border-b border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-4 text-center">
                        How It Works for Job Seekers
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-[#e4f5ee]/80 text-center mb-12 max-w-2xl mx-auto">
                        Find your dream job and advance your career with our powerful job search tools
                    </p>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    1
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Create Your Profile
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Build a compelling profile with your skills, experience, and accomplishments. Upload your resume and portfolio to showcase your work.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>All Plans:</strong> Create and customize your profile for free
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    2
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Browse & Save Jobs
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Explore thousands of job listings matching your skills and preferences. Save jobs to your favorites and set up job alerts.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Free Plan:</strong> Save unlimited jobs | <strong>Pro/Premium Plans:</strong> Get personalized job recommendations
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    3
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Apply to Jobs
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Apply to job postings with just a few clicks. Customize your application for each role to increase your chances of getting noticed.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Free Plan:</strong> Apply to 3 jobs | <strong>Pro Plan:</strong> Apply to 30 jobs/month | <strong>Premium Plan:</strong> Unlimited applications
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-8 items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36] font-bold text-lg">
                                    4
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    Communicate & Interview
                                </h3>
                                <p className="text-gray-700 dark:text-[#e4f5ee]/80 mb-3">
                                    Receive interview invitations and communicate with recruiters directly through our messaging system. Schedule interviews and track your progress.
                                </p>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/70">
                                    <strong>Pro/Premium Plans:</strong> Get resume reviews and career coaching to boost your interview performance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Plan Comparison Section */}
            <div className="py-16 md:py-24 border-b border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-12 text-center">
                        Understanding Our Plans
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Recruiter Plans */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-6 flex items-center gap-2">
                                <Briefcase size={24} />
                                Recruiter Plans
                            </h3>

                            <div className="space-y-6">
                                {/* Free */}
                                <div className="bg-[#e4f5ee]/20 dark:bg-[#173f2e]/30 rounded-lg p-6 border border-[#e4f5ee] dark:border-[#173f2e]">
                                    <h4 className="text-lg font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-3">
                                        Free Plan
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-[#e4f5ee]/80">
                                        <li>✓ Post up to <strong>3 jobs</strong></li>
                                        <li>✓ Basic job management tools</li>
                                        <li>✓ View applicant profiles</li>
                                        <li>✓ Email notifications</li>
                                        <li>✓ Perfect for testing the platform</li>
                                    </ul>
                                </div>

                                {/* Pro */}
                                <div className="bg-[#1c4a36] text-white rounded-lg p-6 border-2 border-[#1c4a36] dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:border-[#e4f5ee]">
                                    <h4 className="text-lg font-bold mb-3">
                                        Pro Plan - ৳5,000/month
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>✓ Post up to <strong>30 jobs</strong></li>
                                        <li>✓ Advanced analytics dashboard</li>
                                        <li>✓ Priority candidate screening</li>
                                        <li>✓ Custom job templates</li>
                                        <li>✓ Bulk applicant management</li>
                                        <li>✓ Best for growing teams</li>
                                    </ul>
                                </div>

                                {/* Premium */}
                                <div className="bg-[#e4f5ee]/20 dark:bg-[#173f2e]/30 rounded-lg p-6 border border-[#e4f5ee] dark:border-[#173f2e]">
                                    <h4 className="text-lg font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-3">
                                        Premium Plan - ৳10,000/month
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-[#e4f5ee]/80">
                                        <li>✓ <strong>Unlimited job</strong> postings</li>
                                        <li>✓ AI-powered candidate matching</li>
                                        <li>✓ Dedicated account manager</li>
                                        <li>✓ Custom branding options</li>
                                        <li>✓ 24/7 priority support</li>
                                        <li>✓ Team collaboration tools</li>
                                        <li>✓ For enterprise hiring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Seeker Plans */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-6 flex items-center gap-2">
                                <Users size={24} />
                                Job Seeker Plans
                            </h3>

                            <div className="space-y-6">
                                {/* Free */}
                                <div className="bg-[#e4f5ee]/20 dark:bg-[#173f2e]/30 rounded-lg p-6 border border-[#e4f5ee] dark:border-[#173f2e]">
                                    <h4 className="text-lg font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-3">
                                        Free Plan
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-[#e4f5ee]/80">
                                        <li>✓ Apply to up to <strong>3 jobs</strong></li>
                                        <li>✓ Create your profile</li>
                                        <li>✓ Save unlimited job listings</li>
                                        <li>✓ Job alerts</li>
                                        <li>✓ Perfect for casual job searchers</li>
                                    </ul>
                                </div>

                                {/* Pro */}
                                <div className="bg-[#1c4a36] text-white rounded-lg p-6 border-2 border-[#1c4a36] dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:border-[#e4f5ee]">
                                    <h4 className="text-lg font-bold mb-3">
                                        Pro Plan - ৳5,000/month
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>✓ Apply to <strong>30 jobs per month</strong></li>
                                        <li>✓ Enhanced profile visibility</li>
                                        <li>✓ Weekly job recommendations</li>
                                        <li>✓ Priority email support</li>
                                        <li>✓ Resume reviews (1/month)</li>
                                        <li>✓ Best for active job seekers</li>
                                    </ul>
                                </div>

                                {/* Premium */}
                                <div className="bg-[#e4f5ee]/20 dark:bg-[#173f2e]/30 rounded-lg p-6 border border-[#e4f5ee] dark:border-[#173f2e]">
                                    <h4 className="text-lg font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-3">
                                        Premium Plan - ৳5000/month
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-[#e4f5ee]/80">
                                        <li>✓ <strong>Unlimited applications</strong></li>
                                        <li>✓ Premium profile badge</li>
                                        <li>✓ Daily job recommendations</li>
                                        <li>✓ 24/7 priority support</li>
                                        <li>✓ Monthly resume reviews</li>
                                        <li>✓ Career coaching sessions</li>
                                        <li>✓ For serious career advancement</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose WorkiFy */}
            <div className="py-16 md:py-24 border-b border-[#e4f5ee] dark:border-[#173f2e]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-12 text-center">
                        Why Choose WorkiFy?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Trusted by Thousands",
                                desc: "Join thousands of recruiters and job seekers who trust WorkiFy for their career journey.",
                            },
                            {
                                icon: Zap,
                                title: "Lightning Fast",
                                desc: "Our platform is optimized for speed. Post jobs and apply in seconds, not minutes.",
                            },
                            {
                                icon: Lock,
                                title: "100% Secure",
                                desc: "Your data is protected with industry-leading security and encryption standards.",
                            },
                            {
                                icon: Globe,
                                title: "Global Reach",
                                desc: "Connect with talent worldwide or find opportunities across borders.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Data-Driven Insights",
                                desc: "Get analytics and insights to make better hiring and career decisions.",
                            },
                            {
                                icon: Users,
                                title: "Expert Support",
                                desc: "Our support team is here 24/7 to help you succeed on the platform.",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <feature.icon size={24} className="text-[#1c4a36] dark:text-[#e4f5ee]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-[#e4f5ee]/80">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-6">
                        Ready to Transform Your Hiring or Career?
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-[#e4f5ee]/80 mb-8 max-w-2xl mx-auto">
                        Join the WorkiFy community today and experience the difference. Whether you're a recruiter or a job seeker, we've got you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-[#1c4a36] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white transition-all duration-200">
                            Get Started Now
                        </button>
                        <button className="border-2 border-[#1c4a36] text-[#1c4a36] px-8 py-3 rounded-lg font-semibold hover:bg-[#e4f5ee] dark:border-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e] transition-all duration-200">
                            View Pricing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyAbout;