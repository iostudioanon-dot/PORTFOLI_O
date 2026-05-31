import { archiveRegistry, type ArchiveAsset } from "./archiveRegistry";

export type PortfolioLink = Pick<
  ArchiveAsset,
  | "title"
  | "type"
  | "url"
  | "description"
  | "archiveLabel"
  | "status"
  | "format"
  | "access"
  | "transmissionNote"
  | "action"
> & {
  thumbnail: string;
  section: string;
};

function linksFor(section: string): PortfolioLink[] {
  return archiveRegistry
    .filter((asset) => asset.projectId === section)
    .map((asset) => ({
      title: asset.title,
      type: asset.type,
      url: asset.url,
      description: asset.description,
      thumbnail: "",
      section,
      archiveLabel: asset.archiveLabel,
      status: asset.status,
      format: asset.format,
      access: asset.access,
      transmissionNote: asset.transmissionNote,
      action: asset.action,
    }));
}

export const landingLinks: PortfolioLink[] = linksFor("landing");
export const navigationLinks: PortfolioLink[] = linksFor("navigation");
export const instructionLinks: PortfolioLink[] = linksFor("instructions");
export const io1Links: PortfolioLink[] = linksFor("io1");
export const io2Links: PortfolioLink[] = linksFor("io2");
export const io3Links: PortfolioLink[] = linksFor("io3");
export const io4Links: PortfolioLink[] = linksFor("io4");
export const timelineLinks: PortfolioLink[] = linksFor("xfm");

export const portfolioLinkSections = {
  landingLinks,
  navigationLinks,
  instructionLinks,
  io1Links,
  io2Links,
  io3Links,
  io4Links,
  timelineLinks,
};

export const portfolioLinkFilters = ["video", "image", "game", "app", "document"];
