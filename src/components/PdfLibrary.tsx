import { getPdfsBySubcategory } from "@/data/pdfIndex";
import { MetadataLabel } from "./MetadataLabel";
import { PdfDisplay } from "./PdfDisplay";

type PdfLibrarySection = {
  title: string;
  category: string;
  subcategory: string;
  description?: string;
};

type PdfLibraryProps = {
  id: string;
  label: string;
  title: string;
  sections: PdfLibrarySection[];
};

export function PdfLibrary({ id, label, sections, title }: PdfLibraryProps) {
  return (
    <section className="project-section pdf-library" aria-labelledby={id}>
      <MetadataLabel>{label}</MetadataLabel>
      <h2 id={id}>{title}</h2>
      <div className="pdf-library__sections">
        {sections.map((section) => {
          const records = getPdfsBySubcategory(section.category, section.subcategory);

          return (
            <section className="pdf-library__section" aria-labelledby={`${id}-${section.subcategory.toLowerCase().replaceAll(" ", "-")}`} key={`${section.category}-${section.subcategory}`}>
              <header className="pdf-library__section-header">
                <span>{section.subcategory}</span>
                <h3 id={`${id}-${section.subcategory.toLowerCase().replaceAll(" ", "-")}`}>{section.title}</h3>
                {section.description ? <p>{section.description}</p> : null}
              </header>
              {records.length > 0 ? (
                <div className="pdf-library__grid">
                  {records.map((pdf) => (
                    <PdfDisplay key={pdf.id} pdf={pdf} />
                  ))}
                </div>
              ) : (
                <p className="pdf-library__empty">Research record in development.</p>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}
