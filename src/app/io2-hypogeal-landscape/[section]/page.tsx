import { notFound } from "next/navigation";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { IO2SecondaryNav } from "@/components/IO2SecondaryNav";
import { MetadataLabel } from "@/components/MetadataLabel";
import { io2ArchiveSectionMap, io2ArchiveSections } from "@/data/ioArchiveSections";

type IO2ArchivePageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return io2ArchiveSections
    .filter((section) => section.id !== "system")
    .map((section) => ({
      section: section.id,
    }));
}

export async function generateMetadata({ params }: IO2ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io2ArchiveSectionMap.get(section);

  return {
    title: archiveSection ? `${archiveSection.label} / PORTFOLI/O` : "I/O2 / PORTFOLI/O",
    description: archiveSection?.subtitle,
  };
}

export default async function IO2ArchivePage({ params }: IO2ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io2ArchiveSectionMap.get(section);

  if (!archiveSection || archiveSection.id === "system") {
    notFound();
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
        <section className="project-hero io2-archive-hero" aria-labelledby="io2-archive-title">
          <div className="page-transition-link">
            <BackToHubLink />
          </div>
          <div className="project-hero__meta">
            <span>{archiveSection.label}</span>
            <span>{archiveSection.subtitle}</span>
          </div>
          <h1 className="display-type section-title" id="io2-archive-title">
            {archiveSection.label}
          </h1>
          <p className="project-hero__subtitle">{archiveSection.subtitle}</p>
          <p>
            A water-coded architecture and landscape record prepared for future images, research,
            process fragments, sound, and environmental media.
          </p>
          <div className="project-status-strip" aria-label="I/O2 archive system status">
            <span>STATUS / {archiveSection.status}</span>
            <span>ACCESS / LEVEL_02</span>
            <span>ENVIRONMENT / SUBTERRANEAN</span>
            <span>PALETTE / BLACK WHITE BLUE</span>
          </div>
        </section>

        <IO2SecondaryNav activeId={archiveSection.id} />

        <div className="project-section-stack io2-archive-stack">
          {archiveSection.sections.map((block) => {
            const blockId = `${archiveSection.id}-${block.title.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="project-section io2-archive-section" aria-labelledby={blockId} key={block.title}>
                <MetadataLabel>{archiveSection.label}</MetadataLabel>
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
