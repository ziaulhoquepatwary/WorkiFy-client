export default function Loading() {
    return (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white dark:bg-[#0f291e] transition-colors duration-300">
            {/* Outer Spinner */}
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-[#e4f5ee] dark:border-[#173f2e] rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#1c4a36] dark:border-[#e4f5ee] rounded-full border-t-transparent animate-spin"></div>

                {/* Inner Pulsing Logo/Text Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-[#1c4a36] dark:text-[#e4f5ee] text-xs animate-pulse">
                    WorkiFy
                </div>
            </div>

            {/* Loading Text */}
            <div className="mt-6 flex flex-col items-center">
                <p className="text-[#1c4a36] dark:text-[#e4f5ee] font-medium tracking-widest uppercase text-xs">
                    Loading Opportunities
                </p>
                <div className="flex gap-1 mt-2">
                    <div className="w-1.5 h-1.5 bg-[#1c4a36] dark:bg-[#e4f5ee] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#1c4a36] dark:bg-[#e4f5ee] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#1c4a36] dark:bg-[#e4f5ee] rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
}