import { AtmosphericFrame } from "@/components/AtmosphericFrame";
import { LayerSystem } from "@/components/LayerSystem";

export default function HubPage() {
  return (
    <AtmosphericFrame mode="hub">
      <main id="main-content">
        <LayerSystem />
      </main>
    </AtmosphericFrame>
  );
}
