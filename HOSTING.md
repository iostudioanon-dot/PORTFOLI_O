# PORTFOL I/O Hosting Plan

## Recommended Host

Use Vercel for the first live version because the site is a Next.js application and currently builds cleanly with `npm run build`.

## GitHub Role

GitHub should act as:

- source-code archive
- version history
- deployment source for Vercel
- future collaboration/review space
- public project documentation while the local source is being prepared for upload

## Current Local Readiness

The local project lives at:

```text
C:\Users\MHill\Documents\FOL IO
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
2. Push all local project files from `C:\Users\MHill\Documents\FOL IO` into `iostudioanon-dot/PORTFOLI_O`.
3. Import the repository into Vercel.
4. Use default Vercel build settings:
   - Framework: Next.js
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: Vercel default
5. Add a custom domain later if needed.

## GitHub Pages Alternative

GitHub Pages can be used later, but it will need a static export configuration and careful route/image handling. Keep Vercel as the safer first host for this Next.js build.
