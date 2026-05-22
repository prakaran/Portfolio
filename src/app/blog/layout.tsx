import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Container from "@/components/container";

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
    <>
      <Container className="prose min-h-screen px-10 md:pt-20 md:pb-10">
        {children}
      </Container>
    </>
  );
}
