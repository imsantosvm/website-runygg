import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Machine Codes",
  description: "Machine Codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
          {children}
      </body>
    </html>
  );
}
