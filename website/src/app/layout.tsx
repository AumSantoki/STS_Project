import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Behind the Screen: The Physical World That Powers the Internet",
  description:
    "An educational cinematic exploration into the physical infrastructure, subsea cables, data centres, and human workforce that power the global Internet.",
  keywords: [
    "Internet infrastructure",
    "Subsea cables",
    "Data centres",
    "STS",
    "Science Technology Society",
    "Physical internet",
    "Network engineering",
  ],
  authors: [{ name: "Behind the Screen Project Team" }],
};

export const viewport: Viewport = {
  themeColor: "#0A0B0E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-cyan-accent/20 selection:text-cyan-accent">
        {children}
      </body>
    </html>
  );
}
