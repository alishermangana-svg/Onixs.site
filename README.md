# OnixsAI

Premium marketing site for [Onixs](https://onixs.ai) — a London digital studio.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Framer Motion
- Plus Jakarta Sans + Space Grotesk (`next/font`)
- Contact API: Zod + Resend

## Setup

```bash
npm install
cp .env.example .env.local
# Add RESEND_API_KEY and CONTACT_TO_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Copy and lists live in `src/content/` (services, work, reviews, site).
