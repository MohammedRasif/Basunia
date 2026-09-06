"use client";

import { useState } from "react";

export interface FaqItem {
  id: string | number;
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "How do I schedule an initial legal consultation?",
    answer:
      "You can schedule a consultation by clicking 'Book A consultation', submitting our online contact form, or contacting our chambers directly. Our team will promptly review your inquiry and connect you with the appropriate practice specialist.",
  },
  {
    id: "faq-2",
    question: "What practice areas does Basunia & Associates cover?",
    answer:
      "We provide comprehensive legal services spanning Corporate & Commercial Law, Litigation & Dispute Resolution, Family & Estate Planning, Intellectual Property, Banking & Finance, Real Estate, Criminal Defense, Taxation & Customs, Labour Law, and Admiralty.",
  },
  {
    id: "faq-3",
    question: "Do you advise foreign investors and multinational corporations?",
    answer:
      "Yes, we regularly counsel international corporations, foreign direct investors (FDI), and international organizations on Bangladesh regulatory compliance, BIDA approvals, cross-border contracts, joint ventures, and international arbitration.",
  },
  {
    id: "faq-4",
    question: "How are professional legal fees and retainers structured?",
    answer:
      "Our legal fee arrangements are transparent, predictable, and tailored to transaction complexity. We offer fixed-fee advisory, monthly corporate retainers, stage-based litigation schedules, and transparent hourly billing.",
  },
];

interface FaqSectionProps {
  titleLeft?: string;
  descriptionLeft?: string;
  faqTitle?: string;
  items?: FaqItem[];
  defaultOpenId?: string | number;
}

export default function FaqSection({
  titleLeft = "Trusted by Businesses &\nLeading Organizations",
  descriptionLeft = "We are proud to work with a diverse range of businesses and organizations. Our client relationships reflect the trust, professionalism, and confidence placed in our legal expertise.",
  faqTitle = "Frequently Asked Questions",
  items = defaultFaqs,
  defaultOpenId = "faq-1",
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | number | null>(defaultOpenId);

  const toggleFaq = (id: string | number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-white pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-dm-serif-text text-3xl sm:text-4xl md:text-[32px] lg:text-[36px] text-[#262626] font-normal leading-[1.18] tracking-tight mb-4 sm:mb-5 whitespace-pre-line">
              {titleLeft}
            </h2>
            <p className="font-switzer text-xs sm:text-sm md:text-[14px] text-[#555555] leading-relaxed max-w-lg">
              {descriptionLeft}
            </p>
          </div>

          {/* ================= RIGHT COLUMN (FAQ) ================= */}
          <div className="lg:col-span-7 flex flex-col w-full">
            
            {/* FAQ Title (Aligned over FAQ accordion cards) */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-dm-serif-text text-2xl sm:text-3xl md:text-[30px] text-[#0F172A] font-normal tracking-tight">
                {faqTitle}
              </h3>
            </div>

            {/* FAQ Accordion List */}
            <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
              {items.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`w-full rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#D6E0EA] bg-white shadow-xs"
                        : "border-[#E8EEF3] bg-white hover:border-[#CBD5E1]"
                    }`}
                  >
                    {/* Accordion Header Button */}
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-4.5 text-left cursor-pointer select-none group transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-inter font-bold text-sm  text-[#0F172A] tracking-tight pr-4 group-hover:text-[#8E1831] transition-colors">
                        {item.question}
                      </span>

                      {/* Smooth Chevron Indicator */}
                      <span className="shrink-0 p-1 text-[#18181B] group-hover:text-[#8E1831] transition-colors">
                        <svg
                          className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ease-out ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion Expandable Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-2 pb-5 sm:pb-6 px-5 sm:px-6 border-t border-[#F1F5F9] mt-1">
                          <p className="font-inter text-xs sm:text-[13.5px] md:text-[14px] text-[#475569] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
