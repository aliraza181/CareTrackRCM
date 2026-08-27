/**
 * Site content for CareTrack RCM (demo).
 *
 * ⚠️  ALL numbers, names, quotes, certifications and logos below are
 *     PLACEHOLDER / DEMO data. Replace with verified information before
 *     going to production. Nothing here is a real customer or claim.
 */

export const company = {
  name: "CareTrack RCM",
  shortName: "CareTrack",
  tagline: "Revenue Cycle Management for Healthcare",
  phone: "(555) 010-2200",
  email: "hello@caretrackrcm.example.com",
};

export const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Specialties", href: "#specialties" },
  { label: "Technology", href: "#technology" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#security" },
] as const;

/* ---------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Revenue cycle management, fully managed",
  title: "Turn your medical billing into a revenue engine",
  highlight: "revenue engine",
  subtitle:
    "We help practices reduce denials, recover aging A/R, and get paid faster — without adding more work to your team.",
  primaryCta: "Get your free revenue assessment",
  secondaryCta: "Talk to a billing expert",
  trust: "HIPAA-compliant workflows · Specialty-trained billers · No long-term lock-in",
};

/* Demo dashboard metrics (illustrative only) */
export const dashboard = {
  period: "Last 90 days",
  collections: { label: "Collections", value: "$4.24M", delta: "+18.4%" },
  metrics: [
    { label: "Clean claim rate", value: "98.2%", tone: "positive" as const },
    { label: "Denial rate", value: "4.1%", tone: "positive" as const },
    { label: "A/R > 90 days", value: "−27%", tone: "positive" as const },
    { label: "Days in A/R", value: "31", tone: "neutral" as const },
  ],
  // Monthly collections trend (demo), normalized 0–100 for the chart
  trend: [42, 46, 44, 52, 58, 55, 63, 68, 66, 74, 79, 86],
  // Payer mix (demo)
  payerMix: [
    { label: "Commercial", value: 46, color: "#0E7490" },
    { label: "Medicare", value: 28, color: "#2DD4BF" },
    { label: "Medicaid", value: 16, color: "#22A6BF" },
    { label: "Self-pay", value: 10, color: "#94A3B8" },
  ],
};

/* --------------------------------------------------------------- Trust */

export const trustStrip = {
  intro: "Built for the operational and compliance realities of healthcare",
  items: [
    { stat: "HIPAA", label: "Compliant workflows" },
    { stat: "SOC 2", label: "Controls (in progress)" },
    { stat: "35+", label: "Specialties supported" },
    { stat: "98%+", label: "Clean claim rate*" },
    { stat: "24/7", label: "Claim monitoring" },
  ],
  footnote: "*Illustrative demo figure — replace with verified data.",
};

/* ------------------------------------------------------------ Problems */

export const problems = {
  eyebrow: "The revenue you already earned",
  title: "Your practice shouldn't have to fight to get paid",
  subtitle:
    "Most revenue leakage isn't dramatic — it's the steady drip of denials, aging balances, and manual work that never quite gets caught up.",
  items: [
    {
      key: "denials",
      title: "Denied & rejected claims",
      body: "Revenue gets stuck when claims bounce back for avoidable coding, eligibility, or documentation reasons.",
      stat: "1 in 7",
      statLabel: "claims denied on first pass (industry avg.)",
    },
    {
      key: "ar",
      title: "Aging accounts receivable",
      body: "Outstanding balances sit on the books for months, quietly eroding cash flow and collectibility.",
      stat: "60+ days",
      statLabel: "where recovery odds fall sharply",
    },
    {
      key: "complexity",
      title: "Billing complexity",
      body: "Staff burn hours navigating shifting payer rules instead of focusing on patients and the practice.",
      stat: "12+ hrs",
      statLabel: "weekly on rework at a typical practice",
    },
    {
      key: "visibility",
      title: "Limited financial visibility",
      body: "Leadership can't see where revenue is being lost, so problems compound before anyone reacts.",
      stat: "No view",
      statLabel: "into denial root causes or payer trends",
    },
  ],
};

/* ------------------------------------------------------------ Workflow */

export const workflow = {
  eyebrow: "One revenue cycle, fully managed",
  title: "We own the busywork across the entire cycle",
  subtitle:
    "From eligibility to A/R recovery, every step is handled, tracked, and reported — so nothing falls through the cracks.",
  steps: [
    { label: "Patient intake", icon: "person" },
    { label: "Eligibility", icon: "verified" },
    { label: "Documentation", icon: "description" },
    { label: "Coding", icon: "code" },
    { label: "Claim submission", icon: "send" },
    { label: "Payment posting", icon: "payments" },
    { label: "Denial management", icon: "gpp" },
    { label: "A/R recovery", icon: "savings" },
  ],
};

/* ------------------------------------------------------------ Services */

export const services = {
  eyebrow: "Services",
  title: "Everything your revenue cycle needs, in four practice areas",
  subtitle:
    "Engage the full cycle or just the pieces you need — pricing and staffing scale with your practice.",
  categories: [
    {
      key: "rcm",
      title: "Revenue Cycle Management",
      body: "End-to-end billing that keeps cash flowing and follows every dollar to resolution.",
      capabilities: [
        "Medical billing",
        "Claims management",
        "Payment posting",
        "Denial management",
        "A/R recovery",
      ],
    },
    {
      key: "coding",
      title: "Clinical & Coding",
      body: "Certified coders and documentation support that protect revenue and reduce compliance risk.",
      capabilities: [
        "Medical coding",
        "Documentation support",
        "Coding audits",
        "Charge capture",
      ],
    },
    {
      key: "ops",
      title: "Practice Operations",
      body: "The front-office groundwork that prevents denials before a claim is ever sent.",
      capabilities: [
        "Eligibility verification",
        "Provider credentialing",
        "Patient billing & support",
        "Scheduling support",
      ],
    },
    {
      key: "intel",
      title: "Technology & Intelligence",
      body: "Analytics and automation that turn your billing data into decisions.",
      capabilities: [
        "Revenue analytics",
        "Custom reporting",
        "Workflow automation",
        "EHR / PM integrations",
      ],
    },
  ],
};

/* ------------------------------------------------------------ Process */

export const process = {
  eyebrow: "How it works",
  title: "A partnership that starts by finding your leaks",
  steps: [
    {
      no: "01",
      title: "Analyze",
      body: "We evaluate your current revenue cycle and pinpoint exactly where revenue is leaking.",
    },
    {
      no: "02",
      title: "Optimize",
      body: "We prioritize the billing, coding, denial, and A/R opportunities with the biggest payoff.",
    },
    {
      no: "03",
      title: "Manage",
      body: "Our team runs the workflow alongside yours, with clear ownership and SLAs.",
    },
    {
      no: "04",
      title: "Improve",
      body: "You get ongoing reporting and optimization — performance compounds over time.",
    },
  ],
};

/* --------------------------------------------------------- Specialties */

export const specialties = {
  eyebrow: "Specialties",
  title: "Billing tuned to how your specialty actually gets paid",
  subtitle:
    "Coding rules, payer behavior, and denial patterns differ by specialty. Our teams are trained for yours.",
  items: [
    {
      key: "primary-care",
      name: "Primary Care",
      challenge:
        "High volume, thin margins, and frequent eligibility churn make small leaks add up fast.",
      focus: ["Eligibility automation", "Preventive-visit coding", "Denial triage"],
    },
    {
      key: "cardiology",
      name: "Cardiology",
      challenge:
        "Complex procedural coding and prior-auth requirements create dense denial risk.",
      focus: ["Procedure coding audits", "Prior-auth tracking", "Modifier accuracy"],
    },
    {
      key: "orthopedics",
      name: "Orthopedics",
      challenge:
        "Surgical bundles and global periods are easy to under-capture and over-deny.",
      focus: ["Global-period logic", "Surgical charge capture", "Implant billing"],
    },
    {
      key: "behavioral-health",
      name: "Behavioral Health",
      challenge:
        "Time-based codes and authorization limits make clean claims unusually fragile.",
      focus: ["Time-based coding", "Auth limit monitoring", "Telehealth rules"],
    },
    {
      key: "dermatology",
      name: "Dermatology",
      challenge:
        "Mixed medical/cosmetic visits and pathology billing blur the line on what's payable.",
      focus: ["Medical vs. cosmetic", "Pathology billing", "Bundling checks"],
    },
    {
      key: "gastroenterology",
      name: "Gastroenterology",
      challenge:
        "Screening-vs-diagnostic distinctions drive a large share of avoidable denials.",
      focus: ["Screening logic", "Facility coordination", "Anesthesia coding"],
    },
  ],
};

/* -------------------------------------------------------- Technology */

export const technology = {
  eyebrow: "Technology",
  title: "Technology that makes your revenue cycle smarter",
  subtitle:
    "Automation handles the repetitive checks; your team and ours focus on the exceptions that need judgment.",
  features: [
    {
      title: "Automated claim scrubbing",
      body: "Every claim is checked against payer rules before submission to catch errors early.",
    },
    {
      title: "Denial identification",
      body: "Denials are categorized by root cause so recurring issues get fixed, not just reworked.",
    },
    {
      title: "Real-time A/R monitoring",
      body: "Aging buckets and worklists stay current so nothing slips past a critical follow-up window.",
    },
    {
      title: "Revenue analytics",
      body: "Dashboards surface payer trends, denial drivers, and collection velocity at a glance.",
    },
    {
      title: "EHR / PM integrations",
      body: "We connect to your existing systems instead of forcing a disruptive migration.",
    },
    {
      title: "Automated reporting",
      body: "Scheduled, plain-language reports keep leadership aligned without chasing spreadsheets.",
    },
  ],
};

/* -------------------------------------------------------- Before/After */

export const transformation = {
  eyebrow: "Before & after",
  title: "From reactive billing to a managed revenue engine",
  before: {
    title: "Before CareTrack",
    items: [
      "Manual, error-prone claim entry",
      "High first-pass denial rates",
      "A/R aging past 90+ days",
      "Little visibility into revenue leaks",
      "Overloaded front-office staff",
      "Cash flow that swings month to month",
    ],
  },
  after: {
    title: "With CareTrack",
    items: [
      "Automated scrubbing before submission",
      "Cleaner claims, fewer denials",
      "A/R worked to resolution on schedule",
      "Real-time reporting for leadership",
      "A dedicated, specialty-trained team",
      "Predictable, optimized collections",
    ],
  },
};

/* ------------------------------------------------------------ Results */

export const results = {
  eyebrow: "Results",
  title: "The numbers we optimize for",
  subtitle:
    "Illustrative targets shown as demo data — your assessment establishes a real baseline and goals.",
  metrics: [
    { value: 98, suffix: "%", label: "Clean claim rate", sub: "first-pass acceptance" },
    { value: 32, prefix: "−", suffix: "%", label: "Denials reduced", sub: "within first two quarters" },
    { value: 19, prefix: "+", suffix: "%", label: "Net collections lift", sub: "vs. prior baseline" },
    { value: 27, prefix: "−", suffix: "%", label: "A/R over 90 days", sub: "aging balance reduction" },
    { value: 31, suffix: " days", label: "Days in A/R", sub: "down from 48 days" },
    { value: 24, suffix: "/7", label: "Claim monitoring", sub: "continuous oversight" },
  ],
  footnote: "Demo figures for layout purposes. Replace with verified results.",
};

/* -------------------------------------------------------- Case studies */

export const caseStudies = {
  eyebrow: "Case studies",
  title: "How the model plays out in practice",
  subtitle: "Representative, anonymized scenarios shown as demo data.",
  items: [
    {
      practice: "Multi-provider cardiology group",
      specialty: "Cardiology · 9 providers",
      challenge:
        "Rising prior-auth denials and A/R creeping past 90 days were squeezing cash flow.",
      intervention:
        "Introduced prior-auth tracking, modifier audits, and a dedicated denial-recovery worklist.",
      result: [
        { value: "−34%", label: "denials" },
        { value: "−22 days", label: "in A/R" },
        { value: "+16%", label: "net collections" },
      ],
    },
    {
      practice: "Independent primary care practice",
      specialty: "Primary Care · 4 providers",
      challenge:
        "Eligibility errors and manual entry drove avoidable rejections and staff burnout.",
      intervention:
        "Automated eligibility checks and claim scrubbing, plus front-office workflow support.",
      result: [
        { value: "98.4%", label: "clean claims" },
        { value: "−41%", label: "rejections" },
        { value: "11 hrs", label: "staff time saved/wk" },
      ],
    },
    {
      practice: "Behavioral health network",
      specialty: "Behavioral Health · 20+ clinicians",
      challenge:
        "Authorization limits and time-based coding created fragile, frequently denied claims.",
      intervention:
        "Auth-limit monitoring, time-based coding checks, and telehealth rule automation.",
      result: [
        { value: "−29%", label: "denials" },
        { value: "+21%", label: "collections" },
        { value: "6 days", label: "faster payment" },
      ],
    },
  ],
};

/* -------------------------------------------------------- Testimonials */

export const testimonials = {
  eyebrow: "In their words",
  title: "What partnering with CareTrack feels like",
  subtitle: "Placeholder quotes for layout — replace with verified testimonials.",
  items: [
    {
      quote:
        "We finally have visibility into where revenue was leaking. Denials are down and our team spends far less time on rework.",
      name: "Practice Administrator",
      role: "Multi-specialty group",
      org: "[Demo testimonial]",
    },
    {
      quote:
        "Onboarding was smooth and the reporting is genuinely useful. Cash flow is more predictable than it's been in years.",
      name: "Physician & Owner",
      role: "Independent practice",
      org: "[Demo testimonial]",
    },
    {
      quote:
        "It feels like an extension of our own team — specialty-aware, responsive, and focused on outcomes, not excuses.",
      name: "Revenue Cycle Manager",
      role: "Behavioral health network",
      org: "[Demo testimonial]",
    },
  ],
};

/* ------------------------------------------------------------ Security */

export const security = {
  eyebrow: "Security & compliance",
  title: "Built to protect patient data and your revenue",
  subtitle:
    "Healthcare buyers need confidence. These are the safeguards we design our workflows around.",
  items: [
    { title: "HIPAA-aligned workflows", body: "Processes designed around HIPAA privacy and security requirements." },
    { title: "Encryption in transit & at rest", body: "Data is protected with industry-standard encryption end to end." },
    { title: "Role-based access controls", body: "Least-privilege access so people only see what they need." },
    { title: "Audit trails", body: "Actions are logged for accountability and investigation." },
    { title: "Secure integrations", body: "Connections to EHR/PM systems follow secure integration practices." },
    { title: "Ongoing monitoring", body: "Continuous oversight of claims, access, and system activity." },
  ],
  note: "Certifications (e.g., SOC 2) shown as demo status — display only verified compliance in production.",
};

/* ------------------------------------------------------------ Final CTA */

export const finalCta = {
  eyebrow: "Free revenue assessment",
  title: "Find out where your revenue is getting lost",
  subtitle:
    "Get a free assessment of your current billing process and a practical plan to improve collections — no obligation.",
  primaryCta: "Get my free revenue assessment",
  secondaryCta: "Talk to an expert",
  bullets: [
    "A review of denials, A/R, and clean-claim performance",
    "Specialty-specific opportunities to recover revenue",
    "A clear, prioritized plan you can act on",
  ],
};

export const specialtyOptions = [
  "Primary Care",
  "Cardiology",
  "Orthopedics",
  "Dermatology",
  "Gastroenterology",
  "Behavioral Health",
  "Oncology",
  "Radiology",
  "Neurology",
  "Surgery",
  "Other",
];

export const footer = {
  columns: [
    {
      title: "Services",
      links: [
        "Medical billing",
        "Revenue cycle management",
        "Denial management",
        "A/R recovery",
        "Medical coding",
        "Credentialing",
      ],
    },
    {
      title: "Specialties",
      links: [
        "Primary care",
        "Cardiology",
        "Orthopedics",
        "Dermatology",
        "Behavioral health",
      ],
    },
    {
      title: "Company",
      links: ["Technology", "Case studies", "Resources", "About", "Contact"],
    },
  ],
  legal: [
    "Privacy Policy",
    "Terms of Service",
    "HIPAA Notice",
    "Accessibility",
  ],
};
