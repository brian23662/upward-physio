import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * About — DJ's professional bio. Editorial split layout matching
 * the contact section: sticky headline column on the left, content on the right.
 *
 * Photo lives in /public/dj-headshot.jpg (drop in a square or 3/4 portrait).
 * Falls back gracefully — Next/Image will 404 visibly if missing, which is
 * the desired behavior in dev so we notice.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 border-t border-brand-ink/5"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left rail — sticky headline + portrait */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow mb-6">About</p>
            <h2 className="font-display text-display-lg text-brand-ink text-balance leading-[1.05]">
              Meet{" "}
              <span className="italic text-brand-teal">DJ Keim,</span>{" "}
              <span className="text-brand-ink/60 font-normal text-display-md">
                PT, DPT, CSCS
              </span>
            </h2>

            {/* Portrait */}
            <div className="mt-10 relative">
              <div
                className="absolute -inset-3 rounded-2xl border border-brand-teal/15 -z-0 -translate-x-2 translate-y-2"
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-[3/4] w-full max-w-xs rounded-2xl overflow-hidden shadow-xl shadow-brand-ink/10 bg-brand-ink/5">
                <Image
                  src="/dj-headshot.jpg"
                  alt="DJ Keim, Doctor of Physical Therapy"
                  fill
                  sizes="(min-width: 768px) 320px, 280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column — bio + credentials */}
          <div className="lg:col-span-7">
            {/* Lead paragraph — his own voice, lightly polished */}
            <p className="font-display text-2xl md:text-3xl text-brand-ink leading-snug text-balance">
              Helping people experience{" "}
              <span className="italic text-brand-teal">pain-free movement</span>{" "}
              and live a life of improved health and wellness.
            </p>

            <div className="mt-10 space-y-6 text-base md:text-lg text-brand-ink/70 leading-relaxed">
              <p>
                DJ is a physical therapist specializing in orthopedics, strength
                and conditioning, occupational health, and workforce injury
                prevention. After earning his Doctor of Physical Therapy at
                Washington University School of Medicine in St. Louis, he
                relocated to Washington, D.C., where he spent four years
                building outpatient orthopedic experience at The Centers for
                Advanced Orthopaedics — and concurrently delivered mobile,
                in-home care through Luna Physical Therapy.
              </p>
              <p>
                In 2024 he joined the Washington Metropolitan Area Transit
                Authority, where he developed the agency&apos;s first
                preventative physical therapy program for employees across bus
                and rail maintenance, operations, administration, and police
                — work that now anchors his focus on injury prevention at
                scale. Today, based in Denver, DJ serves as Center Therapy
                Director at MBI Industrial Medicine and provides orthopedic
                and performance PT through Momenta Fitness.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="mt-14 pt-10 border-t border-brand-ink/10">
              <p className="eyebrow mb-8">Credentials</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {/* Education */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal mb-3">
                    Education
                  </p>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <p className="text-brand-ink font-medium">
                        Doctor of Physical Therapy
                      </p>
                      <p className="text-brand-ink/60">
                        Washington University School of Medicine in St. Louis
                      </p>
                      <p className="text-brand-ink/40 font-mono text-xs mt-1">
                        2017 – 2020
                      </p>
                    </li>
                    <li>
                      <p className="text-brand-ink font-medium">
                        B.S., Health Management &amp; Exercise Science
                      </p>
                      <p className="text-brand-ink/60">
                        Southeast Missouri State University{" "}
                        <span className="italic">— Magna Cum Laude</span>
                      </p>
                      <p className="text-brand-ink/40 font-mono text-xs mt-1">
                        2013 – 2017
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Certifications */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal mb-3">
                    Licenses &amp; certifications
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-baseline gap-3">
                      <span className="font-mono text-brand-teal text-xs w-12 shrink-0">
                        DPT
                      </span>
                      <span className="text-brand-ink/70">
                        Doctor of Physical Therapy
                      </span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="font-mono text-brand-teal text-xs w-12 shrink-0">
                        CSCS
                      </span>
                      <span className="text-brand-ink/70">
                        Certified Strength &amp; Conditioning Specialist
                      </span>
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="font-mono text-brand-teal text-xs w-12 shrink-0">
                        CPT
                      </span>
                      <span className="text-brand-ink/70">
                        Certified Personal Trainer, ACSM
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Beyond the clinic */}
            <div className="mt-12 pt-10 border-t border-brand-ink/10">
              <p className="eyebrow mb-6">Beyond the clinic</p>
              <p className="text-base text-brand-ink/70 leading-relaxed">
                DJ has served as a volunteer with{" "}
                <span className="text-brand-ink font-medium">
                  myTEAM TRIUMPH
                </span>
                , a ride-along program for children, teens, adults, and
                veterans with disabilities, and as a volunteer firefighter with
                the Leopold Volunteer Fire Department in Bollinger County,
                Missouri.
              </p>
            </div>

            {/* Soft CTA */}
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-teal hover:text-brand-ink transition-colors group"
              >
                Work with DJ
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
