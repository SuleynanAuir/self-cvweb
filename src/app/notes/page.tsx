import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const metadata: Metadata = {
  title: "Knowledge Notes",
  description: "Research notes, paper explanations, and AI engineering practice.",
};

export default function NotesPage() {
  return (
    <ComingSoonPage
      eyebrow="Phase 3"
      title="Blog and Knowledge Notes"
      description="Distill-style explanations for algorithms, papers, engineering practice, and research thoughts."
      items={["Paper explanation", "Algorithm understanding", "Engineering practice", "Research thoughts"]}
    />
  );
}
