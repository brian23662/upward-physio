/**
 * About DJ — single source of truth for bio copy.
 *
 * Confirmed from public LinkedIn: post-nominals (PT, DPT, CSCS),
 * education (WashU DPT 2020), and the 7-year career trajectory.
 *
 * Location is a placeholder pending direct confirmation — LinkedIn
 * shows recent Denver-area roles but DJ is based in the New Smyrna
 * Beach area, so service area needs to come from him directly.
 */

export interface AboutContent {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  paragraphs: string[];
  credentials: { label: string; value: string }[];
  philosophy: string;
}

export const ABOUT: AboutContent = {
  eyebrow: "About DJ",
  headingLead: "A clinician who",
  headingItalic: "trains alongside you.",

  paragraphs: [
    // Hook — leads with the combination that defines the practice.
    // DPT + CSCS together is the rare credential pair that justifies
    // the four-service span on the home page.
    "I'm Daniel — DJ to most people. Doctor of Physical Therapy out of Washington University in St. Louis, Certified Strength and Conditioning Specialist, and seven years into a career that's deliberately straddled clinical orthopedics, in-home concierge care, and large-scale occupational health.",
    // Proof — the three operating modes he's actually worked in.
    // Each clause maps to a service line on the site, which is the
    // point: this isn't a list of things he aspires to do, it's a
    // list of things he's already done at scale.
    "I've spent four years in a busy outpatient orthopedic practice, three years running one-on-one in-home and gym-based sessions for adult patients across the DC area, and a year building the first preventative physical therapy program for a major metropolitan transit agency — bus and rail crews, operators, dispatchers, and transit police.",
    // Current state — honest about the dual-track reality.
    // "Building toward full-time" frames the build-up phase as
    // intentional rather than provisional.
    "These days I work full-time in occupational health and take on concierge clients on the side. Upward Physio is the practice I'm building toward full-time — bringing those modes under one roof.",
    // Why cash-pay — pre-empts the insurance question and frames
    // the model as a feature, not a limitation.
    "I work cash-pay so I can give you the time and attention the work actually requires. No 15-minute evaluations, no surprise insurance denials, no hand-offs to a tech.",
  ],

  credentials: [
    // All four are confirmed from LinkedIn except Currently, which
    // pends DJ's direct confirmation of his service area.
    { label: "Doctorate", value: "DPT — Washington University in St. Louis, 2020" },
    { label: "Certification", value: "CSCS (NSCA) — Strength & Conditioning" },
    { label: "Experience", value: "7 years across orthopedic, concierge & occupational care" },
    { label: "Currently", value: "[Service Area] — in-home & partner gyms" },
  ],

  // Voice — written to sound like a clinician who's done the time, not
  // a marketer. DJ should swap this for his own line if anything in his
  // own writing fits better.
  philosophy:
    "The goal isn't to graduate you from physical therapy. It's to hand you a body — and an understanding of it — that doesn't need me anymore.",
};
