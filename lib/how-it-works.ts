/**
 * "How it works" content — explains the engagement model for visitors
 * who are interested but unsure how this differs from a normal clinic.
 *
 * Three steps deliberately: intro → first session → ongoing care.
 * Each step has a one-line headline and a short body paragraph.
 *
 * The trailing "details" array covers practical questions a visitor
 * is likely to have (location, payment, insurance) without forcing
 * them into a separate FAQ page.
 *
 * Service area in `details[0]` is a placeholder pending direct
 * confirmation from DJ.
 */

export interface HowItWorksStep {
  number: string; // e.g. "01"
  title: string;
  body: string;
}

export interface HowItWorksDetail {
  label: string;
  value: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  intro: string;
  steps: HowItWorksStep[];
  details: HowItWorksDetail[];
}

export const HOW_IT_WORKS: HowItWorksContent = {
  eyebrow: "How it works",
  headingLead: "Concierge care,",
  headingItalic: "no clinic required.",
  intro:
    "Most physical therapy is built around the clinic's schedule. Upward Physio is built around yours — sessions happen where you already train, work, or live.",

  steps: [
    {
      number: "01",
      title: "Reach out",
      body: "Send a note through the form below or email DJ directly. Tell him a little about what's going on — an injury, a goal, a question. He reads every message himself.",
    },
    {
      number: "02",
      title: "Free intro call",
      body: "A 20-minute conversation to make sure this is the right fit. You'll walk through your history, what you're trying to do, and how the work would actually look. No pressure, no pitch.",
    },
    {
      number: "03",
      title: "First session, on your turf",
      body: "DJ comes to your home or meets you at a partner gym. You'll do a thorough movement assessment, build the first version of your plan, and leave with something concrete to work on.",
    },
  ],

  details: [
    {
      label: "Where",
      value: "In-home and partner gyms across [Service Area]. Telehealth available for follow-ups.",
    },
    {
      label: "Pricing",
      value: "Cash-pay, transparent rates. Request a quote during your intro call.",
    },
    {
      label: "Insurance",
      value: "Out-of-network. Superbill provided on request — many plans reimburse a portion.",
    },
    {
      label: "Sessions",
      value: "60–75 minutes, one-on-one. Packages available for longer engagements.",
    },
  ],
};
