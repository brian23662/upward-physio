"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar that changes shadow + border state on scroll.
 * Mobile menu is a slide-down panel; desktop nav is inline.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /**
   * Anchor-aware contact: on the home page we scroll to #contact,
   * on service pages we navigate home to the form anchor.
   */
  const contactHref = "/#contact";
  const aboutHref = "/#about";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-brand-ink/5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          : "bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Upward Physio home">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src="/logo.jpg"
              alt="Upward Physio"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg text-brand-ink tracking-tight">
              Upward Physio
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal mt-0.5">
              Rise Stronger
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href={aboutHref}
            className="link-underline text-sm text-brand-ink/80 hover:text-brand-ink transition-colors"
          >
            About
          </Link>
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="link-underline text-sm text-brand-ink/80 hover:text-brand-ink transition-colors"
            >
              {service.navLabel}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={contactHref}>Contact Us</Link>
          </Button>
          <button
            className="lg:hidden p-2 -mr-2 text-brand-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out bg-white border-t border-brand-ink/5",
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-1">
          <Link
            href={aboutHref}
            onClick={() => setMobileOpen(false)}
            className="flex items-baseline gap-4 py-3 border-b border-brand-ink/5 group"
          >
            <span className="font-mono text-xs text-brand-teal">00</span>
            <span className="font-display text-xl text-brand-ink group-hover:text-brand-teal transition-colors">
              About
            </span>
          </Link>
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              onClick={() => setMobileOpen(false)}
              className="flex items-baseline gap-4 py-3 border-b border-brand-ink/5 group"
            >
              <span className="font-mono text-xs text-brand-teal">
                0{i + 1}
              </span>
              <span className="font-display text-xl text-brand-ink group-hover:text-brand-teal transition-colors">
                {service.title}
              </span>
            </Link>
          ))}
          <Button
            asChild
            className="mt-6"
            onClick={() => setMobileOpen(false)}
          >
            <Link href={contactHref}>Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
