import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/project-explorer";
import { SectionHeading } from "@/components/section-heading";
import { getAllProjects, getProjectStats } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source AI research projects across agents, LLM engineering, computer vision, and machine learning.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const stats = getProjectStats(projects);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(320px,0.35fr)] lg:items-end">
        <SectionHeading
          eyebrow="Open Source Research"
          title="Projects organized by research question, method, and learning outcome."
          description="Each project includes a short summary, research focus, stack, and a direct link to its dedicated project page."
        />
        <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-border bg-surface">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-border p-4 first:border-l-0">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ProjectExplorer projects={projects} />
    </div>
  );
}
