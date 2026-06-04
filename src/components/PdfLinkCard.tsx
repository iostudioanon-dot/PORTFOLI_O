import Link from "next/link";

type PdfLinkCardProps = {
  title: string;
  subtitle?: string;
  pdfUrl: string;
  returnUrl?: string;
  label?: string;
};

function createViewerHref({
  pdfUrl,
  returnUrl,
  title,
}: Pick<PdfLinkCardProps, "pdfUrl" | "returnUrl" | "title">) {
  const params = new URLSearchParams({
    file: pdfUrl,
    title,
  });

  if (returnUrl) {
    params.set("return", returnUrl);
  }

  return `/viewer?${params.toString()}`;
}

/**
 * Example:
 *
 * <PdfLinkCard
 *   title="I/O4 Presentation"
 *   subtitle="Failing to Succeed - Productive Failure in Art"
 *   pdfUrl="/assets/pdfs/io4/io4-finale.pdf"
 *   returnUrl="/io4"
 * />
 *
 * <PdfLinkCard
 *   title="I/O3 Presentation"
 *   subtitle="The Ionospheric Intersection"
 *   pdfUrl="/assets/pdfs/io3/io3-presentation.pdf"
 *   returnUrl="/io3"
 * />
 */
export function PdfLinkCard({
  label = "PDF / PRESENTATION",
  pdfUrl,
  returnUrl,
  subtitle,
  title,
}: PdfLinkCardProps) {
  return (
    <Link
      aria-label={`Open PDF presentation: ${title}`}
      className="pdf-link-card io-link io-glitch-hover"
      href={createViewerHref({ pdfUrl, returnUrl, title })}
      prefetch={false}
    >
      <span className="pdf-link-card__label">{label}</span>
      <span className="pdf-link-card__title display-type">{title}</span>
      {subtitle ? <span className="pdf-link-card__subtitle">{subtitle}</span> : null}
      <span className="pdf-link-card__action">OPEN PDF DOSSIER</span>
    </Link>
  );
}
