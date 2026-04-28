/**
 * Centralized service content. Both the home page sections and the
 * dedicated service pages pull from this file, so copy stays consistent.
 */

export type ServiceSlug =
  | "occupational-health"
  | "strength-conditioning"
  | "orthopedics"
  | "injury-prevention"
  | "workplace-wellness";

export interface Service {
  slug: ServiceSlug;
  title: string;
  navLabel: string;
  number: string; // for editorial numbering (01 / 02 / ...)
  shortDescription: string; // home page
  longDescription: string; // dedicated page hero
  videoSrc: string;
  benefits: { heading: string; body: string }[];
  keyServices: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "occupational-health",
    title: "Occupational Health",
    navLabel: "Occupational Health",
    number: "01",
    shortDescription:
      "Specialized care for work-related injuries, ergonomic assessments, and return-to-work programs that keep you performing at your best.",
    longDescription:
      "From the first incident report to your full return to duty, we partner with you and your employer to make recovery clear, measurable, and sustainable. Our occupational health programs are built around the demands of your specific job — not a generic protocol.",
    videoSrc: "/videos/occupational_health.mp4",
    benefits: [
      {
        heading: "Job-specific recovery",
        body: "Treatment plans calibrated to the physical demands of your actual role, from desk work to heavy industry.",
      },
      {
        heading: "Ergonomic assessments",
        body: "On-site or virtual evaluations that identify and resolve injury-causing patterns before they sideline you.",
      },
      {
        heading: "Return-to-work readiness",
        body: "Functional capacity testing and graduated return programs that protect you and satisfy employer requirements.",
      },
      {
        heading: "Documentation that works",
        body: "Clear, timely reporting for case managers, employers, and insurance — so the paperwork never slows your recovery.",
      },
    ],
    keyServices: [
      "Functional Capacity Evaluations (FCE)",
      "Post-injury rehabilitation",
      "Ergonomic workstation assessment",
      "Return-to-work programs",
      "Work conditioning and hardening",
      "Pre-employment screening",
    ],
  },
  {
    slug: "strength-conditioning",
    title: "Strength & Conditioning",
    navLabel: "Strength & Conditioning",
    number: "02",
    shortDescription:
      "Personalized programs to build strength, enhance athletic performance, and help you move with power and confidence.",
    longDescription:
      "Strength training meets clinical expertise. Whether you're chasing a personal record, returning from injury, or simply want to feel athletic again, we design programs that respect your body and push it forward.",
    videoSrc: "/videos/strength_conditioning.mp4",
    benefits: [
      {
        heading: "Built around you",
        body: "Programs anchored in a thorough movement assessment — your goals, your history, your trajectory.",
      },
      {
        heading: "Performance-driven",
        body: "Periodized training that progresses intelligently, with measurable milestones along the way.",
      },
      {
        heading: "Injury-aware",
        body: "Every program is filtered through a clinician's eye, so you build strength without breaking down.",
      },
      {
        heading: "Sustainable results",
        body: "We teach you the why behind every movement, so the gains outlast our work together.",
      },
    ],
    keyServices: [
      "Movement and performance assessment",
      "Strength program design",
      "Sport-specific conditioning",
      "Power and explosiveness training",
      "Mobility and flexibility programming",
      "Recovery and load management",
    ],
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    navLabel: "Orthopedics",
    number: "03",
    shortDescription:
      "Expert rehabilitation for musculoskeletal conditions, post-surgical recovery, and joint health.",
    longDescription:
      "Pain isn't a personality trait. Whether you're navigating a new diagnosis, recovering from surgery, or finally addressing something you've ignored for years, our orthopedic care meets you where you are and gets you where you want to be.",
    videoSrc: "/videos/orthopedics.mp4",
    benefits: [
      {
        heading: "Diagnostic precision",
        body: "Hands-on evaluation paired with movement analysis to identify root causes — not just symptoms.",
      },
      {
        heading: "Post-surgical expertise",
        body: "Stage-by-stage rehabilitation that follows surgeon protocols while pushing you safely toward function.",
      },
      {
        heading: "Manual therapy",
        body: "Skilled hands-on techniques that complement active rehabilitation for faster, more durable outcomes.",
      },
      {
        heading: "Whole-body perspective",
        body: "Knee pain rarely starts at the knee. We treat the system, not just the site.",
      },
    ],
    keyServices: [
      "Post-surgical rehabilitation",
      "Joint replacement recovery",
      "Tendon and ligament rehab",
      "Spine and back care",
      "Manual therapy and mobilization",
      "Therapeutic exercise progression",
    ],
  },
  {
    slug: "injury-prevention",
    title: "Injury Prevention",
    navLabel: "Injury Prevention",
    number: "04",
    shortDescription:
      "Proactive strategies and training to reduce injury risk in sports, work, and daily life.",
    longDescription:
      "The best injury is the one that never happens. Our prevention programs catch the small stuff — the asymmetries, compensations, and red flags — before they become the reason you can't do what you love.",
    videoSrc: "/videos/injury_prevention.mp4",
    benefits: [
      {
        heading: "Movement screening",
        body: "Comprehensive baseline assessments that surface hidden risk factors specific to your activities.",
      },
      {
        heading: "Targeted programming",
        body: "Corrective work that addresses your unique imbalances rather than generic mobility flows.",
      },
      {
        heading: "Education first",
        body: "Understand your body so you can adjust load, form, and recovery in real time — long after our work ends.",
      },
      {
        heading: "Team and individual options",
        body: "Whether you're a solo athlete or a roster of fifty, we scale prevention work to your context.",
      },
    ],
    keyServices: [
      "Functional movement screening",
      "Sport-specific prehab",
      "Running gait analysis",
      "Load management consultation",
      "Team-wide prevention programs",
      "Recovery strategy design",
    ],
  },
  {
    slug: "workplace-wellness",
    title: "Workplace Wellness",
    navLabel: "Workplace Wellness",
    number: "05",
    shortDescription:
      "Comprehensive programs that boost employee health, productivity, and satisfaction through ergonomics and wellness initiatives.",
    longDescription:
      "Healthy teams ship better work. We partner with employers to build wellness programs that move the metrics that matter — fewer claims, lower absenteeism, and people who actually like coming to work.",
    videoSrc: "/videos/workplace_wellness.mp4",
    benefits: [
      {
        heading: "On-site presence",
        body: "Recurring clinician visits that catch issues early and build trust with your workforce.",
      },
      {
        heading: "Workstation optimization",
        body: "Ergonomic setups designed around the actual humans who'll use them, not catalog defaults.",
      },
      {
        heading: "Programs that scale",
        body: "From small teams to enterprise rollouts, we build wellness initiatives that fit your size and culture.",
      },
      {
        heading: "Measurable outcomes",
        body: "Clear reporting on engagement, injury rates, and program ROI — wellness you can defend at budget time.",
      },
    ],
    keyServices: [
      "On-site physical therapy",
      "Ergonomic program design",
      "Health screenings and education",
      "Movement breaks and active workplace design",
      "Wellness committee consulting",
      "Outcome reporting and analytics",
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);
