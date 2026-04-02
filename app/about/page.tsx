import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — ${siteConfig.tagline}`,
};

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <>
      {/* Page header */}
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: siteConfig.colors.primary }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{about.headline}</h1>
          <p className="mt-4 text-white/80 text-lg">{siteConfig.tagline}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{about.body}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe great work speaks for itself — which is why so much of our business comes
                from referrals. When a neighbor recommends us to a neighbor, that means everything.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: siteConfig.colors.primary }}
              >
                Work With Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl bg-gray-50 border border-gray-100 p-6 text-center"
                >
                  <p
                    className="text-4xl font-extrabold"
                    style={{ color: siteConfig.colors.primary }}
                  >
                    {h.stat}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 font-medium">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Why Choose Us</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Clock size={32} style={{ color: siteConfig.colors.primary }} />, title: "We Show Up", body: "On time, every time. We respect your schedule." },
              { icon: <MessageCircle size={32} style={{ color: siteConfig.colors.primary }} />, title: "Clear Communication", body: "You'll always know what we're doing and why." },
              { icon: <ShieldCheck size={32} style={{ color: siteConfig.colors.primary }} />, title: "Quality Guaranteed", body: "We stand behind every job. If something's not right, we fix it." },
            ].map((v) => (
              <div key={v.title}>
                <div className="flex justify-center">{v.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16" style={{ backgroundColor: siteConfig.colors.primaryDark }}>
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Transform Your Yard?</h2>
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
    </>
  );
}
