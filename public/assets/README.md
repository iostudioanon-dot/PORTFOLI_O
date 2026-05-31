# PORTFOLI/O Asset System

Use this folder for static portfolio assets that should be served by the website.

## Where To Put Files

- Webpage images: place section images inside the matching project folder or its `images/` folder.
- YouTube links: store the link data in `src/data/portfolioLinks.ts` or `src/data/archiveRegistry.ts`; optional thumbnails can go in the matching `images/` folder.
- App links: store the link data in `src/data/portfolioLinks.ts` or `src/data/archiveRegistry.ts`; optional preview images can go in the matching `apps/` or `images/` folder.
- Game links: store the link data in `src/data/portfolioLinks.ts` or `src/data/archiveRegistry.ts`; optional preview images can go in the matching `games/` or `images/` folder.
- PDFs or documents: place files in `timeline/documents/` or the relevant section folder. Local PDFs are auto-detected on project pages as archive records.
- Timeline assets: use `timeline/images/`, `timeline/videos/`, `timeline/links/`, and `timeline/documents/`.

## Auto-Detected Project Images

Project image archives are detected recursively from these project folders:

- `io1-sentinel/`
- `io2-hypogeal-landscape/`
- `io3-ionospheric-intersection/`
- `io4-final-outcome/`
- `timeline/`

Add images to the relevant folder and the project archive viewer will pick them up. Temporary image files with `.tmp.` in the name are ignored so rough export leftovers do not appear as portfolio records.

## Auto-Detected Local Transmissions

Project archive cards also auto-detect:

- `.mp4` files as local video transmissions
- `.pdf` files as local document records

These appear as lightweight external/open links. The site does not embed large videos by default, so pages stay responsive and avoid autoplay.

## Instruction Chart

Place the instruction chart image at:

```text
public/assets/instructions/instruction-chart.png
```

It will be available in the site as:

```text
/assets/instructions/instruction-chart.png
```

Keep filenames lowercase where possible and avoid spaces in filenames.
