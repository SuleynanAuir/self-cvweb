import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Research Map",
  description: "Interactive AI research knowledge graph roadmap.",
};

export default function ResearchMapPage() {
  return (
    <ComingSoonPage
      eyebrow="Phase 2"
      title="Interactive AI Research Knowledge Graph"
      description="This page will connect projects, papers, concepts, and technologies with React Flow."
      items={["AI concept graph", "Project to paper links", "Clickable research nodes", "Graph-driven learning paths"]}
    />
  );
}
