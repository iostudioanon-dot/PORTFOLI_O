# PORTFOL I/O Project Status

Last updated from local Codex workspace: 2026-05-29.

## Local Workspace

```text
C:\Users\MHill\Documents\PORTFOLIO_REBUILD_2026\PORTFOLI_O
```

## Current Build

The local project has passed:

```bash
npm.cmd run lint
npm.cmd run build
```

## Current Interface State

- Landing page reads as a restrained cinematic transmission interface.
- Top-left landing identity: `LUKE HILLHOUSE / MULTIMEDIA ARCHIVE / NODE 001`.
- Landing content foregrounds First Nature, Second Nature, Third Nature, and the nature / architecture / digital systems axis.
- Landing mission text is locked to a centred editorial title-card lane.
- Instructions page includes the black-and-white viewer instruction chart, looping guide video, and the Three Natures Video QR signal node.
- Instruction content boxes follow a compact archive-terminal pattern with separated text/media lanes.
- Header uses a solid black fixed banner so scrolled content disappears behind it cleanly.
- Site-wide interactive elements use a subtle CSS-only blue/red-orange glitch hover and focus effect with reduced-motion support.
- Hub uses environmental archive navigation for IO1, IO3, IO4, IO2, and Timeline I/O.
- IO pages are assembled from reusable archive/system components and structured data.
- Timeline I/O remains the historical chronology and conceptual spine.

## Core Data Files

```text
data/projects.ts
src/data/siteContent.ts
src/data/siteMap.ts
src/data/archiveRegistry.ts
src/data/portfolioLinks.ts
```

## Key Asset Files

```text
public/assets/instructions/images/INTSRUCTIONS V1.png
public/assets/instructions/images/3 NATURE VIDEO.png
public/assets/instructions/videos/IO GUIDE VID.mp4
```

## Project Guidance

Local project guidance is held in:

```text
AGENTS.md
```

Current locked guidance includes:

- centred landing typography rules
- content-box layout rules for narrow archive panels

## Hosting Note

This GitHub repository is the current working source. The deployment method is GitHub Pages via GitHub Actions, exporting the static Next.js site to the `out` directory.
