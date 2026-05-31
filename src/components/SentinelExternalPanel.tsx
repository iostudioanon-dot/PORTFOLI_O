import { getAssetsForProject } from "@/data/archiveRegistry";
import { sentinel } from "@/data/siteContent";
import { ExternalTransmission } from "./ExternalTransmission";
import { MetadataLabel } from "./MetadataLabel";

const sentinelTransmission = getAssetsForProject("io1").find(
  (asset) => asset.id === "sentinel-external-sequence",
);

export function SentinelExternalPanel() {
  return (
    <section className="sentinel-gateway" aria-labelledby="sentinel-external-title">
      <div className="sentinel-terminal sentinel-terminal--intro">
        <MetadataLabel>{sentinel.eyebrow}</MetadataLabel>
        <h2 className="display-type" id="sentinel-external-title">
          {sentinel.title}
        </h2>
        <div className="sentinel-briefing">
          {sentinel.briefing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="sentinel-actions">
          {sentinelTransmission ? (
            <ExternalTransmission asset={sentinelTransmission} />
          ) : (
            <span className="sentinel-button sentinel-button--locked">
              {sentinel.pendingAction}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
