import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";   // or whatever fonts you have
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { HydrationFix } from "@/components/ui/HydrationFix";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Vansh Shah | Portfolio",
  description: "Full Stack Developer",
  // ... other metadata you already have
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}