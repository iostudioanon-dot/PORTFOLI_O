import { assetPath } from "../src/lib/assetPath";

export type ProjectStatus =
  | "OPEN"
  | "IN_DEVELOPMENT"
  | "ARCHIVE_LOCKED"
  | "EXTERNAL_TRANSMISSION"
  | "RECOVERED"
  | "CLASSIFIED";

export type ProjectId = "io1" | "io2" | "io3" | "io4" | "xfm";

export type MediaType = "audio" | "video" | "game" | "website" | "pdf" | "image" | "research" | "external" | "archive";

export type TimelineEntry = {
  title: string;
  category:
    | "Architecture"
    | "Technology"
    | "Atmosphere"
    | "Media"
    | "Surveillance"
    | "Cinema"
    | "Space Exploration"
    | "Digital Systems";
  marker: string;
  note: string;
};

export type ProjectRecord = {
  id: ProjectId;
  navLabel: string;
  title: string;
  subtitle: string;
  route: string;
  layerPosition: "orbital" | "atmospheric" | "ground" | "subterranean" | "chronology";
  theme: string;
  colors: {
    primary: string;
    secondary: string;
    field: string;
  };
  description: string;
  headerGif?: {
    src: string;
    alt: string;
    caption: string;
  };
  coordinates: string;
  status: ProjectStatus;
  signalStrength: number;
  accessLevel: string;
  environment: "ORBITAL" | "SUBTERRANEAN" | "ATMOSPHERIC" | "ARCHIVE" | "CHRONOLOGY";
  mediaTypes: MediaType[];
  lastTransmission: string;
  archiveNotes: string[];
  processNotes: string[];
  outputs: string[];
  timeline?: TimelineEntry[];
};

// Future media systems are added here: set development records to active,
// attach href values, or add new image/video/audio/pdf/link records per project.
export const projects: ProjectRecord[] = [
  {
    id: "io1",
    navLabel: "I/O1",
    title: "THE SENTINEL",
    subtitle: "Space and the Cosmic Void",
    route: "/io1",
    layerPosition: "orbital",
    theme: "Space, isolation, orbital systems, surveillance after the human scale.",
    colors: {
      primary: "#8f1d1d",
      secondary: "#2b0507",
      field: "#0a0304",
    },
    coordinates: "ORBITAL LAYER / 51.5072N 00.1276W / SIGNAL 01",
    description:
      "Cold, cosmic, speculative, and isolated: a suspended study of distance, watching, and the architecture of post-human orbit. The project treats the satellite as both instrument and witness.",
    headerGif: {
      src: assetPath("/assets/io1-sentinel/videos/FXIO1%20GIF%20SPACE.gif"),
      alt: "Animated I/O1 space transmission study.",
      caption: "FXIO1 GIF SPACE",
    },
    status: "EXTERNAL_TRANSMISSION",
    signalStrength: 78,
    accessLevel: "LEVEL_01",
    environment: "ORBITAL",
    mediaTypes: ["game", "audio", "research"],
    lastTransmission: "Sentinel sequence awaiting external uplink.",
    archiveNotes: [
      "Monolithic sightline tests and orbital title studies.",
      "Crimson signal palette reserved for isolation and system alert states.",
      "Future media may include stills, sound beds, and orbital motion fragments.",
    ],
    processNotes: [
      "Map the relationship between orbital scale, technological distance, and human absence.",
      "Develop still image, moving image, and sound fragments as low-frequency transmissions.",
    ],
    outputs: [
      "Image record in development",
      "Video transmission study in development",
      "Research trace under review",
    ],
  },
  {
    id: "io3",
    navLabel: "I/O3",
    title: "IONOSPHERIC INTERSECTION",
    subtitle: "Ionospheric radar / invisible atmosphere",
    route: "/io3",
    layerPosition: "atmospheric",
    theme: "Radar, ionosphere, electromagnetic weather, invisible communication systems.",
    colors: {
      primary: "#89f58a",
      secondary: "#8b6dff",
      field: "#06110c",
    },
    coordinates: "IONOSPHERIC LAYER / 9.8HZ / SIGNAL 03",
    description:
      "Ionospheric, tense, surveillant, and atmospheric: a transmission zone concerned with radar, aurora, Cold War signal systems, and invisible architectures moving through the sky.",
    headerGif: {
      src: assetPath("/assets/io3-ionospheric-intersection/videos/FXIO3%20GIF%20FLY.gif"),
      alt: "Animated I/O3 ionospheric flight transmission study.",
      caption: "FXIO3 GIF FLY",
    },
    status: "IN_DEVELOPMENT",
    signalStrength: 87,
    accessLevel: "LEVEL_03",
    environment: "ATMOSPHERIC",
    mediaTypes: ["audio", "video", "research"],
    lastTransmission: "Aurora/radar reference stream unstable.",
    archiveNotes: [
      "Signal sweeps should remain sparse and slow.",
      "Green and violet act as atmospheric memory, not decorative neon.",
      "Audio records may later carry pulse, shortwave, and interference studies.",
    ],
    processNotes: [
      "Collect radar, aurora, and ionospheric references as signal fragments.",
      "Use audio and moving image to suggest systems that are present but not visible.",
    ],
    outputs: [
      "Audio signal study in development",
      "Radar motion study in development",
      "Duga reference trace under review",
    ],
  },
  {
    id: "io4",
    navLabel: "I/O4",
    title: "PRODUCTIVE FAILURE",
    subtitle: "Architecture / material instability / process",
    route: "/io4",
    layerPosition: "ground",
    theme: "Architecture, landscape, monochrome systems, process, collapse, and repair.",
    colors: {
      primary: "#f4f4f0",
      secondary: "#737373",
      field: "#0c0c0c",
    },
    coordinates: "GROUND LAYER / PROCESS FIELD / SIGNAL 04",
    description:
      "Fractured, unstable, material, and exposed: a terrestrial system for process fragments, failed models, landscape operations, and architectural evidence where instability becomes method.",
    headerGif: {
      src: assetPath("/assets/io4-final-outcome/videos/FXIO4%20GIF%20WORLD.gif"),
      alt: "Animated I/O4 world transmission study.",
      caption: "FXIO4 GIF WORLD",
    },
    status: "ARCHIVE_LOCKED",
    signalStrength: 64,
    accessLevel: "LEVEL_04",
    environment: "ARCHIVE",
    mediaTypes: ["image", "pdf", "research"],
    lastTransmission: "Process fragments indexed but not fully recovered.",
    archiveNotes: [
      "Monochrome language holds this layer close to architectural drawing.",
      "Evidence panels should privilege process over finished object.",
      "Fog and scanlines can suggest material uncertainty without hiding information.",
    ],
    processNotes: [
      "Preserve failed states as evidence rather than hiding them behind polished outcomes.",
      "Use drawing, model, landscape, and documentation fragments as the main archive language.",
    ],
    outputs: [
      "Process fragment grid in development",
      "Field documentation PDF in development",
      "Material note under review",
    ],
  },
  {
    id: "io2",
    navLabel: "I/O2",
    title: "HYPOGEAL LANDSCAPE",
    subtitle: "Subterranean infrastructure / hidden systems",
    route: "/io2",
    layerPosition: "subterranean",
    theme: "Excavation, underground water, geological architecture, hidden machine space.",
    colors: {
      primary: "#29d8ff",
      secondary: "#1157ff",
      field: "#020714",
    },
    coordinates: "SUBTERRANEAN LAYER / WATER TABLE / SIGNAL 02",
    description:
      "Subterranean, geological, architectural, hidden, and immersive: a descent into underground infrastructure, geological architectures, blue machine light, and the systems beneath visible landscape.",
    headerGif: {
      src: assetPath("/assets/io2-hypogeal-landscape/videos/FXIO2%20GIF%20BLOCKS.gif"),
      alt: "Animated I/O2 block and hypogeal landscape transmission study.",
      caption: "FXIO2 GIF BLOCKS",
    },
    status: "ARCHIVE_LOCKED",
    signalStrength: 71,
    accessLevel: "LEVEL_02",
    environment: "SUBTERRANEAN",
    mediaTypes: ["image", "video", "research"],
    lastTransmission: "Water table signal detected below visible layer.",
    archiveNotes: [
      "Water movement should be implied by slow light and layered gradients.",
      "This layer can hold installation fragments, cave studies, and infrastructure references.",
      "Blue should feel mineral and cold, not decorative.",
    ],
    processNotes: [
      "Treat underground infrastructure as both geological condition and architectural system.",
      "Use cyan and electric blue sparingly as water, signal, and hidden machine light.",
    ],
    outputs: [
      "Excavation plate sequence in development",
      "Underground flow video study in development",
      "Infrastructure research note under review",
    ],
  },
  {
    id: "xfm",
    navLabel: "TIMELINE I/O",
    title: "TIMELINE I/O",
    subtitle: "Historical timeline / portfolio case-study spine",
    route: "/xfm",
    layerPosition: "chronology",
    theme:
      "Historical mark making, perspective, modernity, war technologies, cinema, networks, AI, and future speculation.",
    colors: {
      primary: "#ffffff",
      secondary: "#9a9a9a",
      field: "#050505",
    },
    coordinates: "CROSS-FREQUENCY MEMORY / ARCHIVE SPINE / SIGNAL X",
    description:
      "A historical timeline and case-study spine connecting cave marks, Renaissance optics, industrial systems, modernism, Cold War technology, cinema, digital networks, AI, and environmental futures.",
    status: "OPEN",
    signalStrength: 82,
    accessLevel: "LEVEL_X",
    environment: "CHRONOLOGY",
    mediaTypes: ["archive", "research", "pdf"],
    lastTransmission: "Chronology spine open for case-study expansion.",
    archiveNotes: [
      "Timeline entries should feel investigative rather than educational.",
      "The chronology is a conceptual operating layer, not a detached appendix.",
      "Entries can later cross-link into IO project records and source media.",
    ],
    processNotes: [
      "Assemble historical entries as fragments in an archaeological operating system.",
      "Connect built space, mediation, war technology, atmosphere, cinema, and digital systems.",
    ],
    outputs: [
      "Interactive chronology scaffold",
      "Expandable timeline node system",
      "Reference constellation under review",
    ],
    timeline: [
      {
        title: "Dawn of Man",
        category: "Media",
        marker: "PRE-ARCHIVE / TOOL SIGNAL",
        note: "The first threshold: hand, tool, environment, and survival begin to operate as one system.",
      },
      {
        title: "Cave Systems",
        category: "Architecture",
        marker: "SUBTERRANEAN / IMAGE FIELD",
        note: "Caves become early media chambers where image, memory, ritual, and geology collapse together.",
      },
      {
        title: "Renaissance Perspective",
        category: "Media",
        marker: "OPTICAL ORDER / CONTROLLED DEPTH",
        note: "Vision becomes engineered: space is measured, organised, and converted into a controlled visual system.",
      },
      {
        title: "Industrialisation",
        category: "Technology",
        marker: "MACHINE FIELD / SECOND NATURE",
        note: "Landscape and labour are reorganised by machine power, infrastructure, speed, and industrial repetition.",
      },
      {
        title: "Modernism",
        category: "Architecture",
        marker: "SECOND NATURE / BUILT ORDER",
        note: "Architecture becomes a system of clarity, function, standardisation, and controlled spatial behaviour.",
      },
      {
        title: "World War II Technologies",
        category: "Surveillance",
        marker: "ACCELERATION / SIGNAL WAR",
        note: "Radar, computation, logistics, and code turn perception into a military and technical network.",
      },
      {
        title: "Sputnik",
        category: "Space Exploration",
        marker: "1957 / ORBITAL SIGNAL",
        note: "The first artificial satellite turns orbit into broadcast, territory, science, and political signal.",
      },
      {
        title: "Space Race",
        category: "Space Exploration",
        marker: "ESCAPE VELOCITY / IMAGE STATE",
        note: "Space becomes a public screen where atmosphere, nation, engineering, and imagination are fused.",
      },
      {
        title: "Kubrick / 2001",
        category: "Cinema",
        marker: "1968 / MONOLITH INTERFACE",
        note: "Cinema becomes a speculative operating system for tools, intelligence, architecture, and cosmic memory.",
      },
      {
        title: "Moon Landing",
        category: "Media",
        marker: "1969 / BROADCAST SURFACE",
        note: "The lunar surface is experienced through transmission: event, image, proof, myth, and media signal.",
      },
      {
        title: "Duga",
        category: "Atmosphere",
        marker: "IONOSPHERIC ARRAY / HIDDEN INFRASTRUCTURE",
        note: "Atmosphere becomes architecture: invisible radio space is scanned, weaponised, and made operational.",
      },
      {
        title: "Chernobyl",
        category: "Technology",
        marker: "1986 / SYSTEM FAILURE",
        note: "A technological system breaks into landscape, contamination, exclusion, memory, and long-term atmosphere.",
      },
      {
        title: "Digital Networks",
        category: "Digital Systems",
        marker: "THIRD NATURE / PACKET SPACE",
        note: "Experience begins moving through invisible protocols, distributed networks, packets, screens, and remote presence.",
      },
      {
        title: "AI Systems",
        category: "Digital Systems",
        marker: "SYNTHETIC MEDIATION / MACHINE INTERPRETATION",
        note: "Language, image, memory, and prediction become processed through systems that interpret on our behalf.",
      },
      {
        title: "Future Speculation",
        category: "Atmosphere",
        marker: "OPEN SIGNAL / UNSTABLE FUTURE",
        note: "The archive remains incomplete: nature, architecture, and digital systems continue to mutate together.",
      },
    ],
  },
];

export const projectMap = new Map(projects.map((project) => [project.id, project]));
