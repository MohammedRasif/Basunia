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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://basuniaassociate.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Basunia & Associate | Leading Law Firm in Bangladesh",
    template: "%s | Basunia & Associate",
  },
  description:
    "Basunia & Associate is a premier corporate and commercial law firm in Dhaka, Bangladesh, providing top-tier legal advisory, transactional structuring, litigation, arbitration, and regulatory compliance services.",
  keywords: [
    "Law Firm in Bangladesh",
    "Corporate Lawyers in Dhaka",
    "Commercial Law Firm Bangladesh",
    "Basunia & Associate",
    "Supreme Court Advocates Dhaka",
    "Banking and Finance Lawyers Bangladesh",
    "Litigation and Dispute Resolution",
    "Intellectual Property Lawyers Dhaka",
    "Real Estate Law Firm Bangladesh",
    "Employment and Labour Law Firm",
  ],
  authors: [{ name: "Basunia & Associate", url: siteUrl }],
  creator: "Basunia & Associate",
  publisher: "Basunia & Associate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Basunia & Associate | Leading Law Firm in Bangladesh",
    description:
      "Premier corporate, commercial, and litigation legal counsel in Dhaka, Bangladesh.",
    url: siteUrl,
    siteName: "Basunia & Associate",
    images: [
      {
        url: "/assets/images/expertise-banner-meeting.jpg",
        width: 1200,
        height: 630,
        alt: "Basunia & Associate - Leading Law Firm in Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basunia & Associate | Leading Law Firm in Bangladesh",
    description:
      "Premier corporate, commercial, and litigation legal counsel in Dhaka, Bangladesh.",
    images: ["/assets/images/expertise-banner-meeting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Basunia & Associate",
  description:
    "Leading Corporate, Commercial, and Litigation Law Firm based in Dhaka, Bangladesh.",
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logoo.png`,
  image: `${siteUrl}/assets/images/expertise-banner-meeting.jpg`,
  telephone: "+8801956565462",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gulshan-1",
    addressLocality: "Dhaka",
    postalCode: "1212",
    addressCountry: "BD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.7925",
    longitude: "90.4078",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://facebook.com",
    "https://linkedin.com",
    "https://youtube.com",
    "https://twitter.com",
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-indigo-500 selection:text-white" suppressHydrationWarning>
        <ToastProvider />
        <Navbar />
        <main className="flex-1 min-h-[calc(100vh-16rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}