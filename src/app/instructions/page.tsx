import Image from "next/image";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { InstructionVideo } from "@/components/InstructionVideo";
import { MetadataLabel } from "@/components/MetadataLabel";
import { getAssetsForProject } from "@/data/archiveRegistry";
import { instructions } from "@/data/siteContent";
import { instructionLinks } from "@/data/portfolioLinks";
import { assetPath } from "@/lib/assetPath";

const instructionAsset = getAssetsForProject("instructions")[0];
const instructionQrCodeSrc =
  assetPath("/assets/instructions/images/instructions%20v2.png");
const guideVideoSrc = assetPath("/assets/instructions/videos/IO%20GUIDE%20VID.mp4");
const instructionQrHref = "https://www.youtube.com/watch?v=XgUie3WoanA";
const threeNaturesQrSrc =
  assetPath("/assets/instructions/images/3%20NATURE%20VIDEO.png?v=20260529023029");
const threeNaturesGifSrc =
  assetPath("/assets/instructions/videos/startioGIF%20NATURES.gif");

const ioSequence = [
  {
    title: "INPUT",
    copy:
      "Source material, research, drawings, architecture, landscape, sound, and historical imagery.",
  },
  {
    title: "PROCESS",
    copy:
      "Collage, editing, coding, AI experimentation, digital reconstruction, failure, distortion, and decision-making.",
  },
  {
    title: "OUTPUT",
    copy:
      "Final artworks, websites, moving image pieces, interactive pages, and visual investigations.",
  },
];

const threeNatures = [
  {
    title: "FIRST NATURE",
    copy:
      "The physical world: landscape, geology, atmosphere, bodies, material surfaces, and natural processes.",
  },
  {
    title: "SECOND NATURE",
    copy:
      "The built world: architecture, infrastructure, cities, shelters, monuments, and designed environments.",
  },
  {
    title: "THIRD NATURE",
    copy:
      "The mediated world: digital images, AI tools, communication networks, surveillance, screens, archives, and technological experience.",
  },
];

const projectZones = [
  {
    title: "I/O1 / THE SENTINEL",
    copy:
      "Space, speculation, environmental collapse, and the possibility of leaving Earth.",
  },
  {
    title: "I/O2 / HYPOGEAL LANDSCAPE",
    copy:
      "Subterranean architecture, landscape, Fallingwater, organic architecture, and hidden environments.",
  },
  {
    title: "I/O3 / IONOSPHERIC INTERSECTION",
    copy:
      "Atmosphere, Duga radar, invisible communication, surveillance, and the boundary between Earth and space.",
  },
  {
    title: "I/O4 / PRODUCTIVE FAILURE",
    copy:
      "Creative mistakes, AI errors, material instability, broken processes, and failure as a productive artistic method.",
  },
  {
    title: "TIMELINE I/O",
    copy:
      "A historical spine connecting prehistoric mark-making, architecture, media, technology, and digital culture.",
  },
];

export default function InstructionsPage() {
  return (
    <AtmosphericFrame mode="manual">
      <main className="manual-page" id="main-content">
        <section className="manual-copy" aria-labelledby="instructions-title">
          <header className="manual-hero">
            <MetadataLabel>{instructions.eyebrow}</MetadataLabel>
            <h1 className="display-type section-title" id="instructions-title">
              {instructions.title}
            </h1>
            <p className="manual-hero__subtitle">PROJECT NAVIGATION MANUAL</p>
            <p className="manual-hero__summary">
              A short guide to reading the I/O portfolio as a multimedia A-Level
              investigation.
            </p>
          </header>

          <div className="manual-sections" aria-label="I/O project reading manual">
            <section className="manual-section" aria-labelledby="manual-read-title">
              <p className="manual-section__label" id="manual-read-title">
                01 / HOW TO READ THIS PROJECT
              </p>
              <div className="manual-section__body">
                <p>
                  This website presents I/O as a multimedia A-Level Art
                  investigation rather than a conventional image gallery.
                </p>
                <p>
                  Each section should be read as part of a wider investigation
                  into how nature, architecture, technology, and digital media
                  shape contemporary experience.
                </p>
                <p>
                  The project combines drawing, research, image-making, coding,
                  web design, sound, moving image, and interactive presentation.
                </p>
              </div>
            </section>

            <section className="manual-section" aria-labelledby="manual-io-title">
              <p className="manual-section__label" id="manual-io-title">
                02 / WHAT I/O MEANS
              </p>
              <div className="manual-section__body">
                <p>
                  I/O stands for Input / Output. In computing, input is the
                  signal, material, or data entering a process. Output is what
                  emerges after transformation.
                </p>
                <p>In this project, I use I/O as a creative framework.</p>
                <div className="manual-sequence" aria-label="Input process output sequence">
                  {ioSequence.map((item) => (
                    <article className="manual-sequence__item" key={item.title}>
                      <h2>{item.title}</h2>
                      <p>{item.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="manual-section" aria-labelledby="manual-natures-title">
              <p className="manual-section__label" id="manual-natures-title">
                03 / THREE NATURES
              </p>
              <div className="manual-section__body">
                <p>The project is organised around three forms of nature.</p>
                <div className="manual-three-natures">
                  {threeNatures.map((nature) => (
                    <article className="manual-three-natures__item" key={nature.title}>
                      <h2>{nature.title}</h2>
                      <p>{nature.copy}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="manual-section" aria-labelledby="manual-zones-title">
              <p className="manual-section__label" id="manual-zones-title">
                04 / PROJECT ZONES
              </p>
              <div className="manual-zone-index">
                {projectZones.map((zone) => (
                  <article className="manual-zone-index__item" key={zone.title}>
                    <h2>{zone.title}</h2>
                    <p>{zone.copy}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section className="manual-support" aria-labelledby="manual-support-title">
            <div className="manual-support__header">
              <MetadataLabel>VIEWER ACCESS MATERIAL</MetadataLabel>
              <h2 id="manual-support-title">ACCESS MATERIAL</h2>
            </div>

            <div className="manual-instruction-grid">
              <section className="manual-copy__need" aria-labelledby="need-title">
                <h2 id="need-title">{instructions.needTitle}</h2>
                <ul>
                  {instructions.needs.map((need) => (
                    <li key={need}>{need}</li>
                  ))}
                </ul>
                <p>{instructions.extensionNote}</p>
              </section>

              <figure className="instruction-guide-qr">
                <a
                  aria-label="Open I/O guide video"
                  className="instruction-qr-frame"
                  href={instructionQrHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="Instructions QR code"
                    className="instruction-qr-image"
                    height={900}
                    src={instructionQrCodeSrc}
                    unoptimized
                    width={900}
                  />
                </a>
                <figcaption>
                  I/O GUIDE TRANSMISSION
                  <br />
                  YOUTUBE INSTRUCTION CHANNEL
                </figcaption>
              </figure>

              <div className="instruction-media-column">
                <InstructionVideo
                  caption={instructions.guideVideoCaption}
                  src={guideVideoSrc}
                />
              </div>
            </div>

            <section
              className="external-transmission external-transmission--inline"
              aria-label="External research transmission"
            >
              <div className="instruction-transmission-panel">
                <div className="instruction-transmission-panel__copy">
                  <span className="external-link-card__meta">
                    {instructionLinks[0].archiveLabel} / {instructionLinks[0].type}
                  </span>
                  <h2 className="external-link-card__title display-type">
                    {instructionLinks[0].title}
                  </h2>
                  <p className="external-link-card__description">
                    {instructionLinks[0].description}
                  </p>
                  <span className="instruction-transmission-panel__access">
                    SCAN QR TO OPEN TRANSMISSION
                  </span>
                  <span className="external-transmission__signal">
                    SIGNAL / {instructionAsset.signalStrength}%
                  </span>
                </div>

                <div className="instruction-transmission-media">
                  <figure className="instruction-qr" aria-labelledby="three-natures-qr-caption">
                    <a
                      aria-label={instructions.threeNaturesQrAriaLabel}
                      className="instruction-qr__frame io-link io-glitch-hover"
                      href={instructionLinks[0].url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt={instructions.threeNaturesQrAlt}
                        height={520}
                        src={threeNaturesQrSrc}
                        unoptimized
                        width={520}
                      />
                    </a>
                    <figcaption id="three-natures-qr-caption">
                      {instructions.threeNaturesQrCaption}
                    </figcaption>
                  </figure>

                  <figure className="instruction-transmission-gif">
                    <div className="instruction-transmission-gif__frame">
                      <Image
                        alt="Animated Three Levels of Nature transmission loop."
                        height={520}
                        src={threeNaturesGifSrc}
                        unoptimized
                        width={520}
                      />
                    </div>
                    <figcaption>Three Natures Signal Loop</figcaption>
                  </figure>
                </div>
              </div>
            </section>
          </section>

          <section className="manual-section manual-section--route" aria-labelledby="manual-route-title">
            <p className="manual-section__label" id="manual-route-title">
              05 / HOW TO NAVIGATE
            </p>
            <div className="manual-section__body">
              <p>
                Begin with TRANSITI/ON. The Transition page acts as the main
                navigation stack, allowing you to move through the project zones
                in a controlled order.
              </p>
              <p>
                You can also use the top navigation to move directly between
                sections.
              </p>
              <div className="page-transition-link instructions-transition-link">
                <BackToHubLink />
              </div>
            </div>
          </section>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
