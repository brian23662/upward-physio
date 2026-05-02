import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/services";

export function Footer() {
  return (
    <footer className="relative border-t border-brand-ink/10 bg-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-[72px]">
                <Image
                  src="/logo.svg"
                  alt="Upward Physio"
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl text-brand-ink tracking-tight">
                  Upward Physio
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal mt-1">
                  Rise Stronger
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm text-brand-ink/60 max-w-sm leading-relaxed">
              Physical therapy, performance, and prevention — designed around your
              goals by DJ Keim, DPT.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-sm text-brand-ink/70 hover:text-brand-teal transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2.5 text-sm text-brand-ink/70">
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-brand-teal transition-colors"
                >
                  Book a consultation
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@upwardphysio.com"
                  className="hover:text-brand-teal transition-colors"
                >
                  hello@upwardphysio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-8 border-t border-brand-ink/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-brand-ink/50">
            © {new Date().getFullYear()} Upward Physio LLC. All rights reserved.
          </p>
          <p className="text-xs text-brand-ink/50 font-mono uppercase tracking-[0.15em]">
            DJ Keim, DPT · upwardphysio.com
          </p>
        </div>
      </div>
    </footer>
  );
}
