import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CODE, Palmore, Murecho, MurechoLight } from './fonts';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio 2025",
  description: "Portfolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${CODE.variable} 
          ${Palmore.variable} 
          ${Murecho.variable} 
          ${MurechoLight.variable} 
          ${geistSans.variable} 
          ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
