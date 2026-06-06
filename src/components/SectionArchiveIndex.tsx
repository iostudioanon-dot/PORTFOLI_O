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

function ArchiveIndexCard({ item }: { item: SectionArchiveIndexItem }) {
  const isPending = item.status === "PENDING" || !item.href;
  const content = (
    <>
      <span className="section-archive-index__item-id">{item.id}</span>
      <span className="section-archive-index__item-title display-type">{item.title}</span>
      <span className="section-archive-index__item-subtitle">{item.subtitle}</span>
      {isPending ? (
        <span className="section-archive-index__item-status">RESEARCH RECORD IN DEVELOPMENT</span>
      ) : null}
    </>
  );

  if (isPending) {
    return (
      <article
        aria-label={`${item.title}: research record in development`}
        className="section-archive-index__card section-archive-index__card--pending"
      >
        {content}
      </article>
    );
  }

  const href = item.href ?? "";

  if (isExternalHref(href)) {
    return (
      <a
        className="section-archive-index__card"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a className="section-archive-index__card" href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className="section-archive-index__card" href={href}>
      {content}
    </Link>
  );
}

export function SectionArchiveIndex({
  archiveItems,
  sectionTitle,
}: SectionArchiveIndexProps) {
  return (
    <section className="section-archive-index" aria-label={`${sectionTitle} archive index`}>
      <div className="section-archive-index__list" aria-label={`${sectionTitle} archive links`}>
        {archiveItems.map((item) => (
          <ArchiveIndexCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
