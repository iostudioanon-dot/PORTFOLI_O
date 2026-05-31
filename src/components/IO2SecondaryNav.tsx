import Link from "next/link";
import { io2ArchiveSections } from "@/data/ioArchiveSections";
import { MetadataLabel } from "./MetadataLabel";

type IO2SecondaryNavProps = {
  activeId?: string;
};

export function IO2SecondaryNav({ activeId }: IO2SecondaryNavProps) {
  return (
    <nav className="io2-secondary-nav" aria-label="I/O2 archive navigation">
      <div className="io2-secondary-nav__header">
        <MetadataLabel as="span">I/O2 ARCHITECTURE INDEX</MetadataLabel>
        <span>WATER / STRUCTURE / LANDSCAPE</span>
      </div>
      <div className="io2-secondary-nav__grid">
        {io2ArchiveSections.map((section) => (
          <Link
            aria-current={activeId === section.id ? "page" : undefined}
            className="io2-secondary-nav__link io-link io-glitch-hover"
            data-active={activeId === section.id}
            href={section.route ?? "/io2-hypogeal-landscape"}
            key={section.id}
          >
            <span>{section.label}</span>
            <small>{section.subtitle}</small>
          </Link>
        ))}
      </div>
    </nav>
  );
}
