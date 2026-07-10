import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Paper Reading",
  description: "Personal AI paper reading knowledge base.",
};

export default function PapersPage() {
  return (
    <ComingSoonPage
      eyebrow="Phase 3"
      title="Paper Reading Knowledge Base"
      description="A Markdown-driven paper system for problem statements, key ideas, methods, implementation notes, and personal understanding."
      items={["Transformer", "RAG", "GraphRAG", "Agent papers", "Multimodal AI", "Computer vision"]}
    />
  );
}
