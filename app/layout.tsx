import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/global/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Innovance 3.0",
  description: "Innovance 3.0 offers a unique opportunity to dive into the latest advancements and practical applications in technology, guided by industry experts and hands-on sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#101010] antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
