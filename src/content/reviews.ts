/**
 * Homepage testimonials — show 3 on the homepage.
 * Quotes published on onixs.ai.
 */
export const reviews = [
  {
    initials: "MA",
    name: "Maddalena",
    role: "Founder",
    company: "Product mentoring client",
    photo: "/images/testi-1.webp",
    rating: 5,
    quote:
      "Onixs is just so brilliant. I have booked many calls with them and their knowledge and professionalism is just amazing. A very talented team.",
  },
  {
    initials: "JP",
    name: "Jeff Presti",
    role: "Client",
    company: "Project development",
    photo: "/images/testi-2.webp",
    rating: 5,
    quote:
      "Onixs has been extremely helpful, with the mentoring I have gotten from them, as well as the work they have completed for me with project development.",
  },
  {
    initials: "PG",
    name: "Pocket Guide",
    role: "Product lead",
    company: "Pocket Guide Ai",
    photo: "/images/testi-3.webp",
    rating: 5,
    quote:
      "They treated the website, the app, and the backend as one product. We stopped juggling vendors and started shipping.",
  },
] as const;

export const googleReviewsUrl =
  "https://www.google.com/search?q=Onixs+London+reviews";

/** Ways to engage — no public pricing; quote after a free call */
export const engagementModels = [
  {
    name: "Project build",
    tagline: "Ship one clear outcome",
    blurb:
      "A scoped website, app, or product sprint with milestones, demos, and a defined launch.",
    features: [
      "1–2 services focused on one goal",
      "Fixed scope & delivery milestones",
      "Kickoff strategy call",
      "Visible progress with demos",
      "Launch support included",
    ],
    cta: "Start a project →",
    featured: false,
  },
  {
    name: "Growth partnership",
    tagline: "Build + grow together",
    blurb:
      "The full engine — product, SEO, ads, and creative under one producer who already knows your stack.",
    features: [
      "Up to 4 services, one accountable team",
      "Build and growth in the same rhythm",
      "Bi-weekly strategy & reporting",
      "Priority turnaround",
      "Dedicated producer",
    ],
    cta: "Talk partnership →",
    featured: true,
  },
  {
    name: "Studio retainer",
    tagline: "Your extended product team",
    blurb:
      "Ongoing capacity across web, app, design, and ops — for brands that ship continuously.",
    features: [
      "All studio services, fully managed",
      "AI & automation where it helps",
      "Weekly planning cadence",
      "Senior team on call",
      "Shared KPIs & clear ownership",
    ],
    cta: "Explore retainer →",
    featured: false,
  },
] as const;

/** @deprecated use engagementModels — kept for any residual imports */
export const plans = engagementModels;

/** 9 FAQs — 50–80 word answers, natural London keywords */
export const faqs = [
  {
    question: "What does your London web development team build?",
    answer:
      "Our London web development studio ships corporate sites, landing pages, headless storefronts, and custom web apps. Every build is performance-tuned for Core Web Vitals, wired for SEO from day one, and designed to convert. We work from Chiswick and deliver remotely for UK and international brands that need one accountable product partner.",
  },
  {
    question: "Do you offer SEO services in London as part of the build?",
    answer:
      "Yes. SEO services in London are engineered into every Onixs launch — technical indexing, structured data, page speed, and content architecture. We do not treat SEO as a bolt-on after go-live. Organic visibility, crawl health, and conversion paths sit in the same sprint as design and engineering so growth compounds with the product.",
  },
  {
    question: "Can you handle app development for iOS, Android, and PWA?",
    answer:
      "Absolutely. App development covers iOS, Android, and Progressive Web Apps with shared backends, auth, and offline-aware UX where it matters. Pocket Guide is one example of a product we shipped across web and mobile as one system. You get one studio for the app and the API — not separate vendors stitching handoffs.",
  },
  {
    question: "How does Google Ads management work with your builds?",
    answer:
      "Google Ads management and Meta campaigns are routed into landing pages and funnels we control. Creative, tracking, and optimisation stay connected to the product team, so paid spend is not wasted on slow or off-brand pages. We align keywords, audiences, and conversion events with the same analytics stack used in the build.",
  },
  {
    question: "How do projects usually start with Onixs?",
    answer:
      "Share a brief via Book a call or email admin@onixs.ai. A producer reviews goals, constraints, and timeline, then replies with practical next steps — usually within one business day. We scope the right mix of web, app, SEO, and growth, then quote after a free discovery call so you know what you are buying before work begins.",
  },
  {
    question: "Do you work with international clients from London?",
    answer:
      "Yes. We are based at 407 Chiswick High Rd., London W4 4AR, and deliver remotely worldwide with clear hours and communication. International teams get the same London standards for website development, app development, and SEO without juggling time zones across seven freelancers. Virtual assistant cover is available when you need ops support after launch.",
  },
  {
    question: "What is included in digital marketing and graphic design?",
    answer:
      "Digital marketing covers growth, retention, and omni-channel conversion after launch. Graphic design covers UI/UX systems, brand identity, and campaign creatives that stay consistent across site, app, and ads. Because design and growth sit with engineering, creatives ship into real pages and funnels — not slide decks that never go live.",
  },
  {
    question: "Can you support us after launch with retainers?",
    answer:
      "Yes. After go-live we offer retainers for SEO, Google Ads management, product iteration, and virtual assistant services. Many clients move from a project build into a growth partnership so the same team owns performance. You get reporting, prioritised backlog, and a producer who already knows your stack.",
  },
  {
    question: "How is Onixs different from a typical London agency?",
    answer:
      "Most London agencies sell slides or single disciplines. Onixs runs website development, app development, software, SEO services London businesses need, ads, design, and VA as one studio. You stop stitching vendors. You get performance-tuned builds, clear process, and long-term support from the same people who shipped your product.",
  },
] as const;
