export function cn(...inputs: (string | false | null | undefined | 0)[]) {
  return inputs.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

export const clsxCompat = cn;
