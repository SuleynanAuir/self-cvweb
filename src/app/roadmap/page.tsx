import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Learning Roadmap",
  description: "AI engineer learning roadmap from foundations to research.",
};

export default function RoadmapPage() {
  return (
    <ComingSoonPage
      eyebrow="Phase 3"
      title="AI Engineer Roadmap"
      description="A structured education path from Python, math, and optimization to LLMs, agents, and research practice."
      items={["Foundation", "Machine learning", "Deep learning", "Computer vision", "LLM", "Agent", "Research"]}
    />
  );
}
