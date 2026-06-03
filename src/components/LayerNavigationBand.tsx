import Link from "next/link";
import type { ProjectRecord } from "../../data/projects";

type LayerNavigationBandProps = {
  project: ProjectRecord;
  onActivate?: (project: ProjectRecord) => void;
  sectionNumber: number;
};

export function LayerNavigationBand({
  project,
  onActivate,
  sectionNumber,
}: LayerNavigationBandProps) {
  const paddedNumber = String(sectionNumber).padStart(2, "0");

  return (
    <Link
      className={`transition-route transition-route--${project.id} io-link io-glitch-hover`}
      href={project.route}
      style={
        {
          "--route-primary": project.colors.primary,
        } as React.CSSProperties
      }
      onFocus={() => onActivate?.(project)}
      onMouseEnter={() => onActivate?.(project)}
    >
      <span className="transition-route__number">{paddedNumber}</span>
      <span className="transition-route__identifier display-type">{project.navLabel}</span>
      <span className="transition-route__title display-type">{project.title}</span>
      <span className="transition-route__statement">{project.subtitle}</span>
      <span className="transition-route__action">
        ENTER {project.navLabel}
      </span>
    </Link>
  );
}
