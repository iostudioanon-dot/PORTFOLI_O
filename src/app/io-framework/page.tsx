import Link from "next/link";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";

export const metadata = {
  title: "I/O Framework / PORTFOLI/O",
  description: "The foundational conceptual system underlying the I/O investigation.",
};

export default function IoFrameworkPage() {
  return (
    <AtmosphericFrame activeId="framework" mode="project">
      <main className="project-page project-page--framework" id="main-content">
        <section aria-labelledby="framework-title" className="framework-section">
          <div className="framework-header">
            <h1 className="display-type" id="framework-title">
              I/O FRAMEWORK
            </h1>
            <p className="framework-subtitle">Conceptual framework</p>
            <p className="framework-description">
              The I/O Framework explains the three natures and the investigation process. This layer provides access to the foundational concepts and the methodology behind the portfolio.
            </p>
          </div>

          <div className="framework-entries">
            <article className="framework-entry">
              <h2 className="framework-entry-title">Three Natures</h2>
              <p className="framework-entry-desc">
                First Nature, Second Nature, and Third Nature form the primary investigative lens for understanding how human experience is shaped by the natural world, the built environment, and digital environments.
              </p>
              <div className="framework-entry-action">
                <a
                  href="https://youtu.be/TLpH2TUjCOg"
                  className="io-link io-glitch-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW EXTERNAL TRANSMISSION
                </a>
              </div>
            </article>

            <article className="framework-entry">
              <h2 className="framework-entry-title">I/O Process</h2>
              <p className="framework-entry-desc">
                Input, Process, Output. The I/O methodology describes how information, material, and systems move through transformation. Each project layer applies this process to different scales: orbital, atmospheric, ground, and subterranean.
              </p>
              <div className="framework-entry-action">
                <p className="framework-entry-note">In development</p>
              </div>
            </article>
          </div>

          <nav className="framework-nav">
            <Link href="/hub" className="io-link io-glitch-hover">
              RETURN TO TRANSITI/ON
            </Link>
          </nav>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
