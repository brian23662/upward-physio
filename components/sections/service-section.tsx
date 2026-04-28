"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/video-player";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

interface ServiceSectionProps {
  service: Service;
  /** Even-indexed sections put video on the right; odd reverse it. */
  reverse?: boolean;
  /** Whether this is the first/anchor section, gets a slightly different intro. */
  isFirst?: boolean;
}

/**
 * One service "row" on the home page. Alternates text/video sides
 * on desktop; stacks naturally on mobile.
 */
export function ServiceSection({
  service,
  reverse = false,
  isFirst = false,
}: ServiceSectionProps) {
  return (
    <section
      id={service.slug}
      className={cn(
        "relative py-20 md:py-32",
        // First section gets a subtle textured background to separate from hero
        isFirst && "bg-grain"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",
            reverse && "lg:[&>div:first-child]:order-2"
          )}
        >
          {/* Text column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-brand-teal tracking-[0.2em]">
                {service.number}
              </span>
              <span className="h-px w-12 bg-brand-teal/30" />
              <span className="eyebrow">Specialty</span>
            </div>

            <h2 className="font-display text-display-md md:text-display-lg text-brand-ink text-balance leading-[1.05]">
              {service.title}
            </h2>

            <p className="mt-6 text-base md:text-lg text-brand-ink/70 leading-relaxed max-w-xl text-pretty">
              {service.shortDescription}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href={`/${service.slug}`}>
                  Learn More <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Video column */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Decorative offset square — adds editorial depth */}
              <div
                className={cn(
                  "absolute -inset-4 rounded-2xl border border-brand-teal/15 -z-0",
                  reverse ? "translate-x-3 translate-y-3" : "-translate-x-3 translate-y-3"
                )}
                aria-hidden="true"
              />
              <VideoPlayer
                src={service.videoSrc}
                aspectClassName="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
