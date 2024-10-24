import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import MobileNavbar from "@/components/MobileNav";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

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
  title: "Kbiz - Web Design Agency",
  description:
    "We are a professional web design agency specializing in custom website design, responsive web development, and SEO-friendly solutions. Our team of expert designers and developers craft beautiful, user-focused websites that help businesses stand out online. From eCommerce platforms to fully responsive business websites, we create digital experiences that drive engagement and conversions. Let us help you grow your brand with a website tailored to your needs.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased relative bg-white/80`}>
        <Navbar />
        <MobileNavbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
