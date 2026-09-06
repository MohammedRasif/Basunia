"use client";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import AnimatedButton from "@/app/components/shared/AnimatedButton";

interface ContactFormSectionProps {
  badge?: string;
  title?: string;
  phone?: string;
  location?: string;
  email?: string;
}

export default function ContactFormSection({
  badge = "GET IN TOUCH",
  title = "We are always ready to help you and answer your questions",
  phone = "01956565462",
  location = "Gulshan 1, Dhaka",
  email = "ghrakib@gmail.com",
}: ContactFormSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you shortly.");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Details (lg:col-span-6) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="font-marcellus text-xs lg:text-lg uppercase tracking-[0.10em] font-bold text-slate-500 block mb-2">
              {badge}
            </span>
            <h2 className="font-dm-serif-text text-2xl sm:text-3xl md:text-[36px]  text-[#1A1A1A] leading-tight max-w-md">
              {title}
            </h2>
          </div>

          {/* 2x2 Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {/* Call center */}
            <div className="space-y-1.5">
              <h3 className="font-poppins font-medium text-[#737373] text-sm sm:text-[20px]">
                Call center
              </h3>
              <a
                href={`tel:${phone}`}
                className="font-switzer flex items-center gap-2 text-xs sm:text-[16px] text-[#525252] hover:text-[#8E1831] transition-colors"
              >
                <HiOutlinePhone className="w-5 h-5 text-black shrink-0" />
                <span>{phone}</span>
              </a>
            </div>

            {/* Our location */}
            <div className="space-y-1.5">
              <h3 className="font-poppins font-medium text-[#737373] text-sm sm:text-[20px]">
                Our location
              </h3>
              <div className="font-switzer flex items-center gap-2 text-xs sm:text-[16px] text-[#525252]  hover:text-[#8E1831] transition-colors">
                <HiOutlineLocationMarker className="w-5 h-5 text-black shrink-0" />
                <span>{location}</span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <h3 className="font-poppins font-medium text-[#737373] text-sm sm:text-[20px]">
                Email
              </h3>
              <a
                href={`mailto:${email}`}
                className="font-switzer flex items-center gap-2 text-xs sm:text-[16px] text-[#525252] hover:text-[#8E1831] transition-colors underline"
              >
                <HiOutlineMail className="w-5 h-5 text-black shrink-0" />
                <span>{email}</span>
              </a>
            </div>

            {/* Social network */}
            <div className="space-y-1.5">
              <h3 className="font-poppins font-medium text-[#737373] text-sm sm:text-[20px]">
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
            <h3 className="font-poppins text-xl sm:text-[20px] font-medium text-[#262626] mb-1">
              Get in touch
            </h3>
            <p className="font-switzer text-xs sm:text-[16px] text-[#525252]  transition-colors">
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
  );
}
