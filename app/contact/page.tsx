"use client";

import Image from "next/image";
import AnimatedButton from "@/app/components/shared/AnimatedButton";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/Frame 2147229286.svg"
          alt="Contact Us Banner"
          fill
          priority
          className="object-cover "
        />

        {/* Overlay Dark Gradient */}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-dm-serif-text text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
            Contact us
          </h1>
          <p className="arimo text-slate-200 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium">
            Get in touch with our trusted legal team for professional advice and support.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Details (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="marcellus text-xs lg:text-lg uppercase tracking-[0.10em] font-bold text-slate-500 block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="marcellus text-2xl sm:text-3xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-md">
                We are always ready to help you and answer your questions
              </h2>
            </div>

            {/* 2x2 Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">

              {/* Call center */}
              <div className="space-y-1.5">
                <h3 className="arimo font-bold text-slate-900 text-sm sm:text-[18px]">
                  Call center
                </h3>
                <a
                  href="tel:01956565462"
                  className="flex items-center gap-2 text-xs sm:text-[14px] text-slate-600 hover:text-[#8E1831] transition-colors"
                >
                  <HiOutlinePhone className="w-4 h-4 text-[#8E1831] shrink-0" />
                  <span>01956565462</span>
                </a>
              </div>

              {/* Our location */}
              <div className="space-y-1.5">
                <h3 className="arimo font-bold text-slate-900 text-sm sm:text-[18px]">
                  Our location
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-[14px] text-slate-600">
                  <HiOutlineLocationMarker className="w-4 h-4 text-[#8E1831] shrink-0" />
                  <span>Gulshan 1, Dhaka</span>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <h3 className="arimo font-bold text-slate-900 text-sm sm:text-[18px]">
                  Email
                </h3>
                <a
                  href="mailto:ghrakib@gmail.com"
                  className="flex items-center gap-2 text-xs sm:text-[14px] text-slate-600 hover:text-[#8E1831] transition-colors underline"
                >
                  <HiOutlineMail className="w-4 h-4 text-[#8E1831] shrink-0" />
                  <span>ghrakib@gmail.com</span>
                </a>
              </div>

              {/* Social network */}
              <div className="space-y-1.5">
                <h3 className="arimo font-bold text-slate-900 text-sm sm:text-[18px]">
                  Social network
                </h3>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#8E1831] hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#8E1831] hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#8E1831] hover:text-white text-slate-700 flex items-center justify-center transition-colors text-xs"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form Card (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-[#F5F5F5] p-6 sm:p-10 rounded-md border border-slate-200/60 shadow-sm space-y-6">
            <div>
              <h3 className="marcellus text-xl sm:text-3xl font-bold text-slate-900 mb-1">
                Get in touch
              </h3>
              <p className="arimo text-xs text-slate-500">
                Define your goals and identify where we can add value
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full name */}
              <div>
                <label htmlFor="fullname" className="block text-xs lg:text-[15px] font-semibold text-slate-700 mb-1.5">
                  Full name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8E1831] text-slate-900 placeholder:text-slate-400 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs lg:text-[15px] font-semibold text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8E1831] text-slate-900 placeholder:text-slate-400 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs lg:text-[15px] font-semibold text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Type your message here..."
                  className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8E1831] text-slate-900 placeholder:text-slate-400 transition-colors resize-none"
                />
              </div>

              {/* Submit Button using AnimatedButton */}
              <div className="pt-2">
                <AnimatedButton type="submit" showArrow={false}>
                  Send message
                </AnimatedButton>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Embedded Map Section — OpenStreetMap (free, no API key) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 sm:pb-24">
        <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          {/* OpenStreetMap embed — Gulshan 1, Dhaka (23.7809°N, 90.4125°E), zoom 16 */}
          <iframe
            title="Basunia & Associate Location — Gulshan 1, Dhaka"
            src="https://www.openstreetmap.org/export/embed.html?bbox=90.3975%2C23.7709%2C90.4275%2C23.7909&layer=mapnik&marker=23.7809%2C90.4125"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          />

          {/* Map Location Overlay Badge */}
          <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden sm:block">
            <h4 className="marcellus text-sm font-bold text-slate-900">
              Basunia & Associate
            </h4>
            <p className="arimo text-xs text-slate-500 mt-0.5">
              Gulshan 1, Dhaka, Bangladesh
            </p>
            <div className="mt-2 flex items-center gap-1 text-[11px] text-[#8E1831] font-semibold">
              <span>★ 4.9 (112 reviews)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
