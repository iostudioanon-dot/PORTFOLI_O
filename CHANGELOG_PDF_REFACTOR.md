# PDF Refactor Changelog

## Task 3 ? PDF And Navigation Refactor

### Added

- Central PDF index at `data/pdf-index.json` using stable `id` and preserved `existingPath` values.
- Typed PDF index helper at `src/data/pdfIndex.ts`.
- Reusable `PdfLibrary` section renderer.
- Reusable `PdfDisplay` component with open, download, and opt-in embedded viewing.
- I/O1 PDF library sections for Sputnik, Kubrick, Morysetta, and Leonardo da Vinci.
- I/O1 Gallery archive gateway entry.

### Changed

- I/O1 parent page now behaves as a chapter gateway and research-library access point below the existing banner.
- I/O1 PDF records are no longer dumped into the generic archive card area.
- Embedded PDF iframe loading is user-initiated to keep the page lighter.
- PDF documentation reports regenerated from the current filesystem and source references.

### Preserved

- Top banner, header, global navigation, logo area, typography, colour scheme, visual identity, routes, directories, and physical asset paths.
- Existing I/O1 media and non-PDF content.

### Unresolved

- `/assets/pdfs/io-transition/03-timeline-io/timeline-io.pdf` ? Timeline I/O PDF Archive (data/pdf-index.json, PDF_LINK_REPORT.md, PROJECT_STRUCTURE_REPORT.md, src/app/[slug]/page.tsx)
- Confirm final categories for UNSORTED PDFs.

### Safety Confirmation

- No PDFs were moved, renamed, deleted, or overwritten.
- No directories were renamed.
- No folders were deleted.
- No existing routes were removed.
