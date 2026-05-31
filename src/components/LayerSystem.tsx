"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "../../data/projects";
import { LayerNavigationBand } from "./LayerNavigationBand";
import { MetadataLabel } from "./MetadataLabel";
import { globalLabels, hub, transition } from "@/data/siteContent";

const hubProjects = projects.filter((project) => project.id !== "xfm");
const xfmProject = projects.find((project) => project.id === "xfm");

export function LayerSystem() {
  const [activeProject, setActiveProject] = useState(hubProjects[0]);

  return (
    <section className="layer-system" aria-labelledby="layer-system-title">
      <div className="layer-system__panel">
        <MetadataLabel>{globalLabels.activeStack}</MetadataLabel>
        <h1 className="display-type" id="layer-system-title">
          {transition.title}
        </h1>
        <p>{transition.description}</p>
        <div className="system-readout" aria-label="System readout">
          {transition.readout.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <aside className="hub-console" aria-label="Active zone signal console">
          <MetadataLabel>{hub.consoleTitle}</MetadataLabel>
          <dl>
            <div>
              <dt>{hub.consoleFields.zone}</dt>
              <dd>{activeProject.navLabel} / {activeProject.title}</dd>
            </div>
            <div>
              <dt>{hub.consoleFields.status}</dt>
              <dd>{activeProject.status.replaceAll("_", " ")}</dd>
            </div>
            <div>
              <dt>{hub.consoleFields.coordinates}</dt>
              <dd>{activeProject.coordinates}</dd>
            </div>
            <div>
              <dt>{hub.consoleFields.signalStrength}</dt>
              <dd>{activeProject.signalStrength}%</dd>
            </div>
            <div>
              <dt>{hub.consoleFields.mediaTypes}</dt>
              <dd>{activeProject.mediaTypes.join(" / ").toUpperCase()}</dd>
            </div>
            <div>
              <dt>{hub.consoleFields.accessLevel}</dt>
              <dd>{activeProject.accessLevel}</dd>
            </div>
            <div>
              <dt>{hub.consoleFields.lastTransmission}</dt>
              <dd>{activeProject.lastTransmission}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="environment-stack" aria-label={hub.ariaLabel}>
        {hubProjects.map((project) => (
          <LayerNavigationBand
            project={project}
            key={project.id}
            onActivate={setActiveProject}
          />
        ))}
      </div>

      {xfmProject ? (
        <Link className="xfm-spine" href={xfmProject.route}>
          <span className="display-type">{xfmProject.navLabel}</span>
          <span>{xfmProject.subtitle}</span>
        </Link>
      ) : null}
    </section>
  );
}
