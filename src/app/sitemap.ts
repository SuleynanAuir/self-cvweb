import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/content/projects";

export const dynamic = "force-static";

const routes = ["", "/projects", "/research-map", "/agent-hub", "/papers", "/roadmap", "/notes"];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getAllProjects().map((project) => `/projects/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `https://ai-research-laboratory.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
