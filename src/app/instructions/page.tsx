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

export default function InstructionsPage() {
  return (
    <AtmosphericFrame mode="manual">
      <main className="manual-page" id="main-content">
        <section className="manual-copy" aria-labelledby="instructions-title">
          <div className="page-transition-link instructions-transition-link">
            <BackToHubLink />
          </div>
          <MetadataLabel>{instructions.eyebrow}</MetadataLabel>
          <h1 className="display-type section-title" id="instructions-title">
            {instructions.title}
          </h1>
          {instructions.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="manual-instruction-grid">
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

            <section className="manual-copy__need" aria-labelledby="need-title">
              <h2 id="need-title">{instructions.needTitle}</h2>
              <ul>
                {instructions.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
              <p>{instructions.extensionNote}</p>
            </section>

            <div className="instruction-media-column">
              <InstructionVideo caption={instructions.guideVideoCaption} src={guideVideoSrc} />
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
          </div>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
