import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fajar Porto",
  description:
    "Hi! I'm Raihan Fajar Ramadhan, a Web Developer with expertise in  Next.js Tailwind CSS, Node.js. Explore my projects showcasing modern web development, clean code, and impactful solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} w-full max-w-screen bg-[#fbf8cc] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
