import Link from "next/link";

type AtmosphericButtonProps = {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
};

export function AtmosphericButton({
  children,
  href,
  secondary = false,
}: AtmosphericButtonProps) {
  return (
    <Link
      className={`transmission-link io-button io-glitch-hover display-type${secondary ? " transmission-link--secondary" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
