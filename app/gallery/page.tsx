"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { X } from "lucide-react";

const categories = [
  "All",
  "Lawn & Sod",
  "Landscape Installation",
  "Water Features",
  "Hardscaping",
  "Garden Beds",
] as const;

type Category = (typeof categories)[number];

const images: { src: string; category: Exclude<Category, "All"> }[] = [
  { src: "/images/9.jpg", category: "Lawn & Sod" },
  { src: "/images/13.jpg", category: "Lawn & Sod" },
  { src: "/images/12.jpg", category: "Lawn & Sod" },
  { src: "/images/15.jpg", category: "Lawn & Sod" },
  { src: "/images/16.jpg", category: "Landscape Installation" },
  { src: "/images/17.jpg", category: "Landscape Installation" },
  { src: "/images/7.jpg", category: "Water Features" },
  { src: "/images/8.jpg", category: "Water Features" },
  { src: "/images/14.jpg", category: "Hardscaping" },
  { src: "/images/19.jpg", category: "Hardscaping" },
  { src: "/images/6.jpg", category: "Garden Beds" },
  { src: "/images/10.jpg", category: "Garden Beds" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Page header */}
      <section
        className="py-16 text-white text-center"
        style={{ backgroundColor: siteConfig.colors.primary }}
      >
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Work</h1>
          <p className="mt-4 text-white/80 text-lg">
            Browse our portfolio of landscaping projects across Eugene and Lane County.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all shrink-0"
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: siteConfig.colors.primary,
                        color: "#fff",
                      }
                    : {
                        backgroundColor: "#f3f4f6",
                        color: "#374151",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No photos in this category yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {filtered.map((image, i) => (
                <div
                  key={`${image.src}-${i}`}
                  className="relative break-inside-avoid mb-4 cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                  onClick={() => setLightbox(image.src)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.category}
                    className="w-full block hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white bg-black/60 border border-white/50 rounded-full px-3 py-1">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
