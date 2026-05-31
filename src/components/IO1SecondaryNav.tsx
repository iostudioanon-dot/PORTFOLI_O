import Link from "next/link";
import { io1ArchiveSections } from "@/data/ioArchiveSections";
import { MetadataLabel } from "./MetadataLabel";

type IO1SecondaryNavProps = {
  activeId?: string;
};

export function IO1SecondaryNav({ activeId }: IO1SecondaryNavProps) {
  return (
    <nav className="io1-secondary-nav" aria-label="I/O1 archive navigation">
      <div className="io1-secondary-nav__header">
        <MetadataLabel as="span">I/O1 ARCHIVE INDEX</MetadataLabel>
        <span>BLACK / WHITE / RED SIGNAL SYSTEM</span>
      </div>
      <div className="io1-secondary-nav__grid">
        {io1ArchiveSections.map((section) => (
          <Link
            aria-current={activeId === section.id ? "page" : undefined}
            className="io1-secondary-nav__link io-link io-glitch-hover"
            data-active={activeId === section.id}
            href={section.route ?? "/io1"}
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
