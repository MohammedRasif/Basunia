"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 11-1.06 1.06l-.97-.97v7.88a1.5 1.5 0 01-1.5 1.5H15a1.5 1.5 0 01-1.5-1.5v-4.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v4.5A1.5 1.5 0 019 22H5.25a1.5 1.5 0 01-1.5-1.5v-7.88l-.97.97a.75.75 0 01-1.06-1.06l8.69-8.69z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Rent<span className="text-indigo-500">Nest</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted property rental marketplace. Connecting tenants with verified landlords effortlessly and securely.
            </p>
            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-white block mb-2">Subscribe to modern property updates</span>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-xs bg-slate-800 text-white px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500 placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Column 1: Discover */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Discover</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/categories/apartments" className="hover:text-indigo-400 transition-colors">Apartments in NYC</Link></li>
              <li><Link href="/categories/villas" className="hover:text-indigo-400 transition-colors">Villas in Miami</Link></li>
              <li><Link href="/categories/studios" className="hover:text-indigo-400 transition-colors">Studios in Austin</Link></li>
              <li><Link href="/categories/commercial" className="hover:text-indigo-400 transition-colors">Commercial Offices</Link></li>
              <li><Link href="/categories/beachfront" className="hover:text-indigo-400 transition-colors">Beachfront Homes</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/#how-it-works" className="hover:text-indigo-400 transition-colors">About RentNest</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#testimonials" className="hover:text-indigo-400 transition-colors">Customer Stories</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Partner With Us</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 3: Legal & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Security Standards</Link></li>
              <li><Link href="/login" className="hover:text-indigo-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} RentNest Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
