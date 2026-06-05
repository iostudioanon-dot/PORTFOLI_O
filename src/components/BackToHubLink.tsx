import { AtmosphericButton } from "./AtmosphericButton";

type BackToHubLinkProps = {
  className?: string;
};

export function BackToHubLink({ className }: BackToHubLinkProps) {
  return (
    <AtmosphericButton className={className} href="/hub">
      TRANSITI/ON
    </AtmosphericButton>
  );
}
