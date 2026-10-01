"use client";

import { clsxCompat as cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

/** No-JS-animation reveal — keeps layout APIs stable without framer cost */
export function Reveal({
  children,
  className = "",
  as = "div",
}: RevealProps) {
  const Comp = as;
  return <Comp className={cn(className)}>{children}</Comp>;
}
