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

const io1HoldingSections: ArchiveSubsection[] = [
  {
    title: "PDF RECORDS",
    note: "Content will be added here.",
    marker: "PDF RECORDS",
  },
  {
    title: "IMAGE RECORDS",
    note: "Content will be added here.",
    marker: "IMAGE RECORDS",
  },
  {
    title: "VIDEO / LINK RECORDS",
    note: "Content will be added here.",
    marker: "VIDEO / LINK RECORDS",
  },
  {
    title: "NOTES",
    note: "Content will be added here.",
    marker: "NOTES",
  },
];

export const io1ArchiveSections: ArchiveSectionRecord[] = [
  {
    id: "dawn-of-man",
    projectId: "io1",
    label: "I/O1.1 DAWN OF MAN",
    title: "DAWN OF MAN",
    subtitle: "Tool / image / human threshold",
    intro: "Content will be added here.",
    route: "/io1/dawn-of-man",
    status: "OPEN",
    sections: [...io1HoldingSections],
  },
  {
    id: "sputnik",
    projectId: "io1",
    label: "I/O1.2 SPUTNIK",
    title: "SPUTNIK",
    subtitle: "Orbital signal / Space Race archive",
    intro: "Content will be added here.",
    route: "/io1/sputnik",
    status: "OPEN",
    sections: [...io1HoldingSections],
  },
  {
    id: "da-vinci-morysetta",
    projectId: "io1",
    label: "I/O1.3 DA VINCI / MORYSETTA",
    title: "DA VINCI / MORYSETTA",
    subtitle: "Perspective / visual influence archive",
    intro: "Content will be added here.",
    route: "/io1/da-vinci-morysetta",
    status: "OPEN",
    sections: [...io1HoldingSections],
  },
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
    label: "I/O1.4 KUBRICK",
    title: "KUBRICK",
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
    id: "final-work",
    projectId: "io1",
    label: "I/O1.5 THE SENTINEL: FINAL WORK",
    title: "THE SENTINEL: FINAL WORK",
    subtitle: "Final artwork holding page",
    intro: "Content will be added here.",
    route: "/io1/final-work",
    status: "OPEN",
    sections: [...io1HoldingSections],
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
  io2: ["Building The Hypogeal Landscape", "Landscape", "Julian Opie", "Architecture", "Fallingwater", "I/O2 Final Work"],
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
    label: "I/O2 SYSTEM",
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
    label: "I/O2.1 LANDSCAPE",
    title: "LANDSCAPE",
    subtitle: "Primary project archive / hypogeal system",
    intro: "A primary I/O2 study of terrain, depth, water, architectural structure, and hidden environmental systems.",
    route: "/io2/landscape",
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
    route: "/io2/julian-opie",
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
    label: "I/O2.2 ARCHITECTURE",
    title: "ARCHITECTURE",
    subtitle: "Research archive / built environment and organic structure",
    intro: "A study of built form as environmental structure: line, section, material, atmosphere, and landscape pressure.",
    route: "/io2/architecture",
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
    label: "I/O2.4 FALLINGWATER",
    title: "FALLINGWATER",
    subtitle: "Research archive / water, structure, and organic architecture",
    intro: "A case study of Fallingwater as architecture suspended between water, terrain, engineering, and organic site logic.",
    route: "/io2/fallingwater",
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
  {
    id: "final-work",
    projectId: "io2",
    label: "I/O2.5 I/O2 FINAL WORK",
    title: "I/O2 FINAL WORK",
    subtitle: "Final artwork holding page",
    intro: "Content will be added here.",
    route: "/io2/final-work",
    status: "OPEN",
    sections: [
      {
        title: "PDF RECORDS",
        note: "Content will be added here.",
        marker: "PDF RECORDS",
      },
      {
        title: "IMAGE RECORDS",
        note: "Content will be added here.",
        marker: "IMAGE RECORDS",
      },
      {
        title: "VIDEO / LINK RECORDS",
        note: "Content will be added here.",
        marker: "VIDEO / LINK RECORDS",
      },
      {
        title: "NOTES",
        note: "Content will be added here.",
        marker: "NOTES",
      },
    ],
  },
];

export const io2ArchiveSectionMap = new Map(
  io2ArchiveSections.map((section) => [section.id, section]),
);

const io3HoldingSections: ArchiveSubsection[] = [
  {
    title: "PDF RECORDS",
    note: "Content will be added here.",
    marker: "PDF RECORDS",
  },
  {
    title: "IMAGE RECORDS",
    note: "Content will be added here.",
    marker: "IMAGE RECORDS",
  },
  {
    title: "VIDEO / LINK RECORDS",
    note: "Content will be added here.",
    marker: "VIDEO / LINK RECORDS",
  },
  {
    title: "NOTES",
    note: "Content will be added here.",
    marker: "NOTES",
  },
];

export const io3ArchiveSections: ArchiveSectionRecord[] = [
  {
    id: "duga-radar",
    projectId: "io3",
    label: "I/O3.1 DUGA RADAR",
    title: "DUGA RADAR",
    subtitle: "Radar research holding page",
    intro: "Content will be added here.",
    route: "/io3/duga-radar",
    status: "OPEN",
    sections: [...io3HoldingSections],
  },
  {
    id: "bridget-riley",
    projectId: "io3",
    label: "I/O3.2 BRIDGET RILEY",
    title: "BRIDGET RILEY",
    subtitle: "Visual research holding page",
    intro: "Content will be added here.",
    route: "/io3/bridget-riley",
    status: "OPEN",
    sections: [...io3HoldingSections],
  },
  {
    id: "to-be-arranged",
    projectId: "io3",
    label: "I/O3.3 TO BE ARRANGED",
    title: "TO BE ARRANGED",
    subtitle: "Content holding page",
    intro: "Content will be added here.",
    route: "/io3/to-be-arranged",
    status: "OPEN",
    sections: [...io3HoldingSections],
  },
  {
    id: "final-artwork",
    projectId: "io3",
    label: "I/O3.5 I/O3 FINAL ARTWORK",
    title: "I/O3 FINAL ARTWORK",
    subtitle: "Final artwork holding page",
    intro: "Content will be added here.",
    route: "/io3/final-artwork",
    status: "OPEN",
    sections: [...io3HoldingSections],
  },
];

export const io3ArchiveSectionMap = new Map(
  io3ArchiveSections.map((section) => [section.id, section]),
);

const io4HoldingSections: ArchiveSubsection[] = [
  {
    title: "PDF RECORDS",
    note: "Content will be added here.",
    marker: "PDF RECORDS",
  },
  {
    title: "IMAGE RECORDS",
    note: "Content will be added here.",
    marker: "IMAGE RECORDS",
  },
  {
    title: "VIDEO / LINK RECORDS",
    note: "Content will be added here.",
    marker: "VIDEO / LINK RECORDS",
  },
  {
    title: "NOTES",
    note: "Content will be added here.",
    marker: "NOTES",
  },
];

export const io4ArchiveSections: ArchiveSectionRecord[] = [
  {
    id: "brian-eno",
    projectId: "io4",
    label: "I/O4.1 BRIAN ENO",
    title: "BRIAN ENO",
    subtitle: "Research holding page",
    intro: "Content will be added here.",
    route: "/io4/brian-eno",
    status: "OPEN",
    sections: [...io4HoldingSections],
  },
  {
    id: "essay",
    projectId: "io4",
    label: "I/O4.2 ESSAY PAGE",
    title: "ESSAY PAGE",
    subtitle: "Essay holding page",
    intro: "Content will be added here.",
    route: "/io4/essay",
    status: "OPEN",
    sections: [...io4HoldingSections],
  },
];

export const io4ArchiveSectionMap = new Map(
  io4ArchiveSections.map((section) => [section.id, section]),
);

export const ioSectionArchiveIndexes: Record<"io1" | "io2" | "io3" | "io4", SectionArchiveIndexRecord> = {
  io1: {
    sectionLabel: "I/O1 ARCHIVE INDEX",
    sectionTitle: "THE SENTINEL",
    sectionSubtitle: "External sequence / orbital archive / visual research index",
    archiveItems: [
      {
        id: "I/O1.1",
        title: "DAWN OF MAN",
        subtitle: "Tool / image / human threshold",
        href: "/io1/dawn-of-man",
        status: "OPEN",
      },
      {
        id: "I/O1.2",
        title: "SPUTNIK",
        subtitle: "Orbital signal / Space Race archive",
        href: "/io1/sputnik",
        status: "OPEN",
      },
      {
        id: "I/O1.3",
        title: "DA VINCI / MORYSETTA",
        subtitle: "Perspective / visual influence archive",
        href: "/io1/da-vinci-morysetta",
        status: "OPEN",
      },
      {
        id: "I/O1.4",
        title: "KUBRICK",
        subtitle: "Film / archive study",
        href: "/io1/kubrick",
        status: "OPEN",
      },
      {
        id: "I/O1.5",
        title: "THE SENTINEL: FINAL WORK",
        subtitle: "Final artwork holding page",
        href: "/io1/final-work",
        status: "OPEN",
      },
    ],
  },
  io2: {
    sectionLabel: "I/O2 ARCHIVE INDEX",
    sectionTitle: "HYPOGEAL LANDSCAPE",
    sectionSubtitle: "Subterranean architecture / landscape system / water archive",
    archiveItems: [
      {
        id: "I/O2.1",
        title: "LANDSCAPE",
        subtitle: "Primary project archive / hypogeal system",
        href: "/io2/landscape",
        status: "OPEN",
      },
      {
        id: "I/O2.2",
        title: "ARCHITECTURE",
        subtitle: "Research archive / built environment and organic structure",
        href: "/io2/architecture",
        status: "OPEN",
      },
      {
        id: "I/O2.3",
        title: "JULIAN OPIE",
        subtitle: "Research archive / simplified digital language",
        href: "/io2/julian-opie",
        status: "OPEN",
      },
      {
        id: "I/O2.4",
        title: "FALLINGWATER",
        subtitle: "Research archive / water, structure, and organic architecture",
        href: "/io2/fallingwater",
        status: "OPEN",
      },
      {
        id: "I/O2.5",
        title: "I/O2 FINAL WORK",
        subtitle: "Final artwork holding page",
        href: "/io2/final-work",
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
        title: "DUGA RADAR",
        subtitle: "Radar research holding page",
        href: "/io3/duga-radar",
        status: "OPEN",
      },
      {
        id: "I/O3.2",
        title: "BRIDGET RILEY",
        subtitle: "Visual research holding page",
        href: "/io3/bridget-riley",
        status: "OPEN",
      },
      {
        id: "I/O3.3",
        title: "TO BE ARRANGED",
        subtitle: "Content holding page",
        href: "/io3/to-be-arranged",
        status: "OPEN",
      },
      {
        id: "I/O3.4",
        title: "EXPLORE I/O3 ART WEB LINK",
        subtitle: "External transmission / in-depth artwork archive",
        href: "https://iostudioanon-dot.github.io/IO3-INFO-ART/",
        status: "OPEN",
      },
      {
        id: "I/O3.5",
        title: "I/O3 FINAL ARTWORK",
        subtitle: "Final artwork holding page",
        href: "/io3/final-artwork",
        status: "OPEN",
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
        title: "BRIAN ENO",
        subtitle: "Research holding page",
        href: "/io4/brian-eno",
        status: "OPEN",
      },
      {
        id: "I/O4.2",
        title: "ESSAY PAGE",
        subtitle: "Essay holding page",
        href: "/io4/essay",
        status: "OPEN",
      },
    ],
  },
};
