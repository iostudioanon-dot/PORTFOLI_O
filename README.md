# PORTFOL I/O

Luke Hillhouse portfolio website for the PORTFOL I/O project.

The site is a lightweight Next.js multimedia portfolio designed as a cinematic archive, classified research interface, architectural operating system, and analogue-digital transmission environment.

## Current Status

The local site is running as a modular archive operating system with:

- cinematic landing transmission interface
- instructions page with archive chart, guide video, and QR transmission node
- layered environmental hub
- I/O project routes and I/O1/I/O2 subsection archives
- Timeline I/O route
- structured content and asset registries
- auto-detected image archive viewer for project asset folders
- auto-detected local MP4/PDF archive records
- lightweight CSS motion, scanlines, subtle glitch hover states, and reduced-motion support
- GitHub CI, issue templates, PR template, and planning documents

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

Current local workspace:

```text
C:\Users\MHill\Documents\FOL IO
```

## Build Check

```bash
npm run lint
npm run build
```

GitHub Actions runs the same checks on push and pull request.

## Main Routes

- `/`
- `/instructions`
- `/hub`
- `/io1`
- `/io1/sentinel`
- `/io1/kubrick`
- `/io1/mouresette`
- `/io1/da-vinci`
- `/io2`
- `/io2-hypogeal-landscape`
- `/io2-hypogeal-landscape/landscape`
- `/io2-hypogeal-landscape/julien-opie`
- `/io2-hypogeal-landscape/architecture`
- `/io2-hypogeal-landscape/fallingwater`
- `/io3`
- `/io4`
- `/xfm`

See the full linking map:

```text
docs/ROUTE_AND_ASSET_MAP.md
```

## Content Structure

Project metadata:

```text
data/projects.ts
```

Global site copy and system labels:

```text
src/data/siteContent.ts
```

Navigation map:

```text
src/data/siteMap.ts
```

Archive assets and external transmissions:

```text
src/data/archiveRegistry.ts
```

Reusable portfolio links:

```text
src/data/portfolioLinks.ts
```

Static assets:

```text
public/assets
```

GitHub restructure and planning:

```text
docs/GITHUB_RESTRUCTURE_PLAN.md
```

## Hosting Space

GitHub repository:

```text
https://github.com/iostudioanon-dot/PORTFOLI_O
```

Recommended first deployment path: connect this repository to Vercel and use the default Next.js build settings.

## GitHub Project System

This repository includes:

- `.github/workflows/ci.yml` for lint and build checks
- `.github/ISSUE_TEMPLATE/portfolio-content.yml` for new archive/media items
- `.github/ISSUE_TEMPLATE/site-improvement.yml` for interface, structure, performance, and deployment work
- `.github/pull_request_template.md` for consistent review checks
- `HOSTING.md` and `PROJECT_STATUS.md` for deployment planning and current state notes

Use GitHub issues as the planning layer. Use the data files and asset folders as the content layer.
