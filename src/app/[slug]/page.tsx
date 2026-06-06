import { notFound } from "next/navigation";
import type { ProjectRecord } from "../../../data/projects";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { HeaderGifBlock } from "@/components/HeaderGifBlock";
import { ProjectPageTemplate } from "@/components/ProjectPageTemplate";
import { assetPath } from "@/lib/assetPath";
import { projectMap, projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const timelineHeroGif = {
  src: assetPath("/assets/timeline/videos/104%20FLY%20GIF.gif"),
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
  return (
    <>
      <section className="xfm-central" aria-labelledby="project-title">
        <div className="page-transition-link xfm-central__route">
          <BackToHubLink className="section-transition-link section-transition-link--timeline" />
        </div>
        <p className="xfm-central__number display-type">TIMELINE I/O</p>
        <h1 className="display-type xfm-central__title" id="project-title">
          TIMELINE I/O
        </h1>
        <p className="xfm-central__subtitle">{project.subtitle}</p>
        <div className="xfm-central__media zone-hero-media">
          <HeaderGifBlock gif={timelineHeroGif} />
        </div>
        <nav className="xfm-central__actions" aria-label="Timeline I/O archive navigation">
          <a
            aria-label="Open TIMELINE I/O PDF archive"
            className="xfm-central__pdf-link io-link io-glitch-hover"
            href={assetPath("/assets/pdfs/io-transition/03-timeline-io/timeline-io.pdf")}
            rel="noopener noreferrer"
            target="_blank"
          >
            PDF ARCHIVE
          </a>
          <a
            className="xfm-central__pdf-link io-link io-glitch-hover"
            href="https://iostudioanon-dot.github.io/IOCAVE/"
            rel="noopener noreferrer"
            target="_blank"
          >
            EVOLUTI/ON
          </a>
        </nav>
        <p className="xfm-central__description">{project.description}</p>
      </section>

      <section className="timeline-system timeline-system--central" aria-labelledby="timeline-title">
        <h2 className="visually-hidden" id="timeline-title">
          Fragmented Chronology
        </h2>
        <ol className="timeline-list timeline-list--central">
          {project.timeline?.map((entry, index) => (
            <li className="timeline-node timeline-node--central" key={entry.title}>
              <span className="timeline-node__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{entry.title}</h3>
              <span className="timeline-node__marker">{entry.marker}</span>
              <p>{entry.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
