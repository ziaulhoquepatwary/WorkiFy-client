"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, MapPin, Briefcase, Code, BarChart2, Heart, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");

    const slides = [
        { image: "/job-banner1.png", title: "Find Your Dream Job" },
        { image: "/job-banner2.png", title: "Connect with Top Companies" },
        { image: "/job-banner3.png", title: "Grow Your Career" }
    ];

    const popularCategories = [
        { name: "Development", icon: <Code className="w-3.5 h-3.5" /> },
        { name: "Marketing", icon: <BarChart2 className="w-3.5 h-3.5" /> },
        { name: "Design", icon: <PenTool className="w-3.5 h-3.5" /> },
        { name: "Healthcare", icon: <Heart className="w-3.5 h-3.5" /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 200, damping: 26 },
                opacity: { duration: 0.3 }
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 200, damping: 26 },
                opacity: { duration: 0.3 }
            }
        })
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery, "in location:", locationQuery);
    };

    return (
        <section className="relative w-full bg-white dark:bg-[#0f291e] py-12 lg:py-20 transition-colors duration-300 overflow-hidden">

            {/* Background Images & Overlays */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                    src="/job-bg.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover opacity-10 lg:opacity-[0.05] dark:opacity-10 transition-all duration-300"
                    suppressHydrationWarning
                />
            </div>

            {/* Ambient Glows using your palette */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                    <div className="absolute top-12 left-12 w-72 h-72 bg-[#e4f5ee] dark:bg-[#173f2e] rounded-full filter blur-[100px]" />
                    <div className="absolute bottom-12 right-12 w-72 h-72 bg-[#1c4a36]/20 dark:bg-[#173f2e] rounded-full filter blur-[100px]" />
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">

                    {/* LEFT SIDE: FIXED JOB CONTENT & SEARCH BAR */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-20">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e4f5ee] dark:bg-[#173f2e]/60 text-[#1c4a36] dark:text-[#e4f5ee] text-xs font-semibold tracking-wide uppercase border border-[#e4f5ee] dark:border-[#173f2e]">
                            <Briefcase className="w-4 h-4 text-[#1c4a36] dark:text-[#e4f5ee]" />
                            Discover Your Future
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading tracking-tight text-[#1c4a36] dark:text-white leading-[1.15]">
                            Find the Job That <br />
                            <span className="text-[#1c4a36] bg-[#e4f5ee] px-2 py-0.5 rounded-xl dark:bg-transparent dark:text-[#e4f5ee] dark:p-0">Fits Your Life</span>
                        </h1>

                        {/* Paragraph */}
                        <p className="text-base sm:text-lg text-[#1c4a36]/80 dark:text-[#e4f5ee]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Discover thousands of job opportunities from top-tier corporate companies and fast-growing startups. Your next career milestone starts right here.
                        </p>

                        {/* JOB PORTAL SEARCH BAR */}
                        <form onSubmit={handleSearch} className="bg-white dark:bg-[#173f2e] p-2 rounded-2xl shadow-xl border border-[#e4f5ee] dark:border-[#173f2e]/40 flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto lg:mx-0">

                            <div className="flex items-center gap-2 px-3 w-full border-b md:border-b-0 md:border-r border-[#e4f5ee] dark:border-[#0f291e] pb-2 md:pb-0">
                                <Search className="w-5 h-5 text-[#1c4a36] dark:text-[#e4f5ee] flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Job title, keywords..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent py-2 text-sm text-[#1c4a36] dark:text-white focus:outline-none placeholder-[#1c4a36]/50 dark:placeholder-white/40"
                                />
                            </div>

                            <div className="flex items-center gap-2 px-3 w-full pb-2 md:pb-0">
                                <MapPin className="w-5 h-5 text-[#1c4a36] dark:text-[#e4f5ee] flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="City or remote..."
                                    value={locationQuery}
                                    onChange={(e) => setLocationQuery(e.target.value)}
                                    className="w-full bg-transparent py-2 text-sm text-[#1c4a36] dark:text-white focus:outline-none placeholder-[#1c4a36]/50 dark:placeholder-white/40"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto bg-[#1c4a36] hover:bg-[#1c4a36]/90 dark:bg-[#e4f5ee] dark:hover:bg-white text-white dark:text-[#1c4a36] font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md text-sm whitespace-nowrap"
                            >
                                Find Jobs
                            </button>
                        </form>

                        {/* POPULAR JOB CATEGORIES */}
                        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm">
                            <span className="text-[#1c4a36]/60 dark:text-[#e4f5ee]/60 font-medium">Popular:</span>
                            {popularCategories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSearchQuery(cat.name)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e4f5ee]/40 dark:bg-[#173f2e]/40 border border-[#e4f5ee] dark:border-[#173f2e] text-[#1c4a36] dark:text-[#e4f5ee] hover:border-[#1c4a36] dark:hover:border-white hover:bg-white dark:hover:bg-[#173f2e] transition-all"
                                >
                                    {cat.icon}
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: ANIMATED IMAGE SLIDER */}
                    <div className="hidden lg:col-span-5 lg:block relative h-[450px] w-full group overflow-hidden">

                        {/* Decorative background shape with your branding color */}
                        <div className="absolute inset-0 bg-[#e4f5ee] dark:bg-[#173f2e]/40 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#e4f5ee] dark:border-[#173f2e] shadow-xl bg-white dark:bg-[#173f2e]">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={currentSlide}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        fill
                                        priority
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="40vw"
                                        suppressHydrationWarning
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-6 flex gap-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentSlide ? 1 : -1);
                                        setCurrentSlide(index);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-5 bg-[#1c4a36] dark:bg-[#e4f5ee]" : "w-1.5 bg-white/50 dark:bg-white/20"}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;