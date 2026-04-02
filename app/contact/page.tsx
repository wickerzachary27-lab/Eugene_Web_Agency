import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for a free quote.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: siteConfig.colors.primary }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Get a Free Quote</h1>
          <p className="mt-4 text-white/80 text-lg">
            Tell us about your project and we&apos;ll be in touch within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Contact Info</h2>
                <ul className="mt-4 space-y-4 text-gray-600 text-sm">
                  <li className="flex gap-3">
                    <span className="text-lg">📞</span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="hover:underline font-medium"
                      style={{ color: siteConfig.colors.primary }}
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lg">✉️</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:underline"
                      style={{ color: siteConfig.colors.primary }}
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lg">📍</span>
                    <span>{siteConfig.address}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">Services We Quote</h2>
                <ul className="mt-4 space-y-2">
                  {siteConfig.services.map((s) => (
                    <li key={s.name} className="flex items-center gap-2 text-sm text-gray-600">
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
