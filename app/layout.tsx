import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convex-Jotion",
  description: "The connected workspace where better, faster work happens",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-light.png",
        href: "/logo-light.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         storageKey="Convex-theme-3"
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
