import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Sprout,
  Scissors,
  Flower2,
  Trees,
  Truck,
  Leaf,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore all services offered by ${siteConfig.name}.`,
};

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Sprout,
  Scissors,
  Flower2,
  Trees,
  Truck,
  Leaf,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: siteConfig.colors.primary }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Services</h1>
          <p className="mt-4 text-white/80 text-lg">
            Professional, reliable work — backed by years of local experience.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.name}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:shadow-lg transition-shadow"
                >
                  {Icon && (
                    <Icon
                      size={36}
                      style={{ color: siteConfig.colors.primary }}
                    />
                  )}
                  <h2
                    className="mt-4 text-xl font-bold"
                    style={{ color: siteConfig.colors.primary }}
                  >
                    {service.name}
                  </h2>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-block text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
                    style={{ color: siteConfig.colors.primary }}
                  >
                    Request this service →
                  </Link>
                </div>
              );
            })}
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
