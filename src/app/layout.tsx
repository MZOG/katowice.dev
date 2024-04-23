import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
