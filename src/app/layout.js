import { Josefin_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/share/Navbar";
import Footer from "@/share/Footer";

const josefinSans = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-josefin',
    display: 'swap',
    preload: true,
});

const fredoka = Fredoka({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-fredoka',
    display: 'swap',
    preload: true,
});

export const metadata = {
    title: "WorkiFy",
    description: "Smart Hiring. Seamless Discovery. A job seeking platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en"
            className={`${josefinSans.variable} ${fredoka.variable} font-sans antialiased min-h-screen flex flex-col`}
        >
            <body className="min-h-full bg-white text-gray-900 dark:bg-[#0A0A0A] dark:text-gray-100 transition-colors duration-300">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}