import Image from "next/image";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { MemorySlip } from "@/components/MemorySlip";
import { MetadataLabel } from "@/components/MetadataLabel";
import { getAssetsForProject } from "@/data/archiveRegistry";
import { instructions } from "@/data/siteContent";
import { instructionLinks } from "@/data/portfolioLinks";

const instructionAsset = getAssetsForProject("instructions")[0];
const instructionChartSrc =
  "/assets/instructions/images/INTSRUCTIONS%20V1.png?v=20260531201006";
const guideVideoSrc = "/assets/instructions/videos/IO%20GUIDE%20VID.mp4";
const threeNaturesQrSrc =
  "/assets/instructions/images/3%20NATURE%20VIDEO.png?v=20260529023029";

export default function InstructionsPage() {
  return (
    <AtmosphericFrame mode="manual">
      <main className="manual-page" id="main-content">
        <section className="manual-copy" aria-labelledby="instructions-title">
          <MetadataLabel>{instructions.eyebrow}</MetadataLabel>
          <h1 className="display-type section-title" id="instructions-title">
            {instructions.title}
          </h1>
          {instructions.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="manual-instruction-grid">
            <section className="manual-copy__need" aria-labelledby="need-title">
              <h2 id="need-title">{instructions.needTitle}</h2>
              <ul>
                {instructions.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
              <p>{instructions.extensionNote}</p>

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
                </div>
              </section>
            </section>

            <div className="instruction-media-column">
              <aside className="instruction-continue" aria-label="Continue to transition">
                <p>Continue here after training.</p>
                <BackToHubLink />
              </aside>

              <figure className="instruction-video" aria-labelledby="instruction-video-caption">
                <div className="instruction-video__frame">
                  <video
                    aria-label={instructions.guideVideoCaption}
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={guideVideoSrc} type="video/mp4" />
                    Your browser does not support this instruction video.
                  </video>
                </div>
                <figcaption id="instruction-video-caption">
                  {instructions.guideVideoCaption}
                </figcaption>
              </figure>

              <figure className="instruction-chart" aria-labelledby="instruction-chart-caption">
                <div className="instruction-chart__frame">
                  <MemorySlip className="instruction-chart__image-slot">
                    <Image
                      alt={instructions.chartAlt}
                      fill
                      sizes="(max-width: 768px) 92vw, (max-width: 1200px) 62vw, 760px"
                      src={instructionChartSrc}
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  </MemorySlip>
                </div>
                <figcaption id="instruction-chart-caption">
                  {instructions.chartCaption}
                </figcaption>
                <a
                  className="instruction-chart__full-size io-link io-glitch-hover"
                  href={instructionChartSrc}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {instructions.fullSizeAction}
                </a>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
