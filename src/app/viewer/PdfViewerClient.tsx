"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { assetPath } from "@/lib/assetPath";

function firstParam(value: string | null) {
  return value?.trim() ?? "";
}

function getSafePdfPath(file: string) {
  if (
    !file.startsWith("/assets/") ||
    !file.toLowerCase().endsWith(".pdf") ||
    file.includes("\\") ||
    file.includes("..")
  ) {
    return "";
  }

  return file;
}

function getSafeReturnPath(returnUrl: string) {
  if (
    !returnUrl.startsWith("/") ||
    returnUrl.startsWith("//") ||
    returnUrl.includes("\\") ||
    returnUrl.includes("..")
  ) {
    return "";
  }

  return returnUrl;
}

export function PdfViewerClient() {
  const searchParams = useSearchParams();
  const title = firstParam(searchParams.get("title")) || "PDF Archive";
  const pdfPath = getSafePdfPath(firstParam(searchParams.get("file")));
  const returnPath = getSafeReturnPath(firstParam(searchParams.get("return")));
  const pdfSrc = pdfPath ? assetPath(pdfPath) : "";

  return (
    <main className="pdf-viewer-page" id="main-content">
      <header className="pdf-viewer-page__header">
        <p className="pdf-viewer-page__label">PDF PRESENTATION VIEWER</p>
        <h1 className="display-type">{title}</h1>
        <div className="pdf-viewer-page__actions">
          {returnPath ? (
            <Link className="transmission-link io-link io-glitch-hover" href={returnPath}>
              RETURN TO ARCHIVE
            </Link>
          ) : null}
          {pdfSrc ? (
            <a
              className="pdf-viewer-page__direct io-link io-glitch-hover"
              href={pdfSrc}
              rel="noopener noreferrer"
              target="_blank"
            >
              OPEN PDF DIRECTLY
            </a>
          ) : null}
        </div>
      </header>

      {pdfSrc ? (
        <iframe
          className="pdf-viewer-page__frame"
          src={pdfSrc}
          title={title}
        />
      ) : (
        <section className="pdf-viewer-page__empty" aria-label="Missing PDF file">
          <p>NO PDF FILE SPECIFIED.</p>
          <p>Use /viewer?file=/assets/pdfs/io4/io4-finale.pdf&amp;title=I/O4%20Presentation</p>
        </section>
      )}
    </main>
  );
}
