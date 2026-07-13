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
    description: "Agent systems that plan, use tools, coordinate, search deeply, and adapt across complex research workflows.",
    projects: [
      {
        name: "Agent-You-MustKnows",
        description:
          "A structured agent research knowledge base covering LLM-based agents, planning, memory, tool use, RAG plus Agent, and multi-agent collaboration.",
        keywords: ["Agentic AI", "Planning", "Tool Use", "Memory"],
        github: "https://github.com/SuleynanAuir/Agent-You-MustKnows",
        impact: "Builds a reusable research map for understanding and engineering autonomous AI agents.",
      },
      {
        name: "NEXUS",
        description:
          "A multi-agent framework for complex information environments, combining deep search agents, user-attention anchors, and knowledge-driven simulation.",
        keywords: ["Multi-Agent", "Deep Search", "Digital Twin", "Reasoning"],
        github:
          "https://github.com/SuleynanAuir/NEXUS-Navigating-Emergent-X-agent-Universe-Simulator-with-Unprecedented-Insight",
        impact: "Connects agent collaboration, entity extraction, narrative analysis, and system-level orchestration.",
      },
      {
        name: "UPARIS-DS Agents",
        description:
          "An uncertainty-aware paragraph-level reflective deep search framework for adaptive refinement and structured evidence synthesis.",
        keywords: ["Reflection", "Uncertainty", "Deep Search", "Evidence"],
        github: "https://github.com/SuleynanAuir/UPAIRS-Agents",
        impact: "Improves research-agent reliability by making uncertainty and evidence refinement explicit.",
      },
      {
        name: "CognitiveTemp Agents",
        description:
          "A configurable multi-agent reasoning system that adjusts search behavior from rigorous academic analysis to creative exploration.",
        keywords: ["Temperature Control", "Adaptive Reasoning", "Search", "Agent"],
        github: "https://github.com/SuleynanAuir/CognitiveTemp-DeepSearch-Agents",
        impact: "Adds controllable reasoning style and exploration depth to research-agent workflows.",
      },
    ],
  },
  {
    title: "Foundation Models & Alignment",
    description:
      "Fine-tuning, model adaptation, Chain-of-Draft direct answering, and preference optimization for LLM systems.",
    projects: [
      {
        name: "LLMs + CoD Direct Answer",
        description:
          "A professional answering module using Chain-of-Draft reasoning compression, direct answer synthesis, answer calibration, and retrieval-grounded verification.",
        keywords: ["Chain-of-Draft", "Direct Answering", "Token Efficiency", "Calibration"],
        github: "https://github.com/SuleynanAuir",
        impact: "Balances concise expert answers with auditable reasoning, lower token cost, and terminology control.",
      },
      {
        name: "LLaMA Factory Fine-tuning",
        description:
          "An end-to-end LLM fine-tuning and deployment pipeline covering data engineering, SFT, LoRA-style adaptation, and local deployment.",
        keywords: ["SFT", "LoRA", "LLaMA Factory", "Deployment"],
        github: "https://github.com/SuleynanAuir/LLaMa-Factory-Fine-Tuning",
        impact: "Turns foundation-model adaptation into a repeatable training and deployment workflow.",
      },
      {
        name: "Qwen Fine-tuning",
        description:
          "Qwen model adaptation for domain assistants using SFT, LoRA, QLoRA, and DPO under practical infrastructure constraints.",
        keywords: ["Qwen", "SFT", "QLoRA", "DPO"],
        github: "https://github.com/SuleynanAuir/Distributed-Fine-Tuning-of-Qwen2.5-7B-as-HotelService-Master",
        impact: "Shows how domain-specific assistants can be trained, compressed, and aligned.",
      },
      {
        name: "Preference Optimization",
        description:
          "Alignment workflows using preference pairs, reward signals, and DPO-style response shaping for specialized assistants.",
        keywords: ["DPO", "Preference Data", "Alignment", "Evaluation"],
        github:
          "https://github.com/SuleynanAuir/WeiboPublic-SentimentBot-E2-FineTuning-Pipeline-of-Qwen3.5-0.6B-on-AutoDL-Cloud-Infrastrcture",
        impact: "Connects compact LLM fine-tuning with behavior optimization and task-specific QA.",
      },
    ],
  },
  {
    title: "Knowledge Intelligence",
    description:
      "Systems that connect research maps, retrieval, uncertainty, graph-like evidence, CoD answer synthesis, and grounded reasoning.",
    projects: [
      {
        name: "GraphRAG",
        description:
          "Graph-aware retrieval that links documents, entities, relationships, evidence anchors, and source-grounded answers.",
        keywords: ["GraphRAG", "Retrieval", "Evidence", "Entity Linking"],
        github: "https://github.com/SuleynanAuir",
        impact: "Improves answer traceability by combining graph neighborhoods with semantic search.",
      },
      {
        name: "Knowledge Graph",
        description:
          "Entity and relationship modeling for transforming papers, notes, and project artifacts into reusable research memory.",
        keywords: ["Entities", "Relations", "Ontology", "Research Memory"],
        github: "https://github.com/SuleynanAuir",
        impact: "Transforms unstructured research material into connected knowledge objects.",
      },
      {
        name: "CoD Direct Answer Layer",
        description:
          "A final response layer that compresses intermediate reasoning into draft anchors before producing calibrated direct answers.",
        keywords: ["CoT-to-CoD", "Faithfulness", "Answer Schema", "Hallucination Mitigation"],
        github: "https://github.com/SuleynanAuir",
        impact: "Makes LLM QA concise, terminology-aware, evidence-grounded, and easier to audit.",
      },
    ],
  },
  {
    title: "AI for Science",
    description: "Scientific forecasting, causal risk modeling, medical image analysis, and evidence-backed research workflows.",
    projects: [
      {
        name: "Chronos-2 Time-Series Foundation Model",
        description:
          "A Chronos and Chronos-Bolt based study for univariate, multivariate, cross-item, and covariate-aware forecasting.",
        keywords: ["Time Series", "Forecasting", "Chronos", "Covariates"],
        github: "https://github.com/SuleynanAuir/Amazon-TSChronos",
        impact: "Extends foundation-model thinking into temporal scientific and operational prediction.",
      },
      {
        name: "VeFloodBN",
        description:
          "A discrete Bayesian network for municipality-level flood-risk modeling with causal DAGs, MCMC, and geospatial heatmaps.",
        keywords: ["Bayesian Network", "DAG", "MCMC", "GeoPandas"],
        github: "https://github.com/SuleynanAuir",
        impact: "Provides interpretable uncertainty-aware scientific risk analysis for decision support.",
      },
      {
        name: "Clinical Brain Tumor Detection",
        description:
          "A medical ML framework for MRI tumor detection using classical models, HOG features, augmentation, and basic Python libraries.",
        keywords: ["Medical AI", "MRI", "HOG", "Small-Sample Learning"],
        github: "https://github.com/SuleynanAuir",
        impact: "Demonstrates robust scientific ML under limited tooling and constrained data settings.",
      },
    ],
  },
  {
    title: "Machine Learning Foundations",
    description: "Core algorithms, probabilistic reasoning, optimization, diagnostics, and applied tabular intelligence.",
    projects: [
      {
        name: "ScratchOML-NIDS",
        description:
          "A two-stage Bayesian fusion intrusion detection system with GD, SGD, Adam, logistic regression, Naive Bayes, decision trees, and MLP implemented from scratch.",
        keywords: ["Bayesian Fusion", "Optimization", "From Scratch", "NIDS"],
        github: "https://github.com/SuleynanAuir/ScratchOML-NIDS",
        impact: "Connects optimization, probability, class imbalance, and diagnostics in a complete ML system.",
      },
      {
        name: "Customer Analytics Platform",
        description:
          "An e-commerce analytics workflow combining EDA, supervised learning, segmentation, churn analysis, and value modeling.",
        keywords: ["Customer Analytics", "Segmentation", "Churn", "Data Mining"],
        github: "https://github.com/SuleynanAuir/Customer-Analytics-Modeling-Churn-and-Value-in-E-Commerce",
        impact: "Turns structured customer data into interpretable decision-support signals.",
      },
    ],
  },
  {
    title: "Reinforcement Learning",
    description: "Decision-making systems that learn through interaction, rewards, policy improvement, and preference feedback.",
    projects: [
      {
        name: "DRL Basis Projects",
        description:
          "A modular deep reinforcement learning suite covering DQN, DDQN, PPO, policy gradient, and actor-critic implementations.",
        keywords: ["DQN", "PPO", "Actor-Critic", "Replay Buffer"],
        github: "https://github.com/SuleynanAuir",
        impact: "Builds the policy-learning foundation for autonomous systems that improve through interaction.",
      },
      {
        name: "OMNI-Rec",
        description:
          "A OneRec-inspired generative recommendation project using Semantic ID, multimodal behavior modeling, and reward optimization.",
        keywords: ["Recommendation", "Semantic ID", "Reward", "OneRec"],
        github: "https://github.com/SuleynanAuir/OMNI-Rec/tree/main",
        impact: "Reframes recommendation as a generative and preference-aligned decision problem.",
      },
    ],
  },
  {
    title: "Multimodal Intelligence",
    description: "Video restoration, document OCR, image-text safety, and visual-language understanding for richer AI perception.",
    projects: [
      {
        name: "PEANUT Video Restoration",
        description:
          "A prompt-enhanced optical-flow video restoration project combining spatial consistency, temporal consistency, and clarity optimization.",
        keywords: ["Video Restoration", "Optical Flow", "SAM2", "Prompt-Guided"],
        github: "https://github.com/SuleynanAuir/PEANUT--Prompt-Enhanced-Ablation-with-Optical-Flow-Based-Neural-Unit",
        impact: "Bridges language prompts, masks, motion cues, and restoration for temporal perception systems.",
      },
      {
        name: "P-ADONIS OCR",
        description:
          "A prior-enhanced attention document OCR pipeline for improving recognition quality on noisy or low-resolution PDFs.",
        keywords: ["OCR", "Super Resolution", "Document AI", "Text-to-Structure"],
        github: "https://github.com/SuleynanAuir/P-ADONIS",
        impact: "Turns noisy visual documents into more reliable machine-readable research knowledge.",
      },
      {
        name: "Hateful Memes Detection",
        description:
          "A CLIP plus LLM framework for multimodal hate detection under image-text inconsistency, implicit references, sarcasm, and irony.",
        keywords: ["CLIP", "LLM", "Crossmodal", "Semantic Alignment"],
        github: "https://github.com/SuleynanAuir/Hateful-Image-Project",
        impact: "Tests multimodal reasoning under ambiguous, implicit, and socially sensitive evidence.",
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
  "Chain-of-Draft",
  "Direct Answering",
  "Deep Learning",
  "Reinforcement Learning",
  "Computer Vision",
  "Scientific AI",
] as const;
