import Image from "next/image";
import Link from "next/link";
import type { ArchiveAsset } from "@/data/archiveRegistry";

type ArchiveCardProps = {
  asset: ArchiveAsset;
};

export function ArchiveCard({ asset }: ArchiveCardProps) {
  const isInternalRoute = asset.url.startsWith("/") && !asset.url.includes("/assets/");
  const content = (
    <>
      <div className="archive-card__body">
        <span className="archive-card__label">{asset.archiveLabel}</span>
        <h3>{asset.title}</h3>
        <dl className="archive-card__grid">
          <div>
            <dt>TYPE</dt>
            <dd>{asset.type}</dd>
          </div>
          <div>
            <dt>STATUS</dt>
            <dd>{asset.status.replaceAll("_", " ")}</dd>
          </div>
          <div>
            <dt>FORMAT</dt>
            <dd>{asset.format}</dd>
          </div>
          <div>
            <dt>ACCESS</dt>
            <dd>{asset.access}</dd>
          </div>
        </dl>
        <p>{asset.transmissionNote}</p>
        <span className="archive-card__signal">SIGNAL / {asset.signalStrength}%</span>
      </div>
      {asset.qrImage ? (
        <figure className="archive-card__qr" aria-label={asset.qrImage.caption}>
          <span className="archive-card__qr-frame">
            <Image
              alt={asset.qrImage.alt}
              height={420}
              src={asset.qrImage.src}
              unoptimized
              width={420}
            />
          </span>
          <figcaption>{asset.qrImage.caption}</figcaption>
        </figure>
      ) : null}
    </>
  );

  if (asset.url) {
    if (isInternalRoute) {
      return (
        <Link
          aria-label={`${asset.action}: ${asset.title}`}
          className={`archive-card archive-card--active${asset.qrImage ? " archive-card--with-qr" : ""} io-link io-glitch-hover`}
          href={asset.url}
        >
          {content}
          <span className="archive-card__action">{asset.action}</span>
        </Link>
      );
    }

    return (
      <a
        aria-label={`${asset.action}: ${asset.title}`}
        className={`archive-card archive-card--active${asset.qrImage ? " archive-card--with-qr" : ""} io-link io-glitch-hover`}
        href={asset.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
        <span className="archive-card__action">{asset.action}</span>
      </a>
    );
  }

  return (
    <article className="archive-card archive-card--locked">
      {content}
      <span className="archive-card__action">ARCHIVE PENDING</span>
    </article>
  );
}
