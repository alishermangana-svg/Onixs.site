import Image from "next/image";
import { cn } from "@/lib/cn";

type OnixsLogoProps = {
  href?: string;
  className?: string;
  quiet?: boolean;
  size?: "sm" | "md";
  /** Use inverted mark for dark backgrounds */
  invert?: boolean;
};

export function OnixsLogo({
  href = "/",
  className,
  size = "md",
  invert = false,
}: OnixsLogoProps) {
  const mark = size === "sm" ? "h-7 w-7" : "h-8 w-8 sm:h-9 sm:w-9";
  const text = size === "sm" ? "text-lg" : "text-xl sm:text-[1.35rem]";

  return (
    <a
      href={href}
      aria-label="Onixs home"
      className={cn(
        "inline-flex max-w-full shrink-0 items-center gap-1.5",
        className,
      )}
    >
      <Image
        src="/logos/onixs-mark.webp"
        alt=""
        aria-hidden
        width={72}
        height={72}
        priority
        className={cn(
          "shrink-0 rounded-full object-contain",
          mark,
          invert && "brightness-0 invert",
        )}
      />
      <span
        className={cn(
          "font-display font-bold tracking-[-0.04em]",
          text,
          invert ? "text-white" : "text-navy-ink",
        )}
      >
        Onixs
      </span>
    </a>
  );
}
