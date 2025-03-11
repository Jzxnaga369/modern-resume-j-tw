import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body className="min-h-screen flex-col">
      {/* <div className="flex justify-center min-h-screen">
            <div className="w-[200px] h-[200px] bg-red-500 border border-">
              <p className="text-red-500 text-2xl">Tailwind is working?</p>
            </div>
          </div> */}
        <div className="flex flex-col space-y-0 p-4 bg-theme">
          {children}
        </div>
      </body>
    </html>
  );
}
