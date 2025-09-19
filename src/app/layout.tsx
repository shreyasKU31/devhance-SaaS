import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/navbar/Navbar";

export const metadata: Metadata = {
  title: "DevHance | Don't just list your skills. Prove them.",
  description:
    'DevHance is a portfolio platform designed for developers, designers, and builders to prove their true skills. Traditional resumes and GitHub profiles show what you built, but not why. DevHance bridges this "context gap." Our guided editor helps you transform your projects into compelling stories, detailing your technical decisions, trade-offs, and the real-world impact of your work. The result is a professional, shareable portfolio that showcases your applied skill, not just your keywords.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
