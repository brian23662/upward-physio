import Image from "next/image";
import { ABOUT } from "@/lib/about";

/**
 * About DJ — the trust-builder. Sits between the hero and the service
 * sections so visitors meet the clinician before they evaluate the work.
 *
 * Layout mirrors ServiceSection's two-column grid: portrait on one side,
 * editorial copy on the other. Reuses the offset-square decoration and
 * the same numbered-eyebrow rhythm so it feels native to the page.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 border-t border-brand-ink/5"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grain opacity-30 pointer-events-none"
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait column */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative offset — matches the service rows for visual continuity */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-2xl border border-brand-teal/15 -translate-x-3 translate-y-3 -z-0"
              />
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl bg-brand-ink/5 shadow-2xl shadow-brand-ink/10">
                {/*
                  Placeholder portrait: when DJ supplies a real headshot,
                  drop it at /public/dj-portrait.jpg and update the src.
                  Until then, the logo stands in so the layout doesn't break.
                */}
                <Image
                  src="/logo.jpg"
                  alt="DJ Keim, DPT — placeholder portrait"
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-brand-teal tracking-[0.2em]">
                00
              </span>
              <span className="h-px w-12 bg-brand-teal/30" />
              <span className="eyebrow">{ABOUT.eyebrow}</span>
            </div>

            <h2 className="font-display text-display-md md:text-display-lg text-brand-ink text-balance leading-[1.05]">
              {ABOUT.headingLead}{" "}
              <span className="italic text-brand-teal">
                {ABOUT.headingItalic}
              </span>
            </h2>

            <div className="mt-8 space-y-5 max-w-xl">
              {ABOUT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-brand-ink/70 leading-relaxed text-pretty"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Credentials — mono-labeled rows for fast scanning */}
            <dl className="mt-10 pt-8 border-t border-brand-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
              {ABOUT.credentials.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">
                    {label}
                  </dt>
                  <dd className="text-sm text-brand-ink/80">{value}</dd>
                </div>
              ))}
            </dl>

            {/* Pull-quote — sets the practice philosophy in one line */}
            <blockquote className="mt-10 pl-6 border-l-2 border-brand-teal max-w-xl">
              <p className="font-display text-xl md:text-2xl text-brand-ink/90 italic leading-snug text-pretty">
                &ldquo;{ABOUT.philosophy}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
