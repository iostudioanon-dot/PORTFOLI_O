import Image from "next/image";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { BackToHubLink } from "@/components/BackToHubLink";
import { instructions } from "@/data/siteContent";
import { instructionLinks } from "@/data/portfolioLinks";
import { assetPath } from "@/lib/assetPath";

const instructionQrMarkerSrc = assetPath(
  "/assets/instructions/images/IO%20QR%20INSTRUCTION%20VIDEO%20V1.png",
);
const instructionQrMarkerUrl = "https://www.youtube.com/watch?v=XgUie3WoanA";

const accessMaterials = [
  "Portfolio",
  "Smartphone",
  "Tablet",
  "Internet Connection",
  "QR Scanner",
  "Headphones",
];

const multimediaStructure = [
  {
    title: "I/O",
    subtitle: "Input / process / output reading system",
  },
  {
    title: "Three Levels of Nature",
    subtitle: "First Nature / Second Nature / Third Nature",
    href: instructionLinks[0]?.url,
  },
  {
    title: "QR / Media Access",
    subtitle: "External transmissions and digital extensions",
  },
];

const mediaTypes = ["Text", "Image", "Video", "Audio", "Interactive Media"];

export default function InstructionsPage() {
  return (
    <AtmosphericFrame mode="manual">
      <main className="manual-page manual-page--entry" id="main-content">
        <div className="page-transition-link instructions-transition-link manual-entry__route">
          <BackToHubLink />
        </div>

        <section className="manual-entry" aria-labelledby="manual-title">
          <header className="manual-entry__header">
            <a
              aria-label="Open QR instruction video for the I/O multimedia portfolio"
              className="manual-entry__qr-link io-link"
              href={instructionQrMarkerUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="QR instruction access image for the I/O multimedia portfolio"
                className="manual-entry__qr-marker"
                height={841}
                src={instructionQrMarkerSrc}
                width={834}
              />
            </a>
            <h1 className="display-type manual-entry__title" id="manual-title">
              MANUAL
            </h1>
            <p className="manual-entry__summary">
              A Short Guide to Reading the I/O Portfolio as a Multimedia Investigation
            </p>
          </header>

          <section className="manual-entry__section" aria-labelledby="manual-access-title">
            <p className="manual-entry__kicker">SECTION 02</p>
            <h2 className="manual-entry__section-title" id="manual-access-title">
              ACCESS MATERIAL
            </h2>
            <ul className="manual-entry__list" aria-label="Required access material">
              {accessMaterials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="manual-entry__note">{instructions.extensionNote}</p>
          </section>

          <section className="manual-entry__section" aria-labelledby="manual-media-title">
            <p className="manual-entry__kicker">SECTION 03</p>
            <h2 className="manual-entry__section-title" id="manual-media-title">
              MULTIMEDIA STRUCTURE
            </h2>
            <div className="manual-entry__nav-list" aria-label="Multimedia structure">
              {multimediaStructure.map((item) => {
                const content = (
                  <>
                    <span>{item.title}</span>
                    <small>{item.subtitle}</small>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      className="manual-entry__nav-item io-link"
                      href={item.href}
                      key={item.title}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div className="manual-entry__nav-item" key={item.title}>
                    {content}
                  </div>
                );
              })}
            </div>
            <ul className="manual-entry__media-types" aria-label="Supported media forms">
              {mediaTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
