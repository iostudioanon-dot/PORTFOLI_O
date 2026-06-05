import Link from "next/link";
import type { ArchiveAsset } from "@/data/archiveRegistry";

type ExternalTransmissionProps = {
  asset: ArchiveAsset;
};

export function ExternalTransmission({ asset }: ExternalTransmissionProps) {
  const disabled = !asset.url;
  const isInternalRoute = asset.url?.startsWith("/");
  const className = `external-transmission-node${disabled ? " external-transmission-node--disabled" : " io-link io-glitch-hover"}`;

  const content = (
    <>
      <span className="external-transmission-node__eyebrow">EXTERNAL TRANSMISSION</span>
      <span className="external-transmission-node__title display-type">{asset.title}</span>
      <span className="external-transmission-node__description">{asset.description}</span>
      <span className="external-transmission-node__action">
        {disabled ? "LINK PENDING" : asset.action}
      </span>
    </>
  );

  if (disabled) {
    return <div className={className}>{content}</div>;
  }

  if (isInternalRoute) {
    return (
      <Link
        aria-label={`${asset.action}: ${asset.title}`}
        className={className}
        href={asset.url}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      aria-label={`${asset.action}: ${asset.title}`}
      className={className}
      href={asset.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </a>
  );
}
