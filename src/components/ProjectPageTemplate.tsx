import type { ProjectRecord } from "../../data/projects";
import { getAssetsForProject } from "@/data/archiveRegistry";
import { ArchiveCard } from "./ArchiveCard";
import { BackToHubLink } from "./BackToHubLink";
import { EvidencePanel } from "./EvidencePanel";
import { HeaderGifBlock } from "./HeaderGifBlock";
import { ImageArchiveViewer } from "./ImageArchiveViewer";
import { IO1SecondaryNav } from "./IO1SecondaryNav";
import { IO2SecondaryNav } from "./IO2SecondaryNav";
import { MetadataLabel } from "./MetadataLabel";
import { SentinelExternalPanel } from "./SentinelExternalPanel";
import { getImagesForProject } from "@/data/imageRegistry";

type ProjectPageTemplateProps = {
  project: ProjectRecord;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const assets = getAssetsForProject(project.id);
  const images = getImagesForProject(project.id);
  const io3FinalArtwork = project.id === "io3"
    ? assets.find((asset) => asset.id === "io3-final-piece-site")
    : undefined;

  return (
    <>
      <section className="project-hero io-project-hero" aria-labelledby="project-title">
        <div className="io-project-hero__grid">
          <div className="io-project-copy">
            <div className="page-transition-link">
              <BackToHubLink />
            </div>
            <div className="project-hero__meta">
              <span>{project.coordinates}</span>
              <span>{project.theme}</span>
            </div>
            <h1 className="display-type section-title" id="project-title">
              {project.navLabel} / {project.title}
            </h1>
            <p className="project-hero__subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
          </div>
          {project.headerGif ? (
            <div className="io-project-media">
              <HeaderGifBlock gif={project.headerGif} />
            </div>
          ) : null}
        </div>
        <div className="project-status-strip" aria-label="Project system status">
          <span>STATUS / {project.status.replaceAll("_", " ")}</span>
          <span>SIGNAL / {project.signalStrength}%</span>
          <span>ACCESS / {project.accessLevel}</span>
          <span>ENVIRONMENT / {project.environment}</span>
        </div>
        {io3FinalArtwork ? (
          <div className="project-hero__actions">
            <a
              aria-label="Open I/O3 final artwork field study"
              className="transmission-link transmission-link--lime io-link io-glitch-hover display-type"
              href={io3FinalArtwork.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {io3FinalArtwork.action}
            </a>
          </div>
        ) : null}
      </section>

      {project.id === "io1" ? <IO1SecondaryNav /> : null}
      {project.id === "io2" ? <IO2SecondaryNav activeId="system" /> : null}

      <div className="project-section-stack">
        {project.id === "io1" ? <SentinelExternalPanel /> : null}

        <section className="project-section" aria-labelledby="context-title">
          <MetadataLabel>RECOVERED CONTEXT</MetadataLabel>
          <h2 id="context-title">Layer Context</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-section" aria-labelledby="signal-records-title">
          <MetadataLabel>SIGNAL RECORDS</MetadataLabel>
          <h2 id="signal-records-title">Recovered System Records</h2>
          <div className="archive-card-grid">
            {assets.map((asset) => (
              <ArchiveCard asset={asset} key={asset.id} />
            ))}
          </div>
        </section>

        {images.length > 0 ? (
          <section className="project-section" aria-labelledby="visual-records-title">
            <MetadataLabel>VISUAL RECORDS</MetadataLabel>
            <h2 id="visual-records-title">Image Archive</h2>
            <ImageArchiveViewer images={images} />
          </section>
        ) : null}

        <section className="project-section" aria-labelledby="research-title">
          <MetadataLabel>RESEARCH ARCHIVE</MetadataLabel>
          <EvidencePanel notes={project.archiveNotes} />
        </section>

        <section className="project-section" aria-labelledby="process-title">
          <MetadataLabel>PROCESS FRAGMENTS</MetadataLabel>
          <h2 id="process-title">Process Fragments</h2>
          <ul>
            {project.processNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section className="project-section" aria-labelledby="outputs-title">
          <MetadataLabel>OUTPUT STATE</MetadataLabel>
          <h2 id="outputs-title">Output State</h2>
          <ul>
            {project.outputs.map((output) => (
              <li key={output}>{output}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
