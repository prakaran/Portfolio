import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/navbar/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description:
    "A beautiful portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cn("h-full", "antialiased", "font-sans", inter.className)}
      >
        <body className="flex min-h-full flex-col bg-neutral-200 [--pattern-fg:var(--color-neutral-950)]/20 dark:bg-neutral-700">
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </body>
      </html>
    </ViewTransitions>
  );
}
