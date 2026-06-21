import type { ProjectRecord } from "../../data/projects";
import { getAssetsForProject } from "@/data/archiveRegistry";
import { ArchiveCard } from "./ArchiveCard";
import { EvidencePanel } from "./EvidencePanel";
import { ImageArchiveViewer } from "./ImageArchiveViewer";
import { MetadataLabel } from "./MetadataLabel";
import { PdfLibrary } from "./PdfLibrary";
import { SegmentLandingPage } from "./SegmentLandingPage";
import { SentinelExternalPanel } from "./SentinelExternalPanel";
import { getImagesForProject } from "@/data/imageRegistry";
import { ioSectionArchiveIndexes } from "@/data/ioArchiveSections";

type ProjectPageTemplateProps = {
  project: ProjectRecord;
};

export function ProjectPageTemplate({ project }: ProjectPageTemplateProps) {
  const assets = getAssetsForProject(project.id);
  const visibleAssets = project.id === "io1"
    ? assets.filter((asset) => asset.type !== "pdf")
    : assets;
  const images = getImagesForProject(project.id);
  const sectionArchiveIndex = project.id in ioSectionArchiveIndexes
    ? ioSectionArchiveIndexes[project.id as keyof typeof ioSectionArchiveIndexes]
    : undefined;
  const showExtendedSections =
    project.id !== "io1" && project.id !== "io2" && project.id !== "io3" && project.id !== "io4";

  return (
    <SegmentLandingPage project={project} sectionArchiveIndex={sectionArchiveIndex}>
      {showExtendedSections ? (
        <div className="project-section-stack">
          {project.id === "io1" ? <SentinelExternalPanel /> : null}

          <section className="project-section" aria-labelledby="context-title">
            <MetadataLabel>RECOVERED CONTEXT</MetadataLabel>
            <h2 id="context-title">Layer Context</h2>
            <p>{project.description}</p>
          </section>

          {project.id === "io1" ? (
            <PdfLibrary
              id="io1-pdf-library-title"
              label="PDF LIBRARY"
              sections={[
                {
                  category: "I/O1",
                  description: "Space Race, JFK, Public Service Broadcasting, and Sputnik audio research records.",
                  subcategory: "Sputnik",
                  title: "Sputnik",
                },
                {
                  category: "I/O1",
                  description: "Kubrick and 2001 research records connected to the Sentinel's monolith logic.",
                  subcategory: "Kubrick",
                  title: "Stanley Kubrick",
                },
                {
                  category: "I/O1",
                  description: "Visual influence records for atmosphere, composition, and cinematic restraint.",
                  subcategory: "Morysetta",
                  title: "Morysetta",
                },
                {
                  category: "I/O1",
                  description: "Perspective and optical systems records for Leonardo da Vinci research.",
                  subcategory: "Leonardo da Vinci",
                  title: "Leonardo da Vinci",
                },
              ]}
              title="I/O1 PDF Research Library"
            />
          ) : null}

          {visibleAssets.length > 0 ? (
            <section className="project-section" aria-labelledby="signal-records-title">
              <MetadataLabel>SIGNAL RECORDS</MetadataLabel>
              <h2 id="signal-records-title">Recovered System Records</h2>
              <div className="archive-card-grid">
                {visibleAssets.map((asset) => (
                  <ArchiveCard asset={asset} key={asset.id} />
                ))}
              </div>
            </section>
          ) : null}

          {images.length > 0 || project.id === "io1" ? (
            <section className="project-section" aria-labelledby="visual-records-title">
              <MetadataLabel>VISUAL RECORDS</MetadataLabel>
              <h2 id="visual-records-title">Image Archive</h2>
              {images.length > 0 ? (
                <ImageArchiveViewer images={images} />
              ) : (
                <p>Image sequence in development.</p>
              )}
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
      ) : null}
    </SegmentLandingPage>
  );
}
