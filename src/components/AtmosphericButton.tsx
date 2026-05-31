import Link from "next/link";

type AtmosphericButtonProps = {
  children: React.ReactNode;
  className?: string;
  dataText?: string;
  href: string;
  secondary?: boolean;
};

export function AtmosphericButton({
  children,
  className,
  dataText,
  href,
  secondary = false,
}: AtmosphericButtonProps) {
  const classes = [
    "transmission-link io-button io-glitch-hover display-type",
    secondary ? "transmission-link--secondary" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      className={classes}
      data-text={dataText}
      href={href}
    >
      {children}
    </Link>
  );
}
