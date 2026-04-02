import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: siteConfig.colors.primaryDark }} className="text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-white/60">{siteConfig.tagline}</p>
            <p className="mt-3 text-sm text-white/60">{siteConfig.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white text-sm uppercase tracking-wide">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-white/70 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/70">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
