import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type StudioCardProps = {
  className?: string;
};

/** Canonical studio contact block — use everywhere for consistent details */
export function StudioCard({ className }: StudioCardProps) {
  return (
    <aside
      className={cn(
        "rounded-[24px] bg-[linear-gradient(165deg,#0b3b36_0%,#062e2a_55%,#041f1c_100%)] p-7 text-white md:p-8",
        className,
      )}
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-[2rem]">
        {site.studioLabel}
      </h2>
      <address className="mt-5 not-italic">
        <p className="text-[15px] leading-relaxed text-white/85">{site.address}</p>
        <p className="mt-3 text-[15px] text-white/75">{site.hours}</p>
        <p className="mt-6">
          <a
            href={`mailto:${site.email}`}
            className="text-[15px] font-semibold text-brand-light hover:underline"
          >
            {site.email}
          </a>
        </p>
        <p className="mt-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-[15px] font-semibold text-brand-light hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </p>
      </address>
    </aside>
  );
}
