import { MetadataLabel } from "./MetadataLabel";

type EvidencePanelProps = {
  notes: string[];
};

export function EvidencePanel({ notes }: EvidencePanelProps) {
  return (
    <section className="evidence-panel" aria-labelledby="evidence-title">
      <MetadataLabel>EVIDENCE PANEL</MetadataLabel>
      <div className="evidence-panel__lines">
        {notes.map((note, index) => (
          <details key={note} open={index === 0}>
            <summary>FIELD NOTE {String(index + 1).padStart(2, "0")}</summary>
            <p>{note}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
