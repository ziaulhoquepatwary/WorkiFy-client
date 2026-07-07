"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function Pricing() {
    const [userType, setUserType] = useState("recruiter");

    const recruiterPlans = [
        {
            name: "Free",
            price: "0",
            period: "Forever",
            description: "Get started with WorkiFy",
            features: [
                "Post up to 3 jobs",
                "Basic job management",
                "View applicant profiles",
                "Email notifications",
                "Standard support",
            ],
            cta: "Get Started",
            highlighted: false,
        },
        {
            name: "Pro",
            price: "5000",
            period: "/month",
            description: "Perfect for growing teams",
            features: [
                "Post up to 30 jobs",
                "Advanced analytics",
                "Priority candidate screening",
                "Custom job templates",
                "Priority email support",
                "Bulk applicant management",
            ],
            cta: "Start Free Trial",
            highlighted: true,
        },
        {
            name: "Premium",
            price: "10000",
            period: "/month",
            description: "For high-volume hiring",
            features: [
                "Unlimited job postings",
                "Advanced AI-powered matching",
                "Dedicated account manager",
                "Custom branding options",
                "24/7 priority support",
                "API access",
                "Team collaboration tools",
            ],
            cta: "Contact Sales",
            highlighted: false,
        },
    ];

    const seekerPlans = [
        {
            name: "Free",
            price: "0",
            period: "Forever",
            description: "Start your job search",
            features: [
                "Apply to up to 3 jobs",
                "Create your profile",
                "Save job listings",
                "Job alerts",
                "Standard support",
            ],
            cta: "Get Started",
            highlighted: false,
        },
        {
            name: "Pro",
            price: "3000",
            period: "/month",
            description: "Boost your job search",
            features: [
                "Apply to 30 jobs per month",
                "Enhanced profile visibility",
                "Unlimited saved jobs",
                "Weekly job recommendations",
                "Priority email support",
                "Resume reviews (1/month)",
            ],
            cta: "Start Free Trial",
            highlighted: true,
        },
        {
            name: "Premium",
            price: "5000",
            period: "/month",
            description: "Maximum opportunities",
            features: [
                "Unlimited job applications",
                "Premium profile badge",
                "Unlimited saved jobs",
                "Daily job recommendations",
                "24/7 priority support",
                "Monthly resume reviews",
                "Career coaching sessions",
            ],
            cta: "Start Free Trial",
            highlighted: false,
        },
    ];

    const plans = userType === "recruiter" ? recruiterPlans : seekerPlans;

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f291e] py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee] mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-[#e4f5ee]/70 mb-8">
                        Choose the plan that works best for you
                    </p>

                    {/* User Type Toggle */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setUserType("recruiter")}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${userType === "recruiter"
                                    ? "bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36]"
                                    : "bg-[#e4f5ee]/40 text-[#1c4a36] hover:bg-[#e4f5ee]/60 dark:bg-[#173f2e]/50 dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]/70"
                                }`}
                        >
                            For Recruiters
                        </button>
                        <button
                            onClick={() => setUserType("seeker")}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${userType === "seeker"
                                    ? "bg-[#1c4a36] text-white dark:bg-[#e4f5ee] dark:text-[#1c4a36]"
                                    : "bg-[#e4f5ee]/40 text-[#1c4a36] hover:bg-[#e4f5ee]/60 dark:bg-[#173f2e]/50 dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]/70"
                                }`}
                        >
                            For Job Seekers
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl border transition-all duration-300 ${plan.highlighted
                                    ? "border-[#1c4a36] dark:border-[#e4f5ee] lg:scale-105 shadow-lg dark:shadow-lg"
                                    : "border-[#e4f5ee] dark:border-[#173f2e] hover:border-[#1c4a36]/30 dark:hover:border-[#e4f5ee]/30"
                                } ${plan.highlighted
                                    ? "bg-[#e4f5ee]/10 dark:bg-[#173f2e]/30"
                                    : "bg-white dark:bg-[#173f2e]/20"
                                } p-8`}
                        >
                            {/* Popular Badge */}
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] text-xs font-bold px-4 py-1 rounded-full">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-[#e4f5ee]/60 mb-4">
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-[#1c4a36] dark:text-[#e4f5ee]">
                                        ৳{plan.price}
                                    </span>
                                    <span className="text-gray-600 dark:text-[#e4f5ee]/60 font-medium">
                                        {plan.period}
                                    </span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-all duration-200 ${plan.highlighted
                                        ? "bg-[#1c4a36] text-white hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white"
                                        : "border border-[#1c4a36] text-[#1c4a36] hover:bg-[#e4f5ee] dark:border-[#e4f5ee] dark:text-[#e4f5ee] dark:hover:bg-[#173f2e]"
                                    }`}
                            >
                                {plan.cta}
                            </button>

                            {/* Features */}
                            <div className="space-y-4 border-t border-[#e4f5ee] dark:border-[#173f2e] pt-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start gap-3">
                                        <Check
                                            size={20}
                                            className="text-[#1c4a36] dark:text-[#e4f5ee] flex-shrink-0 mt-0.5"
                                        />
                                        <span className="text-gray-700 dark:text-[#e4f5ee]/80 text-sm">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] text-center mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <div className="border-b border-[#e4f5ee] dark:border-[#173f2e] pb-6">
                            <h3 className="text-lg font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                Can I change my plan anytime?
                            </h3>
                            <p className="text-gray-600 dark:text-[#e4f5ee]/70">
                                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                            </p>
                        </div>

                        <div className="border-b border-[#e4f5ee] dark:border-[#173f2e] pb-6">
                            <h3 className="text-lg font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                Is there a free trial?
                            </h3>
                            <p className="text-gray-600 dark:text-[#e4f5ee]/70">
                                Yes, we offer a 7-day free trial for Pro and Premium plans. No credit card required to get started.
                            </p>
                        </div>

                        <div className="border-b border-[#e4f5ee] dark:border-[#173f2e] pb-6">
                            <h3 className="text-lg font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                What payment methods do you accept?
                            </h3>
                            <p className="text-gray-600 dark:text-[#e4f5ee]/70">
                                We accept all major credit cards, digital wallets, and bank transfers. All payments are processed securely through Stripe.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#1c4a36] dark:text-[#e4f5ee] mb-2">
                                Do you offer annual billing discounts?
                            </h3>
                            <p className="text-gray-600 dark:text-[#e4f5ee]/70">
                                Yes, annual plans receive a 20% discount. Contact our sales team for enterprise pricing.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                    <div className="bg-[#e4f5ee]/40 dark:bg-[#173f2e]/50 rounded-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-[#1c4a36] dark:text-[#e4f5ee] mb-4">
                            Need help choosing a plan?
                        </h2>
                        <p className="text-gray-600 dark:text-[#e4f5ee]/70 mb-6">
                            Our support team is here to help. Reach out to us for personalized recommendations.
                        </p>
                        <button className="bg-[#1c4a36] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white transition-all duration-200">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;