"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // Replace this with your actual form submission logic
    // (e.g., Resend, Formspree, EmailJS, or a Next.js API route)
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-2xl">✅</p>
        <h3 className="mt-3 text-lg font-bold text-gray-900">Message Sent!</h3>
        <p className="mt-2 text-sm text-gray-500">
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-medium underline underline-offset-2"
          style={{ color: siteConfig.colors.primary }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
            style={{ "--tw-ring-color": siteConfig.colors.primary } as React.CSSProperties}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:border-transparent"
        >
          <option value="">Select a service...</option>
          {siteConfig.services.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell Us About Your Project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent resize-none"
          placeholder="Describe what you need, when you're available, or any other details..."
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us at {siteConfig.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-full py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: siteConfig.colors.primary }}
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
