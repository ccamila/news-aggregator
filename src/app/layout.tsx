import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

// Font setup
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

// Metadata
export const metadata: Metadata = {
  title: {
    default: "News Aggregator",
    template: "%s | News Aggregator",
  },
  description: "Stay updated with the latest news from multiple sources in one place.",
  keywords: ["news", "aggregator", "headlines", "world news", "technology", "politics", "sports", "entertainment"],
  authors: [{ name: "Camila Camilo" }],
};

// Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
              <div className="flex flex-col min-h-screen">
                <main className="flex-1 container mx-auto px-4 py-8">
                  {children}
                </main>
                <Footer/>
              </div>
      </body>
    </html>
  );
}
