import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Modern LMS",
    template: "%s | Modern LMS",
  },
  description:
    "Modern LMS is a powerful learning management system designed for educators, students, and institutions to manage courses, track progress, and enhance digital learning experiences.",
  keywords: [
    "LMS",
    "Learning Management System",
    "Online Courses",
    "E-Learning",
    "Education",
    "Next.js",
    "Tailwind",
  ],
  authors: [{ name: "Hasham Saleem", url: "https://github.com/hashamsaleem" }],
  creator: "Hasham Saleem",
  publisher: "Modern LMS",
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
