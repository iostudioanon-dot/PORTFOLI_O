import Image from "next/image";
import Link from "next/link";
import { AtmosphericButton } from "@/components/AtmosphericButton";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { landing } from "@/data/siteContent";
import { assetPath } from "@/lib/assetPath";

const landingTimelineImage = assetPath(
  "/assets/landing/images/hominid_evolution_timeline_1780368406540.png",
);

export default function Home() {
  return (
    <AtmosphericFrame mode="void">
      <main className="landing" id="main-content">
        <aside className="landing__readout" aria-label="System readout">
          {landing.systemReadout.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </aside>
        <section className="landing__signal" aria-labelledby="landing-title">
          <h1 className="display-type landing__title" id="landing-title">
            {landing.title}
          </h1>
          <p className="landing__identity display-type">{landing.identity}</p>
          <div className="landing__copy">
            <ul className="landing__nature-stack" aria-label="I/O nature framework">
              {landing.natureStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="landing__axis">
              <span className="landing__axis-desktop">{landing.systemAxis}</span>
              <span className="landing__axis-mobile">{landing.systemAxisMobile}</span>
            </p>
            <p className="landing__statement">{landing.intro}</p>
          </div>
          <div className="landing__actions" aria-label="Entry actions">
            <AtmosphericButton
              className="landing-primary-route-link"
              dataText={landing.secondaryAction}
              href="/instructions"
              secondary
            >
              {landing.secondaryAction}
            </AtmosphericButton>
          </div>
        </section>
        <Link
          aria-label="Open Timeline I/O"
          className="landing__timeline landing__timeline-link"
          href="/xfm"
        >
          <Image
            alt="Input output evolution timeline graphic"
            height={165}
            sizes="(max-width: 56rem) 72vw, 31rem"
            src={landingTimelineImage}
            width={970}
          />
        </Link>
      </main>
    </AtmosphericFrame>
  );
}
