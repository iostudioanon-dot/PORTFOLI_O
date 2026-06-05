import type { ProjectId } from "../../data/projects";

export type ArchiveSubsection = {
  title: string;
  note: string;
  marker?: string;
};

export type ArchiveSectionRecord = {
  id: string;
  projectId: ProjectId;
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  route?: string;
  status: "OPEN" | "PLANNED" | "LOCKED";
  sections: ArchiveSubsection[];
};

export type SectionArchiveIndexItem = {
  id: string;
  title: string;
  subtitle: string;
  href?: string;
  status?: "OPEN" | "PENDING";
};

export type SectionArchiveIndexRecord = {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  archiveItems: SectionArchiveIndexItem[];
};

function indexItemFromArchiveSection(section: ArchiveSectionRecord): SectionArchiveIndexItem {
  return {
    id: section.label.split(" ")[0],
    title: section.title,
    subtitle: section.subtitle,
    href: section.route,
    status: section.route ? "OPEN" : "PENDING",
  };
}

export const io1ArchiveSections: ArchiveSectionRecord[] = [
  {
    id: "sentinel",
    projectId: "io1",
    label: "I/O1.1 SENTINEL",
    title: "SENTINEL",
    subtitle: "Primary project archive / monolith sequence",
    intro: "A focused study of monolith imagery, orbital distance, controlled access, and the Sentinel gateway sequence.",
    route: "/io1/sentinel",
    status: "OPEN",
    sections: [
      {
        title: "Concept",
        note: "A cold orbital gateway built around monoliths, signal access, and controlled navigation.",
      },
      {
        title: "Development",
        note: "Interface tests, visual studies, and sequence building for the I/O1 entry system.",
      },
      {
        title: "Research",
        note: "Space race material, monolith imagery, Cold War control rooms, and mission-briefing language.",
      },
      {
        title: "Experiments",
        note: "Small interactive tests using avoidance, transmission, and access as archive behaviour.",
      },
      {
        title: "Audio Work",
        note: "Sputnik audio operates as a recovered sound file within the wider Sentinel system.",
      },
      {
        title: "Interactive Elements",
        note: "The game sequence becomes a gateway rather than a separate arcade object.",
      },
      {
        title: "Final Outputs",
        note: "Images, audio, external sequences, and archive records form the I/O1 output layer.",
      },
      {
        title: "Reflection",
        note: "The project tests how an artwork can behave like a controlled access system.",
      },
    ],
  },
  {
    id: "kubrick",
    projectId: "io1",
    label: "I/O1.2 STANLEY KUBRICK",
    title: "STANLEY KUBRICK",
    subtitle: "Cinema research archive / 2001 system",
    intro: "A cinema research record connecting 2001: A Space Odyssey to tools, intelligence, ritual, architecture, and cosmic scale.",
    route: "/io1/kubrick",
    status: "OPEN",
    sections: [
      {
        title: "2001: A Space Odyssey",
        note: "A reference point for technology, silence, ritual, artificial intelligence, and cosmic scale.",
      },
      {
        title: "Dawn of Man",
        note: "The tool appears as a threshold between instinct, technology, violence, and evolution.",
      },
      {
        title: "Monolith Development",
        note: "The monolith functions as object, signal, interface, and unknown intelligence.",
      },
      {
        title: "Match Cut",
        note: "A single edit compresses tool, weapon, satellite, and historical acceleration.",
      },
      {
        title: "Production Design",
        note: "Space is treated as architecture: sterile, precise, controlled, and psychologically charged.",
      },
      {
        title: "Space Architecture",
        note: "Orbital interiors become environments for isolation, control, and post-human distance.",
      },
      {
        title: "Productive Failure",
        note: "Ambiguity and unresolved meaning become part of the work's enduring system.",
      },
      {
        title: "Influence on The Sentinel",
        note: "I/O1 borrows the atmosphere of signal, monolith, mission control, and unknowable contact.",
      },
    ],
  },
  {
    id: "mouresette",
    projectId: "io1",
    label: "I/O1.3 MORYSETTA",
    title: "MORYSETTA",
    subtitle: "Visual influence archive / atmosphere and composition",
    intro: "A visual influence record studying atmosphere, restraint, composition, and environmental storytelling.",
    route: "/io1/mouresette",
    status: "OPEN",
    sections: [
      {
        title: "Visual Language",
        note: "A reference zone for stark image construction, tension, contrast, and environmental presence.",
      },
      {
        title: "Composition",
        note: "Image structure is treated as controlled placement, negative space, and visual pressure.",
      },
      {
        title: "Atmosphere",
        note: "Mood is built through restraint rather than decoration: darkness, distance, and silence.",
      },
      {
        title: "Architectural Imagery",
        note: "Spaces are read as psychological systems rather than neutral backgrounds.",
      },
      {
        title: "Environmental Storytelling",
        note: "Landscape, object, and atmosphere carry narrative without direct explanation.",
      },
      {
        title: "Influence on Sentinel Development",
        note: "This research supports the Sentinel's visual pacing, framing, and cinematic archive tone.",
      },
    ],
  },
  {
    id: "da-vinci",
    projectId: "io1",
    label: "I/O1.4 LEONARDO DA VINCI",
    title: "LEONARDO DA VINCI",
    subtitle: "Perspective research archive / optical systems",
    intro: "A perspective research record exploring optical structure, controlled sightlines, and experimental image systems.",
    route: "/io1/da-vinci",
    status: "OPEN",
    sections: [
      {
        title: "The Last Supper",
        note: "A study in image architecture: perspective, focus, ritual, and controlled attention.",
      },
      {
        title: "Perspective Systems",
        note: "Space is organised through geometry, sightlines, and a central optical command point.",
      },
      {
        title: "Vanishing Point Analysis",
        note: "The image pulls the viewer into a designed coordinate system.",
      },
      {
        title: "Renaissance Innovation",
        note: "Observation, invention, and representation become linked technical practices.",
      },
      {
        title: "Experimental Methods",
        note: "Research, failure, revision, and invention operate as a process archive.",
      },
      {
        title: "Productive Failure",
        note: "Fragility and technical breakdown reveal the risk inside experimental making.",
      },
      {
        title: "Influence on Sentinel Compositions",
        note: "The Sentinel uses perspective and central alignment to create authority, distance, and control.",
      },
    ],
  },
];

export const futureArchiveSections: Record<ProjectId, string[]> = {
  io1: io1ArchiveSections.map((section) => section.title),
  io2: ["Building The Hypogeal Landscape", "Landscape", "Julien Opie", "Architecture", "Fallingwater"],
  io3: ["Ionospheric Intersection", "Duga", "Chernobyl", "Atmospheric Systems", "Space Weather"],
  io4: ["Productive Failure", "Brian Eno", "Glitch Systems", "AI Hallucinations"],
  xfm: ["Historical Chronology", "Portfolio Case Studies", "Media Archaeology"],
};

export const io1ArchiveSectionMap = new Map(
  io1ArchiveSections.map((section) => [section.id, section]),
);

export const io2ArchiveSections: ArchiveSectionRecord[] = [
  {
    id: "system",
    projectId: "io2",
    label: "I/O2.1 SYSTEM",
    title: "BUILDING THE HYPOGEAL LANDSCAPE",
    subtitle: "Architecture and landscape archive / section index",
    intro: "An index study for the I/O2 landscape: architecture, water, site, structure, and organic environmental systems.",
    route: "/io2-hypogeal-landscape",
    status: "OPEN",
    sections: [
      {
        title: "Context",
        note: "I/O2 shifts the project from orbital distance into landscape, structure, water, and built environment.",
      },
      {
        title: "Landscape as System",
        note: "Ground, water, geology, and infrastructure are treated as connected environmental systems.",
      },
      {
        title: "Architecture and Nature",
        note: "The archive studies how architecture can sit within, resist, or extend natural conditions.",
      },
      {
        title: "Organic Structure",
        note: "Forms are explored as relationships between material, movement, shelter, and site.",
      },
      {
        title: "Fallingwater Connection",
        note: "Fallingwater becomes a key reference for architecture suspended between land, water, and atmosphere.",
      },
      {
        title: "Research Routes",
        note: "The section links landscape, sound, research, and external environmental experiments into a controlled study sequence.",
      },
    ],
  },
  {
    id: "landscape",
    projectId: "io2",
    label: "I/O2.2 LANDSCAPE",
    title: "LANDSCAPE",
    subtitle: "Primary project archive / hypogeal system",
    intro: "A primary I/O2 study of terrain, depth, water, architectural structure, and hidden environmental systems.",
    route: "/io2-hypogeal-landscape/landscape",
    status: "OPEN",
    sections: [
      {
        title: "Concept",
        note: "A subterranean archive exploring water, terrain, architectural depth, and hidden environmental systems.",
      },
      {
        title: "Development",
        note: "Visual tests, structural studies, and composition work build the I/O2 landscape language.",
      },
      {
        title: "Research",
        note: "References connect organic architecture, underground infrastructure, water movement, and geological space.",
      },
      {
        title: "Experiments",
        note: "Image, model, sound, and interface trials test how landscape can behave like a system.",
      },
      {
        title: "Audio Work",
        note: "Future sound records may use water, resonance, stone, and architectural atmosphere.",
      },
      {
        title: "Interactive Elements",
        note: "Interactive work can operate as a descent through landscape layers and archive records.",
      },
      {
        title: "Final Outputs",
        note: "The final output layer will combine image records, research fragments, and environmental media.",
      },
      {
        title: "Reflection",
        note: "I/O2 asks how architecture and landscape process change through material and atmosphere.",
      },
    ],
  },
  {
    id: "julien-opie",
    projectId: "io2",
    label: "I/O2.3 JULIAN OPIE",
    title: "JULIAN OPIE",
    subtitle: "Research archive / simplified digital language",
    intro: "A research record on reduction, line, figure, movement, and graphic systems as ways of controlling visual information.",
    route: "/io2-hypogeal-landscape/julien-opie",
    status: "OPEN",
    sections: [
      {
        title: "Visual Simplification",
        note: "Complex subjects are reduced into clear graphic systems without losing identity or movement.",
      },
      {
        title: "Digital Portrait Language",
        note: "The figure becomes an interface of line, sign, recognition, and controlled omission.",
      },
      {
        title: "Line, Figure, and Reduction",
        note: "Reduction is treated as a process for making visual information sharper and more structural.",
      },
      {
        title: "Landscape and Movement",
        note: "The same logic can translate landscape into rhythm, flow, route, and simplified environmental signal.",
      },
      {
        title: "Graphic Systems",
        note: "Opie's work supports an archive language of icons, pathways, diagrams, and clear visual codes.",
      },
      {
        title: "Influence on I/O2 Development",
        note: "I/O2 uses simplification to connect landscape, interface, and architectural drawing.",
      },
    ],
  },
  {
    id: "architecture",
    projectId: "io2",
    label: "I/O2.4 ARCHITECTURE",
    title: "ARCHITECTURE",
    subtitle: "Research archive / built environment and organic structure",
    intro: "A study of built form as environmental structure: line, section, material, atmosphere, and landscape pressure.",
    route: "/io2-hypogeal-landscape/architecture",
    status: "OPEN",
    sections: [
      {
        title: "Visual Language",
        note: "Architectural form is studied through line, plane, structure, section, and environmental pressure.",
      },
      {
        title: "Composition",
        note: "Composition is handled like an architectural drawing: measured, layered, and spatially controlled.",
      },
      {
        title: "Atmosphere",
        note: "Cold water, concrete, glass, stone, and darkness create a restrained subterranean mood.",
      },
      {
        title: "Architectural Imagery",
        note: "Buildings are treated as systems embedded inside landscape rather than isolated objects.",
      },
      {
        title: "Organic Architecture",
        note: "The archive studies architecture that grows from site, material, water, and structural necessity.",
      },
      {
        title: "Environmental Storytelling",
        note: "Landscape and structure carry narrative through trace, route, pressure, and atmosphere.",
      },
      {
        title: "Influence on Hypogeal Landscape Development",
        note: "These references shape the I/O2 language of depth, section, water, and architectural terrain.",
      },
    ],
  },
  {
    id: "fallingwater",
    projectId: "io2",
    label: "I/O2.5 FALLINGWATER",
    title: "FALLINGWATER",
    subtitle: "Research archive / water, structure, and organic architecture",
    intro: "A case study of Fallingwater as architecture suspended between water, terrain, engineering, and organic site logic.",
    route: "/io2-hypogeal-landscape/fallingwater",
    status: "OPEN",
    sections: [
      {
        title: "Frank Lloyd Wright",
        note: "Wright's work frames architecture as an extension of site, material, landscape, and lived experience.",
      },
      {
        title: "Organic Architecture",
        note: "The building is considered as part of the landscape system rather than placed on top of it.",
      },
      {
        title: "House Over Waterfall",
        note: "Water is not background; it becomes structure, sound, movement, and environmental force.",
      },
      {
        title: "Cantilevers and Structure",
        note: "Horizontal planes push into space, creating tension between engineering, gravity, and terrain.",
      },
      {
        title: "Material Tension",
        note: "Stone, concrete, glass, and water produce a controlled conflict between natural and built systems.",
      },
      {
        title: "Productive Failure",
        note: "Technical stress and repair reveal architecture as a living system under pressure.",
      },
      {
        title: "Architecture and Landscape",
        note: "Fallingwater becomes a key model for reading buildings as environmental interfaces.",
      },
      {
        title: "Influence on I/O2",
        note: "The I/O2 archive borrows its sense of depth, water, suspended structure, and organic section.",
      },
    ],
  },
];

export const io2ArchiveSectionMap = new Map(
  io2ArchiveSections.map((section) => [section.id, section]),
);

export const ioSectionArchiveIndexes: Record<"io1" | "io2" | "io3" | "io4", SectionArchiveIndexRecord> = {
  io1: {
    sectionLabel: "I/O1 ARCHIVE INDEX",
    sectionTitle: "THE SENTINEL",
    sectionSubtitle: "External sequence / orbital archive / visual research index",
    archiveItems: io1ArchiveSections.map(indexItemFromArchiveSection),
  },
  io2: {
    sectionLabel: "I/O2 ARCHIVE INDEX",
    sectionTitle: "HYPOGEAL LANDSCAPE",
    sectionSubtitle: "Subterranean architecture / landscape system / water archive",
    archiveItems: [
      {
        id: "I/O2.1",
        title: "BUILDING THE HYPOGEAL LANDSCAPE",
        subtitle: "Architecture and landscape archive / section index",
        href: "/io2-hypogeal-landscape",
        status: "OPEN",
      },
      {
        id: "I/O2.2",
        title: "LANDSCAPE",
        subtitle: "Primary project archive / hypogeal system",
        href: "/io2-hypogeal-landscape/landscape",
        status: "OPEN",
      },
      {
        id: "I/O2.3",
        title: "JULIAN OPIE",
        subtitle: "Research archive / simplified digital language",
        href: "/io2-hypogeal-landscape/julien-opie",
        status: "OPEN",
      },
      {
        id: "I/O2.4",
        title: "ARCHITECTURE",
        subtitle: "Research archive / built environment and organic structure",
        href: "/io2-hypogeal-landscape/architecture",
        status: "OPEN",
      },
      {
        id: "I/O2.5",
        title: "FALLINGWATER",
        subtitle: "Research archive / water, structure, and organic architecture",
        href: "/io2-hypogeal-landscape/fallingwater",
        status: "OPEN",
      },
    ],
  },
  io3: {
    sectionLabel: "I/O3 ARCHIVE INDEX",
    sectionTitle: "IONOSPHERIC INTERSECTION",
    sectionSubtitle: "Atmospheric radar / signal archive / final artwork index",
    archiveItems: [
      {
        id: "I/O3.1",
        title: "IONOSPHERIC INTERSECTION",
        subtitle: "Primary project archive / atmospheric transmission system",
        status: "PENDING",
      },
      {
        id: "I/O3.2",
        title: "FINAL ARTWORK FIELD STUDY",
        subtitle: "External transmission / in-depth artwork archive",
        href: "https://iostudioanon-dot.github.io/IO3-INFO-ART/",
        status: "OPEN",
      },
      {
        id: "I/O3.3",
        title: "SIGNAL RECORDS",
        subtitle: "Recovered media records / video image research",
        status: "PENDING",
      },
      {
        id: "I/O3.4",
        title: "PROCESS FRAGMENTS",
        subtitle: "Evidence notes / atmospheric system references",
        status: "PENDING",
      },
    ],
  },
  io4: {
    sectionLabel: "I/O4 ARCHIVE INDEX",
    sectionTitle: "PRODUCTIVE FAILURE",
    sectionSubtitle: "Material instability / process archive / output index",
    archiveItems: [
      {
        id: "I/O4.1",
        title: "PRODUCTIVE FAILURE",
        subtitle: "Primary project archive / material and process system",
        status: "PENDING",
      },
      {
        id: "I/O4.2",
        title: "SIGNAL RECORDS",
        subtitle: "Recovered media records / archive references",
        status: "PENDING",
      },
      {
        id: "I/O4.3",
        title: "VISUAL RECORDS",
        subtitle: "Image archive / process documentation",
        status: "PENDING",
      },
      {
        id: "I/O4.4",
        title: "PROCESS FRAGMENTS",
        subtitle: "Research notes / development evidence",
        status: "PENDING",
      },
    ],
  },
};
