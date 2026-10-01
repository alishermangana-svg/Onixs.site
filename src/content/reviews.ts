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

/** 5 FAQs — homepage zigzag path */
export const faqs = [
  {
    question: "What does your London web development team build?",
    answer:
      "Corporate sites, landing pages, headless storefronts, and custom web apps — performance-tuned, SEO-ready, and built to convert from Chiswick for UK and international brands.",
  },
  {
    question: "Do you offer SEO services in London as part of the build?",
    answer:
      "Yes. Technical SEO, structured data, speed, and content architecture ship in the same sprint as design and engineering — not as a bolt-on after go-live.",
  },
  {
    question: "Can you handle app development for iOS, Android, and PWA?",
    answer:
      "Yes. iOS, Android, and PWAs with shared backends and one studio for app + API — so you are not stitching separate vendors together.",
  },
  {
    question: "How does Google Ads management work with your builds?",
    answer:
      "Ads and Meta campaigns route into landing pages we control. Creative, tracking, and optimisation stay with the product team so spend hits pages that convert.",
  },
  {
    question: "How do projects usually start with Onixs?",
    answer:
      "Book a call or email admin@onixs.ai. A producer reviews goals and replies within a business day, then we scope and quote after a free discovery call.",
  },
] as const;
