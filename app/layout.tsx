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

export const metadata: Metadata = {
  metadataBase: new URL("https://pranavbidve.github.io"),
  title: "Pranav Bidve | AI/ML Engineer",
  description:
    "Pranav Bidve, Founding AI Intern at Qosmic. Building AI tools for e-commerce and finance.",
  openGraph: {
    title: "Pranav Bidve | AI/ML Engineer",
    description:
      "AI projects, software experience, and research by Pranav Bidve.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Bidve | AI/ML Engineer",
    description:
      "AI projects, software experience, and research by Pranav Bidve.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        <script src="/portfolio.js" defer />
      </body>
    </html>
  );
}
