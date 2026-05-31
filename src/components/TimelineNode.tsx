import type { TimelineEntry } from "../../data/projects";

type TimelineNodeProps = {
  entry: TimelineEntry;
  index: number;
};

export function TimelineNode({ entry, index }: TimelineNodeProps) {
  return (
    <details className="timeline-node" open={index < 3}>
      <summary className="io-link io-glitch-hover">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{entry.title}</span>
        <small>{entry.category}</small>
      </summary>
      <p>{entry.note}</p>
      <span className="timeline-node__marker">{entry.marker}</span>
    </details>
  );
}
