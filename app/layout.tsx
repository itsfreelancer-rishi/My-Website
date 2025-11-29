import type { Metadata } from "next";
import { Poppins, Open_Sans, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const openSans = Open_Sans({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    variable: "--font-open-sans",
});

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Rishi Ramandwal | RR Web Studio – Freelance Web Developer Portfolio",
    description:
        "Freelance web developer building modern, fast, and conversion-focused websites for small businesses and startups worldwide. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
    keywords: [
        "freelance web developer",
        "Next.js developer",
        "React developer",
        "TypeScript",
        "Tailwind CSS",
        "web design",
        "RR Web Studio",
        "Rishi Ramandwal",
    ],
    authors: [{ name: "Rishi Ramandwal" }],
    openGraph: {
        title: "Rishi Ramandwal | RR Web Studio – Freelance Web Developer",
        description:
            "Building modern, fast websites for businesses worldwide using Next.js, React, and TypeScript.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable} ${openSans.variable} ${inter.variable}`}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
