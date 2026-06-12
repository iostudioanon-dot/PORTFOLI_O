import Link from "next/link";
import { globalLabels, landing } from "@/data/siteContent";
import { siteMap } from "@/data/siteMap";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { SystemTransition } from "./SystemTransition";

type AtmosphericFrameProps = {
  children: React.ReactNode;
  activeId?: string;
  mode?: "void" | "manual" | "hub" | "project";
};

export function AtmosphericFrame({
  children,
  activeId,
  mode = "project",
}: AtmosphericFrameProps) {
  return (
    <div className={`site-shell site-shell--${mode}`}>
      <a className="skip-link" href="#main-content">
        Skip to archive content
      </a>
      <ScanlineOverlay />
      <SystemTransition />
      <header className="system-header" aria-label="Primary">
        <Link className="system-mark io-link io-glitch-hover display-type" href="/">
          {mode === "void" ? (
            landing.systemBrand.map((line, index) =>
              index === 0 ? <span key={line}>{line}</span> : <small key={line}>{line}</small>,
            )
          ) : (
            <>
              <span>{globalLabels.systemMark}</span>
              <small>{globalLabels.creator.toUpperCase()}</small>
            </>
          )}
        </Link>
        {mode === "void" ? null : (
          <nav className="system-nav" aria-label="Project zones">
            {siteMap
              .filter((entry) => entry.id !== "instructions")
              .map((entry) => (
                <Link
                  aria-current={activeId === entry.id ? "page" : undefined}
                  className="io-link io-glitch-hover"
                  data-active={activeId === entry.id}
                  href={entry.route}
                  key={entry.id}
                >
                  {entry.label}
                </Link>
              ))}
          </nav>
        )}
      </header>
      {children}
    </div>
  );
}
