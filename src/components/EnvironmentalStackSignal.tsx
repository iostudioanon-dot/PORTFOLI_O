import type { CSSProperties } from "react";

const stackLayers = ["ORBIT", "IONOSPHERE", "GROUND", "SUBTERRANEAN", "PROPAGANDA"];

const ioMessages = [
  "HONOUR THY ERROR",
  "SIGNAL ACQUIRED",
  "INTERSECTION ACTIVE",
  "THE MISTAKE CAME FIRST",
  "BOUNDARY DETECTED",
  "PRODUCTIVE FAILURE RECORDED",
  "THE CRACK IS THE MESSAGE",
];

export function EnvironmentalStackSignal() {
  return (
    <section className="environmental-stack-signal" aria-labelledby="environmental-stack-title">
      <p className="environmental-stack-signal__label" id="environmental-stack-title">
        ACTIVE ENVIRONMENTAL STACK
      </p>
      <ol className="environmental-stack-signal__layers" aria-label="Environmental stack sequence">
        {stackLayers.map((layer) => (
          <li key={layer}>{layer}</li>
        ))}
      </ol>
      <p className="environmental-stack-signal__messages" aria-live="polite">
        {ioMessages.map((message, index) => (
          <span key={message} style={{ "--message-index": index } as CSSProperties}>
            {message}
          </span>
        ))}
      </p>
    </section>
  );
}
