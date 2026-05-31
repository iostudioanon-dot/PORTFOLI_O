import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luke Hillhouse / PORTFOLI/O",
  description:
    "A cinematic multimedia portfolio for nature, architecture, technology, memory, and mediated systems.",
  applicationName: "PORTFOL I/O",
  authors: [{ name: "Luke Hillhouse" }],
  category: "art portfolio",
  creator: "Luke Hillhouse",
  keywords: [
    "PORTFOLIO",
    "PORTFOL I/O",
    "Luke Hillhouse",
    "multimedia art",
    "architecture",
    "nature",
    "digital systems",
    "archive interface",
  ],
  openGraph: {
    title: "Luke Hillhouse / PORTFOL I/O",
    description:
      "A restrained multimedia archive exploring nature, architecture, technology, memory, and mediated systems.",
    siteName: "PORTFOL I/O",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
