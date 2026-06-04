import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { MetadataLabel } from "@/components/MetadataLabel";
import { SectionArchiveIndex } from "@/components/SectionArchiveIndex";
import { io2ArchiveSectionMap, ioSectionArchiveIndexes } from "@/data/ioArchiveSections";

export const metadata = {
  title: "I/O2.0 Building The Hypogeal Landscape / PORTFOLI/O",
  description: "I/O2 architecture, landscape, water, and organic systems archive.",
};

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
        <section className="project-hero io2-archive-hero" aria-labelledby="io2-system-title">
          <div className="page-transition-link">
            <BackToHubLink />
          </div>
          <div className="project-hero__meta">
            <span>{archiveSection.label}</span>
            <span>{archiveSection.subtitle}</span>
          </div>
          <h1 className="display-type section-title" id="io2-system-title">
            I/O2.0 BUILDING THE HYPOGEAL LANDSCAPE
          </h1>
          <p className="project-hero__subtitle">
            Landscape, architecture, organic systems, and built environments.
          </p>
          <p>
            This section moves away from space migration and into landscape, architecture,
            organic systems, water, structure, and the environments built inside natural force.
          </p>
          <div className="project-status-strip" aria-label="I/O2 archive system status">
            <span>STATUS / {archiveSection.status}</span>
            <span>ACCESS / LEVEL_02</span>
            <span>ENVIRONMENT / SUBTERRANEAN</span>
            <span>PALETTE / BLACK WHITE BLUE</span>
          </div>
        </section>

        <SectionArchiveIndex {...ioSectionArchiveIndexes.io2} />

        <div className="project-section-stack io2-archive-stack">
          {archiveSection.sections.map((block) => {
            const blockId = `io2-system-${block.title.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="project-section io2-archive-section" aria-labelledby={blockId} key={block.title}>
                <MetadataLabel>I/O2.0 SYSTEM</MetadataLabel>
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
