export const aiEvolution = [
  "Machine Learning",
  "Deep Learning",
  "Foundation Models",
  "LLM Agents",
  "Multi-Agent Systems",
  "Scientific Intelligence",
] as const;

export const researchCategories = [
  {
    title: "Autonomous Intelligence",
    description: "Agent systems that plan, use tools, coordinate, and adapt across complex research workflows.",
    projects: [
      {
        name: "Agent-You-MustKnows",
        description: "A structured agent research map covering papers, design patterns, and implementation notes.",
        keywords: ["Agent", "Planning", "Tool Use", "Reflection"],
        github: "https://github.com/SuleynanAuir/Agent-You-MustKnows",
        impact: "Builds a reusable knowledge foundation for agent system research.",
      },
      {
        name: "NEXUS",
        description: "An exploration of autonomous agent architecture, coordination, and emergent workflows.",
        keywords: ["Multi-Agent", "Runtime", "Coordination"],
        github: "https://github.com/SuleynanAuir/NEXUS",
        impact: "Connects agent concepts with system-level engineering experiments.",
      },
      {
        name: "UPARIS Agents",
        description: "Role-based agent workflows for structured task decomposition and collaborative execution.",
        keywords: ["Workflow", "Role Agents", "Reasoning"],
        github: "https://github.com/SuleynanAuir/UPAIRS-Agents",
        impact: "Studies how role assignment improves agent reliability.",
      },
      {
        name: "CognitiveTemp Agents",
        description: "Deep research agents for decomposing questions, retrieving evidence, and synthesizing answers.",
        keywords: ["Deep Search", "RAG", "Research Agent"],
        github: "https://github.com/SuleynanAuir/CognitiveTemp-DeepSearch-Agents",
        impact: "Turns complex questions into evidence-backed research loops.",
      },
    ],
  },
  {
    title: "Foundation Models & Alignment",
    description: "Fine-tuning, model adaptation, preference optimization, and behavior inspection for LLM systems.",
    projects: [
      {
        name: "LLaMA Factory Fine-tuning",
        description: "A reproducible pipeline for data preparation, LoRA-style adaptation, and evaluation.",
        keywords: ["SFT", "LoRA", "Evaluation"],
        github: "https://github.com/SuleynanAuir",
        impact: "Clarifies the engineering path from base models to task-ready assistants.",
      },
      {
        name: "Qwen Fine-tuning",
        description: "Qwen adaptation experiments focused on instruction data, training configuration, and inference behavior.",
        keywords: ["Qwen", "Fine-tuning", "Transformers"],
        github: "https://github.com/SuleynanAuir",
        impact: "Builds practical intuition for model adaptation and evaluation.",
      },
      {
        name: "Preference Optimization",
        description: "Alignment experiments around preference data, reward signals, and model response shaping.",
        keywords: ["DPO", "RLHF", "Alignment"],
        github: "https://github.com/SuleynanAuir",
        impact: "Studies how feedback loops can steer model behavior toward research usefulness.",
      },
    ],
  },
  {
    title: "Knowledge Intelligence",
    description: "Systems that connect retrieval, graphs, structured memory, and knowledge-grounded reasoning.",
    projects: [
      {
        name: "GraphRAG",
        description: "Graph-aware retrieval that links documents, entities, relationships, and source-grounded answers.",
        keywords: ["GraphRAG", "Retrieval", "Evidence"],
        github: "https://github.com/SuleynanAuir",
        impact: "Improves answer traceability by combining graph structure with semantic search.",
      },
      {
        name: "Knowledge Graph",
        description: "Entity and relationship modeling for building reusable research memory.",
        keywords: ["Entities", "Relations", "Ontology"],
        github: "https://github.com/SuleynanAuir",
        impact: "Transforms unstructured notes into connected research objects.",
      },
      {
        name: "NEXUS4Material",
        description: "A knowledge intelligence layer for connecting materials data, literature, and agentic workflows.",
        keywords: ["Materials", "Knowledge AI", "Graph"],
        github: "https://github.com/SuleynanAuir",
        impact: "Bridges scientific data with autonomous AI analysis.",
      },
    ],
  },
  {
    title: "AI for Science",
    description: "Scientific question answering and material intelligence systems for research acceleration.",
    projects: [
      {
        name: "ASC Material Intelligence",
        description: "A research direction for material discovery, evidence analysis, and scientific knowledge systems.",
        keywords: ["AI4Science", "Materials", "Discovery"],
        github: "https://github.com/SuleynanAuir",
        impact: "Frames AI as a scientific reasoning partner, not only a prediction model.",
      },
      {
        name: "Scientific QA-Bot",
        description: "A QA system for scientific literature retrieval, answer drafting, and source-grounded reasoning.",
        keywords: ["QA", "RAG", "Citations"],
        github: "https://github.com/SuleynanAuir",
        impact: "Makes scientific answers auditable and reusable.",
      },
      {
        name: "Material Knowledge System",
        description: "A structured system for material properties, synthesis routes, and evidence-backed reports.",
        keywords: ["Knowledge Base", "Reports", "Synthesis"],
        github: "https://github.com/SuleynanAuir",
        impact: "Organizes material research into a living analysis workspace.",
      },
    ],
  },
  {
    title: "Machine Learning Foundations",
    description: "Core algorithms and probabilistic reasoning systems built from first principles.",
    projects: [
      {
        name: "Scratch Machine Learning",
        description: "Rebuilding classical ML algorithms to connect mathematical intuition with implementation.",
        keywords: ["NumPy", "Optimization", "Models"],
        github: "https://github.com/SuleynanAuir",
        impact: "Maintains strong foundations beneath modern model engineering.",
      },
      {
        name: "Bayesian Reasoning Systems",
        description: "Probabilistic modeling and uncertainty-aware reasoning for interpretable AI systems.",
        keywords: ["Bayesian", "Uncertainty", "Inference"],
        github: "https://github.com/SuleynanAuir",
        impact: "Adds uncertainty awareness to intelligent decision workflows.",
      },
    ],
  },
  {
    title: "Reinforcement Learning",
    description: "Decision-making systems that learn through interaction, reward, and policy improvement.",
    projects: [
      {
        name: "DQN",
        description: "Value-based reinforcement learning experiments for sequential decision tasks.",
        keywords: ["Q-Learning", "Replay", "Policy"],
        github: "https://github.com/SuleynanAuir",
        impact: "Builds the foundation for agents that improve through interaction.",
      },
      {
        name: "PPO",
        description: "Policy optimization experiments focused on stability, reward design, and evaluation.",
        keywords: ["Policy Gradient", "Optimization", "RL"],
        github: "https://github.com/SuleynanAuir",
        impact: "Connects learning dynamics with practical agent training.",
      },
      {
        name: "Actor-Critic",
        description: "Hybrid value-policy architectures for more sample-efficient decision learning.",
        keywords: ["Actor", "Critic", "Control"],
        github: "https://github.com/SuleynanAuir",
        impact: "Explores the mechanics behind adaptive autonomous behavior.",
      },
    ],
  },
  {
    title: "Multimodal Intelligence",
    description: "Visual understanding, OCR, and vision-language systems for richer AI perception.",
    projects: [
      {
        name: "OCR",
        description: "Document and image text extraction pipelines for research data understanding.",
        keywords: ["OCR", "Documents", "Vision"],
        github: "https://github.com/SuleynanAuir/P-ADONIS",
        impact: "Turns visual artifacts into searchable knowledge.",
      },
      {
        name: "Vision Language Models",
        description: "Experiments connecting visual inputs with language reasoning and multimodal representation.",
        keywords: ["VLM", "Vision", "Language"],
        github: "https://github.com/SuleynanAuir/PEANUT",
        impact: "Extends intelligent systems beyond text-only reasoning.",
      },
      {
        name: "Multimodal Understanding",
        description: "Applied research on perception pipelines, visual reasoning, and model evaluation.",
        keywords: ["Perception", "Evaluation", "Representation"],
        github: "https://github.com/SuleynanAuir",
        impact: "Supports scientific AI systems that can interpret diverse evidence.",
      },
    ],
  },
] as const;

export const technicalSkills = [
  "LLM",
  "Agent",
  "RAG",
  "GraphRAG",
  "Knowledge Graph",
  "Deep Learning",
  "Reinforcement Learning",
  "Computer Vision",
  "Scientific AI",
] as const;
