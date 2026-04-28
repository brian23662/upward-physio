import { ContactForm } from "@/components/contact-form";
import type { ServiceSlug } from "@/lib/services";

interface ContactSectionProps {
  defaultSpecialty?: ServiceSlug;
}

/**
 * The contact "funnel" — present at the bottom of every page.
 * Anchored at #contact so the navbar CTA scrolls here.
 */
export function ContactSection({ defaultSpecialty }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-brand-ink/5"
    >
      {/* Editorial split layout: heading column + form column */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-6">Get in touch</p>
            <h2 className="font-display text-display-lg text-brand-ink text-balance leading-[1.05]">
              Let&apos;s build a plan that{" "}
              <span className="italic text-brand-teal">moves you forward.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-brand-ink/60 max-w-md leading-relaxed">
              Whether you&apos;re recovering, training, or just tired of being told to
              stretch more, send a note. DJ reads every message personally.
            </p>

            <div className="mt-10 pt-10 border-t border-brand-ink/10 space-y-4 text-sm">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal w-16">
                  Email
                </span>
                <a
                  href="mailto:hello@upwardphysio.com"
                  className="text-brand-ink hover:text-brand-teal transition-colors"
                >
                  hello@upwardphysio.com
                </a>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal w-16">
                  Reply
                </span>
                <span className="text-brand-ink/70">
                  Within one business day
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm defaultSpecialty={defaultSpecialty} />
          </div>
        </div>
      </div>
    </section>
  );
}
