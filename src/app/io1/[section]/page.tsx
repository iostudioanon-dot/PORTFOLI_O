import { notFound } from "next/navigation";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { IO1SecondaryNav } from "@/components/IO1SecondaryNav";
import { MetadataLabel } from "@/components/MetadataLabel";
import { io1ArchiveSectionMap, io1ArchiveSections } from "@/data/ioArchiveSections";

type IO1ArchivePageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return io1ArchiveSections.map((section) => ({
    section: section.id,
  }));
}

export async function generateMetadata({ params }: IO1ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io1ArchiveSectionMap.get(section);

  return {
    title: archiveSection ? `${archiveSection.label} / PORTFOLI/O` : "I/O1 / PORTFOLI/O",
    description: archiveSection?.subtitle,
  };
}

export default async function IO1ArchivePage({ params }: IO1ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io1ArchiveSectionMap.get(section);

  if (!archiveSection) {
    notFound();
  }

  return (
    <AtmosphericFrame activeId="io1" mode="project">
      <main
        className="project-page project-page--io1 io1-archive-page"
        id="main-content"
        style={
          {
            "--project-primary": "#ff1a1a",
            "--project-secondary": "#5a0000",
            "--project-field": "#000000",
          } as React.CSSProperties
        }
      >
        <section className="project-hero io1-archive-hero" aria-labelledby="io1-archive-title">
          <div className="page-transition-link">
            <BackToHubLink />
          </div>
          <div className="project-hero__meta">
            <span>{archiveSection.label}</span>
            <span>{archiveSection.subtitle}</span>
          </div>
          <h1 className="display-type section-title" id="io1-archive-title">
            {archiveSection.label}
          </h1>
          <p className="project-hero__subtitle">{archiveSection.subtitle}</p>
          <p>
            A recovered I/O1 research channel prepared for future images, sound, writing,
            process documentation, and external transmissions.
          </p>
          <div className="project-status-strip" aria-label="I/O1 archive system status">
            <span>STATUS / {archiveSection.status}</span>
            <span>ACCESS / LEVEL_01</span>
            <span>ENVIRONMENT / ORBITAL</span>
            <span>PALETTE / BLACK WHITE RED</span>
          </div>
        </section>

        <IO1SecondaryNav activeId={archiveSection.id} />

        <div className="project-section-stack io1-archive-stack">
          {archiveSection.sections.map((block) => {
            const blockId = `${archiveSection.id}-${block.title.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="project-section io1-archive-section" aria-labelledby={blockId} key={block.title}>
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
