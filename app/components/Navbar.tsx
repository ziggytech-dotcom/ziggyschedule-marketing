"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ borderBottom: "1px solid #27272a", backgroundColor: "rgba(15,10,10,0.95)" }}
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/ziggyschedule-wordmark-v3.png" alt="ZiggySchedule" style={{ height: 32, width: "auto" }} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
            Features
          </Link>
          <Link href="/pricing" className="text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
            Pricing
          </Link>
          <div className="relative group">
            <button className="text-sm hover:text-white transition-colors flex items-center gap-1" style={{ color: "#a1a1aa" }}>
              Compare
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="absolute top-full left-0 mt-2 w-48 rounded-lg py-2 hidden group-hover:block"
              style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}
            >
              <Link href="/vs/calendly" className="block px-4 py-2 text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
                vs Calendly
              </Link>
              <Link href="/vs/acuity" className="block px-4 py-2 text-sm hover:text-white transition-colors" style={{ color: "#a1a1aa" }}>
                vs Acuity Scheduling
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://app.ziggyschedule.com"
            className="text-sm px-5 py-2 rounded-full font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2" style={{ borderTop: "1px solid #27272a" }}>
          <Link href="/features" className="block py-2 text-sm" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/pricing" className="block py-2 text-sm" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/vs/calendly" className="block py-2 text-sm" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>
            vs Calendly
          </Link>
          <Link href="/vs/acuity" className="block py-2 text-sm" style={{ color: "#a1a1aa" }} onClick={() => setOpen(false)}>
            vs Acuity
          </Link>
          <Link
            href="https://app.ziggyschedule.com"
            className="block mt-3 text-center text-sm px-5 py-2 rounded-full font-semibold"
            style={{ backgroundColor: "#f472b6", color: "#0f0a0a" }}
            onClick={() => setOpen(false)}
          >
            Start Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
}
