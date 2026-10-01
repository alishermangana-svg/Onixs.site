/** Real Onixs portfolio cases — sourced from onixs.ai/portfolio (2026). */

export type WorkItem = {
  slug: string;
  brand: string;
  niche: string;
  industry: string;
  year: string;
  blurb: string;
  /** Short metric badge for cards (trust signal) */
  metric: string;
  /** One-line result under the metric */
  resultLine: string;
  result: string;
  image: string;
  gallery: string[];
  liveUrl?: string;
  stack: string[];
  challenge: string;
  solution: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "pocket-guide-ai",
    brand: "Pocket Guide Ai",
    niche: "Web · AI · Travel",
    industry: "Travel & lifestyle",
    year: "2025",
    blurb:
      "AI-assisted destination discovery without the generic chatbot feel.",
    metric: "Sub-1s LCP",
    resultLine: "Sub-1s LCP on key destination pages + clear booking path",
    result:
      "Launch-ready destination pages with sub-second LCP and a clear path from discovery to booked experience.",
    image: "/work/pocket-guide-ai.webp",
    gallery: [
      "/work/pocket-guide-ai.webp",
      "/work/pocket-guide-app.webp",
      "/work/Pocket-Guide-App-Mockup-2.webp",
    ],
    stack: ["Next.js", "TypeScript", "Firestore", "OpenAI"],
    challenge:
      "A travel brand needed a web experience that could surface AI-assisted local recommendations without feeling like a generic chatbot wrapper.",
    solution:
      "We designed a Next.js platform with structured destination content, conversational search, and a modular design system tuned for Core Web Vitals.",
  },
  {
    slug: "castle-auction",
    brand: "Castle Auction",
    niche: "Web · Auctions",
    industry: "Auctions",
    year: "2025",
    blurb:
      "Lot discovery, registration, and live bidding states in one calm flow.",
    metric: "↑ Mobile bids",
    resultLine: "Catalogue-to-hammer flow that keeps mobile bidders oriented",
    result:
      "A premium catalog experience that keeps bidders oriented from preview to hammer — desktop and mobile.",
    image: "/work/castle-auction.webp",
    gallery: [
      "/work/castle-auction.webp",
      "/work/Castle-Auction-2.webp",
      "/work/Castle-Auction-3.webp",
    ],
    liveUrl: "https://castle-auctions.com/",
    stack: ["Next.js", "SSR", "Firebase Auth"],
    challenge:
      "Live bidding required a trustworthy, high-clarity interface that could handle lot discovery, registration, and real-time status.",
    solution:
      "We built a responsive auction house website with lot catalogs, timed bidding states, and a performance-first listing architecture.",
  },
  {
    slug: "westend-hijama",
    brand: "Westend Hijama",
    niche: "Web · Health · London",
    industry: "Health & wellness",
    year: "2024",
    blurb:
      "Appointment-led clinic site — calm, trustworthy, easy to book on mobile.",
    metric: "↑ Mobile bookings",
    resultLine: "Higher mobile completion on the contact / booking path",
    result:
      "Higher mobile completion on the contact path and a brand presence aligned with in-clinic care.",
    image: "/work/westend-hijama.webp",
    gallery: [
      "/work/westend-hijama.webp",
      "/work/Westend-Hijama-2.webp",
      "/work/Westend-Hijama-3.webp",
    ],
    liveUrl: "https://www.westendhijama.com/",
    stack: ["Next.js", "Firebase", "WCAG AA"],
    challenge:
      "A wellness clinic needed an appointment-led website that felt calm, trustworthy, and easy to book on mobile.",
    solution:
      "We designed a responsive clinic site with treatment education, practitioner profiles, and a streamlined booking enquiry flow.",
  },
  {
    slug: "eco-specialist",
    brand: "ECO Specialist",
    niche: "Web · Energy · Lead gen",
    industry: "Energy & retrofit",
    year: "2024",
    blurb:
      "Plain-language retrofit programmes with qualified enquiry capture.",
    metric: "↑ Organic enquiries",
    resultLine: "Measurable lift in completed enquiry forms from organic traffic",
    result:
      "Clearer service discovery and a measurable lift in completed enquiry forms from organic traffic.",
    image: "/work/eco-specialist.webp",
    gallery: [
      "/work/eco-specialist.webp",
      "/work/ECO-Specialist-2.webp",
      "/work/ECO-Specialist-3.webp",
    ],
    stack: ["Next.js", "SSG", "SEO schema"],
    challenge:
      "An energy-efficiency consultancy needed a site that explained complex retrofit programmes in plain language and captured qualified leads.",
    solution:
      "We delivered a content-led corporate site with service taxonomies, eligibility flows, and WCAG AA accessible forms.",
  },
  {
    slug: "mh-white-glow",
    brand: "MH White Glow",
    niche: "Web · E-commerce · Beauty",
    industry: "Beauty & retail",
    year: "2025",
    blurb:
      "Clinical, luminous product storytelling from homepage to checkout.",
    metric: "↑ Conversion path",
    resultLine: "High-converting product UX from homepage through checkout",
    result:
      "A high-converting product experience with consistent brand expression end to end.",
    image: "/work/mh-white-glow.webp",
    gallery: [
      "/work/mh-white-glow.webp",
      "/work/MH-White-Glow-2.webp",
      "/work/MH-White-Glow-3.webp",
    ],
    liveUrl: "https://mhwhiteglow.com/",
    stack: ["Next.js", "Headless commerce", "Cloudinary"],
    challenge:
      "A beauty brand needed an e-commerce-ready presence that felt clinical, luminous, and conversion-focused.",
    solution:
      "We created a headless storefront with editorial product storytelling, fast image delivery, and a restrained luxury visual system.",
  },
  {
    slug: "pocket-guide-app",
    brand: "Pocket Guide App",
    niche: "iOS · Android · PWA",
    industry: "Travel apps",
    year: "2025",
    blurb: "Offline-capable travel guides with timely local alerts.",
    metric: "Offline + alerts",
    resultLine: "Saved guides without signal + timely local alerts on iOS & Android",
    result:
      "Travellers browse saved guides without signal and receive timely local alerts on iOS and Android.",
    image: "/work/pocket-guide-app.webp",
    gallery: [
      "/work/pocket-guide-app.webp",
      "/work/Pocket-Guide-App-Mockup-2.webp",
      "/work/Pocket-Guide-App-Mockup-3.webp",
    ],
    liveUrl: "https://apps.apple.com/us/app/pocketguide-pg/id6753620134",
    stack: ["React Native", "OpenAI", "Offline sync"],
    challenge:
      "Travellers needed saved guides and local alerts that still worked with weak signal.",
    solution:
      "We shipped a cross-platform app with offline reading, push alerts, and a shared content model with the web product.",
  },
];

export function getWorkBySlug(slug: string) {
  return workItems.find((w) => w.slug === slug);
}

/** Homepage “websites we built” gallery — real Onixs client sites */
export const showcaseWebsites = [
  {
    brand: "Fergani Trading",
    industry: "Hospitality advisory · UK",
    image: "/work/live/fergani.webp",
    liveUrl: "https://fergani.co.uk/",
  },
  {
    brand: "GripGo Tyre",
    industry: "Mobile tyre services · London",
    image: "/work/live/gripgo.webp",
    liveUrl: "https://gripgotyre.com/",
  },
  {
    brand: "Valix",
    industry: "UK accounting software",
    image: "/work/live/valix.webp",
    liveUrl: "https://valix.co.uk/",
  },
  {
    brand: "Muslims of Ireland",
    industry: "Community · Non-profit",
    image: "/work/live/moi.webp",
    liveUrl: "https://muslimsofireland.com/",
  },
  {
    brand: "Mindshift Systems",
    industry: "Software engineering · London",
    image: "/work/live/mindshift.webp",
    liveUrl: "https://mindshiftsys.com/",
  },
  {
    brand: "Tyson Roselyn",
    industry: "Online accountants · UK",
    image: "/work/live/tyson.webp",
    liveUrl: "https://tysonroselyn.com/",
  },
  {
    brand: "Mizan Al-Taibah",
    industry: "Construction · Madinah",
    image: "/work/live/mizan.webp",
    liveUrl: "https://mizan-al-taibah.vercel.app/",
  },
] as const;

export const stats = [
  { value: "16+", label: "Published case studies" },
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "8+", label: "Services under one roof" },
  { value: "UK", label: "London-based delivery" },
] as const;

export const industries = [
  "Startups",
  "E-commerce",
  "Health",
  "Auctions",
  "Local brands",
  "SaaS",
  "Retail",
  "Fintech",
] as const;
