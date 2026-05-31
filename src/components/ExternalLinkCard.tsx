import type { PortfolioLink } from "@/data/portfolioLinks";

type ExternalLinkCardProps = {
  item: PortfolioLink;
  variant?: "card" | "transmission";
};

export function ExternalLinkCard({
  item,
  variant = "card",
}: ExternalLinkCardProps) {
  return (
    <a
      aria-label={`${item.action}: ${item.title}`}
      className={`external-link-card external-link-card--${variant} io-link io-glitch-hover`}
      href={item.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="external-link-card__meta">
        {item.archiveLabel ? `${item.archiveLabel} / ` : ""}
        {item.type}
      </span>
      <span className="external-link-card__title display-type">{item.title}</span>
      {item.description ? (
        <span className="external-link-card__description">{item.description}</span>
      ) : null}
      <span className="external-link-card__action">{item.action}</span>
    </a>
  );
}
