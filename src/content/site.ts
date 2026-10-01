export const site = {
  name: "Onixs",
  url: "https://onixs.ai",
  email: "admin@onixs.ai",
  phone: "+44 7438 764784",
  phoneDisplay: "+44 7438 764784",
  whatsapp: "https://wa.me/447438764784",
  /** Display city heading on studio cards */
  studioLabel: "Chiswick, London",
  address: "407 Chiswick High Rd., Chiswick, London W4 4AR, United Kingdom",
  streetAddress: "407 Chiswick High Rd.",
  addressLocality: "London",
  postalCode: "W4 4AR",
  addressCountry: "GB",
  hours: "Mon–Sat, 8am–4pm EST",
  tagline: "AI-Powered Website, App and Digital Services",
  description:
    "Onixs is a London digital studio for web development, apps, SEO, Google Ads and marketing. One team from Chiswick for ambitious brands worldwide.",
  positioning:
    "We design, ship, and grow digital products — from performance-tuned websites to cross-platform apps. One London studio, every discipline.",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/onixs.ai" },
    { label: "Instagram", href: "https://www.instagram.com/onixs.ai" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/onixsai" },
    { label: "GitHub", href: "https://github.com/onixs-ai" },
    { label: "WhatsApp", href: "https://wa.me/447438764784" },
    { label: "Email", href: "mailto:admin@onixs.ai" },
  ],
} as const;

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const META_TITLE =
  "Onixs | London Digital Studio – Web, Apps, SEO & Marketing";

export const META_DESCRIPTION =
  "London digital studio for web development, apps, SEO, Google Ads and marketing. Onixs ships high-performance products from Chiswick for ambitious brands.";

/** Short FAQs shown on the contact page sidebar */
export const contactPageFaqs = [
  {
    q: "What happens after I submit the form?",
    a: "A producer reviews your note and replies within one business day with practical next steps — usually a short call to confirm scope before any quote.",
  },
  {
    q: "Can you sign an NDA first?",
    a: "Yes. Share the NDA with your enquiry or ask us to send ours. We routinely work under confidentiality for product and brand briefs.",
  },
  {
    q: "Do you take retainers?",
    a: "Yes. After a first build many clients move into a growth partnership or studio retainer for SEO, ads, product iteration, and VA cover.",
  },
  {
    q: "Can I book virtual assistant support without an engineering project?",
    a: "Yes. VA services can stand alone or sit alongside a build. Tell us the ops cover you need and we will match hours and skills.",
  },
] as const;
