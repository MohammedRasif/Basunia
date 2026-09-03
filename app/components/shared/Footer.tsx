"use client";

import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-slate-900 font-arimo">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Container: Single Horizontal Row on Desktop (lg) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8 pb-12 border-b border-slate-800/60">
          
          {/* 1. Left Section: Brand Logo, Social Icons & Tagline */}
          <div className="w-full lg:w-auto lg:max-w-xs space-y-4 shrink-0">
            {/* Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#8E1831] flex items-center justify-center text-white shadow-md shadow-[#8E1831]/20 group-hover:scale-105 transition-transform overflow-hidden relative shrink-0">
                <Image
                  src="/assets/images/logoo.png"
                  alt="Basunia & Associates Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <span className="marcellus text-xl sm:text-2xl font-bold text-white tracking-tight transition-colors">
                Basunia & Associates
              </span>
            </Link>

            {/* Outlined Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="w-8 h-8 rounded-full border border-slate-700 hover:border-[#8E1831] flex items-center justify-center text-white hover:text-white hover:bg-[#8E1831] transition-all cursor-pointer group"
              >
                <FaXTwitter className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-slate-700 hover:border-[#8E1831] flex items-center justify-center text-white hover:text-white hover:bg-[#8E1831] transition-all cursor-pointer group"
              >
                <FaFacebookF className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-slate-700 hover:border-[#8E1831] flex items-center justify-center text-white hover:text-white hover:bg-[#8E1831] transition-all cursor-pointer group"
              >
                <FaYoutube className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </a>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pt-1">
              Basunia & Associates — Your trusted legal resource and consultancy.
            </p>
          </div>

          {/* 2. Middle Navigation Columns (SERVICES, ABOUT US, LEGAL) */}
          <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-14 lg:gap-16 pt-1">
            
            {/* SERVICES */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-arimo">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-sm font-normal text-slate-300">
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/about" className="text-slate-300">
                      How We Work
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/categories" className="text-slate-300">
                      Our Expertise
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/contact" className="text-slate-300">
                      Help Center
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
              </ul>
            </div>

            {/* ABOUT US */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-arimo">
                ABOUT US
              </h4>
              <ul className="space-y-2.5 text-sm font-normal text-slate-300">
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/contact" className="text-slate-300">
                      Get in Touch
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/contact" className="text-slate-300">
                      Support
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest font-arimo">
                LEGAL
              </h4>
              <ul className="space-y-2.5 text-sm font-normal text-slate-300">
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/privacy" className="text-slate-300">
                      Privacy Policy
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/terms" className="text-slate-300">
                      Terms of Service
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
                <li>
                  <div className="relative group inline-block py-0.5">
                    <Link href="/notice" className="text-slate-300">
                      Legal Notice
                    </Link>
                    <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[2px] bg-[#8E1831] rounded-full transition-all duration-300" />
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* 3. Right Newsletter Column */}
          <div className="w-full lg:w-auto lg:max-w-md space-y-3 shrink-0">
            <h3 className="marcellus text-xl sm:text-2xl font-bold text-white">
              Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Subscribe to our newsletter to receive the latest legal updates and insights.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full pt-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full text-xs sm:text-sm bg-transparent border border-slate-700 text-white px-4 py-3 focus:outline-none focus:border-[#8E1831] placeholder:text-slate-500 rounded-none min-w-[200px]"
              />
              <button
                type="submit"
                className="bg-[#8E1831] hover:bg-[#721327] text-white font-semibold text-xs sm:text-sm px-6 py-3 transition-colors cursor-pointer shrink-0 rounded-none"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Basunia & Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <div className="relative group inline-block">
              <Link href="/privacy" className="text-slate-400">Privacy</Link>
              <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#8E1831] rounded-full transition-all duration-300" />
            </div>
            <div className="relative group inline-block">
              <Link href="/terms" className="text-slate-400">Terms</Link>
              <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#8E1831] rounded-full transition-all duration-300" />
            </div>
            <div className="relative group inline-block">
              <Link href="/notice" className="text-slate-400">Legal</Link>
              <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#8E1831] rounded-full transition-all duration-300" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
