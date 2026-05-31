# Route And Asset Map

This map explains how the PORTFOL I/O site is linked together.

## Routes

| Route | Purpose | Primary files |
| --- | --- | --- |
| `/` | Cinematic landing transmission | `src/app/page.tsx`, `src/data/siteContent.ts` |
| `/instructions` | Operating manual, guide video, QR transmission, instruction chart | `src/app/instructions/page.tsx`, `src/data/siteContent.ts`, `src/data/archiveRegistry.ts` |
| `/hub` | Layered environmental navigation console | `src/app/hub/page.tsx`, `src/components/LayerSystem.tsx`, `data/projects.ts` |
| `/io1` | I/O1 / The Sentinel archive zone | `src/app/[slug]/page.tsx`, `data/projects.ts`, `src/data/archiveRegistry.ts` |
| `/io1/sentinel` | I/O1.1 Sentinel archive subsection | `src/app/io1/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io1/kubrick` | I/O1.2 Stanley Kubrick archive subsection | `src/app/io1/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io1/mouresette` | I/O1.3 Mouresette archive subsection | `src/app/io1/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io1/da-vinci` | I/O1.4 Leonardo da Vinci archive subsection | `src/app/io1/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io2` | I/O2 / Hypogeal Landscape archive zone | `src/app/[slug]/page.tsx`, `data/projects.ts`, `src/data/imageRegistry.ts` |
| `/io2-hypogeal-landscape` | I/O2.0 Building The Hypogeal Landscape subsection | `src/app/io2-hypogeal-landscape/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io2-hypogeal-landscape/landscape` | I/O2.1 Landscape archive subsection | `src/app/io2-hypogeal-landscape/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io2-hypogeal-landscape/julien-opie` | I/O2.2 Julien Opie archive subsection | `src/app/io2-hypogeal-landscape/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io2-hypogeal-landscape/architecture` | I/O2.3 Architecture archive subsection | `src/app/io2-hypogeal-landscape/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io2-hypogeal-landscape/fallingwater` | I/O2.4 Fallingwater archive subsection | `src/app/io2-hypogeal-landscape/[section]/page.tsx`, `src/data/ioArchiveSections.ts` |
| `/io3` | I/O3 / Ionospheric Intersection archive zone | `src/app/[slug]/page.tsx`, `data/projects.ts` |
| `/io4` | I/O4 / Productive Failure archive zone | `src/app/[slug]/page.tsx`, `data/projects.ts` |
| `/xfm` | Timeline I/O historical chronology | `src/app/[slug]/page.tsx`, `data/projects.ts` |

## Data Files

| File | Role |
| --- | --- |
| `data/projects.ts` | Main project records, route metadata, status, environment, timeline entries |
| `src/data/siteContent.ts` | Landing, instructions, system labels, archive messages |
| `src/data/siteMap.ts` | Unified route list used by navigation |
| `src/data/archiveRegistry.ts` | External transmissions, audio, video, game, research, PDF, archive records |
| `src/data/ioArchiveSections.ts` | I/O1 subsection records and future section planning |
| `src/data/imageRegistry.ts` | Auto-detects images in project asset folders |
| `src/data/portfolioLinks.ts` | Editable link arrays for future media lists |

## Asset Folders

| Folder | Site area |
| --- | --- |
| `public/assets/landing/` | Landing page images, videos, links |
| `public/assets/navigation/` | Hub and transition media |
| `public/assets/instructions/` | Instruction chart, QR image, guide video |
| `public/assets/io1-sentinel/` | I/O1 image records, game links, audio links, apps |
| `public/assets/io2-hypogeal-landscape/` | I/O2 image and media records |
| `public/assets/io3-ionospheric-intersection/` | I/O3 image and media records |
| `public/assets/io4-final-outcome/` | I/O4 image and media records |
| `public/assets/timeline/` | Timeline images, documents, links |

## Current Auto-Detected Images

- I/O1 has visual records in `public/assets/io1-sentinel/images/`.
- I/O2 has visual records in `public/assets/io2-hypogeal-landscape/`.
- Timeline I/O has visual records in `public/assets/timeline/images/`.
- I/O3 and I/O4 asset folders exist and are ready for image records.

## Adding New Media

### Images

1. Add the image to the relevant `public/assets/.../images/` folder.
2. The image archive viewer will pick it up automatically for project pages covered by `src/data/imageRegistry.ts`.
3. Keep file names short and descriptive when possible.

### External Links

1. Add the record to `src/data/archiveRegistry.ts` for archive-style display.
2. Use `src/data/portfolioLinks.ts` for future link collections and filters.
3. Use one of the supported types: `audio`, `video`, `game`, `website`, `pdf`, `image`, `research`, `external`, `archive`.

### Documents

1. Put PDFs or source documents inside the relevant `documents/` folder.
2. Add a matching archive record so the site can show it as an access node.

## Known Asset Warning

The I/O2 folder currently includes one very large image file. It works locally, but it should be compressed before final deployment so the hosted site remains smooth.
