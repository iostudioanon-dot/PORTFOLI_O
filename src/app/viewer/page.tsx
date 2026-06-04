import { Suspense } from "react";
import { PdfViewerClient } from "./PdfViewerClient";

export default function ViewerPage() {
  return (
    <Suspense
      fallback={
        <main className="pdf-viewer-page" id="main-content">
          <p className="pdf-viewer-page__label">PDF PRESENTATION VIEWER</p>
        </main>
      }
    >
      <PdfViewerClient />
    </Suspense>
  );
}
