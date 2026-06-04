import type { ProjectRecord } from "../../data/projects";
import { getAssetsForProject } from "@/data/archiveRegistry";
import { ArchiveCard } from "./ArchiveCard";
import { EvidencePanel } from "./EvidencePanel";
import { ImageArchiveViewer } from "./ImageArchiveViewer";
import { MetadataLabel } from "./MetadataLabel";
import { SegmentLandingPage } from "./SegmentLandingPage";
import { SentinelExternalPanel } from "./SentinelExternalPanel";
import { getImagesForProject } from "@/data/imageRegistry";
import { ioSectionArchiveIndexes } from "@/data/ioArchiveSections";

type ProjectPageTemplateProps = {
  project: ProjectRecord;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const assets = getAssetsForProject(project.id);
  const images = getImagesForProject(project.id);
  const sectionArchiveIndex = project.id in ioSectionArchiveIndexes
    ? ioSectionArchiveIndexes[project.id as keyof typeof ioSectionArchiveIndexes]
    : undefined;

  return (
    <SegmentLandingPage project={project} sectionArchiveIndex={sectionArchiveIndex}>
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
    </SegmentLandingPage>
  );
}
