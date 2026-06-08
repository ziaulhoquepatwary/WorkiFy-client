import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f291e] px-6 transition-colors duration-300">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-[#1c4a36] dark:text-[#e4f5ee] opacity-20">
                    404
                </h1>
                <div className="relative -mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1c4a36] dark:text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-slate-600 dark:text-[#e4f5ee]/70 mb-8 max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable in WorkiFy.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-3 bg-[#1c4a36] dark:bg-[#e4f5ee] text-white dark:text-[#1c4a36] font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#1c4a36]/20"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}