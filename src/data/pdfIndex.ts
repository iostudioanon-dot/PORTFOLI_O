import pdfIndex from "../../data/pdf-index.json";

export type PdfIndexEntry = {
  id: string;
  title: string;
  existingPath: string;
  category: string;
  subcategory: string;
  description?: string;
  status: string;
};

export const pdfEntries = pdfIndex as PdfIndexEntry[];

export function getPdfsByCategory(category: string) {
  return pdfEntries.filter((entry) => entry.category === category);
}

export function getPdfsBySubcategory(category: string, subcategory: string) {
  return pdfEntries.filter(
    (entry) => entry.category === category && entry.subcategory === subcategory,
  );
}

export function getPdfsBySubcategories(category: string, subcategories: string[]) {
  const allowedSubcategories = new Set(subcategories);

  return pdfEntries.filter(
    (entry) => entry.category === category && allowedSubcategories.has(entry.subcategory),
  );
}

export function getUnsortedPdfs() {
  return pdfEntries.filter((entry) => entry.status === "unsorted" || entry.category === "Unsorted");
}
