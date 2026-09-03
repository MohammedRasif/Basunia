"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Top Black Contact Bar */}
      <div className="bg-black text-white text-[11px] sm:text-xs py-2 px-3 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-end gap-2 sm:gap-5 font-arimo flex-wrap">
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shrink-0"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-5 h-5 rounded-md bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shrink-0"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-5 h-5 rounded-md bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity shrink-0"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Text Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hover:text-amber-400 transition-colors font-medium whitespace-nowrap"
            >
              Contact us
            </Link>

            <span className="text-slate-600">|</span>

            <Link
              href="/categories"
              className="hover:text-amber-400 transition-colors font-medium whitespace-nowrap"
            >
              Office location
            </Link>
          </div>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Contact Phone */}
          <a
            href="tel:01956565462"
            className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors tracking-wide shrink-0"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            01956565462
          </a>

        </div>
      </div>

      {/* 2. Main White Navigation Bar */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-md py-2.5" : "border-b border-slate-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name (Marcellus Font) */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8E1831] flex items-center justify-center text-white shadow-md shadow-[#8E1831]/20 group-hover:scale-105 transition-transform overflow-hidden relative">
              <Image
                src="/assets/images/logoo.png"
                alt="Basunia & Associate Logo"
                width={100}
                height={100}
                className="w-full h-full object-contain p-1.5 sm:p-2"
              />
            </div>
            <span className="font-marcellus text-base sm:text-xl lg:text-2xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#8E1831] transition-colors">
              Basunia & Associate
            </span>
          </Link>

          {/* Center Desktop Navigation Links (Arimo Font) */}
          <nav className="hidden lg:flex items-center gap-7 font-arimo font-bold text-slate-800 text-sm sm:text-base">
            
            {/* Home */}
            <div className="relative group py-2">
              <Link
                href="/"
                className={`transition-colors hover:text-[#8E1831] ${
                  isActive("/") ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                Home
              </Link>
              <span
                className={`absolute bottom-0 left-0 h-[2.5px] bg-[#8E1831] rounded-full transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>

            {/* Our Lawyers */}
            <div className="relative group py-2">
              <Link
                href="/properties"
                className={`transition-colors hover:text-[#8E1831] ${
                  isActive("/properties") ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                Our Lawyers
              </Link>
              <span
                className={`absolute bottom-0 left-0 h-[2.5px] bg-[#8E1831] rounded-full transition-all duration-300 ${
                  isActive("/properties") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>

            {/* Expertise Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setExpertiseOpen(true)}
              onMouseLeave={() => setExpertiseOpen(false)}
            >
              <button
                type="button"
                onClick={() => setExpertiseOpen(!expertiseOpen)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer hover:text-[#8E1831] ${
                  expertiseOpen || pathname.startsWith("/categories")
                    ? "text-[#8E1831]"
                    : "text-slate-800"
                }`}
              >
                <span>Expertise</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expertiseOpen ? "rotate-180 text-[#8E1831]" : "text-slate-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <span
                className={`absolute bottom-0 left-0 h-[2.5px] bg-[#8E1831] rounded-full transition-all duration-300 ${
                  expertiseOpen || pathname.startsWith("/categories")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              {/* Animated Dropdown Menu */}
              {expertiseOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-[#8E1831] uppercase tracking-wider px-3 py-1 mb-1 border-b border-slate-100 marcellus">
                    Practice Areas
                  </div>
                  <Link
                    href="/categories/apartments"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Corporate & Commercial Law
                  </Link>
                  <Link
                    href="/categories/villas"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Civil Litigation & Disputes
                  </Link>
                  <Link
                    href="/categories/commercial"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Criminal Defense Practice
                  </Link>
                  <Link
                    href="/categories/studios"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Intellectual Property
                  </Link>
                  <Link
                    href="/categories/beachfront"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Real Estate & Property Law
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer hover:text-[#8E1831] ${
                  aboutOpen ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                <span>About</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    aboutOpen ? "rotate-180 text-[#8E1831]" : "text-slate-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <span
                className={`absolute bottom-0 left-0 h-[2.5px] bg-[#8E1831] rounded-full transition-all duration-300 ${
                  aboutOpen ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />

              {/* Animated Dropdown Menu */}
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-[#8E1831] uppercase tracking-wider px-3 py-1 mb-1 border-b border-slate-100 marcellus">
                    Our Firm
                  </div>
                  <Link
                    href="/categories"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/categories"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#8E1831] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="relative group py-2">
              <Link
                href="/contact"
                className={`transition-colors hover:text-[#8E1831] ${
                  isActive("/contact") ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                Contact
              </Link>
              <span
                className={`absolute bottom-0 left-0 h-[2.5px] bg-[#8E1831] rounded-full transition-all duration-300 ${
                  isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>

          </nav>

          {/* Right Side: Search Icon & Free Consultation Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            {/* Search Icon */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="p-2 text-slate-700 hover:text-[#8E1831] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white p-3 rounded-xl shadow-2xl border border-slate-100 z-50">
                  <input
                    type="text"
                    placeholder="Search practice areas or lawyers..."
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#8E1831]"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="h-6 w-[1px] bg-slate-300 mx-3" />

            {/* Get a free consultation CTA Button */}
            <Link
              href="/contact"
              className="arimo font-semibold text-xs sm:text-sm text-white bg-[#8E1831] hover:bg-[#721327] px-5 py-3 transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              Get a free consultation
            </Link>
          </div>

          {/* Mobile & Tablet Toggle Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-700 hover:text-[#8E1831] focus:outline-none"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#8E1831] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Search Popup Overlay */}
        {searchOpen && (
          <div className="lg:hidden p-3 bg-slate-50 border-b border-slate-200 px-4">
            <input
              type="text"
              placeholder="Search practice areas or lawyers..."
              className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#8E1831]"
              autoFocus
            />
          </div>
        )}

        {/* Mobile & Tablet Slide Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden p-5 bg-white border-t border-slate-100 shadow-2xl space-y-4 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 arimo font-bold text-slate-800 text-sm">
              
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 border-b border-slate-100 flex items-center justify-between hover:text-[#8E1831] ${
                  isActive("/") ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                <span>Home</span>
                {isActive("/") && <span className="w-2 h-2 rounded-full bg-[#8E1831]" />}
              </Link>

              {/* Our Lawyers */}
              <Link
                href="/properties"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 border-b border-slate-100 flex items-center justify-between hover:text-[#8E1831] ${
                  isActive("/properties") ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                <span>Our Lawyers</span>
                {isActive("/properties") && <span className="w-2 h-2 rounded-full bg-[#8E1831]" />}
              </Link>

              {/* Expertise Accordion */}
              <div className="border-b border-slate-100 py-1.5">
                <button
                  type="button"
                  onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                  className="w-full flex items-center justify-between hover:text-[#8E1831] text-left cursor-pointer"
                >
                  <span>Expertise</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileExpertiseOpen ? "rotate-180 text-[#8E1831]" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileExpertiseOpen && (
                  <div className="pl-3 mt-2 space-y-2 text-xs font-semibold text-slate-600 border-l-2 border-[#8E1831]/30">
                    <Link
                      href="/categories/apartments"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      Corporate & Commercial Law
                    </Link>
                    <Link
                      href="/categories/villas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      Civil Litigation & Disputes
                    </Link>
                    <Link
                      href="/categories/commercial"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      Criminal Defense Practice
                    </Link>
                    <Link
                      href="/categories/studios"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      Intellectual Property
                    </Link>
                    <Link
                      href="/categories/beachfront"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      Real Estate & Property Law
                    </Link>
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div className="border-b border-slate-100 py-1.5">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between hover:text-[#8E1831] text-left cursor-pointer"
                >
                  <span>About</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      mobileAboutOpen ? "rotate-180 text-[#8E1831]" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileAboutOpen && (
                  <div className="pl-3 mt-2 space-y-2 text-xs font-semibold text-slate-600 border-l-2 border-[#8E1831]/30">
                    <Link
                      href="/categories"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/categories"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#8E1831]"
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 hover:text-[#8E1831] flex items-center justify-between ${
                  isActive("/contact") ? "text-[#8E1831]" : "text-slate-800"
                }`}
              >
                <span>Contact</span>
                {isActive("/contact") && <span className="w-2 h-2 rounded-full bg-[#8E1831]" />}
              </Link>
            </nav>

            {/* Mobile Call & Action Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:01956565462"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-100 text-slate-800 font-semibold text-xs rounded-md"
              >
                📞 Call: 01956565462
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full bg-[#8E1831] text-white font-semibold text-xs py-3 tracking-wide rounded-md shadow-sm"
              >
                Get a free consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
