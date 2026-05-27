import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeffrey Ryan — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and cloud architecture. Hackathon champion, building scalable web applications with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Jeffrey Ryan",
    "Web Developer",
  ],
  authors: [{ name: "Jeffrey Ryan" }],
  openGraph: {
    title: "Jeffrey Ryan — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and cloud architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Ryan — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and cloud architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-inter)] antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
