import Link from "next/link";
import type { ProjectRecord } from "../../data/projects";

type LayerNavigationBandProps = {
  project: ProjectRecord;
  onActivate?: (project: ProjectRecord) => void;
};

export function LayerNavigationBand({ project, onActivate }: LayerNavigationBandProps) {
  return (
    <Link
      className={`environment-layer environment-layer--${project.id} io-link io-glitch-hover`}
      href={project.route}
      style={
        {
          "--layer-primary": project.colors.primary,
          "--layer-secondary": project.colors.secondary,
          "--layer-field": project.colors.field,
        } as React.CSSProperties
      }
      onFocus={() => onActivate?.(project)}
      onMouseEnter={() => onActivate?.(project)}
    >
      <span className="environment-layer__signal" aria-hidden="true" />
      <span className="environment-layer__index display-type">{project.navLabel}</span>
      <span className="environment-layer__body">
        <span className="environment-layer__title display-type">{project.title}</span>
        <span className="environment-layer__theme">{project.subtitle}</span>
        <span className="environment-layer__meta">
          {project.status.replaceAll("_", " ")} / {project.signalStrength}% / {project.environment}
        </span>
      </span>
      <span className="environment-layer__lock">LOCK SIGNAL</span>
    </Link>
  );
}
