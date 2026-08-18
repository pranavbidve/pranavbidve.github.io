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
  title: "Pranav Bidve | AI/ML Engineer",
  description:
    "Founding AI Engineer building production-grade agentic systems, RAG pipelines, and LLM evaluation frameworks.",
  openGraph: {
    title: "Pranav Bidve | AI/ML Engineer",
    description:
      "Production-grade agentic systems, RAG pipelines, and LLM evaluation.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Bidve | AI/ML Engineer",
    description:
      "Production-grade agentic systems, RAG pipelines, and LLM evaluation.",
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
      </body>
    </html>
  );
}
