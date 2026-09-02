import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "./components/shared/ToastProvider";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "RentNest - Find & Rent Premium Properties",
  description: "Discover luxury apartments, houses, and commercial spaces effortlessly with RentNest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-indigo-500 selection:text-white">
        <ToastProvider />
        <Navbar />
        <main className="flex-1 min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


