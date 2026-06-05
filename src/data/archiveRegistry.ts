import fs from "node:fs";
import path from "node:path";
import type { ProjectId, ProjectStatus } from "../../data/projects";
import { assetPath } from "@/lib/assetPath";

export type ArchiveAssetType =
  | "audio"
  | "video"
  | "game"
  | "website"
  | "pdf"
  | "image"
  | "research"
  | "external"
  | "archive";

export type ArchiveAsset = {
  id: string;
  projectId: ProjectId | "instructions";
  title: string;
  type: ArchiveAssetType;
  status: ProjectStatus;
  url: string;
  description: string;
  signalStrength: number;
  format: string;
  access: "INTERNAL" | "EXTERNAL" | "LOCKED" | "PENDING";
  archiveLabel: "INPUT" | "PROCESS" | "OUTPUT" | "REFERENCE" | "RECOVERED";
  transmissionNote: string;
  action:
    | "INITIATE SEQUENCE"
    | "ENTER SEQUENCE"
    | "OPEN TRANSMISSION"
    | "ACCESS FILE"
    | "VIEW ARCHIVE"
    | "OPEN FIELD STUDY";
  qrImage?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export const archiveRegistry: ArchiveAsset[] = [
  {
    id: "three-levels-of-nature",
    projectId: "instructions",
    title: "I/O: The Three Levels of Nature",
    type: "video",
    status: "EXTERNAL_TRANSMISSION",
    url: "https://youtu.be/TLpH2TUjCOg",
    description:
      "External research transmission connected to First Nature, Second Nature and Third Nature.",
    signalStrength: 72,
    format: "YOUTUBE",
    access: "EXTERNAL",
    archiveLabel: "INPUT",
    transmissionNote: "Conceptual framework reference for the I/O system.",
    action: "OPEN TRANSMISSION",
  },
  {
    id: "sentinel-external-sequence",
    projectId: "io1",
    title: "I/O1 Sentinel Navigational Sequence",
    type: "game",
    status: "EXTERNAL_TRANSMISSION",
    url: "/io1-game",
    description:
      "External gateway sequence reserved for the I/O1 monolith avoidance interface.",
    signalStrength: 61,
    format: "WEB APP",
    access: "EXTERNAL",
    archiveLabel: "PROCESS",
    transmissionNote: "External game sequence connected.",
    action: "ENTER SEQUENCE",
  },
  {
    id: "sputnik",
    projectId: "io1",
    title: "Sputnik",
    type: "audio",
    status: "RECOVERED",
    url: "https://drive.google.com/file/d/1oBBwArRc-8LtrFtB6_91F_RpJOlZ2Flj/view?usp=drive_link",
    description:
      "Experimental audio project exploring the Space Race, remix culture, and narrative sound environments.",
    signalStrength: 87,
    format: "DRIVE AUDIO",
    access: "EXTERNAL",
    archiveLabel: "RECOVERED",
    transmissionNote: "Recovered Sputnik audio transmission.",
    action: "ACCESS FILE",
    qrImage: {
      src: assetPath("/assets/io1-sentinel/links/sputnik-qr.png"),
      alt: "QR code for the recovered Sputnik audio transmission.",
      caption: "SCAN TO ACCESS AUDIO TRANSMISSION",
    },
  },
  {
    id: "io3-final-piece-site",
    projectId: "io3",
    title: "I/O3 Final Artwork Field Study",
    type: "website",
    status: "EXTERNAL_TRANSMISSION",
    url: "https://iostudioanon-dot.github.io/IO3-INFO-ART/",
    description:
      "In-depth external study of the I/O3 final artwork, atmospheric systems, and ionospheric image field.",
    signalStrength: 91,
    format: "WEB ARCHIVE",
    access: "EXTERNAL",
    archiveLabel: "OUTPUT",
    transmissionNote: "Final artwork site recovered as an external ionospheric transmission.",
    action: "OPEN FIELD STUDY",
  },
  {
    id: "io3-radar-reference",
    projectId: "io3",
    title: "Ionospheric Radar Reference",
    type: "research",
    status: "IN_DEVELOPMENT",
    url: "",
    description: "Research signal placeholder for Duga, radar, and aurora systems.",
    signalStrength: 66,
    format: "REFERENCE",
    access: "PENDING",
    archiveLabel: "INPUT",
    transmissionNote: "Radar archaeology thread awaiting source material.",
    action: "VIEW ARCHIVE",
  },
  {
    id: "io4-process-fragments",
    projectId: "io4",
    title: "Process Fragment Grid",
    type: "image",
    status: "ARCHIVE_LOCKED",
    url: "",
    description: "Image archive placeholder for model images, drawings, and failed tests.",
    signalStrength: 49,
    format: "IMAGE SET",
    access: "LOCKED",
    archiveLabel: "PROCESS",
    transmissionNote: "Material evidence not yet recovered.",
    action: "VIEW ARCHIVE",
  },
  {
    id: "io2-excavation-plates",
    projectId: "io2",
    title: "Excavation Plate Sequence",
    type: "image",
    status: "ARCHIVE_LOCKED",
    url: "",
    description: "Subterranean stills, water studies, and spatial fragments.",
    signalStrength: 54,
    format: "IMAGE SET",
    access: "LOCKED",
    archiveLabel: "PROCESS",
    transmissionNote: "Subterranean image sequence pending.",
    action: "VIEW ARCHIVE",
  },
  {
    id: "timeline-dossier",
    projectId: "xfm",
    title: "Timeline I/O Dossier",
    type: "archive",
    status: "IN_DEVELOPMENT",
    url: "",
    description: "Historical timeline and case-study spine for the I/O project.",
    signalStrength: 79,
    format: "DOSSIER",
    access: "PENDING",
    archiveLabel: "REFERENCE",
    transmissionNote: "Chronology archive remains open for expansion.",
    action: "VIEW ARCHIVE",
  },
];

const localAssetExtensions = new Set([".mp4", ".pdf"]);
const localAssetProjectFolders: Record<ProjectId, string[]> = {
  io1: ["io1-sentinel"],
  io2: ["io2-hypogeal-landscape"],
  io3: ["io3-ionospheric-intersection"],
  io4: ["io4-final-outcome"],
  xfm: ["timeline"],
};

function titleFromAssetName(fileName: string) {
  return path
    .parse(fileName)
    .name
    .replace(/[_-]+/g, " ")
    .replace(/\bIO([1-4])\b/gi, "I/O$1")
    .replace(/\bmp\b/gi, "MP")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function toPublicAssetUrl(relativePath: string) {
  return assetPath(`/assets/${relativePath
    .split(path.sep)
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`);
}

function localAssetType(extension: string): ArchiveAssetType {
  return extension === ".pdf" ? "pdf" : "video";
}

function localAssetFormat(extension: string) {
  return extension === ".pdf" ? "PDF" : "MP4";
}

function collectLocalAssets(root: string, projectId: ProjectId, folder: string): ArchiveAsset[] {
  const folderPath = path.join(root, folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const records: ArchiveAsset[] = [];

  function walk(currentPath: string) {
    for (const entry of fs.readdirSync(currentPath, { withFileTypes: true })) {
      const entryPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        if (entry.name.toLowerCase() === "links") {
          continue;
        }

        walk(entryPath);
        continue;
      }

      const extension = path.extname(entry.name).toLowerCase();

      if (!entry.isFile() || !localAssetExtensions.has(extension)) {
        continue;
      }

      const relativePath = path.relative(root, entryPath);
      const title = titleFromAssetName(entry.name);

      records.push({
        id: `${projectId}-${relativePath.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`,
        projectId,
        title,
        type: localAssetType(extension),
        status: "RECOVERED",
        url: toPublicAssetUrl(relativePath),
        description: `Auto-detected local ${localAssetFormat(extension).toLowerCase()} archive file.`,
        signalStrength: extension === ".pdf" ? 68 : 74,
        format: localAssetFormat(extension),
        access: "INTERNAL",
        archiveLabel: extension === ".pdf" ? "REFERENCE" : "RECOVERED",
        transmissionNote: `Local ${localAssetFormat(extension)} archive record recovered from the project asset folders.`,
        action: extension === ".pdf" ? "ACCESS FILE" : "OPEN TRANSMISSION",
      });
    }
  }

  walk(folderPath);

  return records.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }));
}

function getLocalAssetsForProject(projectId: ProjectId | "instructions") {
  if (projectId === "instructions") {
    return [];
  }

  const root = path.join(process.cwd(), "public", "assets");

  return localAssetProjectFolders[projectId].flatMap((folder) =>
    collectLocalAssets(root, projectId, folder),
  );
}

export function getAssetsForProject(projectId: ProjectId | "instructions") {
  const registeredAssets = archiveRegistry.filter((asset) => asset.projectId === projectId);
  const registeredUrls = new Set(registeredAssets.map((asset) => asset.url).filter(Boolean));
  const localAssets = getLocalAssetsForProject(projectId).filter(
    (asset) => !registeredUrls.has(asset.url),
  );

  return [...registeredAssets, ...localAssets];
}
