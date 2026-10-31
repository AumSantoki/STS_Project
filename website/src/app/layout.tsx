import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SimpleWordsProvider } from "@/components/common/SimpleWordsContext";

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
    "An interactive digital documentary exploring the physical infrastructure, subsea cables, data centres, and human workforce that power the global Internet.",
  keywords: [
    "Internet infrastructure",
    "Subsea cables",
    "Data centres",
    "Physical internet",
    "Network engineering",
    "Telecommunications infrastructure",
    "Internet routing",
  ],
  authors: [{ name: "Behind the Screen Project Team" }],
};

export const viewport: Viewport = {
  themeColor: "#F5F0E6",
  colorScheme: "light",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory text-charcoal selection:bg-burnt-orange/20 selection:text-burnt-orange">
        <SimpleWordsProvider>
          {children}
        </SimpleWordsProvider>
      </body>
    </html>
  );
}
