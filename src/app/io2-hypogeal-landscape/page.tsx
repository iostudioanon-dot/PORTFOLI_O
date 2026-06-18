import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { MetadataLabel } from "@/components/MetadataLabel";
import { SectionArchiveIndex } from "@/components/SectionArchiveIndex";
import { io2ArchiveSectionMap, ioSectionArchiveIndexes } from "@/data/ioArchiveSections";

export const metadata = {
  title: "I/O2.0 Building The Hypogeal Landscape / PORTFOLI/O",
  description: "I/O2 architecture, landscape, water, and organic systems archive.",
};

function sectionCode(label: string) {
  return label.split(" ")[0] ?? label;
}

function sectionMarker(title: string) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("context") || normalizedTitle.includes("overview")) {
    return "CONTEXT";
  }

  if (normalizedTitle.includes("system") || normalizedTitle.includes("structure")) {
    return "PROCESS";
  }

  if (normalizedTitle.includes("route") || normalizedTitle.includes("connection")) {
    return "OUTPUT";
  }

  return "RESEARCH";
}

export default function IO2SystemPage() {
  const archiveSection = io2ArchiveSectionMap.get("system");

  if (!archiveSection) {
    return null;
  }

  return (
    <AtmosphericFrame activeId="io2" mode="project">
      <main
        className="project-page project-page--io2 io2-archive-page"
        id="main-content"
        style={
          {
            "--project-primary": "#1EA7FF",
            "--project-secondary": "#062A44",
            "--project-field": "#03111F",
          } as React.CSSProperties
        }
        >
        <section className="project-hero archive-record-hero io2-archive-hero" aria-labelledby="io2-system-title">
          <div className="page-transition-link segment-landing__transition">
            <BackToHubLink className="section-transition-link section-transition-link--boxed" />
          </div>
          <p className="archive-record-hero__code">{sectionCode(archiveSection.label)}</p>
          <h1 className="display-type section-title" id="io2-system-title">
            {archiveSection.title}
          </h1>
          <p className="project-hero__subtitle">{archiveSection.subtitle}</p>
          <p>{archiveSection.intro}</p>
        </section>

        <SectionArchiveIndex {...ioSectionArchiveIndexes.io2} />

        <div className="project-section-stack io2-archive-stack">
          {archiveSection.sections.map((block) => {
            const blockId = `io2-system-${block.title.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="project-section io2-archive-section" aria-labelledby={blockId} key={block.title}>
                <MetadataLabel>{block.marker ?? sectionMarker(block.title)}</MetadataLabel>
                <h2 id={blockId}>{block.title}</h2>
                <p>{block.note}</p>
              </section>
            );
          })}
        </div>
      </main>
    </AtmosphericFrame>
  );
}
