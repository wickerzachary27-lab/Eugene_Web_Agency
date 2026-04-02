import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Sprout,
  Scissors,
  Flower2,
  Trees,
  Truck,
  Leaf,
  Award,
  Users,
  Star,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Sprout,
  Scissors,
  Flower2,
  Trees,
  Truck,
  Leaf,
};

const reviews = [
  {
    quote:
      "The price was super reasonable, the staff was polite and worked very very hard.",
  },
  {
    quote: "Hard working, finished in a timely manner.",
  },
  {
    quote: "Great prices and quick work!",
  },
];

const serviceAreas = [
  "Eugene",
  "Springfield",
  "Junction City",
  "Cottage Grove",
  "Creswell",
  "Veneta",
  "Coburg",
  "Harrisburg",
  "Crow",
  "Lorane",
];

const whyUs = [
  {
    Icon: Award,
    heading: "29 Years of Local Experience",
    body: "Serving Eugene and Lane County since 1996 with professional, reliable landscaping that stands the test of time.",
  },
  {
    Icon: Users,
    heading: "A Team You Can Trust",
    body: "Our crew shows up on time, works hard, and treats your property with respect. No shortcuts, ever.",
  },
  {
    Icon: Star,
    heading: "4.9 Stars on Google",
    body: "28 reviews and counting. Our reputation is built one satisfied customer at a time — and we plan to keep it that way.",
  },
];

export default function HomePage() {
  const { hero, services, about } = siteConfig;

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden min-h-[85vh] flex items-center text-white"
        style={{
          backgroundImage: "url('/images/9.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-5xl font-semibold italic tracking-tight sm:text-6xl lg:text-7xl drop-shadow-lg leading-tight">
            {hero.headline}
          </h1>
          <hr className="mt-8 mb-6 border-white/40 max-w-xs mx-auto" />
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={hero.ctaHref}
              className="rounded-full px-8 py-3 text-base font-bold shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: siteConfig.colors.accent, color: "#111" }}
            >
              {hero.ctaText}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              {hero.secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <p
                  className="text-3xl font-extrabold"
                  style={{ color: siteConfig.colors.primary }}
                >
                  {h.stat}
                </p>
                <p className="mt-1 text-sm text-gray-500 font-medium">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20" style={{ backgroundColor: "#f9f6f0" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Why All Seasons?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {whyUs.map(({ Icon, heading, body }) => (
              <div key={heading} className="flex flex-col items-center">
                <Icon size={48} style={{ color: siteConfig.colors.primary }} />
                <h3 className="mt-5 text-lg font-bold text-gray-900">{heading}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              From quick fixes to full projects, we handle it all with care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.name}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  style={{ borderTop: `4px solid ${siteConfig.colors.primary}` }}
                >
                  {Icon && (
                    <Icon
                      size={40}
                      style={{ color: siteConfig.colors.primary }}
                    />
                  )}
                  <h3 className="mt-4 text-lg font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: siteConfig.colors.primary }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border-l-4"
                style={{ borderLeftColor: siteConfig.colors.primary }}
              >
                <div
                  className="text-6xl font-serif leading-none mb-2"
                  style={{ color: siteConfig.colors.primary }}
                >
                  &ldquo;
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      style={{ color: siteConfig.colors.accent }}
                      className="text-lg"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-base italic leading-relaxed">
                  {review.quote}
                </p>
                <p className="mt-4 text-xs text-gray-400 font-medium">
                  — Verified Google Review
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-16" style={{ backgroundColor: siteConfig.colors.primary }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold">Proudly Serving Lane County</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto text-sm">
            We provide professional landscaping services throughout the Eugene area and all of Lane County.
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {serviceAreas.map((city) => (
              <div
                key={city}
                className="rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold tracking-wide hover:bg-white/25 transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section
        className="py-16"
        style={{ backgroundColor: siteConfig.colors.primaryDark }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-3 text-white/80">
            Call us at{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="font-bold underline underline-offset-2"
            >
              {siteConfig.phone}
            </a>{" "}
            or request a free quote online.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full px-8 py-3 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: siteConfig.colors.accent, color: "#111" }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* ── Sticky mobile call button ── */}
      <a
        href="tel:5415794393"
        className="fixed bottom-6 right-6 z-50 md:hidden rounded-full px-6 py-3 text-sm font-bold shadow-xl transition-opacity hover:opacity-90"
        style={{ backgroundColor: siteConfig.colors.accent, color: "#111" }}
      >
        Call Now
      </a>
    </>
  );
}
