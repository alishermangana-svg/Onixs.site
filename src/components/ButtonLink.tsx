import Link from "next/link";

type Variant = "primary" | "yellow" | "ghost";

const styles: Record<Variant, string> = {
  primary: "btn-primary",
  yellow: "btn-yellow",
  ghost: "btn-yellow",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
