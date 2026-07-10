import type { MetadataRoute } from "next";

const routes = ["", "/projects", "/research-map", "/agent-hub", "/papers", "/roadmap", "/notes"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://ai-research-laboratory.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
