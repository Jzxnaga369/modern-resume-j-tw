import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Providers } from "./providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Narate",
  description: "Resume with tailwind css",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex-col">
      {/* <Providers className="flex flex-col space-y-0 p-4 bg-theme"> */}
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
