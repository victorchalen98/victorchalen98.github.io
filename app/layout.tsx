import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Víctor Chalén — Ingeniero de Software",
  description:
    "Portafolio de Víctor Chalén, ingeniero de software especializado en desarrollo web frontend con React, Next.js y Python.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${jbMono.variable} font-sans bg-base text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
