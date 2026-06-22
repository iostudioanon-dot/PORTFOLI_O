import { notFound } from "next/navigation";
import { AtmosphericButton } from "@/components/AtmosphericButton";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { MetadataLabel } from "@/components/MetadataLabel";
import { io3ArchiveSectionMap, io3ArchiveSections } from "@/data/ioArchiveSections";

type IO3ArchivePageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return io3ArchiveSections.map((section) => ({
    section: section.id,
  }));
}

export async function generateMetadata({ params }: IO3ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io3ArchiveSectionMap.get(section);

  return {
    title: archiveSection ? `${archiveSection.label} / PORTFOLI/O` : "I/O3 / PORTFOLI/O",
    description: archiveSection?.subtitle,
  };
}

function sectionCode(label: string) {
  return label.split(" ")[0] ?? label;
}

export default async function IO3ArchivePage({ params }: IO3ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io3ArchiveSectionMap.get(section);

  if (!archiveSection) {
    notFound();
  }

  return (
    <AtmosphericFrame activeId="io3" mode="project">
      <main
        className="project-page project-page--io3 io3-archive-page"
        id="main-content"
        style={
          {
            "--project-primary": "#89f58a",
            "--project-secondary": "#8b6dff",
            "--project-field": "#06110c",
          } as React.CSSProperties
        }
      >
        <section className="project-hero archive-record-hero" aria-labelledby="io3-archive-title">
          <div className="page-transition-link segment-landing__transition">
            <AtmosphericButton
              className="section-transition-link section-transition-link--boxed"
              href="/io3"
            >
              RETURN TO I/O3
            </AtmosphericButton>
          </div>
          <p className="archive-record-hero__code">{sectionCode(archiveSection.label)}</p>
          <h1 className="display-type section-title" id="io3-archive-title">
            {archiveSection.title}
          </h1>
          <p className="project-hero__subtitle">{archiveSection.subtitle}</p>
          <p>{archiveSection.intro}</p>
        </section>

        <div className="project-section-stack">
          {archiveSection.sections.map((block) => {
            const blockId = `${archiveSection.id}-${block.title.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="project-section" aria-labelledby={blockId} key={block.title}>
                <MetadataLabel>{block.marker}</MetadataLabel>
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
