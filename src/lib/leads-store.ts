import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "won"
  | "lost";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  status: LeadStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

const seedLeads: Lead[] = [
  {
    id: "seed-1",
    name: "Sara Khan",
    email: "sara@example.com",
    company: "Northline Retail",
    service: "Website Development",
    budget: "£5k–£10k",
    message: "Need a redesign for our ecommerce site and better mobile speed.",
    status: "new",
    notes: "",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "seed-2",
    name: "James Cole",
    email: "james@valix.test",
    company: "Valix Labs",
    service: "SEO",
    budget: "£2k–£5k",
    message: "Looking for technical SEO after our Next.js launch.",
    status: "contacted",
    notes: "Booked discovery call for Thursday.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
  },
  {
    id: "seed-3",
    name: "Amira Noor",
    email: "amira@studio.test",
    company: "Noor Studio",
    service: "App Development",
    budget: "£10k+",
    message: "Want an iOS + Android MVP for a booking product.",
    status: "qualified",
    notes: "",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
];

async function ensureFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(LEADS_FILE);
  } catch {
    await fs.writeFile(LEADS_FILE, JSON.stringify(seedLeads, null, 2), "utf8");
  }
}

export async function readLeads(): Promise<Lead[]> {
  try {
    await ensureFile();
    const raw = await fs.readFile(LEADS_FILE, "utf8");
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : seedLeads;
  } catch {
    return [...seedLeads];
  }
}

async function writeLeads(leads: Lead[]) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch (err) {
    console.warn("[leads-store] write failed (ephemeral FS?)", err);
    return false;
  }
}

export async function createLead(
  input: Omit<Lead, "id" | "status" | "notes" | "createdAt" | "updatedAt">,
): Promise<Lead> {
  const now = new Date().toISOString();
  const lead: Lead = {
    ...input,
    id: randomUUID(),
    status: "new",
    notes: "",
    createdAt: now,
    updatedAt: now,
  };
  const leads = await readLeads();
  leads.unshift(lead);
  await writeLeads(leads);
  return lead;
}

export async function updateLead(
  id: string,
  patch: Partial<Pick<Lead, "status" | "notes">>,
): Promise<Lead | null> {
  const leads = await readLeads();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx < 0) return null;
  leads[idx] = {
    ...leads[idx],
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  await writeLeads(leads);
  return leads[idx];
}

export async function getLead(id: string): Promise<Lead | null> {
  const leads = await readLeads();
  return leads.find((l) => l.id === id) ?? null;
}
