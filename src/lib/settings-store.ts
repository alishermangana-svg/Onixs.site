import { promises as fs } from "fs";
import path from "path";
import { site } from "@/content/site";

export type StudioSettings = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  studioLabel: string;
  hours: string;
  tagline: string;
  notifyEmail: string;
  socials: { label: string; href: string }[];
};

const DATA_DIR = path.join(process.cwd(), "data");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

export function defaultSettings(): StudioSettings {
  return {
    name: site.name,
    email: site.email,
    phone: site.phone,
    whatsapp: site.whatsapp,
    address: site.address,
    studioLabel: site.studioLabel,
    hours: site.hours,
    tagline: site.tagline,
    notifyEmail: site.email,
    socials: site.socials.map((s) => ({ label: s.label, href: s.href })),
  };
}

export async function readSettings(): Promise<StudioSettings> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const raw = await fs.readFile(SETTINGS_FILE, "utf8");
    return { ...defaultSettings(), ...(JSON.parse(raw) as StudioSettings) };
  } catch {
    return defaultSettings();
  }
}

export async function writeSettings(
  settings: StudioSettings,
): Promise<boolean> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2), "utf8");
    return true;
  } catch (err) {
    console.warn("[settings-store] write failed", err);
    return false;
  }
}
