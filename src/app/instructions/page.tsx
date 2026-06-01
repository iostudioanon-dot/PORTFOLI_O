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
const threeNaturesQrSrc =
  assetPath("/assets/instructions/images/3%20NATURE%20VIDEO.png?v=20260529023029");

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

              <InstructionVideo caption={instructions.guideVideoCaption} src={guideVideoSrc} />

              <a
                aria-label="Open I/O guide video"
                className="instruction-qr-frame io-link io-glitch-hover"
                href={guideVideoSrc}
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
            </div>
          </div>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
