# PORTFOL I/O Hosting Plan

## Recommended Host

Use GitHub Pages via GitHub Actions for the live version because the site is exported as a static Next.js build into the `out` directory and the repository already has the Pages workflow configured.

## GitHub Role

GitHub should act as:

- source-code archive
- version history
- deployment source for GitHub Pages
- future collaboration/review space
- public project documentation while the local source is being prepared for upload

## Current Local Readiness

The local project lives at:

```text
C:\Users\MHill\Documents\PORTFOLIO_REBUILD_2026\PORTFOLI_O
```

The local project already has:

- `package.json` with `dev`, `build`, `start`, and `lint` scripts
- Next.js App Router routes
- reusable archive/interface components
- structured project metadata in `data/projects.ts`
- global site copy in `src/data/siteContent.ts`
- navigation data in `src/data/siteMap.ts`
- archive assets and external transmissions in `src/data/archiveRegistry.ts`
- reusable links in `src/data/portfolioLinks.ts`
- public asset folders for instructions, project media, links, games, apps, and timeline documents
- instruction assets including the black-and-white chart, QR image, and guide video
- responsive styling and lightweight CSS atmosphere
- CSS-only glitch hover/focus effects with reduced-motion support
- successful local production build

## Current Routes

- `/`
- `/instructions`
- `/hub`
- `/io1`
- `/io2`
- `/io3`
- `/io4`
- `/xfm`

## Next Steps

1. Turn the local workspace into a proper Git checkout or install Git locally.
2. Push all local project files from `C:\Users\MHill\Documents\PORTFOLIO_REBUILD_2026\PORTFOLI_O` into `iostudioanon-dot/PORTFOLI_O`.
3. Use the existing GitHub Actions workflow to deploy to GitHub Pages.
4. Ensure the workflow exports the site to the `out` directory and publishes that artifact.
5. Add a custom domain later if needed.

## GitHub Pages Deployment

This repository uses GitHub Pages deployment via GitHub Actions with a static export from the Next.js build. The Pages workflow is already configured in `.github/workflows/pages.yml`.
