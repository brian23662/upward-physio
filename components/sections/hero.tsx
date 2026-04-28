"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero — the first impression. Logo prominent and centered,
 * tagline echoing the logo, two CTAs, scroll cue at the bottom.
 *
 * The animation choreography uses staggered animation-delays
 * (defined inline) so we get a clean, single page-load reveal
 * without needing framer-motion for this above-the-fold content.
 */
export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Atmospheric backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grain opacity-60 pointer-events-none"
      />
      {/* Soft teal glow center */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none"
      />

      <div className="container relative">
        {/* Top eyebrow */}
        <div
          className="flex justify-center mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-ink/10 bg-white/60 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60 animate-subtle-pulse" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-ink/70">
              Now accepting new patients
            </span>
          </div>
        </div>

        {/* Logo */}
        <div
          className="flex justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "250ms" }}
        >
          <div className="relative w-44 sm:w-56 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-brand-ink/10">
            <Image
              src="/logo.jpg"
              alt="Upward Physio — Rise Stronger"
              fill
              priority
              sizes="(min-width: 768px) 256px, 224px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Tagline mirroring the logo */}
        <h1
          className="mt-10 text-center font-display text-display-xl text-brand-ink text-balance opacity-0 animate-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          Rise <span className="italic text-brand-teal">Stronger.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 text-center text-base md:text-lg text-brand-ink/60 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          Physical Therapy with{" "}
          <span className="text-brand-ink font-medium">DJ Keim, DPT</span> —
          care, performance, and prevention designed for life beyond the clinic.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "750ms" }}
        >
          <Button asChild size="lg">
            <Link href="#occupational-health">
              Explore Services <ArrowDown className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">
              Book a Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Scroll cue — sits below CTAs in normal flow so it can never overlap */}
        <div
          className="mt-16 md:mt-20 flex justify-center opacity-0 animate-fade-in pointer-events-none"
          style={{ animationDelay: "1100ms" }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-ink/40">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-brand-ink/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
