import { AtmosphericButton } from "@/components/AtmosphericButton";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { landing } from "@/data/siteContent";

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
            <AtmosphericButton href="/hub">{landing.primaryAction}</AtmosphericButton>
            <AtmosphericButton href="/instructions" secondary>
              {landing.secondaryAction}
            </AtmosphericButton>
          </div>
        </section>
        <aside className="landing__coordinates" aria-label="Interface coordinates">
          {landing.coordinates.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </aside>
        <div className="landing__timeline" aria-label="Historical signal markers">
          {landing.timeline.map((marker) => (
            <span key={marker}>{marker}</span>
          ))}
        </div>
      </main>
    </AtmosphericFrame>
  );
}
