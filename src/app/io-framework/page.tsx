import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { HeaderGifBlock } from "@/components/HeaderGifBlock";
import { SectionArchiveIndex } from "@/components/SectionArchiveIndex";
import type { SectionArchiveIndexRecord } from "@/data/ioArchiveSections";
import { assetPath } from "@/lib/assetPath";

export const metadata = {
  title: "I/O Framework / PORTFOLI/O",
  description: "Project structure, process, and context for the I/O portfolio.",
};

const frameworkHeroGif = {
  src: assetPath("/assets/timeline/videos/104%20FLY%20GIF.gif"),
  alt: "Animated butterfly transmission for the I/O Framework.",
  caption: "104 FLY GIF",
};

const frameworkNavigation: SectionArchiveIndexRecord = {
  sectionLabel: "I/O FRAMEWORK INDEX",
  sectionTitle: "I/O FRAMEWORK",
  sectionSubtitle: "Project structure / process / context",
  archiveItems: [
    {
      id: "F.1",
      title: "I/O PROCESS",
      subtitle: "Input / process / output",
      href: "/io-framework/process",
      status: "OPEN",
    },
    {
      id: "F.2",
      title: "THREE NATURES",
      subtitle: "First Nature / Second Nature / Third Nature",
      href: "/io-framework/three-natures",
      status: "OPEN",
    },
    {
      id: "F.3",
      title: "TIMELINE / RANDOM ARCHIVE ROUTE",
      subtitle: "Timeline and archive holding route",
      href: "/io-framework/timeline",
      status: "OPEN",
    },
  ],
};

export default function IOFrameworkPage() {
  return (
    <AtmosphericFrame activeId="io-framework" mode="project">
      <main
        className="project-page project-page--io-framework"
        id="main-content"
        style={
          {
            "--project-primary": "#f4f4f0",
            "--project-secondary": "#8a8a8a",
            "--project-field": "#000000",
          } as React.CSSProperties
        }
      >
        <section className="segment-landing" aria-labelledby="project-title">
          <div className="segment-landing__transition page-transition-link">
            <BackToHubLink className="section-transition-link section-transition-link--boxed" />
          </div>

          <header className="segment-landing__title-block">
            <p className="segment-landing__number display-type">I/O FRAMEWORK</p>
            <h1 className="segment-landing__title display-type" id="project-title">
              I/O FRAMEWORK
            </h1>
            <p className="segment-landing__subtitle">PROJECT STRUCTURE / PROCESS / CONTEXT</p>
          </header>

          <div className="segment-landing__media zone-hero-media">
            <HeaderGifBlock gif={frameworkHeroGif} showCaption={false} />
          </div>

          <SectionArchiveIndex {...frameworkNavigation} />
        </section>
      </main>
    </AtmosphericFrame>
  );
}
