import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { META_DESCRIPTION, META_TITLE, site } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: META_TITLE,
    template: "%s | Onixs",
  },
  description: META_DESCRIPTION,
  applicationName: site.name,
  keywords: [
    "London web development",
    "SEO services London",
    "app development",
    "Google Ads management",
    "digital marketing London",
    "Onixs",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    title: META_TITLE,
    description: META_DESCRIPTION,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: META_DESCRIPTION,
  image: `${site.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    postalCode: site.postalCode,
    addressCountry: site.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4925,
    longitude: -0.2637,
  },
  areaServed: ["GB", "Worldwide"],
  sameAs: site.socials.map((s) => s.href),
  priceRange: "££",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${jakarta.variable} ${grotesk.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
