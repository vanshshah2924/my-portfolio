import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";   // or whatever fonts you have
import "./globals.css";

import { HydrationFix } from "@/components/ui/HydrationFix";

export const metadata: Metadata = {
  title: "Vansh K. | Portfolio",
  description: "Full Stack Developer",
  // ... other metadata you already have
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}