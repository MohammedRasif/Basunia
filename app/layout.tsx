import type { Metadata } from "next";
import {
  Marck_Script,
  Marcellus,
  Marcellus_SC,
  Arimo,
  Poppins,
  DM_Serif_Text,
  DM_Serif_Display,
  Manrope,
  Inter,
  Plus_Jakarta_Sans,
  Geist,
} from "next/font/google";
import "./globals.css";
import ToastProvider from "./components/shared/ToastProvider";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marck-script",
  display: "swap",
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const marcellusSC = Marcellus_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus-sc",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basunia & Associate",
  description: "Basunia & Associate - Legal Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [
    marckScript.variable,
    marcellus.variable,
    marcellusSC.variable,
    arimo.variable,
    poppins.variable,
    dmSerifText.variable,
    dmSerifDisplay.variable,
    manrope.variable,
    inter.variable,
    jakarta.variable,
    geist.variable,
  ].join(" ");

  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${fontVariables}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-indigo-500 selection:text-white" suppressHydrationWarning>
        <ToastProvider />
        <Navbar />
        <main className="flex-1 min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}