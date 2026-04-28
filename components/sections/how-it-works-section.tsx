import { HOW_IT_WORKS } from "@/lib/how-it-works";

/**
 * "How it works" — sits between the service sections and the contact
 * funnel. Answers the practical questions a visitor has after they're
 * interested ("where, how much, do you take my insurance") without
 * forcing them into a separate FAQ page.
 *
 * The slightly tinted background visually separates this from the
 * service rows above and the contact section below — same trick the
 * dedicated service pages use for their "Services included" block.
 */
export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 bg-brand-ink/[0.02] border-y border-brand-ink/5"
    >
      <div className="container">
        {/* Section header — editorial rhythm consistent with the rest of the site */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">{HOW_IT_WORKS.eyebrow}</p>
          <h2 className="font-display text-display-lg text-brand-ink text-balance leading-[1.05]">
            {HOW_IT_WORKS.headingLead}{" "}
            <span className="italic text-brand-teal">
              {HOW_IT_WORKS.headingItalic}
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-brand-ink/60 leading-relaxed text-pretty">
            {HOW_IT_WORKS.intro}
          </p>
        </div>

        {/* Steps — three-up grid on desktop, stacked on mobile.
            Ordered list for accessibility — these are sequential. */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {HOW_IT_WORKS.steps.map((step) => (
            <li
              key={step.number}
              className="relative pt-8 border-t border-brand-ink/10"
            >
              <span className="absolute -top-px left-0 h-px w-12 bg-brand-teal" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-teal block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-brand-ink mb-3 tracking-tight leading-tight">
                {step.title}
              </h3>
              <p className="text-brand-ink/65 leading-relaxed text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Practical details — the "where, how much, insurance" answers.
            Definition list because semantically that's what it is. */}
        <dl className="mt-20 pt-10 border-t border-brand-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {HOW_IT_WORKS.details.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-teal">
                {label}
              </dt>
              <dd className="text-base text-brand-ink/80 leading-relaxed text-pretty">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
