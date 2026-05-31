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

export const projectRoutes: RouteEntry[] = projects.map((project, index) => ({
  id: project.id,
  label: project.navLabel,
  route: project.route,
  status: project.status,
  order: index + 2,
}));

export const siteMap = [...coreRoutes, ...projectRoutes];
