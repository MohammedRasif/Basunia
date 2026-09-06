import type { Metadata } from "next";
import ContactHeroBanner from "@/app/components/contact/ContactHeroBanner";
import ContactFormSection from "@/app/components/contact/ContactFormSection";
import ContactMapSection from "@/app/components/contact/ContactMapSection";

export const metadata: Metadata = {
  title: "Contact Us | Basunia & Associate",
  description:
    "Get in touch with Basunia & Associate legal team for professional legal consultation and advocacy in Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* 1. Hero Banner Section */}
      <ContactHeroBanner />

      {/* 2. Main Contact Info & Form Section */}
      <ContactFormSection />

      {/* 3. Embedded Map Section */}
      <ContactMapSection />
    </div>
  );
}
