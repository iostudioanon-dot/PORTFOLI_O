import { projects } from "../../data/projects";

export type RouteEntry = {
  id: string;
  label: string;
  route: string;
  status: string;
  order: number;
};

export const coreRoutes: RouteEntry[] = [
  {
    id: "instructions",
    label: "INSTRUCTI/ONS",
    route: "/instructions",
    status: "OPEN",
    order: 0,
  },
  {
    id: "hub",
    label: "TRANSITI/ON",
    route: "/hub",
    status: "OPEN",
    order: 1,
  },
];

const projectOrder = ["io1", "io2", "io3", "io4", "io-framework"];

export const projectRoutes: RouteEntry[] = [
  ...projects.filter((project) => project.id !== "xfm").map((project) => ({
    id: project.id,
    label: project.navLabel,
    route: project.route,
    status: project.status,
    order: 0,
  })),
  {
    id: "io-framework",
    label: "I/O FRAMEWORK",
    route: "/io-framework",
    status: "OPEN",
    order: 0,
  },
]
  .sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id))
  .map((entry, index) => ({
    ...entry,
    order: index + 2,
  }));

export const siteMap = [...coreRoutes, ...projectRoutes];
