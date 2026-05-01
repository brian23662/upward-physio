import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video-player";
import { ContactSection } from "@/components/sections/contact-section";
import { getServiceBySlug, type ServiceSlug } from "@/lib/services";

interface ServicePageProps {
  slug: ServiceSlug;
}

/**
 * Renders the dedicated page for a single service. Each route file
 * (e.g. /occupational-health/page.tsx) is just a thin wrapper that
 * passes its own slug into this template.
 */
export function ServicePage({ slug }: ServicePageProps) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#f4f4f4]">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-ink/50 hover:text-brand-teal transition-colors"
                >
                  Upward Physio
                </Link>
                <span className="h-px w-6 bg-brand-ink/20" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-teal">
                  {service.number} · Specialty
                </span>
              </div>

              <h1 className="font-display text-display-xl text-brand-ink text-balance leading-[0.95]">
                {service.title}
              </h1>

              <p className="mt-8 text-base md:text-lg text-brand-ink/70 leading-relaxed max-w-xl text-pretty">
                {service.longDescription}
              </p>

              <div className="mt-10 flex items-center gap-3">
                <Button asChild size="lg">
                  <Link href="#contact">
                    Book a Consultation <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/">All Services</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <VideoPlayer
                src={service.videoSrc}
                autoPlayImmediately
                aspectClassName="aspect-[4/5] md:aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — editorial grid */}
      <section className="py-20 md:py-28 border-t border-brand-ink/5">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">What you&apos;ll get</p>
            <h2 className="font-display text-display-lg text-brand-ink text-balance leading-[1.05]">
              The approach,{" "}
              <span className="italic text-brand-teal">in detail.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {service.benefits.map((benefit, i) => (
              <div key={benefit.heading} className="relative">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-teal mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-brand-ink mb-3 tracking-tight">
                  {benefit.heading}
                </h3>
                <p className="text-brand-ink/65 leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services list */}
      <section className="py-20 md:py-28 bg-brand-ink/[0.02] border-y border-brand-ink/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-4">Services included</p>
              <h2 className="font-display text-display-lg text-brand-ink text-balance leading-[1.05]">
                Everything we offer in this area.
              </h2>
              <p className="mt-6 text-brand-ink/60 max-w-md leading-relaxed">
                Each program is tailored — these are the building blocks DJ
                draws from when designing your plan.
              </p>
            </div>

            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 self-start">
              {service.keyServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-4 border-b border-brand-ink/10"
                >
                  <Check
                    className="h-4 w-4 text-brand-teal mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-brand-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection defaultSpecialty={service.slug} />
    </>
  );
}
