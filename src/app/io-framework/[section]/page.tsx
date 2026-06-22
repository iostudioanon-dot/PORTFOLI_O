import { notFound } from "next/navigation";
import { AtmosphericButton } from "@/components/AtmosphericButton";
import { AtmosphericFrame } from "@/components/AtmosphericFrame";

type FrameworkSectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

const frameworkSections = {
  process: {
    title: "I/O PROCESS",
    text: "Process material will be added here.",
  },
  "three-natures": {
    title: "THREE NATURES",
    text: "First Nature, Second Nature and Third Nature material will be added here.",
  },
  timeline: {
    title: "TIMELINE / RANDOM ARCHIVE ROUTE",
    text: "Timeline and archive material will be added here.",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(frameworkSections).map((section) => ({ section }));
}

export async function generateMetadata({ params }: FrameworkSectionPageProps) {
  const { section } = await params;
  const record = frameworkSections[section as keyof typeof frameworkSections];

  return {
    title: record ? `${record.title} / PORTFOLI/O` : "I/O Framework / PORTFOLI/O",
    description: record?.text,
  };
}

export default async function FrameworkSectionPage({ params }: FrameworkSectionPageProps) {
  const { section } = await params;
  const record = frameworkSections[section as keyof typeof frameworkSections];

  if (!record) {
    notFound();
  }

  return (
    <AtmosphericFrame activeId="io-framework" mode="project">
      <main
        className="project-page project-page--io-framework"
        id="main-content"
        style={
          {
            "--project-primary": "#f4f4f0",
            "--project-secondary": "#8a8a8a",
            "--project-field": "#000000",
          } as React.CSSProperties
        }
      >
        <section className="segment-landing" aria-labelledby="framework-section-title">
          <div className="segment-landing__transition page-transition-link">
            <AtmosphericButton
              className="section-transition-link section-transition-link--boxed"
              href="/io-framework"
            >
              I/O FRAMEWORK
            </AtmosphericButton>
          </div>

          <header className="segment-landing__title-block">
            <p className="segment-landing__number display-type">I/O FRAMEWORK</p>
            <h1 className="segment-landing__title display-type" id="framework-section-title">
              {record.title}
            </h1>
          </header>

          <p className="segment-landing__context">{record.text}</p>
        </section>
      </main>
    </AtmosphericFrame>
  );
}
