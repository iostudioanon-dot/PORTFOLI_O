import Link from "next/link";
import type { ReactNode } from "react";
import type { ProjectRecord } from "../../data/projects";
import type { SectionArchiveIndexRecord } from "@/data/ioArchiveSections";
import { BackToHubLink } from "./BackToHubLink";
import { HeaderGifBlock } from "./HeaderGifBlock";
import { SectionArchiveIndex } from "./SectionArchiveIndex";

type SegmentLandingPageProps = {
  children?: ReactNode;
  project: ProjectRecord;
  sectionArchiveIndex?: SectionArchiveIndexRecord;
};

function getSegmentLabel(project: ProjectRecord) {
  return project.navLabel;
}

function getTransitionClass(_project: ProjectRecord) {
  return "section-transition-link section-transition-link--boxed";
}

export function SegmentLandingPage({
  children,
  project,
  sectionArchiveIndex,
}: SegmentLandingPageProps) {
  return (
    <>
      <section className="segment-landing" aria-labelledby="project-title">
        <div className="segment-landing__transition page-transition-link">
          <BackToHubLink className={getTransitionClass(project)} />
        </div>

        {project.preTitleAction ? (
          <Link
            className="segment-landing__entry-box io-link io-glitch-hover"
            href={project.preTitleAction.href}
          >
            <span className="segment-landing__entry-title display-type">{project.preTitleAction.title}</span>
            <span className="segment-landing__entry-description">{project.preTitleAction.description}</span>
          </Link>
        ) : null}

        <header className="segment-landing__title-block">
          <p className="segment-landing__number display-type">{getSegmentLabel(project)}</p>
          <h1 className="segment-landing__title display-type" id="project-title">
            {project.title}
          </h1>
          <p className="segment-landing__subtitle">{project.subtitle}</p>
        </header>

        {project.headerGif ? (
          <div className="segment-landing__media zone-hero-media">
            <HeaderGifBlock gif={project.headerGif} showCaption={false} />
          </div>
        ) : null}

        {sectionArchiveIndex ? <SectionArchiveIndex {...sectionArchiveIndex} /> : null}

        <p className="segment-landing__context">{project.description}</p>
      </section>

      {children}
    </>
  );
}
