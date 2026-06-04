import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { MetadataLabel } from "@/components/MetadataLabel";
import { SegmentLandingPage } from "@/components/SegmentLandingPage";
import { projectMap } from "../../../data/projects";
import { io2ArchiveSectionMap, ioSectionArchiveIndexes } from "@/data/ioArchiveSections";

export const metadata = {
  title: "I/O2.0 Building The Hypogeal Landscape / PORTFOLI/O",
  description: "I/O2 architecture, landscape, water, and organic systems archive.",
};

export default function IO2SystemPage() {
  const archiveSection = io2ArchiveSectionMap.get("system");
  const project = projectMap.get("io2");

  if (!archiveSection || !project) {
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
        <SegmentLandingPage project={project} sectionArchiveIndex={ioSectionArchiveIndexes.io2}>
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
        </SegmentLandingPage>
      </main>
    </AtmosphericFrame>
  );
}
