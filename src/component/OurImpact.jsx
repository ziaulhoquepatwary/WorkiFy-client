"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Link from "next/link";


const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toLocaleString() + suffix;
            }
        });
    }, [rounded, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

function OurImpact() {
    const stats = [
        { value: 1000, suffix: "+", label: "Companies trust WorkiFy for hiring" },
        { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
        { value: 100000, suffix: "+", label: "Job opportunities created" },
        { value: 50, suffix: "K+", label: "Resumes processed efficiently" },
    ];

    return (
        <section className="w-full bg-white text-[#1c4a36] transition-colors duration-300 dark:bg-[#0f291e] dark:text-[#e4f5ee] py-10 lg:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

                    {/* LEFT SIDE: Content and CTA */}
                    <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-heading sm:text-5xl font-extrabold tracking-tight leading-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                            Our Impact <span className="text-[#1c4a36]/60 dark:text-white/50">in</span>
                            <br />
                            <span className="text-[#1c4a36] dark:text-white">Numbers</span>
                        </h2>

                        <p className="text-base sm:text-lg text-[#1c4a36]/80 dark:text-[#e4f5ee]/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            We simplify hiring with data-driven solutions, helping businesses find the right talent faster. Here’s how we’ve made a difference.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/about"
                                className="inline-block rounded-xl bg-[#1c4a36] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:text-[#1c4a36] dark:hover:bg-white transition-all duration-200 hover:scale-105"
                            >
                                More About Us
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Grid Stats with Divider Lines */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 relative">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="relative pl-6 sm:pl-8 border-l border-[#e4f5ee] dark:border-[#173f2e]"
                            >
                                {/* Stat Number */}
                                <div className="text-5xl font-heading sm:text-6xl font-extrabold tracking-tight text-[#1c4a36] dark:text-[#e4f5ee]">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Stat Label */}
                                <p className="mt-3 text-sm sm:text-base font-medium text-[#1c4a36]/70 dark:text-[#e4f5ee]/60 max-w-[240px]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OurImpact