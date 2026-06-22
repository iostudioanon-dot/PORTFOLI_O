"use client";

import Link from "next/link";
import { projects } from "../../data/projects";
import { EnvironmentalStackSignal } from "./EnvironmentalStackSignal";
import { LayerNavigationBand } from "./LayerNavigationBand";
import { MetadataLabel } from "./MetadataLabel";
import { globalLabels, hub, transition } from "@/data/siteContent";

const transitionProjectOrder = ["io1", "io2", "io3", "io4"];
const hubProjects = transitionProjectOrder
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export function LayerSystem() {
  return (
    <section className="layer-system" aria-labelledby="layer-system-title">
      <div className="layer-system__panel">
        <div className="layer-system__intro">
          <MetadataLabel>{globalLabels.activeStack}</MetadataLabel>
          <h1 className="display-type" id="layer-system-title">
            {transition.title}
          </h1>
          <p>{transition.description}</p>
        </div>
        <EnvironmentalStackSignal />
      </div>

      <div className="layer-system__main">
        <div className="transition-route-stack" aria-label={hub.ariaLabel}>
          {hubProjects.map((project, index) => (
            <LayerNavigationBand
              project={project}
              key={project.id}
              sectionNumber={index + 1}
            />
          ))}
        </div>
      </div>

      <Link
        className="transition-route transition-route--spine io-link io-glitch-hover"
        href="/io-framework"
      >
        <span className="transition-route__number">05</span>
        <span className="transition-route__identifier display-type">I/O</span>
        <span className="transition-route__title display-type">FRAMEWORK</span>
        <span className="transition-route__statement">PROJECT STRUCTURE / PROCESS / CONTEXT</span>
        <span className="transition-route__action">ENTER I/O FRAMEWORK</span>
      </Link>
    </section>
  );
}
