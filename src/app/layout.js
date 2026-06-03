import { Josefin_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
        <html
            lang="en"
            className={`${josefinSans.variable} ${fredoka.variable} h-full antialiased`}
        >
            <body className="min-h-full">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}