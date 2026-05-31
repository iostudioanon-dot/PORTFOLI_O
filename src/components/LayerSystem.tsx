"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "../../data/projects";
import { HeaderGifBlock } from "./HeaderGifBlock";
import { LayerNavigationBand } from "./LayerNavigationBand";
import { MetadataLabel } from "./MetadataLabel";
import { globalLabels, hub, transition } from "@/data/siteContent";

const hubProjects = projects.filter((project) => project.id !== "xfm");
const xfmProject = projects.find((project) => project.id === "xfm");
const transitionGif = {
  src: "/assets/navigation/videos/MISC%2011%20GIF.gif",
  alt: "Animated transition signal study for the I/O environmental navigation stack.",
  caption: "MISC 11 GIF",
};

export function LayerSystem() {
  const [activeProject, setActiveProject] = useState(hubProjects[0]);

  return (
    <section className="layer-system" aria-labelledby="layer-system-title">
      <div className="layer-system__panel">
        <div className="hub-active-zone" aria-label="Active zone">
          <span>{hub.consoleFields.zone}</span>
          <strong>
            {activeProject.navLabel} / {activeProject.title}
          </strong>
        </div>
      </div>

      <div className="layer-system__main">
        <div className="layer-system__intro">
          <MetadataLabel>{globalLabels.activeStack}</MetadataLabel>
          <h1 className="display-type" id="layer-system-title">
            {transition.title}
          </h1>
          <p>{transition.description}</p>
        </div>

        <div className="hub-gif-panel">
          <HeaderGifBlock gif={transitionGif} />
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
