export const aiEvolution = [
  "Machine Learning",
  "Deep Learning",
  "Foundation Models",
  "LLM Agents",
  "Multi-Agent Systems",
  "Scientific AI",
] as const;

export type ResearchProject = {
  name: string;
  description: string;
  keywords: readonly string[];
  github?: string;
  impact: string;
  platformRole: string;
  image?: string;
  images?: readonly string[];
};

export type ResearchCategory = {
  title: string;
  description: string;
  signal: string;
  projects: readonly ResearchProject[];
};

const imagePath = "/assets/web_page";

export const researchCategories: readonly ResearchCategory[] = [
  {
    title: "Autonomous Intelligence",
    description:
      "Agentic systems that connect planning, tool invocation, memory, deep search, uncertainty reflection, and multi-agent coordination. This direction focuses on turning LLMs from passive generators into autonomous research workers that can decompose tasks, verify evidence, adapt search depth, and collaborate across simulated information environments.",
    signal: "Agents, deep search, simulation, reflection",
    projects: [
      {
        name: "Agent-You-MustKnows",
        description:
          "A systematic AI Agent research knowledge base that organizes papers, technical reports, classic methods, and frontier agentic AI directions. It follows the evolution from language models that generate text to agents that perceive, reason, act, use tools, maintain memory, collaborate, and continuously improve.",
        keywords: ["LLM-based Agent", "RAG + Agent", "Tool Use", "Memory System", "Planning"],
        github: "https://github.com/SuleynanAuir/Agent-You-MustKnows",
        impact:
          "Builds a reusable agent research map for quickly understanding agent theory, architecture patterns, and implementation routes.",
        platformRole:
          "Serves as the agent knowledge foundation for the portfolio, linking concepts, papers, frameworks, and system-level practice.",
        image: `${imagePath}/agent_you_must_knows.png`,
      },
      {
        name: "NEXUS",
        description:
          "Networked Emergent X-agent Universe Simulator is a multi-agent AI framework for complex information environments. It integrates domain-adapted models, custom deep-search agents, user-attention agents, and the Canyon digital twin environment to analyze evolving information flows, entities, relations, event dynamics, and narrative shifts.",
        keywords: ["Multi-Agent AI", "Deep Search", "Digital Twin", "Entity Relation Extraction", "Narrative Reasoning"],
        github:
          "https://github.com/SuleynanAuir/NEXUS-Navigating-Emergent-X-agent-Universe-Simulator-with-Unprecedented-Insight",
        impact:
          "Connects autonomous agents, knowledge priors, attention anchors, and simulation to support lower-token, high-depth analysis.",
        platformRole:
          "Acts as the system orchestration layer where retrieval, agent collaboration, simulation, and deep insight generation converge.",
        image: `${imagePath}/nexus_page.png`,
      },
      {
        name: "UPARIS-DS Agents",
        description:
          "Uncertainty-Aware Paragraph-Level Iterative Reflective Deep Search Agents is a reflective search framework that improves deep-search reliability through uncertainty estimation, paragraph-level refinement, adaptive iteration, and structured evidence synthesis.",
        keywords: ["Uncertainty Quantification", "Reflection", "Deep Search", "Evidence Synthesis", "Hallucination Mitigation"],
        github: "https://github.com/SuleynanAuir/UPAIRS-Agents",
        impact:
          "Improves answer reliability by turning retrieval output into iteratively refined evidence objects instead of one-shot drafts.",
        platformRole:
          "Functions as the verification and refinement layer for research agents and GraphRAG-style evidence workflows.",
        image: `${imagePath}/uparis_ds.png`,
      },
      {
        name: "CognitiveTemp DeepSearch Agents",
        description:
          "A multi-agent reasoning system with temperature-driven cognitive styles. The system can shift search behavior from rigorous academic analysis to creative exploration through configuration, enabling different reasoning modes for different research questions.",
        keywords: ["Temperature Control", "Cognitive Modeling", "Adaptive Reasoning", "Multi-Agent Search"],
        github: "https://github.com/SuleynanAuir/CognitiveTemp-DeepSearch-Agents",
        impact:
          "Adds controllable search depth, exploration style, and reasoning temperament to autonomous research workflows.",
        platformRole:
          "Provides behavior-control logic for agents that need to switch between conservative evidence checking and broader exploration.",
      },
    ],
  },
  {
    title: "Foundation Models & Alignment",
    description:
      "End-to-end foundation model adaptation workflows covering SFT, LoRA, QLoRA, DPO, domain data construction, cloud training, evaluation, and local deployment. The emphasis is on building reliable domain assistants that can be aligned with preference data, constrained infrastructure, and downstream agent or QA system requirements.",
    signal: "SFT, LoRA, QLoRA, DPO, deployment",
    projects: [
      {
        name: "LLaMA Factory Fine-tuning",
        description:
          "An end-to-end LLM fine-tuning and deployment pipeline that integrates data augmentation, data engineering, cloud training, cloud data management, one-click fine-tuning, and local deployment for enterprise-grade iteration.",
        keywords: ["LLaMA Factory", "SFT", "LoRA", "AutoDL", "Ollama"],
        github: "https://github.com/SuleynanAuir/LLaMa-Factory-Fine-Tuning",
        impact:
          "Turns foundation-model adaptation from scattered commands into a reproducible model engineering workflow.",
        platformRole:
          "Supplies the model adaptation layer that prepares tuned assistants for downstream agent, QA, and knowledge-platform tasks.",
        image: `${imagePath}/llamafactory.png`,
      },
      {
        name: "Qwen HotelService Master",
        description:
          "A hotel-domain conversational assistant based on Qwen2.5-7B-Instruct. It supports SFT + LoRA for a stable baseline, SFT + QLoRA for 4-bit constrained GPU training, and DPO to improve answers with human preference pairs.",
        keywords: ["Qwen2.5-7B", "SFT", "LoRA", "QLoRA", "DPO"],
        github: "https://github.com/SuleynanAuir/Distributed-Fine-Tuning-of-Qwen2.5-7B-as-HotelService-Master",
        impact:
          "Demonstrates practical domain adaptation under real infrastructure limits while improving answer quality through preference optimization.",
        platformRole:
          "Represents a task-specific foundation model that can be embedded into service agents and domain QA systems.",
        image: `${imagePath}/fine_tuning_qwen_hotelbot.png`,
      },
      {
        name: "Weibo SentimentBot QA-Bot",
        description:
          "A Qwen3.5-0.6B based sentiment assistant trained through a complete AutoDL fine-tuning pipeline. The model evolves from base Qwen through SFT, LoRA, and DPO preference optimization for sentiment-polarity and public-opinion QA tasks.",
        keywords: ["Qwen3.5", "Sentiment Polarity", "SFT", "LoRA", "DPO"],
        github:
          "https://github.com/SuleynanAuir/WeiboPublic-SentimentBot-E2-FineTuning-Pipeline-of-Qwen3.5-0.6B-on-AutoDL-Cloud-Infrastrcture",
        impact:
          "Shows how compact aligned LLMs can become focused social-media analysis assistants with staged training.",
        platformRole:
          "Adds a compact alignment case study for specialized QA, opinion analysis, and response-behavior optimization.",
        image: `${imagePath}/weibo_sentiment_qabot.png`,
      },
    ],
  },
  {
    title: "AI for Science & Probabilistic Reasoning",
    description:
      "Scientific intelligence modules for temporal forecasting, Bayesian causal inference, geospatial risk modeling, and medical machine learning. These projects combine foundation-model style prediction with interpretable uncertainty, causal structure, exact and approximate inference, and evidence-backed decision support.",
    signal: "Forecasting, DAGs, MCMC, medical ML",
    projects: [
      {
        name: "Chronos-2 Time-Series Foundation Model",
        description:
          "A time-series foundation model study built on Chronos and Chronos-Bolt. It supports univariate forecasting, cross-item learning, multivariate target prediction, and covariate-aware forecasting with historical and known-future covariates.",
        keywords: ["Time-Series Foundation Model", "Chronos", "Forecasting", "Covariates"],
        github: "https://github.com/SuleynanAuir/Amazon-TSChronos",
        impact:
          "Extends foundation-model methods into temporal prediction tasks that require future-state estimation and scenario modeling.",
        platformRole:
          "Provides the temporal intelligence module for scientific monitoring, market forecasting, and operational prediction.",
        image: `${imagePath}/chronos2.png`,
      },
      {
        name: "VeFloodBN",
        description:
          "A discrete Bayesian network for municipality-level flood-risk modeling in Italy's Veneto region. It builds a 12-node causal DAG from GDP, population density, slope, river-network density, rainfall frequency, and other variables, then supports exact and approximate inference with spatial risk heatmaps.",
        keywords: ["Bayesian Network", "Causal DAG", "Variable Elimination", "Gibbs MCMC", "GeoPandas"],
        impact:
          "Combines interpretable causal structure, uncertainty-aware inference, Markov blanket analysis, and geospatial visualization.",
        platformRole:
          "Represents the probabilistic reasoning module for scientific risk analysis and evidence-backed decision support.",
        image: `${imagePath}/VeFloodBN.png`,
      },
      {
        name: "Clinical Brain Tumor Detection",
        description:
          "An optimized medical ML framework for brain tumor detection using only NumPy, Pandas, and Matplotlib. It implements SVM, MLP, XGBoost, KNN, logistic regression, interpolation, rotation, folding, and HOG features for MRI analysis.",
        keywords: ["Medical AI", "MRI", "HOG Features", "Small-Sample Learning", "Classical ML"],
        impact:
          "Demonstrates how carefully engineered classical models can support medical-image analysis without advanced frameworks.",
        platformRole:
          "Adds a medical AI case study focused on lightweight implementation, preprocessing rigor, and model comparison.",
        image: `${imagePath}/clinical_brain_tumor_detection.png`,
      },
    ],
  },
  {
    title: "Machine Learning Foundations & Analytics",
    description:
      "Classical machine learning systems built from optimization primitives, probabilistic fusion, structured feature engineering, and interpretable analytics. This direction provides the algorithmic base for modern AI systems through from-scratch training loops, intrusion detection, segmentation, posterior calibration, and applied decision modeling.",
    signal: "Optimization, Bayesian fusion, segmentation",
    projects: [
      {
        name: "ScratchOML-NIDS",
        description:
          "A two-stage Bayesian fusion intrusion detection system on UNSW-NB15. It manually implements GD, SGD, Adam, logistic regression, Gaussian Naive Bayes, decision trees, and MLP without third-party deep-learning frameworks, then fuses posterior probabilities for 10-class detection.",
        keywords: ["From-Scratch ML", "Bayesian Fusion", "SGD", "Adam", "UNSW-NB15"],
        github: "https://github.com/SuleynanAuir/ScratchOML-NIDS",
        impact:
          "Connects optimization, class-imbalance handling, feature engineering, posterior fusion, ROC/PR evaluation, and error diagnosis in one system.",
        platformRole:
          "Forms the classical ML foundation beneath modern LLM, agent, and scientific AI workflows.",
        image: `${imagePath}/scratchoml_NIDS.png`,
      },
      {
        name: "Customer Analytics Platform",
        description:
          "An e-commerce predictive customer analytics project using the Customer Personality Analysis dataset. It combines exploratory data analysis, supervised learning, unsupervised segmentation, demographic modeling, purchasing behavior analysis, and marketing-response discovery.",
        keywords: ["Customer Analytics", "Data Mining", "Segmentation", "Churn", "Value Modeling"],
        github: "https://github.com/SuleynanAuir/Customer-Analytics-Modeling-Churn-and-Value-in-E-Commerce",
        impact:
          "Turns tabular customer data into interpretable behavior segments, response signals, and decision-support insights.",
        platformRole:
          "Represents applied structured-data intelligence and business analytics inside the broader AI systems portfolio.",
        image: `${imagePath}/customer_platform1.png`,
        images: [`${imagePath}/customer_platform1.png`, `${imagePath}/customer_platform2.png`],
      },
    ],
  },
  {
    title: "Reinforcement Learning & Recommendation",
    description:
      "Reward-driven intelligence for agents and recommendation systems, spanning value approximation, replay-based DQN variants, PPO-style policy optimization, actor-critic learning, and generative recommendation. The projects connect sequential decision making, preference alignment, semantic item representation, and feedback-based behavior improvement.",
    signal: "DQN, PPO, A2C, OneRec, rewards",
    projects: [
      {
        name: "DRL Basis Projects",
        description:
          "A compact modular implementation of core deep reinforcement learning algorithms. It covers DQN/DDQN with Q-function approximation, replay buffers, target networks, and PPO with clipped objectives, generalized advantage estimation, policy-gradient methods, and actor-critic paradigms.",
        keywords: ["DQN", "DDQN", "PPO", "Actor-Critic", "Experience Replay"],
        impact:
          "Builds the decision-learning foundation for agents that improve behavior through reward, interaction, and policy optimization.",
        platformRole:
          "Supplies policy-learning concepts for autonomous systems that must adapt from feedback rather than static supervision.",
        image: `${imagePath}/rl.png`,
      },
      {
        name: "OMNI-Rec",
        description:
          "A OneRec-inspired generative recommendation project for TikTok, Instagram, Kuaishou, and short-video recommendation paradigms. It models recommendation as sequence generation and preference alignment, using Semantic ID to unify multimodal content and user behavior with RL-style reward optimization.",
        keywords: ["OneRec", "Semantic ID", "Generative Recommendation", "Reward Optimization", "Short Video"],
        github: "https://github.com/SuleynanAuir/OMNI-Rec/tree/main",
        impact:
          "Reframes recommendation from discriminative ranking into generative, context-aware, and preference-aligned intelligence.",
        platformRole:
          "Connects reinforcement learning, multimodal representation, and user-preference modeling for interactive AI systems.",
        image: `${imagePath}/omni_rec.png`,
      },
    ],
  },
  {
    title: "Multimodal Intelligence",
    description:
      "Multimodal reasoning systems for visual restoration, document OCR, image-text semantic alignment, multimodal safety, and visual-language understanding. This direction focuses on converting noisy visual evidence into structured signals, aligning language with perception, and supporting robust crossmodal reasoning for research workflows.",
    signal: "OCR, optical flow, CLIP, VLM",
    projects: [
      {
        name: "PEANUT Video Restoration",
        description:
          "Prompt-Enhanced Ablation with Optical Flow-Based Neural Unit improves video restoration by combining spatial consistency, temporal consistency, and clarity optimization. Its core ideas are prompt-guided mask self-generation and optical-flow neural units for high-fidelity video sequences.",
        keywords: ["Video Restoration", "Optical Flow", "Prompt-Guided Mask", "SAM2", "Crossmodal"],
        github: "https://github.com/SuleynanAuir/PEANUT--Prompt-Enhanced-Ablation-with-Optical-Flow-Based-Neural-Unit",
        impact:
          "Bridges language prompts, segmentation masks, motion cues, and restoration objectives in a temporal multimodal pipeline.",
        platformRole:
          "Adds temporal visual perception and restoration capability to the portfolio's multimodal intelligence layer.",
        image: `${imagePath}/peanut1.png`,
        images: [`${imagePath}/peanut1.png`, `${imagePath}/peanut2.png`, `${imagePath}/peanut3.png`],
      },
      {
        name: "P-ADONIS OCR",
        description:
          "Prior-enhanced Attention Document OCR Network for Image-to-Structure integrates prior-enhanced text image super-resolution with an OCR pipeline to improve recognition quality for noisy or low-resolution PDFs.",
        keywords: ["OCR", "Super Resolution", "Text-to-Structure", "Prior-Enhanced Attention"],
        github: "https://github.com/SuleynanAuir/P-ADONIS",
        impact:
          "Turns degraded visual documents into more reliable structured text for downstream search, retrieval, and knowledge extraction.",
        platformRole:
          "Works as a document-ingestion module for converting papers, PDFs, and scanned artifacts into usable evidence.",
      },
      {
        name: "Hateful Memes Detection",
        description:
          "A social-media multimodal hate detection project addressing image-text semantic inconsistency, implicit references, sarcasm, and irony. It uses a CLIP plus LLM framework for multimodal representation learning, semantic alignment, prompt engineering, and multi-LLM reasoning.",
        keywords: ["CLIP", "LLM Inference", "Crossmodal Alignment", "Prompt Engineering", "Hateful Meme Detection"],
        github: "https://github.com/SuleynanAuir/Hateful-Image-Project",
        impact:
          "Tests multimodal reasoning under ambiguous, implicit, and socially sensitive visual-language evidence.",
        platformRole:
          "Adds multimodal safety, semantic alignment, and robust image-text understanding to the AI research portfolio.",
        image: `${imagePath}/hateful_memes_detection.png`,
      },
    ],
  },
];

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
