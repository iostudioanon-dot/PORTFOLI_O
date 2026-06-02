# GitHub Restructure Plan

This document turns the PORTFOL I/O repository into a working project control space: code, content, assets, checks, and future planning should all point back to one coherent archive system.

## Current Repository Role

The GitHub repository should become the source of truth for:

- the Next.js site code
- project and route data
- static portfolio assets
- deployment checks
- issue-based content planning
- future archive expansion

Repository target:

```text
iostudioanon-dot/PORTFOLI_O
```

Local working folder:

```text
C:\Users\MHill\Documents\FOL IO
```

## Immediate GitHub Structure

```text
.github/
  workflows/
    ci.yml
  ISSUE_TEMPLATE/
    portfolio-content.yml
    site-improvement.yml
  pull_request_template.md
docs/
  GITHUB_RESTRUCTURE_PLAN.md
  ROUTE_AND_ASSET_MAP.md
public/
  assets/
src/
  app/
  components/
  data/
data/
  projects.ts
```

## Planning Boards

Use these GitHub issue labels:

- `content` for new images, videos, audio, PDFs, research links, and QR nodes
- `site` for route, layout, interface, and accessibility improvements
- `performance` for oversized files, image compression, and loading improvements
- `deployment` for Vercel, domains, build failures, and hosting checks
- `archive-system` for data registry and content architecture work

Suggested milestones:

- `Phase 1 / Stable Foundation`
- `Phase 2 / Archive Operating System`
- `Phase 3 / Media Expansion`
- `Phase 4 / Deployment`
- `Phase 5 / Final Portfolio Polish`

## Working Rules

1. Add visible portfolio content through data or assets first.
2. Keep routes stable unless the route map is deliberately changed.
3. Avoid heavy animation, WebGL, autoplay audio, and large dependencies.
4. Run lint and build before merging.
5. Keep the archive language consistent: signals, records, transmissions, evidence, fragments.
6. Do not hard-code new media into page components when it can live in a registry.

## Immediate Priorities

### 1. Connect Local Code To GitHub

The local folder is not currently a git checkout. To fully link everything into GitHub, initialise or clone the repository into:

```text
C:\Users\MHill\Documents\FOL IO
```

Then push the full Next.js site, including:

- `src/`
- `data/`
- `public/assets/`
- `.github/`
- `docs/`
- package files

### 2. Deployment Readiness

The CI workflow now runs:

```text
npm ci
npm run lint
npm run build
```

This mirrors the local check needed before Vercel deployment.

### 3. Content Intake

Use the `Portfolio content entry` issue template for every new asset. Each content issue should identify:

- archive zone
- media type
- asset file path or external URL
- intended route
- completion check

### 4. Site Improvement Intake

Use the `Site structure or interface improvement` template for interface work. Each issue should preserve the existing PORTFOL I/O identity and state what route or component is affected.

## Suggested GitHub Issues To Create

1. Compress oversized I/O2 image assets for deployment.
2. Add external game URL for I/O1 Sentinel.
3. Add I/O3 image and radar/aurora research records.
4. Add I/O4 productive failure process images.
5. Expand Timeline I/O with case study records.
6. Connect repository to Vercel and verify production build.
7. Add sitemap and basic metadata polish before final submission.

## Definition Of Done

The GitHub restructure is complete when:

- code and assets are in the repository
- CI passes on push and pull request
- README explains the routes and content system
- issues can be used to plan new content
- future images and links can be added without redesigning components
- Vercel deploys the site from GitHub successfully
