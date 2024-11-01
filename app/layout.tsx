import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RunyGG - Battle Royale",
  description: "Chegue ao topo da competição e enfrente os jogadores mais habilidosos no Battle Royale mais épico de todos os tempos!",
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
