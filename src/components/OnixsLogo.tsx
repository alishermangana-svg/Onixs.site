import Image from "next/image";
import { cn } from "@/lib/cn";

const LETTERS = [
  { src: "/logos/onixs-letter-0.png", w: 269, h: 396 },
  { src: "/logos/onixs-letter-1.png", w: 81, h: 396 },
  { src: "/logos/onixs-letter-2.png", w: 279, h: 396 },
  { src: "/logos/onixs-letter-3.png", w: 240, h: 396 },
] as const;

type OnixsLogoProps = {
  href?: string;
  className?: string;
  /** Skip slide-in; keep spin + word cycle */
  quiet?: boolean;
  size?: "sm" | "md";
  /** Unused — kept for callers; light footer uses normal colors */
  invert?: boolean;
};

export function OnixsLogo({
  href = "/",
  className,
  quiet = false,
  size = "md",
}: OnixsLogoProps) {
  const mark = size === "sm" ? "h-8 w-8" : "h-9 w-9 sm:h-10 sm:w-10";
  const letterH = size === "sm" ? "h-6" : "h-7 sm:h-8";

  return (
    <a
      href={href}
      aria-label="Onixs home"
      className={cn(
        "inline-flex items-center gap-1.5 overflow-visible",
        !quiet && "logo-intro",
        className,
      )}
    >
      <span className="relative z-10 inline-flex shrink-0">
        <span
          className={cn(
            "logo-mark logo-mark-spin relative inline-flex shrink-0 overflow-hidden rounded-full bg-transparent",
            mark,
          )}
        >
          <Image
            src="/logos/onixs-o.png"
            alt=""
            aria-hidden
            width={256}
            height={256}
            className="h-full w-full object-contain"
            priority={!quiet}
          />
        </span>
      </span>
      <span
        className={cn(
          "logo-word inline-flex items-center gap-0.5",
          quiet ? "logo-word-static" : "logo-word-cycle",
        )}
      >
        {LETTERS.map((letter) => (
          <span
            key={letter.src}
            className={cn("logo-letter relative inline-flex", letterH)}
            style={{ aspectRatio: `${letter.w} / ${letter.h}` }}
          >
            <Image
              src={letter.src}
              alt=""
              aria-hidden
              width={letter.w}
              height={letter.h}
              className="h-full w-auto object-contain"
            />
          </span>
        ))}
      </span>
      <span className="sr-only">Onixs</span>
    </a>
  );
}
