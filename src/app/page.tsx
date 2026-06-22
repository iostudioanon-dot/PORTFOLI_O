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
          <div className="landing__creator">
            <p className="landing__identity display-type">{landing.identity}</p>
            <p className="landing__role">{landing.role}</p>
          </div>
          <h1 className="display-type landing__title" id="landing-title">
            {landing.title}
          </h1>
          <div className="landing__copy">
            <ul className="landing__nature-stack" aria-label="I/O nature framework">
              {landing.natureStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="landing__axis" aria-hidden="true">
              &nbsp;
            </p>
            <p className="landing__question">{landing.question}</p>
          </div>
          <div className="landing__actions" aria-label="Entry actions">
            <div className="landing__entry">
              <AtmosphericButton
                className="section-transition-link section-transition-link--boxed"
                dataText={landing.secondaryAction}
                href="/instructions"
              >
                {landing.secondaryAction}
              </AtmosphericButton>
            </div>
          </div>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
