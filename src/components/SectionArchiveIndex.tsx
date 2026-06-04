import Link from "next/link";
import type { SectionArchiveIndexItem } from "@/data/ioArchiveSections";

type SectionArchiveIndexProps = {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle?: string;
  archiveItems: SectionArchiveIndexItem[];
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function slugifyId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ArchiveIndexCard({ item }: { item: SectionArchiveIndexItem }) {
  const content = (
    <>
      <span className="section-archive-index__item-id">{item.id}</span>
      <span className="section-archive-index__item-title display-type">{item.title}</span>
      <span className="section-archive-index__item-subtitle">{item.subtitle}</span>
    </>
  );

  if (isExternalHref(item.href)) {
    return (
      <a
        className="section-archive-index__card"
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  if (item.href.startsWith("#")) {
    return (
      <a className="section-archive-index__card" href={item.href}>
        {content}
      </a>
    );
  }

  return (
    <Link className="section-archive-index__card" href={item.href}>
      {content}
    </Link>
  );
}

export function SectionArchiveIndex({
  archiveItems,
  sectionLabel,
  sectionSubtitle,
  sectionTitle,
}: SectionArchiveIndexProps) {
  const titleId = `${slugifyId(sectionLabel)}-title`;

  return (
    <section className="section-archive-index" aria-labelledby={titleId}>
      <header className="section-archive-index__header">
        <p className="section-archive-index__label">{sectionLabel}</p>
        <h2 className="section-archive-index__title display-type" id={titleId}>
          {sectionTitle}
        </h2>
        {sectionSubtitle ? (
          <p className="section-archive-index__subtitle">{sectionSubtitle}</p>
        ) : null}
      </header>
      <div className="section-archive-index__list" aria-label={`${sectionTitle} archive links`}>
        {archiveItems.map((item) => (
          <ArchiveIndexCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
