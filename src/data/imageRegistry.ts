import fs from "node:fs";
import path from "node:path";
import type { ProjectId } from "../../data/projects";
import { assetPath } from "@/lib/assetPath";

export type ImageRecord = {
  id: string;
  projectId: ProjectId;
  title: string;
  fileName: string;
  url: string;
  folder: string;
};

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const excludedArchiveFolders = new Set(["apps", "documents", "games", "links", "videos"]);

const projectImageFolders: Record<ProjectId, string[]> = {
  io1: ["io1-sentinel"],
  io2: ["io2-hypogeal-landscape"],
  io3: ["io3-ionospheric-intersection"],
  io4: ["io4-final-outcome"],
  xfm: ["timeline"],
};

function titleFromFileName(fileName: string) {
  return path
    .parse(fileName)
    .name
    .replace(/[_-]+/g, " ")
    .replace(/\bIO([1-4])\b/gi, "I/O$1")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function labelFromFolder(folder: string) {
  return folder
    .replace(/[_-]+/g, " ")
    .replace(/\bIO([1-4])\b/gi, "I/O$1")
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

function collectImages(root: string, projectId: ProjectId, folder: string): ImageRecord[] {
  const folderPath = path.join(root, folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  const records: ImageRecord[] = [];

  function walk(currentPath: string) {
    for (const entry of fs.readdirSync(currentPath, { withFileTypes: true })) {
      const entryPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        if (excludedArchiveFolders.has(entry.name.toLowerCase())) {
          continue;
        }

        walk(entryPath);
        continue;
      }

      if (
        !entry.isFile() ||
        !imageExtensions.has(path.extname(entry.name).toLowerCase()) ||
        entry.name.toLowerCase().includes(".tmp.")
      ) {
        continue;
      }

      const relativePath = path.relative(root, entryPath);
      const fileName = path.basename(entryPath);

      records.push({
        id: `${projectId}-${relativePath.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`,
        projectId,
        title: titleFromFileName(fileName),
        fileName,
        url: toPublicAssetUrl(relativePath),
        folder: labelFromFolder(folder),
      });
    }
  }

  walk(folderPath);

  return records.sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, { numeric: true }));
}

export function getImagesForProject(projectId: ProjectId) {
  const root = path.join(process.cwd(), "public", "assets");

  return projectImageFolders[projectId].flatMap((folder) =>
    collectImages(root, projectId, folder),
  );
}
