// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to customize the entire website
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // Business identity
  name: "All Seasons Landscape Maintenance",
  tagline: "Eugene's Trusted Landscaping Experts Since 1996",
  description:
    "Professional landscape maintenance and installation serving Eugene and Lane County since 1996. Specializing in sod installation, lawn care, and full landscape transformations.",

  // Contact info
  phone: "(541) 579-4393",
  email: "info@allseasonslandscape.com",
  address: "90000 Prairie Rd Unit #57, Eugene, OR 97402",

  // Brand colors (hex) — also drives all button/accent styling
  colors: {
    primary: "#2d6a2d",     // deep forest green
    primaryDark: "#1e4d1e", // hover state
    accent: "#f5a623",      // warm orange/gold
  },

  // Home page hero section
  hero: {
    headline: "Transform Your Outdoor Space Into a Personal Oasis",
    subheadline:
      "Eugene's landscaping experts since 1996 — sod installation, lawn maintenance, full landscape transformations, and more. 4.9 stars across 28 reviews.",
    ctaText: "Get a Free Quote",
    ctaHref: "/contact",
    secondaryCtaText: "See Our Services",
    secondaryCtaHref: "/services",
  },

  // Services — shown on both the Home page (cards) and the Services page (detail)
  services: [
    {
      name: "Sod Installation",
      icon: "Sprout",
      description:
        "Professional sod installation for instant, lush green lawns. We prep the ground right so your new lawn thrives from day one.",
    },
    {
      name: "Lawn Mowing & Maintenance",
      icon: "Scissors",
      description:
        "Regular mowing, edging, aerating, and overseeding that keeps your lawn sharp week after week.",
    },
    {
      name: "Garden Bed Maintenance",
      icon: "Flower2",
      description:
        "Weeding, mulching, trimming, and planting to keep your garden beds clean, healthy, and beautiful all season.",
    },
    {
      name: "Landscape Installation",
      icon: "Trees",
      description:
        "Full landscape design and installation — from concept to completion, we build outdoor spaces you'll love.",
    },
    {
      name: "Driveway Grading & Gravel",
      icon: "Truck",
      description:
        "Expert grading, leveling, and gravel installation for driveways and yards. Proper drainage and a clean finish every time.",
    },
    {
      name: "Yard Clean-Up & Hauling",
      icon: "Leaf",
      description:
        "Seasonal clean-ups, yard overhauls, and debris hauling. We leave your property looking its best.",
    },
  ],

  // About page content
  about: {
    headline: "Local. Experienced. Passionate About Green Spaces.",
    body: "Since 1996, All Seasons Landscape Maintenance has served Eugene and Lane County with professional, high-quality landscaping. We're much more than ordinary landscapers — we're dedicated to helping you create beautiful, timeless outdoor spaces that exceed your expectations. Every job gets our full attention, from the first call to the final cleanup.",
    highlights: [
      { stat: "29+", label: "Years Experience" },
      { stat: "4.9★", label: "Star Rating" },
      { stat: "Lane County", label: "Proudly Serving" },
    ],
  },

  // Navigation links
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
