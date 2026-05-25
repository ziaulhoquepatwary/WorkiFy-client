import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
    const footerLinks = {
        jobSeekers: [
            { name: "Browse Jobs", href: "/jobs" },
            { name: "Salary Guide", href: "/salaries" },
            { name: "Resume Builder", href: "/resume" },
            { name: "Career Advice", href: "/blog" },
        ],
        employers: [
            { name: "Post a Job", href: "/post-job" },
            { name: "Browse Candidates", href: "/candidates" },
            { name: "Talent Solutions", href: "/talent" },
            { name: "Pricing Plans", href: "/pricing" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Our Team", href: "/team" },
            { name: "Contact Support", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy" },
        ]
    };

    const socials = [
        {
            icon: <FaFacebookF />,
            href: "https://facebook.com",
            brandColor: "hover:bg-[#1877F2]",
            label: "Facebook"
        },
        {
            icon: <FaTwitter />,
            href: "https://twitter.com",
            brandColor: "hover:bg-[#1DA1F2]",
            label: "Twitter"
        },
        {
            icon: <FaInstagram />,
            href: "https://instagram.com",
            brandColor: "hover:bg-[#E1306C]",
            label: "Instagram"
        },
        {
            icon: <FaLinkedinIn />,
            href: "https://linkedin.com",
            brandColor: "hover:bg-[#0077B5]",
            label: "LinkedIn"
        },
        {
            icon: <FaYoutube />,
            href: "https://youtube.com",
            brandColor: "hover:bg-[#FF0000]",
            label: "YouTube"
        }
    ];

    return (
        <footer className="w-full border-t border-[#e4f5ee] bg-white text-[#1c4a36] transition-colors duration-300 dark:border-[#173f2e] dark:bg-[#0f291e] dark:text-[#e4f5ee]">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            <span className="text-[#1c4a36] dark:text-[#e4f5ee]">Worki</span>
                            <span className="text-gray-500 dark:text-white/70">Fy</span>
                        </Link>
                        <p className="max-w-md text-sm text-[#1c4a36]/70 transition-colors dark:text-[#e4f5ee]/70 leading-relaxed">
                            The reliable platform for finding the right employment and qualified candidates. We believe the right opportunity can change a life.
                        </p>

                        {/* Social Links with Native Brand Colors on Hover */}
                        <div className="flex space-x-3 pt-2">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[#e4f5ee] text-[#1c4a36] transition-all duration-300 hover:text-white hover:scale-110 dark:bg-[#173f2e] dark:text-[#e4f5ee] ${social.brandColor}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Job Seekers Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#1c4a36] dark:text-white">
                            Job Seekers
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {footerLinks.jobSeekers.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#1c4a36]/80 hover:text-[#1c4a36] transition-colors dark:text-[#e4f5ee]/80 dark:hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Employers Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#1c4a36] dark:text-white">
                            Employers
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {footerLinks.employers.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#1c4a36]/80 hover:text-[#1c4a36] transition-colors dark:text-[#e4f5ee]/80 dark:hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#1c4a36] dark:text-white">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#1c4a36]/80 hover:text-[#1c4a36] transition-colors dark:text-[#e4f5ee]/80 dark:hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright Section */}
                <div className="mt-12 border-t border-[#e4f5ee] pt-8 transition-colors dark:border-[#173f2e] md:flex md:items-center md:justify-between">
                    <p className="text-xs text-[#1c4a36]/60 dark:text-[#e4f5ee]/60">
                        &copy; {new Date().getFullYear()} WorkiFy. All rights reserved.
                    </p>
                    <p className="mt-2 text-xs text-[#1c4a36]/60 dark:text-[#e4f5ee]/60 md:mt-0">
                        Designed with ❤️ for professional growth.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;