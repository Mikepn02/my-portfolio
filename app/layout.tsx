import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nzabera Mike Peter | Personal Portfolio",
  description:
    "Full Stack Software Engineer specializing in scalable backend solutions, cloud architectures, and modern web development. Explore my projects, skills, and experience.",
  keywords: [
    "Nzabera Mike Peter",
    "Mikepn",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Portfolio",
    "Backend Engineer",
  ],
  authors: [{ name: "Nzabera Mike Peter" }],
  openGraph: {
    title: "Nzabera Mike Peter | Software Engineer Portfolio",
    description:
      "Explore my professional software engineering portfolio — backend, full stack, and system architecture expertise.",
    url: "https://mike-nzabera.vercel.app",
    siteName: "Nzabera Mike Peter Portfolio",
    locale: "en_US",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
