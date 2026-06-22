import { notFound } from "next/navigation";
import { AtmosphericButton } from "@/components/AtmosphericButton";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { MetadataLabel } from "@/components/MetadataLabel";
import { io4ArchiveSectionMap, io4ArchiveSections } from "@/data/ioArchiveSections";

type IO4ArchivePageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return io4ArchiveSections.map((section) => ({
    section: section.id,
  }));
}

export async function generateMetadata({ params }: IO4ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io4ArchiveSectionMap.get(section);

  return {
    title: archiveSection ? `${archiveSection.label} / PORTFOLI/O` : "I/O4 / PORTFOLI/O",
    description: archiveSection?.subtitle,
  };
}

function sectionCode(label: string) {
  return label.split(" ")[0] ?? label;
}

export default async function IO4ArchivePage({ params }: IO4ArchivePageProps) {
  const { section } = await params;
  const archiveSection = io4ArchiveSectionMap.get(section);

  if (!archiveSection) {
    notFound();
  }

  return (
    <AtmosphericFrame activeId="io4" mode="project">
      <main
        className="project-page project-page--io4 io4-archive-page"
        id="main-content"
        style={
          {
            "--project-primary": "#f4f4f0",
            "--project-secondary": "#737373",
            "--project-field": "#0c0c0c",
          } as React.CSSProperties
        }
      >
        <section className="project-hero archive-record-hero" aria-labelledby="io4-archive-title">
          <div className="page-transition-link segment-landing__transition">
            <AtmosphericButton
              className="section-transition-link section-transition-link--boxed"
              href="/io4"
            >
              RETURN TO I/O4
            </AtmosphericButton>
          </div>
          <p className="archive-record-hero__code">{sectionCode(archiveSection.label)}</p>
          <h1 className="display-type section-title" id="io4-archive-title">
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
