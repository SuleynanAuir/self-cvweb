import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Agent Research Hub",
  description: "Learning path for LLM agents, tool use, planning, memory, and multi-agent systems.",
};

export default function AgentHubPage() {
  return (
    <ComingSoonPage
      eyebrow="Phase 2"
      title="Agent Research Hub"
      description="A research-first learning path from ReAct and tool calling to deep research agents and multi-agent workflows."
      items={["ReAct", "Tool calling", "Planning and memory", "Reflection", "Multi-agent systems", "Deep research agents"]}
    />
  );
}
