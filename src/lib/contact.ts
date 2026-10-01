import { z } from "zod";
import { contactOptions } from "@/content/faq";

const services = contactOptions.services as unknown as [string, ...string[]];
const budgets = contactOptions.budgets as unknown as [string, ...string[]];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email"),
  company: z
    .string()
    .trim()
    .min(2, "Enter your company name")
    .max(120),
  service: z.enum(services),
  /** Optional */
  budget: z
    .union([z.enum(budgets), z.literal("")])
    .optional()
    .default(""),
  /** Optional */
  message: z.string().trim().max(4000).optional().default(""),
  /** Honeypot — bots fill this; humans leave empty */
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
