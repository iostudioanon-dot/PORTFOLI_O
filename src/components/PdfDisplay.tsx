"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
import type { PdfIndexEntry } from "@/data/pdfIndex";

type PdfDisplayProps = {
  pdf: PdfIndexEntry;
  allowDownload?: boolean;
};

export function PdfDisplay({ allowDownload = true, pdf }: PdfDisplayProps) {
  const [isViewerActive, setIsViewerActive] = useState(false);
  const pdfSrc = assetPath(pdf.existingPath);

  return (
    <article className="pdf-display">
      <header className="pdf-display__header">
        <span className="pdf-display__label">{pdf.subcategory}</span>
        <h3>{pdf.title}</h3>
        {pdf.description ? <p>{pdf.description}</p> : null}
      </header>
      {isViewerActive ? (
        <iframe
          className="pdf-display__frame"
          loading="lazy"
          src={pdfSrc}
          title={pdf.title}
        />
      ) : (
        <button
          className="pdf-display__viewer-toggle io-glitch-hover"
          onClick={() => setIsViewerActive(true)}
          type="button"
        >
          LOAD EMBEDDED VIEWER
        </button>
      )}
      <div className="pdf-display__actions">
        <a className="io-link io-glitch-hover" href={pdfSrc} rel="noopener noreferrer" target="_blank">
          OPEN PDF
        </a>
        {allowDownload ? (
          <a className="io-link io-glitch-hover" download href={pdfSrc}>
            DOWNLOAD
          </a>
        ) : null}
      </div>
    </article>
  );
}
