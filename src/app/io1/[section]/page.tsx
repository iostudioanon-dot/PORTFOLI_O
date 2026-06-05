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

function sectionCode(label: string) {
  return label.split(" ")[0] ?? label;
}

function sectionMarker(title: string) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("concept") || normalizedTitle.includes("context")) {
    return "CONTEXT";
  }

  if (normalizedTitle.includes("development") || normalizedTitle.includes("experiment") || normalizedTitle.includes("method")) {
    return "PROCESS";
  }

  if (normalizedTitle.includes("audio") || normalizedTitle.includes("interactive") || normalizedTitle.includes("output")) {
    return "OUTPUT";
  }

  if (normalizedTitle.includes("reflection") || normalizedTitle.includes("influence")) {
    return "REFLECTION";
  }

  return "RESEARCH";
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
        <section className="project-hero archive-record-hero io1-archive-hero" aria-labelledby="io1-archive-title">
          <div className="page-transition-link">
            <BackToHubLink />
          </div>
          <p className="archive-record-hero__code">{sectionCode(archiveSection.label)}</p>
          <h1 className="display-type section-title" id="io1-archive-title">
            {archiveSection.title}
          </h1>
          <p className="project-hero__subtitle">{archiveSection.subtitle}</p>
          <p>{archiveSection.intro}</p>
        </section>

        <IO1SecondaryNav activeId={archiveSection.id} />

        <div className="project-section-stack io1-archive-stack">
          {archiveSection.sections.map((block) => {
            const blockId = `${archiveSection.id}-${block.title.toLowerCase().replaceAll(" ", "-")}`;

            return (
              <section className="project-section io1-archive-section" aria-labelledby={blockId} key={block.title}>
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
