import { researchCategories } from "@/data/portfolio";

const projectShortNames: Record<string, string> = {
  "Agent-You-MustKnows": "AYM",
  NEXUS: "NEXUS",
  "UPARIS-DS Agents": "UPARIS",
  "CognitiveTemp DeepSearch Agents": "CogTemp",
  "LLaMA Factory Fine-tuning": "LLaMA FT",
  "Qwen HotelService Master": "Qwen Hotel",
  "Weibo SentimentBot QA-Bot": "Weibo QA",
  "Chronos-2 Time-Series Foundation Model": "Chronos-2",
  VeFloodBN: "VeFlood",
  "Clinical Brain Tumor Detection": "Brain MRI",
  "ScratchOML-NIDS": "NIDS",
  "Customer Analytics Platform": "Customer",
  "DRL Basis Projects": "DRL",
  "OMNI-Rec": "OMNI",
  "PEANUT Video Restoration": "PEANUT",
  "P-ADONIS OCR": "OCR",
  "Hateful Memes Detection": "Memes",
};

export function getResearchProjectId(projectName: string) {
  const slug = projectName
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `project-${slug}`;
}

export const researchProjectLinks = researchCategories.flatMap((category, categoryIndex) =>
  category.projects.map((project, projectIndex) => ({
    id: getResearchProjectId(project.name),
    shortName: projectShortNames[project.name] ?? project.name,
    projectName: project.name,
    categoryTitle: category.title,
    categoryIndex,
    projectIndex,
  })),
);
