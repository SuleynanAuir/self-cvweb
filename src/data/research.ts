export const navigation = [
  { label: "Home", href: "/" },
  { label: "Research Map", href: "/research-map" },
  { label: "Projects", href: "/projects" },
  { label: "Agent Hub", href: "/agent-hub" },
  { label: "Papers", href: "/papers" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Notes", href: "/notes" },
] as const;

export const focusAreas = [
  {
    code: "AGT",
    title: "Artificial Intelligence Agent",
    description: "Agentic workflow, planning, tool use, memory, reflection, multi-agent collaboration, and deep research automation.",
    tags: ["ReAct", "Planning", "Memory", "Multi-Agent"],
  },
  {
    code: "LLM",
    title: "Large Language Model Engineering",
    description: "Fine-tuning pipelines, SFT, LoRA, QLoRA, DPO, evaluation, prompt systems, and model deployment practice.",
    tags: ["SFT", "LoRA", "QLoRA", "DPO"],
  },
  {
    code: "RAG",
    title: "Retrieval-Augmented Generation",
    description: "Knowledge retrieval, query rewriting, indexing, ranking, GraphRAG direction, and production RAG evaluation.",
    tags: ["Retriever", "Rerank", "GraphRAG", "Evaluation"],
  },
  {
    code: "MM",
    title: "Multimodal AI",
    description: "Vision-language reasoning, OCR, image understanding, video restoration, and multimodal representation learning.",
    tags: ["VLM", "OCR", "Video", "Vision-Language"],
  },
  {
    code: "CV",
    title: "Computer Vision",
    description: "Image restoration, segmentation, detection, OCR pipelines, visual representation, and applied CV research systems.",
    tags: ["Restoration", "OCR", "Detection", "Representation"],
  },
  {
    code: "ML",
    title: "Machine Learning Foundation",
    description: "Bayesian networks, optimization algorithms, reinforcement learning, and framework-level implementation practice.",
    tags: ["Bayesian", "Optimization", "RL", "Framework"],
  },
] as const;

export const researchTimeline = [
  {
    year: "2024",
    title: "Deep Learning Foundation",
    description: "Build mathematical foundations, machine learning algorithms, deep learning implementation habits, and optimization intuition.",
    tags: ["Python", "Math", "ML", "Deep Learning"],
  },
  {
    year: "2025",
    title: "Computer Vision and Multimodal",
    description: "Move from model understanding to applied perception systems: OCR, video restoration, multimodal learning, and visual reasoning.",
    tags: ["CV", "OCR", "Video", "Multimodal"],
  },
  {
    year: "2026",
    title: "LLM Agent and Autonomous AI System",
    description: "Focus on LLM agents, RAG, tool use, deep search, multi-agent systems, and agentic research workflows.",
    tags: ["LLM", "Agent", "RAG", "AI System"],
  },
] as const;
