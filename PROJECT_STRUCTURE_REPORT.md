# Project Structure Report

Generated during PORTFOLI/O Task 3 PDF and navigation refactor.

## Scope

This phase created a logical PDF index and converted the I/O1 parent page into a structured chapter gateway and research-library access point. The frozen top banner, header, global navigation, logo area, typography, colour scheme, visual identity, routes, directories, and physical asset locations were preserved.

## Files Created

- `data/pdf-index.json`
- `src/data/pdfIndex.ts`
- `src/components/PdfDisplay.tsx`
- `src/components/PdfLibrary.tsx`
- `PDF_LINK_REPORT.md`
- `PROJECT_STRUCTURE_REPORT.md`
- `CHANGELOG_PDF_REFACTOR.md`

## Files Changed

- `src/components/ProjectPageTemplate.tsx`
- `src/data/ioArchiveSections.ts`
- `src/app/globals.css`

## I/O1 Structure Added

- Chapter gateway links remain for I/O1.1 Sentinel, I/O1.2 Stanley Kubrick, I/O1.3 Morysetta, I/O1.4 Leonardo da Vinci, and I/O1 Gallery.
- PDF library sections now pull from `data/pdf-index.json` for Sputnik, Kubrick, Morysetta, and Leonardo da Vinci.
- The previous I/O1 PDF archive dump is no longer rendered in the generic archive card area. Non-PDF I/O1 content remains available lower on the page.

## PDF Index Summary

- Physical PDFs found in `public/`: 39
- PDF index entries: 40
- I/O1 PDFs surfaced by the new library: 9
- Physical PDFs not indexed: 0
- Missing indexed references: 1
- UNSORTED entries: 17

## Directory Changes Avoided

- No directories were renamed.
- No PDFs were moved.
- No PDFs were deleted.
- No images, videos, audio, games, or folders were moved.
- No routes were removed.

## Top Banner Confirmation

The top banner, header, global navigation, and logo area were not modified.

## Unresolved Issues

- `/assets/pdfs/io-transition/03-timeline-io/timeline-io.pdf` ? Timeline I/O PDF Archive (data/pdf-index.json, PDF_LINK_REPORT.md, PROJECT_STRUCTURE_REPORT.md, src/app/[slug]/page.tsx)

## PDFs Still In UNSORTED

- `/assets/io1-sentinel/IO1 PDF/IO0.l Statement V2 (3).pdf` ? IO0.l Statement V2 (3)
- `/assets/io1-sentinel/IO1 PDF/IO1.3 TSHIRT.pdf` ? IO1.3 T-Shirt
- `/assets/io1-sentinel/IO1 PDF/IO1.8. TECH SENTINEL.pdf` ? IO1.8 Tech Sentinel
- `/assets/pdfs/io1/IO1 Eden Project 1.pdf` ? IO1 Eden Project 1
- `/assets/io2-hypogeal-landscape/IO2 PDF/io2 v9 REFLECTION.pdf` ? IO2 V9 Reflection
- `/assets/io2-hypogeal-landscape/IO2 PDF/IO2.8 CULTURAL REFERENCES 2.pdf` ? IO2.8 Cultural References 2
- `/assets/io2-hypogeal-landscape/IO2 PDF/IO2.8 CULTURAL REFERENCES.pdf` ? IO2.8 Cultural References
- `/assets/io3-ionospheric-intersection/IO3 PDF/I_O3_ Navigate the AI EXAMPLE FOLIO.pdf` ? I/O3 Navigate the AI Example Folio
- `/assets/io3-ionospheric-intersection/IO3 PDF/IO3 0.3 3 NATURES SLANDSCAPE.pdf` ? IO3 0.3 Three Natures Landscape
- `/assets/io3-ionospheric-intersection/IO3 PDF/IO3 EXAM PREP.pdf` ? IO3 Exam Prep
- `/assets/io3-ionospheric-intersection/IO3 PDF/IO3 EXAM PREP2.pdf` ? IO3 Exam Prep 2
- `/assets/io3-ionospheric-intersection/IO3 PDF/io3 gallery.pdf` ? IO3 Gallery
- `/assets/io3-ionospheric-intersection/IO3 PDF/IO3 PART 01.pdf` ? IO3 Part 01
- `/assets/io3-ionospheric-intersection/IO3 PDF/IO3 PART 02.pdf` ? IO3 Part 02
- `/assets/io4-final-outcome/IO4 PDF/104.4 ROBOT.pdf` ? 104.4 Robot
- `/assets/io4-final-outcome/IO4 PDF/104.5 ROBOT.pdf` ? 104.5 Robot
- `/assets/io4-final-outcome/IO4 PDF/io4 ESSAY SLIDES.pdf` ? IO4 Essay Slides
