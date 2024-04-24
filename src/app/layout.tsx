import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

import { AuroraBackground } from "@/components/ui/background";

import Header from "@/components/header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Strony Internetowe Katowice",
  description: "Elo, robię strony internetowe.",
};

type RootProps = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootProps) {
  return (
    <html lang="pl">
      <body
        className={cn(
          "overflow-x-hidden font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuroraBackground>
          <main className="z-10">{children}</main>
        </AuroraBackground>
      </body>
    </html>
  );
}
