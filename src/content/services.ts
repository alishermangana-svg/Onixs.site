export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  /** Card blurb on listing pages */
  text: string;
  /** Short hero lead */
  detail: string;
  /** Longer overview paragraph(s) */
  overview: string;
  group: string;
  gradient: string;
  /** Bullet deliverables */
  includes: readonly string[];
  /** Who this is for */
  idealFor: readonly string[];
  /** Outcomes / results framing */
  outcomes: readonly string[];
  /** How we deliver this service */
  process: readonly { title: string; text: string }[];
  /** Stack / tools / approach tags */
  stack: readonly string[];
  /** Service-specific FAQs */
  faqs: readonly { q: string; a: string }[];
  /** Related service slugs */
  related: readonly string[];
};

export const services: readonly ServiceDetail[] = [
  {
    id: "01",
    slug: "website-development",
    title: "Website Development",
    text: "Custom web apps, corporate sites, landing pages, and headless storefronts — engineered to look premium and sell.",
    detail:
      "Corporate sites, marketing landers, headless storefronts, and content-driven web apps. Performance, SEO, and conversion paths are built in from the first commit — not bolted on after launch.",
    overview:
      "We build websites that act like products: fast, accessible, and wired for search and conversion. From a premium corporate presence to a headless storefront or content-driven web app, every build ships with Core Web Vitals budgets, structured data, and a clear path from visit to enquiry or purchase. Design and engineering stay in one team so the site you approve is the site that goes live.",
    group: "Integrated Web & Mobile Development",
    gradient: "from-[#0b3b36] to-[#17b8a0]",
    includes: [
      "Corporate sites and marketing landing pages built for conversion",
      "Headless e-commerce and content-driven web apps",
      "Performance budgets tied to Core Web Vitals",
      "Accessible UI systems that scale with your brand",
      "CMS / content workflows your team can actually use",
      "Analytics, events, and SEO foundations from day one",
    ],
    idealFor: [
      "Brands replacing a slow or outdated brochure site",
      "Teams launching a new product or market page system",
      "Operators who need storefronts or booking flows that convert on mobile",
    ],
    outcomes: [
      "Sub-second feel on key pages where it matters",
      "Clear conversion paths — book, buy, or enquire",
      "A site that ranks and loads without a rewrite next year",
    ],
    process: [
      {
        title: "Discover",
        text: "Goals, audiences, competitors, and success metrics — then a clear sitemap and build plan.",
      },
      {
        title: "Design",
        text: "Wireframes to high-fidelity UI with a modular system your brand can grow into.",
      },
      {
        title: "Build",
        text: "Next.js (or the right stack), CMS, integrations, and instrumented pages shipped in demos.",
      },
      {
        title: "Launch & iterate",
        text: "Deploy, measure, and tune speed, SEO, and conversion after go-live.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Headless CMS",
      "Core Web Vitals",
      "SSR / SSG",
      "WCAG AA",
    ],
    faqs: [
      {
        q: "How long does a typical website build take?",
        a: "Most marketing sites land in 4–8 weeks depending on pages, CMS, and integrations. Product-style web apps take longer — we scope milestones after a free call so you always know the critical path.",
      },
      {
        q: "Do you rebuild on WordPress or only modern stacks?",
        a: "We prefer Next.js and headless setups for performance and SEO control, but we meet you where you are — including migrating off WordPress cleanly when it is holding growth back.",
      },
      {
        q: "Will SEO be included?",
        a: "Yes. Technical SEO, structured data, and page speed sit in the same sprint as design and engineering — not as a separate afterthought.",
      },
    ],
    related: ["app-development", "seo", "graphic-design"],
  },
  {
    id: "02",
    slug: "app-development",
    title: "App Development",
    text: "iOS, Android, and Progressive Web Apps wired into enterprise backends.",
    detail:
      "Cross-platform apps with reliable auth, offline-aware UX where it matters, and clean APIs into your existing systems. One product team for web and mobile — not two vendors.",
    overview:
      "We ship iOS, Android, and Progressive Web Apps from one product plan — not three disconnected codebases. Auth, offline-aware flows, push, and deep links are wired to backends we either build or integrate cleanly. You get app-store-ready builds with a release process your team can repeat after launch.",
    group: "Integrated Web & Mobile Development",
    gradient: "from-[#0e1614] to-[#2ec4ab]",
    includes: [
      "iOS, Android, and Progressive Web Apps from one product plan",
      "Offline-first flows and real-time sync where it matters",
      "Push notifications and deep links wired to your backend",
      "App store–ready builds with a clear release process",
      "Auth, roles, and secure API integration",
      "Analytics and crash monitoring from first release",
    ],
    idealFor: [
      "Products that need presence beyond the browser",
      "Teams consolidating separate native vendors into one studio",
      "Businesses extending an existing web product into mobile",
    ],
    outcomes: [
      "One roadmap for web and mobile",
      "Stable releases instead of endless hotfix cycles",
      "UX that feels native without burning two full native teams",
    ],
    process: [
      {
        title: "Product map",
        text: "Define must-have flows, platforms, and backend dependencies before a line of UI ships.",
      },
      {
        title: "Prototype",
        text: "Clickable flows for core journeys so stakeholders align early.",
      },
      {
        title: "Build & integrate",
        text: "Cross-platform client, API contracts, push, and store pipelines.",
      },
      {
        title: "Ship & support",
        text: "Store submission, monitoring, and iteration based on real usage.",
      },
    ],
    stack: [
      "React Native / Expo",
      "PWA",
      "Firebase",
      "Typed APIs",
      "Push / FCM",
      "App Store & Play",
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We default to cross-platform when it protects speed and budget without hurting UX. When a flow truly needs native, we call it out — not as a surprise mid-build.",
      },
      {
        q: "Can you connect to our existing backend?",
        a: "Yes. We design clean API contracts and auth against what you already run, or we build the missing middleware when the backend is not app-ready.",
      },
      {
        q: "Do you handle App Store and Play submission?",
        a: "Yes. Release checklists, store assets, and submission support are part of a proper app launch — not left to your team the night before.",
      },
    ],
    related: ["website-development", "software-development", "graphic-design"],
  },
  {
    id: "03",
    slug: "software-development",
    title: "Software Development",
    text: "APIs, middleware, microservices, and cloud infrastructure for the products above.",
    detail:
      "Backend systems, integrations, and cloud infrastructure that keep your product shipping. We design APIs and data flows to match the product — not generic middleware for its own sake.",
    overview:
      "Custom middleware, typed APIs, microservices, cloud infrastructure, and third-party integrations that power your web and mobile products. We build the runtime your frontends depend on — with observability and ops hygiene from day one so launches do not become midnight fire drills.",
    group: "Integrated Web & Mobile Development",
    gradient: "from-[#0b3b36] to-[#1a9e8a]",
    includes: [
      "Typed APIs and middleware for web and mobile clients",
      "Cloud infrastructure designed for reliability and growth",
      "Third-party integrations without fragile glue code",
      "Observability and ops hygiene from day one",
      "Auth, roles, queues, and background jobs when needed",
      "Documentation your next engineer can actually use",
    ],
    idealFor: [
      "Products outgrowing no-code or fragile scripts",
      "Teams needing a real API layer under web and mobile",
      "Businesses stitching CRMs, payments, and internal tools together",
    ],
    outcomes: [
      "Stable APIs your clients can depend on",
      "Integrations that do not break every vendor update",
      "Infrastructure you can monitor and scale",
    ],
    process: [
      {
        title: "Architecture",
        text: "Map domains, data flows, and failure modes before picking tools.",
      },
      {
        title: "API design",
        text: "Contracts, auth, and versioning that frontends can ship against.",
      },
      {
        title: "Build & harden",
        text: "Services, queues, cloud setup, tests, and observability.",
      },
      {
        title: "Operate",
        text: "Deploy pipelines, runbooks, and iteration as load grows.",
      },
    ],
    stack: [
      "Node / TypeScript",
      "REST & GraphQL",
      "Cloud (AWS / GCP)",
      "Postgres",
      "Queues",
      "CI / CD",
    ],
    faqs: [
      {
        q: "Do you only build backends for Onixs frontends?",
        a: "Most work sits under sites and apps we also ship — that is where quality stays highest. We also harden or extend existing backends when the product plan is clear.",
      },
      {
        q: "Can you integrate Stripe, CRMs, or internal tools?",
        a: "Yes. Payments, CRM, messaging, and internal systems are routine — we treat integrations as product features, not fragile scripts.",
      },
      {
        q: "How do you handle security?",
        a: "Auth, least-privilege access, secrets management, and audit-friendly logging are part of the build plan — scoped to the risk of your product.",
      },
    ],
    related: ["website-development", "app-development", "seo"],
  },
  {
    id: "04",
    slug: "seo",
    title: "SEO",
    text: "Technical indexing, page speed, structured data, and organic visibility built into every launch.",
    detail:
      "Technical SEO, Core Web Vitals, structured data, and content architecture engineered into the build. Organic growth that compounds instead of chasing temporary rankings.",
    overview:
      "SEO at Onixs is engineered into the product — not a PDF of keyword suggestions after go-live. Technical indexing, page speed, structured JSON-LD, and content architecture sit in the same delivery as design and engineering so organic visibility compounds with every release.",
    group: "Growth, SEO & Advertising",
    gradient: "from-[#12201c] to-[#17b8a0]",
    includes: [
      "Technical SEO baked into the site architecture",
      "Structured data (JSON-LD) for richer search results",
      "Speed and crawlability treated as product requirements",
      "Content and IA guidance aligned to search intent",
      "Indexation, sitemap, and canonical hygiene",
      "Ongoing measurement and iteration after launch",
    ],
    idealFor: [
      "Sites launching or rebuilding that cannot afford SEO debt",
      "Brands stuck with traffic that does not convert",
      "Teams who want organic growth tied to the same studio that ships the site",
    ],
    outcomes: [
      "Cleaner crawl and indexation",
      "Pages that deserve to rank — and load when they do",
      "A content structure search engines and humans both understand",
    ],
    process: [
      {
        title: "Audit",
        text: "Technical, content, and competitor baseline — what is blocking growth now.",
      },
      {
        title: "Architecture",
        text: "IA, templates, and structured data planned with the build.",
      },
      {
        title: "Implement",
        text: "On-page, speed, schema, and internal linking shipped with engineering.",
      },
      {
        title: "Compound",
        text: "Content roadmap and technical iteration from Search Console data.",
      },
    ],
    stack: [
      "Technical SEO",
      "Core Web Vitals",
      "JSON-LD",
      "Search Console",
      "Content IA",
      "Analytics",
    ],
    faqs: [
      {
        q: "Is SEO only for new builds?",
        a: "No. We also remediate existing sites — but the highest ROI is when SEO is designed into a rebuild or new launch.",
      },
      {
        q: "Do you do link building?",
        a: "We focus on technical foundations, content architecture, and on-site conversion. Link strategy is scoped only when it fits your niche and risk profile.",
      },
      {
        q: "How soon will we see results?",
        a: "Technical wins can show in weeks; competitive organic growth takes months. We set expectations against your niche — no fake timelines.",
      },
    ],
    related: ["website-development", "digital-marketing", "ads"],
  },
  {
    id: "05",
    slug: "digital-marketing",
    title: "Digital Marketing",
    text: "Growth, retention, and omni-channel conversion after your product ships.",
    detail:
      "Growth systems after launch — funnel design, retention loops, and channel mix tied to the product you already ship with us. One accountable team from creative to conversion.",
    overview:
      "Integrated growth after launch: channel mix, funnel design, retention and lifecycle campaigns, and creative that shares one system with your site and ads. Reporting ties to leads and revenue — not vanity metrics that look busy and mean nothing.",
    group: "Growth, SEO & Advertising",
    gradient: "from-[#0b3b36] to-[#2ec4ab]",
    includes: [
      "Channel mix mapped to your funnel, not vanity metrics",
      "Retention and lifecycle campaigns after launch",
      "Creative and landing pages that share one system",
      "Clear reporting tied to leads and revenue",
      "Funnel diagnostics and conversion improvements",
      "Campaign ops coordinated with product releases",
    ],
    idealFor: [
      "Products that launched but are not growing predictably",
      "Teams tired of separate SEO, ads, and content vendors",
      "Brands that want growth owned by the same studio that built the product",
    ],
    outcomes: [
      "A channel plan tied to real funnel stages",
      "Creative and pages that do not contradict each other",
      "Reporting your leadership can act on",
    ],
    process: [
      {
        title: "Funnel map",
        text: "Where attention enters, leaks, and converts — and what to fix first.",
      },
      {
        title: "Channel plan",
        text: "Pick the mix that matches budget and intent — not every channel at once.",
      },
      {
        title: "Launch loops",
        text: "Campaigns, creatives, and landing updates in tight cycles.",
      },
      {
        title: "Retain & report",
        text: "Lifecycle, Nurture, and dashboards keyed to revenue outcomes.",
      },
    ],
    stack: [
      "Funnel design",
      "Lifecycle email",
      "Landing systems",
      "Analytics",
      "CRM",
      "Creative ops",
    ],
    faqs: [
      {
        q: "Is this the same as running ads?",
        a: "Ads are one channel. Digital marketing covers the system around them — funnel, creative, retention, and measurement — so paid spend is not wasted.",
      },
      {
        q: "Do we need an Onixs-built website?",
        a: "It helps, because creative and pages stay aligned. We can still improve growth on an existing stack when tracking and landing control are available.",
      },
      {
        q: "What does reporting look like?",
        a: "Leads, cost per result, and pipeline contribution — not just impressions. We agree KPIs before campaigns scale.",
      },
    ],
    related: ["ads", "seo", "graphic-design"],
  },
  {
    id: "06",
    slug: "ads",
    title: "Google & Meta Ads",
    text: "Paid performance campaigns routing qualified traffic into the pages and funnels we build.",
    detail:
      "Paid acquisition on Google and Meta routed into landing pages and app funnels we control. Tracking, creative, and optimisation stay connected to the build — not a separate silo.",
    overview:
      "Paid performance on Google and Meta aimed at qualified intent, routed into landing pages and app funnels we ship. Campaigns, creatives, and conversion events stay one system — so optimisation improves cost per result instead of guessing in the dark.",
    group: "Growth, SEO & Advertising",
    gradient: "from-[#101816] to-[#17b8a0]",
    includes: [
      "Google and Meta campaigns aimed at qualified intent",
      "Landing pages and creatives built as one system",
      "Tracking and conversion events set up correctly",
      "Ongoing optimisation against cost per result",
      "Audience and offer testing with clear kill criteria",
      "Weekly or bi-weekly performance reviews",
    ],
    idealFor: [
      "Teams ready to buy demand into pages that can convert",
      "Brands whose ads currently land on weak or untracked pages",
      "Operators who want ads owned by the same team as the funnel",
    ],
    outcomes: [
      "Traffic that matches search and social intent",
      "Clean conversion tracking you can trust",
      "Creative and landing tests that compound",
    ],
    process: [
      {
        title: "Offer & tracking",
        text: "Define the conversion, events, and landing before spend scales.",
      },
      {
        title: "Build creatives",
        text: "Ads and pages designed as a pair — same message, same proof.",
      },
      {
        title: "Launch",
        text: "Structured campaigns with budgets, audiences, and test cells.",
      },
      {
        title: "Optimise",
        text: "Cut waste, scale winners, and feed learnings back into product.",
      },
    ],
    stack: [
      "Google Ads",
      "Meta Ads",
      "GA4 / pixels",
      "Landing pages",
      "Creative testing",
      "CRM events",
    ],
    faqs: [
      {
        q: "What budget do we need to start?",
        a: "Enough to learn — usually a few hundred pounds a week minimum depending on niche CPC. We will say if the budget is too low to get a signal.",
      },
      {
        q: "Do you create the landing pages too?",
        a: "Yes when needed. Ads without a conversion-ready page is how budgets disappear. We prefer owning both.",
      },
      {
        q: "Google, Meta, or both?",
        a: "Depends on intent. Search often wins for high-intent capture; Meta for demand creation and retargeting. We recommend from your funnel — not from habit.",
      },
    ],
    related: ["digital-marketing", "website-development", "graphic-design"],
  },
  {
    id: "07",
    slug: "graphic-design",
    title: "Graphic Design",
    text: "UI/UX systems, brand identities, and campaign creatives that stay on-brand everywhere.",
    detail:
      "Brand systems, UI kits, and campaign creatives that hold together across site, app, and ads. Design that ships with engineering — not a PDF that dies in a drive folder.",
    overview:
      "Complete UI/UX systems, brand identities, and campaign creatives integrated into web, app, and ad surfaces — not delivered as orphaned files. Design hands off ready for engineering and paid media so brand stays consistent where customers actually see it.",
    group: "Design & Brand Architecture",
    gradient: "from-[#0b3b36] to-[#3dd4bb]",
    includes: [
      "Brand identity that works on product and marketing surfaces",
      "UI/UX systems for web and app consistency",
      "Campaign creatives aligned to the same visual language",
      "Assets handed off ready for engineering and ads",
      "Design systems and component libraries",
      "Motion and interaction where it earns its place",
    ],
    idealFor: [
      "Brands refreshing identity ahead of a product launch",
      "Teams whose site, app, and ads look like three companies",
      "Founders who need a system — not a one-off logo",
    ],
    outcomes: [
      "One visual language across product and campaigns",
      "UI that engineers can implement without guesswork",
      "Creatives that match the pages they send traffic to",
    ],
    process: [
      {
        title: "Brand brief",
        text: "Audience, tone, constraints, and competitive visual context.",
      },
      {
        title: "System",
        text: "Identity, type, colour, and components that scale.",
      },
      {
        title: "Product UI",
        text: "Screens and flows designed with the build team.",
      },
      {
        title: "Campaign pack",
        text: "Ads and marketing assets that reuse the same system.",
      },
    ],
    stack: [
      "Brand systems",
      "UI kits",
      "Figma",
      "Motion",
      "Ad creatives",
      "Design tokens",
    ],
    faqs: [
      {
        q: "Do you only design logos?",
        a: "We can, but the value is a system — identity plus UI and campaign assets that stay coherent after launch.",
      },
      {
        q: "Will engineers get what they need?",
        a: "Yes. Specs, components, and tokens are part of delivery — design that ships, not decks that stall.",
      },
      {
        q: "Can you match an existing brand?",
        a: "Yes. We extend and clean systems as often as we create new ones.",
      },
    ],
    related: ["website-development", "ads", "digital-marketing"],
  },
  {
    id: "08",
    slug: "va-services",
    title: "Virtual Assistant Services",
    text: "Remote sales, admin, HR, and operations support for international clients.",
    detail:
      "Remote ops cover for sales, admin, HR, and day-to-day execution. Extend your team without the headcount chaos — timezone-aware and tied to the products we build.",
    overview:
      "Dedicated remote operational support spanning sales, admin, HR, customer support, and business operations. A remote team extension for international clients — clear communication windows, handoff discipline, and cover that scales without the chaos of unmanaged freelancers.",
    group: "Virtual Assistant & Operational Support",
    gradient: "from-[#0e1614] to-[#17b8a0]",
    includes: [
      "Sales, admin, HR, and customer support cover",
      "Remote team extension for international clients",
      "Campaign and ops support without adding headcount chaos",
      "Clear communication windows and handoff discipline",
      "Inbox, calendar, and CRM hygiene",
      "Process documentation so work is repeatable",
    ],
    idealFor: [
      "Founders who need ops cover without full-time hires yet",
      "International teams wanting London-studio coordination",
      "Businesses whose product shipped but back-office is drowning",
    ],
    outcomes: [
      "Hours back every week for founders and operators",
      "Cleaner CRM and faster response times",
      "Ops that stay aligned with the products we build",
    ],
    process: [
      {
        title: "Scope",
        text: "Map the tasks draining your week and define success measures.",
      },
      {
        title: "Match",
        text: "Assign cover with the right skill mix and timezone overlap.",
      },
      {
        title: "Playbooks",
        text: "Document workflows so quality does not depend on one person.",
      },
      {
        title: "Run",
        text: "Weekly check-ins, KPIs, and expand or refine as load changes.",
      },
    ],
    stack: [
      "CRM ops",
      "Inbox & calendar",
      "Customer support",
      "Sales assist",
      "HR admin",
      "SOPs",
    ],
    faqs: [
      {
        q: "Is this just generic freelancing?",
        a: "No. Cover is scoped, measured, and coordinated with clear hours — especially useful when paired with products and campaigns we already run for you.",
      },
      {
        q: "What timezones do you support?",
        a: "We work with international clients from our London base with defined communication windows. Exact overlap is agreed in the scope call.",
      },
      {
        q: "Can VA support sit alongside a build retainer?",
        a: "Yes. Many clients combine product, growth, and ops cover so one studio owns the messy middle after launch.",
      },
    ],
    related: ["digital-marketing", "ads", "website-development"],
  },
] as const;

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const leakCards = [
  {
    title: "Too many vendors, zero alignment",
    text: "Your developer, designer, and growth lead never speak. Every handoff loses context, time, and momentum.",
  },
  {
    title: "Attention leaks before it converts",
    text: "Slow pages, off-brand creative, and broken tracking make growth harder and more expensive than it should be.",
  },
  {
    title: "Nobody owns the whole product",
    text: "When no single team sees brand, content, and code together, your roadmap quietly stalls.",
  },
] as const;

export const processSteps = [
  {
    id: "01",
    title: "Discover",
    text: "We dig into your goals, constraints, and success metrics to find the angle competitors miss.",
  },
  {
    id: "02",
    title: "Design",
    text: "Information architecture and interface systems tailored to your product.",
  },
  {
    id: "03",
    title: "Build",
    text: "Server-rendered, instrumented product shipped in visible increments with demos.",
  },
  {
    id: "04",
    title: "Launch",
    text: "Seamless deployment so you see value immediately — not months later.",
  },
  {
    id: "05",
    title: "Support",
    text: "SEO, ads, and remote operational cover that scales with your business.",
  },
] as const;

export const whyCards = [
  {
    title: "One studio",
    text: "Web, app, design, and growth under one roof — so you stop juggling vendors.",
  },
  {
    title: "London-based, remote-ready",
    text: "UK studio with clear hours and remote delivery that works for international clients.",
  },
  {
    title: "Built for performance",
    text: "Speed, SEO, and instrumentation from day one — not bolted on after launch.",
  },
  {
    title: "Ongoing support",
    text: "Clear communication, maintenance, and operational cover after you go live.",
  },
] as const;
