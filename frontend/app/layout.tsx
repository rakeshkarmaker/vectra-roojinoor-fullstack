import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

export const fontDisplay = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vectra Talent",
  description:
    "Connecting Talent with Opportunity: Your Gateway to the Future of Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans`} suppressHydrationWarning>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
