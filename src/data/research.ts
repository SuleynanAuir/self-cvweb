export const navigation = [
  { label: "Home", href: "/asrl_agent_ml_dl_cv_nlp" },
  { label: "Contact", href: "/asrl_agent_ml_dl_cv_nlp#contact" },
] as const;

export const focusAreas = [
  {
    code: "MAT",
    title: "Materials Literature Graph",
    description: "Convert papers, synthesis notes, properties, datasets, and experiment observations into a connected research graph.",
    tags: ["Papers", "Entities", "Properties", "Datasets"],
  },
  {
    code: "RAG",
    title: "GraphRAG Question Answering",
    description: "Retrieve evidence from graph neighborhoods, rank relevant sources, and answer with traceable scientific context.",
    tags: ["Retriever", "Rerank", "GraphRAG", "Evidence"],
  },
  {
    code: "AGT",
    title: "Autonomous Research Agent",
    description: "Plan multi-step analysis, inspect conflicting evidence, trigger tools, and produce structured research reports.",
    tags: ["Planning", "Tool Use", "Reflection", "Report"],
  },
  {
    code: "EXP",
    title: "Experiment Planning",
    description: "Track material composition, synthesis route, characterization method, and candidate optimization hypotheses.",
    tags: ["Synthesis", "Screening", "Optimization", "Hypothesis"],
  },
  {
    code: "CV",
    title: "Microstructure Vision",
    description: "Connect microscopy, morphology, OCR tables, spectra, and multimodal observations with material properties.",
    tags: ["Microscopy", "OCR", "Spectra", "VLM"],
  },
  {
    code: "ML",
    title: "Predictive Modeling",
    description: "Build interpretable ML workflows for property prediction, uncertainty, active learning, and candidate ranking.",
    tags: ["Property", "Uncertainty", "Active Learning", "Ranking"],
  },
] as const;

export const researchTimeline = [
  {
    year: "2024",
    title: "Scientific Data Foundation",
    description: "Organize papers, tables, metadata, and experimental records into reliable research-ready data objects.",
    tags: ["Papers", "Metadata", "Datasets", "Cleaning"],
  },
  {
    year: "2025",
    title: "GraphRAG and Multimodal Retrieval",
    description: "Connect literature evidence, graph neighborhoods, document chunks, figures, and property targets for QA workflows.",
    tags: ["GraphRAG", "OCR", "VLM", "Retrieval"],
  },
  {
    year: "2026",
    title: "Autonomous Scientific AI Agent",
    description: "Coordinate planning, retrieval, scientific reasoning, report generation, and project knowledge reuse.",
    tags: ["Agent", "Reasoning", "Report", "Automation"],
  },
] as const;
