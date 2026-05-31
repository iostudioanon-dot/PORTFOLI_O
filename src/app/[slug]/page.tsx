import { notFound } from "next/navigation";
import type { ProjectRecord } from "../../../data/projects";
import { ArchiveCard } from "@/components/ArchiveCard";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { HeaderGifBlock } from "@/components/HeaderGifBlock";
import { ImageArchiveViewer } from "@/components/ImageArchiveViewer";
import { MetadataLabel } from "@/components/MetadataLabel";
import { ProjectPageTemplate } from "@/components/ProjectPageTemplate";
import { TimelineNode } from "@/components/TimelineNode";
import { getAssetsForProject } from "@/data/archiveRegistry";
import { getImagesForProject } from "@/data/imageRegistry";
import { projectMap, projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const timelineHeroGif = {
  src: "/assets/timeline/videos/104%20FLY%20GIF.gif",
  alt: "Animated Timeline I/O text and motion transmission.",
  caption: "104 FLY GIF",
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectMap.get(slug as never);

  return {
    title: project ? `${project.title} / PORTFOLI/O` : "PORTFOLI/O",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectMap.get(slug as never);

  if (!project) {
    notFound();
  }

  return (
    <AtmosphericFrame activeId={project.id} mode="project">
      <main
        className={`project-page project-page--${project.id}`}
        id="main-content"
        style={
          {
            "--project-primary": project.colors.primary,
            "--project-secondary": project.colors.secondary,
            "--project-field": project.colors.field,
          } as React.CSSProperties
        }
      >
        {project.id === "xfm" ? <XfmTimelinePage project={project} /> : <ProjectPageTemplate project={project} />}
      </main>
    </AtmosphericFrame>
  );
}

function XfmTimelinePage({ project }: { project: ProjectRecord }) {
  const assets = getAssetsForProject(project.id);
  const images = getImagesForProject(project.id);

  return (
    <>
      <section className="project-hero xfm-hero" aria-labelledby="project-title">
        <div className="xfm-hero__grid">
          <div className="xfm-hero__copy">
            <div className="project-hero__meta">
              <span>{project.coordinates}</span>
              <span>{project.theme}</span>
            </div>
            <h1 className="display-type section-title" id="project-title">
              TIMELINE I/O
            </h1>
            <p className="project-hero__subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
          </div>
          <div className="xfm-hero__media">
            <HeaderGifBlock gif={timelineHeroGif} />
          </div>
        </div>
        <BackToHubLink />
      </section>

      <section className="timeline-system" aria-labelledby="timeline-title">
        <MetadataLabel>MEDIA ARCHAEOLOGY MAP</MetadataLabel>
        <h2 id="timeline-title">Fragmented Chronology</h2>
        <div className="timeline-categories" aria-label="Timeline categories">
          {[
            "Architecture",
            "Technology",
            "Atmosphere",
            "Media",
            "Surveillance",
            "Cinema",
            "Space Exploration",
            "Digital Systems",
          ].map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <div className="timeline-list">
          {project.timeline?.map((entry, index) => (
            <TimelineNode entry={entry} index={index} key={entry.title} />
          ))}
        </div>
      </section>

      {images.length > 0 ? (
        <section className="project-section xfm-records" aria-labelledby="xfm-visual-records-title">
          <MetadataLabel>VISUAL RECORDS</MetadataLabel>
          <h2 id="xfm-visual-records-title">Timeline Image Archive</h2>
          <ImageArchiveViewer images={images} label="TIMELINE VISUAL RECORDS" />
        </section>
      ) : null}

      <section className="project-section xfm-records" aria-labelledby="xfm-records-title">
        <MetadataLabel>SIGNAL RECORDS</MetadataLabel>
        <h2 id="xfm-records-title">Chronology Archive Records</h2>
        <div className="project-status-strip" aria-label="Timeline system status">
          <span>STATUS / {project.status.replaceAll("_", " ")}</span>
          <span>SIGNAL / {project.signalStrength}%</span>
          <span>ACCESS / {project.accessLevel}</span>
          <span>ENVIRONMENT / {project.environment}</span>
        </div>
        <div className="archive-card-grid">
          {assets.map((asset) => (
            <ArchiveCard asset={asset} key={asset.id} />
          ))}
        </div>
      </section>
    </>
  );
}
