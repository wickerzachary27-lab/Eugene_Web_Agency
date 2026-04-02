"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b-2 border-[#2d6a2d]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Business name */}
          <Link
            href="/"
            className="font-bold tracking-tight leading-tight text-base sm:text-lg shrink-0"
            style={{ color: siteConfig.colors.primary }}
          >
            All Seasons Landscape Maintenance
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="ml-2 rounded-full px-5 py-2 text-sm font-bold shadow-md transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: siteConfig.colors.accent, color: "#111" }}
            >
              {siteConfig.phone}
            </a>
          </nav>

          {/* Mobile: phone button + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="rounded-full px-4 py-1.5 text-xs font-bold shadow-md"
              style={{ backgroundColor: siteConfig.colors.accent, color: "#111" }}
            >
              Call Us
            </a>
            <button
              className="p-1"
              style={{ color: siteConfig.colors.primary }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 border-b border-gray-100 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="mt-2 text-center rounded-full py-2 text-sm font-bold"
              style={{ backgroundColor: siteConfig.colors.accent, color: "#111" }}
            >
              Call {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
