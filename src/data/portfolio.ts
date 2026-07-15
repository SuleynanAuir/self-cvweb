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
  logicChain?: readonly {
    label: string;
    value: string;
  }[];
  readmeHighlights?: readonly string[];
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
      "Agentic systems that connect planning, tool invocation, memory, deep search, uncertainty reflection, and multi-agent coordination. This direction turns LLMs from passive text generators into autonomous research workers that can decompose tasks, collect evidence, reason across sources, adapt search depth, and collaborate inside simulated information environments.",
    signal: "Agents, deep search, simulation, reflection",
    projects: [
      {
        name: "Agent-You-MustKnows",
        description:
          "A systematic AI Agent research knowledge base for papers, technical reports, classical methods, and frontier agentic AI directions. The project organizes the field around agent theory, reasoning and planning, tool use, memory, multi-agent collaboration, RAG + Agent, architecture design, and the long-term evolution from text-generation LLMs to systems that perceive, reason, act, and learn continuously.",
        keywords: ["LLM-based Agent", "RAG + Agent", "Tool Use", "Memory System", "Planning"],
        github: "https://github.com/SuleynanAuir/Agent-You-MustKnows",
        impact:
          "Converts scattered agent papers and concepts into a reusable research map for understanding agent theory, architecture patterns, and implementation routes.",
        platformRole:
          "Serves as the agent knowledge foundation for the portfolio, linking concepts, papers, frameworks, engineering patterns, and system-level practice.",
        logicChain: [
          {
            label: "Knowledge scope",
            value:
              "Collects core agent concepts across LLM-based agents, RAG + Agent, tool use, memory, planning, reflection, multi-agent collaboration, and architecture design.",
          },
          {
            label: "Organization method",
            value:
              "Transforms papers, reports, and implementation notes into a structured research map so readers can move from definitions to mechanisms and then to system patterns.",
          },
          {
            label: "Research route",
            value:
              "Follows the transition from language models that only generate text to agentic systems that observe, reason, call tools, store memory, collaborate, and revise behavior.",
          },
          {
            label: "Portfolio value",
            value:
              "Provides the conceptual backbone for later agent projects such as NEXUS, UPARIS-DS, and CognitiveTemp DeepSearch Agents.",
          },
        ],
        readmeHighlights: [
          "Builds a systematic AI Agent learning and research knowledge base instead of a simple link collection.",
          "Covers agent theory, reasoning, planning, tool invocation, memory systems, RAG + Agent, multi-agent collaboration, and Agentic AI trends.",
          "Connects concept understanding, technical evolution, and practical implementation routes in one navigable structure.",
          "Frames the agent field as an evolution from text-generating LLMs toward systems with perception, reasoning, action, and continuous improvement.",
        ],
        image: `${imagePath}/agent_you_must_knows.png`,
      },
      {
        name: "NEXUS",
        description:
          "Networked Emergent X-agent Universe Simulator is a multi-agent AI framework for complex, evolving information environments. It integrates domain-adapted fine-tuned models, custom deep-search agents, user-attention agents, and the Canyon digital twin environment to continuously collect, organize, simulate, and reason over entities, relations, event dynamics, and narrative shifts.",
        keywords: ["Multi-Agent AI", "Deep Search", "Digital Twin", "Entity Relation Extraction", "Narrative Reasoning"],
        github:
          "https://github.com/SuleynanAuir/NEXUS-Navigating-Emergent-X-agent-Universe-Simulator-with-Unprecedented-Insight",
        impact:
          "Combines autonomous agents, knowledge priors, attention anchors, and digital-twin simulation to produce deeper analysis with a more controlled token budget.",
        platformRole:
          "Acts as the orchestration layer where retrieval, agent collaboration, simulation, user attention, and deep insight generation converge.",
        logicChain: [
          {
            label: "Information input",
            value:
              "Starts from multi-source, constantly changing information streams that contain entities, relations, events, user attention signals, and narrative fragments.",
          },
          {
            label: "Agent architecture",
            value:
              "Uses domain-adapted models, custom deep-search agents, attention-driven agents, and a Canyon digital twin to organize the environment into analyzable state.",
          },
          {
            label: "Reasoning loop",
            value:
              "Extracts entities and relations, applies domain priors and user anchors, then simulates event dynamics and narrative evolution from multiple viewpoints.",
          },
          {
            label: "System outcome",
            value:
              "Optimizes the inference and collaboration flow so the system can keep analytical depth while reducing unnecessary token consumption.",
          },
        ],
        readmeHighlights: [
          "Defines NEXUS as a multi-agent framework for deep understanding and simulation of complex information environments.",
          "Integrates domain-adapted models, customized deep-search agents, user-attention agents, and the Canyon digital twin environment.",
          "Extracts key entities and relations from multi-source information and reasons over event, public-opinion, and narrative dynamics.",
          "Optimizes agent collaboration and reasoning flow to preserve depth while lowering token cost.",
        ],
        image: `${imagePath}/nexus_page.png`,
      },
      {
        name: "UPARIS-DS Agents",
        description:
          "Uncertainty-Aware Paragraph-Level Iterative Reflective Deep Search Agents is a reliability layer for deep-search agents. It improves search quality by estimating uncertainty at paragraph level, triggering adaptive reflective refinement, and converting raw retrieval output into structured evidence synthesis rather than one-shot answers.",
        keywords: ["Uncertainty Quantification", "Reflection", "Deep Search", "Evidence Synthesis", "Hallucination Mitigation"],
        github: "https://github.com/SuleynanAuir/UPAIRS-Agents",
        impact:
          "Improves deep-search reliability by turning uncertain retrieval fragments into iteratively refined evidence objects with hallucination-aware synthesis.",
        platformRole:
          "Functions as the verification and refinement layer for research agents and GraphRAG-style evidence workflows.",
        logicChain: [
          {
            label: "Problem",
            value:
              "Deep-search agents often produce mixed-quality evidence, unsupported paragraphs, or confident summaries that hide uncertainty.",
          },
          {
            label: "Uncertainty signal",
            value:
              "Scores and inspects evidence at paragraph level so unreliable parts can be targeted instead of rerunning the whole search blindly.",
          },
          {
            label: "Reflective refinement",
            value:
              "Uses adaptive iteration and structured reflection to re-search, revise, and synthesize evidence until the answer is better grounded.",
          },
          {
            label: "System value",
            value:
              "Works as a verification module for research agents, GraphRAG pipelines, and evidence-heavy analytical workflows.",
          },
        ],
        readmeHighlights: [
          "Defines an uncertainty-aware paragraph-level iterative reflective framework for deep-search agents.",
          "Enhances agent search through adaptive refinement rather than fixed-depth retrieval.",
          "Turns raw search output into structured evidence synthesis with explicit reliability handling.",
          "Targets hallucination mitigation and answer grounding in GraphRAG and research-agent workflows.",
        ],
        image: `${imagePath}/uparis_ds.png`,
      },
      {
        name: "CognitiveTemp DeepSearch Agents",
        description:
          "A multi-agent reasoning system with temperature-driven cognitive styles for deep research. Through simple configuration, the system can shift between rigorous academic analysis, balanced evidence search, and broader creative exploration, making search behavior tunable for different research questions.",
        keywords: ["Temperature Control", "Cognitive Modeling", "Adaptive Reasoning", "Multi-Agent Search"],
        github: "https://github.com/SuleynanAuir/CognitiveTemp-DeepSearch-Agents",
        impact:
          "Adds controllable reasoning temperament, search depth, and exploration style to autonomous research workflows.",
        platformRole:
          "Provides behavior-control logic for agents that need to switch between conservative evidence checking and broader exploration.",
        logicChain: [
          {
            label: "Control objective",
            value:
              "Treats research behavior as a configurable cognitive style rather than a single fixed prompt strategy.",
          },
          {
            label: "Search behavior",
            value:
              "Uses temperature control to alter depth, breadth, creativity, and evidence strictness across multi-agent reasoning loops.",
          },
          {
            label: "Reasoning mode",
            value:
              "Supports conservative academic analysis when precision matters and exploratory reasoning when ideation or hypothesis generation is needed.",
          },
          {
            label: "Practical role",
            value:
              "Complements UPARIS-DS by controlling how aggressively agents search before uncertainty and evidence refinement are applied.",
          },
        ],
        readmeHighlights: [
          "Builds a powerful multi-agent reasoning system around temperature-driven cognitive styles.",
          "Allows search behavior to move from rigorous academic analysis to creative exploration through configuration.",
          "Uses temperature control as a behavior knob for depth, breadth, reasoning temperament, and answer style.",
          "Fits tasks where evidence verification and exploratory ideation need to coexist in one research workflow.",
        ],
      },
    ],
  },
  {
    title: "Foundation Models & Alignment",
    description:
      "End-to-end foundation model adaptation workflows covering data augmentation, data engineering, cloud training, cloud data management, SFT, LoRA, QLoRA, DPO, evaluation, and local deployment. The emphasis is on building reliable domain assistants that can be aligned with preference data, constrained infrastructure, and downstream agent or QA system requirements.",
    signal: "SFT, LoRA, QLoRA, DPO, deployment",
    projects: [
      {
        name: "LLaMA Factory Fine-tuning",
        description:
          "An end-to-end LLM fine-tuning and deployment pipeline built around LLaMA Factory. It integrates data augmentation, data engineering, cloud-based training, cloud data management, one-click fine-tuning, and local deployment so enterprise-grade model iteration becomes reproducible rather than a sequence of fragile commands.",
        keywords: ["LLaMA Factory", "SFT", "LoRA", "AutoDL", "Ollama"],
        github: "https://github.com/SuleynanAuir/LLaMa-Factory-Fine-Tuning",
        impact:
          "Turns foundation-model adaptation from scattered fine-tuning commands into a reproducible model engineering workflow with flexible and secure deployment paths.",
        platformRole:
          "Supplies the model adaptation layer that prepares tuned assistants for downstream agent, QA, and knowledge-platform tasks.",
        logicChain: [
          {
            label: "Data layer",
            value:
              "Starts with data augmentation, formatting, cleaning, and engineering so instruction data can support stable supervised fine-tuning.",
          },
          {
            label: "Training layer",
            value:
              "Uses LLaMA Factory workflows with cloud-based training and cloud data management to make iteration repeatable.",
          },
          {
            label: "Adaptation path",
            value:
              "Supports parameter-efficient tuning patterns such as SFT and LoRA, then connects the tuned model to local deployment.",
          },
          {
            label: "Engineering value",
            value:
              "Makes the full adaptation process easier to reuse for enterprise assistants, domain QA, and downstream agent systems.",
          },
        ],
        readmeHighlights: [
          "Integrates data augmentation, data engineering, cloud training, and cloud data management into one fine-tuning workflow.",
          "Provides one-click fine-tuning and local deployment for rapid model iteration.",
          "Keeps infrastructure flexible and secure through cloud-to-local deployment choices.",
          "Targets enterprise-grade applications where repeatability and operational clarity matter.",
        ],
        image: `${imagePath}/llamafactory.png`,
      },
      {
        name: "Qwen HotelService Master",
        description:
          "A hotel-domain conversational assistant based on Qwen2.5-7B-Instruct and practical distributed fine-tuning. The project compares SFT + LoRA for a stable baseline, SFT + QLoRA for 4-bit training under limited GPU memory, and DPO for improving responses with human preference pairs.",
        keywords: ["Qwen2.5-7B", "SFT", "LoRA", "QLoRA", "DPO"],
        github: "https://github.com/SuleynanAuir/Distributed-Fine-Tuning-of-Qwen2.5-7B-as-HotelService-Master",
        impact:
          "Demonstrates practical domain adaptation under real infrastructure limits while improving hotel-service answer quality through staged supervised and preference optimization.",
        platformRole:
          "Represents a task-specific foundation model that can be embedded into service agents and domain QA systems.",
        logicChain: [
          {
            label: "Domain target",
            value:
              "Builds a hotel-service assistant where answers must be task-specific, service-oriented, and aligned with expected user preferences.",
          },
          {
            label: "Baseline tuning",
            value:
              "Uses SFT + LoRA to create a stable domain baseline without full-parameter training cost.",
          },
          {
            label: "Resource constraint",
            value:
              "Applies SFT + QLoRA with 4-bit quantization so a 7B model can be trained under limited GPU memory.",
          },
          {
            label: "Preference alignment",
            value:
              "Adds DPO with human preference pairs to improve response quality beyond supervised imitation.",
          },
        ],
        readmeHighlights: [
          "Builds a hotel-domain conversational assistant using Qwen2.5-7B-Instruct.",
          "Focuses on practical, reproducible fine-tuning rather than only high-level model discussion.",
          "Supports SFT + LoRA for a stable baseline and SFT + QLoRA for 4-bit constrained GPU training.",
          "Uses DPO to enhance answers through human preference pairs.",
        ],
        image: `${imagePath}/fine_tuning_qwen_hotelbot.png`,
      },
      {
        name: "Weibo SentimentBot QA-Bot",
        description:
          "A compact Weibo public-opinion and sentiment assistant based on Qwen3.5-0.6B and trained through a complete AutoDL fine-tuning pipeline. The model evolves from the base checkpoint through SFT, LoRA, and DPO preference optimization to support sentiment polarity and social-media QA tasks.",
        keywords: ["Qwen3.5", "Sentiment Polarity", "SFT", "LoRA", "DPO"],
        github:
          "https://github.com/SuleynanAuir/WeiboPublic-SentimentBot-E2-FineTuning-Pipeline-of-Qwen3.5-0.6B-on-AutoDL-Cloud-Infrastrcture",
        impact:
          "Shows how compact aligned LLMs can become focused social-media sentiment and public-opinion analysis assistants through staged training.",
        platformRole:
          "Adds a compact alignment case study for specialized QA, opinion analysis, and response-behavior optimization.",
        logicChain: [
          {
            label: "Task framing",
            value:
              "Targets sentiment polarity and public-opinion QA where responses must be concise, domain-aware, and behaviorally consistent.",
          },
          {
            label: "Training pipeline",
            value:
              "Runs a complete AutoDL pipeline from base Qwen3.5-0.6B through SFT and LoRA adaptation.",
          },
          {
            label: "Alignment stage",
            value:
              "Uses DPO preference optimization to improve answer behavior after the supervised baseline is built.",
          },
          {
            label: "Project value",
            value:
              "Demonstrates that small models can still become useful specialized assistants when the data, training stages, and alignment target are clear.",
          },
        ],
        readmeHighlights: [
          "Builds a Weibo SentimentBot on top of Qwen3.5-0.6B.",
          "Runs the training process on AutoDL cloud computing infrastructure.",
          "Demonstrates a complete LLM alignment pipeline through SFT, LoRA, and DPO preference optimization.",
          "Focuses on sentiment polarity and public-opinion QA instead of broad general-purpose chat.",
        ],
        image: `${imagePath}/weibo_sentiment_qabot.png`,
      },
    ],
  },
  {
    title: "AI for Science & Probabilistic Reasoning",
    description:
      "Scientific intelligence modules for temporal forecasting, Bayesian causal inference, geospatial risk modeling, and medical machine learning. These projects combine foundation-model style prediction with interpretable uncertainty, causal structure, exact and approximate inference, spatial visualization, and evidence-backed decision support.",
    signal: "Forecasting, DAGs, MCMC, medical ML",
    projects: [
      {
        name: "Chronos-2 Time-Series Foundation Model",
        description:
          "A time-series foundation model study built on Chronos and Chronos-Bolt. It focuses on scenarios older models do not fully support, including univariate forecasting, cross-item learning across related time series, multivariate target prediction, and covariate-aware forecasting with historical and known-future signals.",
        keywords: ["Time-Series Foundation Model", "Chronos", "Forecasting", "Covariates"],
        github: "https://github.com/SuleynanAuir/Amazon-TSChronos",
        impact:
          "Extends foundation-model methods into temporal prediction tasks that require future-state estimation, scenario modeling, and known-future covariate handling.",
        platformRole:
          "Provides the temporal intelligence module for scientific monitoring, market forecasting, and operational prediction.",
        logicChain: [
          {
            label: "Forecasting scope",
            value:
              "Starts from classic univariate forecasting and expands toward multiple related time-series settings.",
          },
          {
            label: "Cross-series learning",
            value:
              "Uses information from related items or targets so the model can learn shared temporal patterns instead of treating each series in isolation.",
          },
          {
            label: "Covariate handling",
            value:
              "Includes historical covariates such as past weather and known-future covariates such as holidays or scheduled events.",
          },
          {
            label: "Scientific value",
            value:
              "Frames forecasting as a foundation-model capability for scientific monitoring, market analysis, and operational planning.",
          },
        ],
        readmeHighlights: [
          "Builds on Chronos and Chronos-Bolt to explore a stronger time-series foundation model workflow.",
          "Supports classic univariate forecasting and cross-item learning from multiple related time series.",
          "Handles multivariate target prediction and covariate-aware forecasting.",
          "Distinguishes historical covariates from known-future covariates such as holidays, planned events, or future weather assumptions.",
        ],
        image: `${imagePath}/chronos2.png`,
      },
      {
        name: "VeFloodBN",
        description:
          "A discrete Bayesian network for municipality-level flood-risk modeling in Italy's Veneto region. It builds a 12-node causal DAG from GDP per capita, population density, slope, river-network density, rainfall frequency, and related variables, then combines MLE CPT learning, structure validation, exact and approximate inference, and GeoPandas spatial heatmaps.",
        keywords: ["Bayesian Network", "Causal DAG", "Variable Elimination", "Gibbs MCMC", "GeoPandas"],
        github: "https://github.com/SuleynanAuir/VeFloodBN",
        impact:
          "Combines interpretable causal structure, uncertainty-aware inference, Markov blanket analysis, spatial risk visualization, and robustness checks for Top-N risk ranking.",
        platformRole:
          "Represents the probabilistic reasoning module for scientific risk analysis and evidence-backed decision support.",
        logicChain: [
          {
            label: "Causal structure",
            value:
              "Builds a directed acyclic graph over socioeconomic, terrain, river-network, and rainfall variables to model flood risk causally.",
          },
          {
            label: "Parameter learning",
            value:
              "Discretizes continuous variables by quantiles and learns conditional probability tables with maximum likelihood estimation.",
          },
          {
            label: "Inference layer",
            value:
              "Supports exact variable elimination and compares rejection sampling, likelihood weighting, and Gibbs MCMC for approximate inference.",
          },
          {
            label: "Robust decision support",
            value:
              "Generates municipality-level posterior risk heatmaps and evaluates Top-N ranking stability with Jaccard and Overlap metrics.",
          },
        ],
        readmeHighlights: [
          "Builds a 12-node discrete Bayesian network for flood-risk modeling in Veneto, Italy.",
          "Uses GDP per capita, population density, slope, river-network density, rainfall frequency, and other variables in a causal DAG.",
          "Applies structure validation, Markov blanket analysis, active path analysis, exact variable elimination, and approximate sampling.",
          "Produces GeoPandas municipality heatmaps and evaluates Top-N risk ranking robustness with Jaccard and Overlap metrics.",
        ],
        image: `${imagePath}/VeFloodBN.png`,
      },
      {
        name: "Clinical Brain Tumor Detection",
        description:
          "An optimized medical machine-learning framework for MRI brain tumor detection using only basic Python libraries such as NumPy, Pandas, and Matplotlib. It implements SVM, MLP, XGBoost, KNN, and logistic regression together with interpolation, rotation, folding, and HOG feature extraction to support accurate analysis without advanced deep-learning libraries.",
        keywords: ["Medical AI", "MRI", "HOG Features", "Small-Sample Learning", "Classical ML"],
        github:
          "https://github.com/SuleynanAuir/Clinical-Brain-Tumor-Detection-Optimized-Machine-Learning-Framework-Using-Basic-Python-Libraries",
        impact:
          "Demonstrates how carefully engineered classical models and preprocessing can support medical-image analysis under lightweight implementation constraints.",
        platformRole:
          "Adds a medical AI case study focused on lightweight implementation, preprocessing rigor, and model comparison.",
        logicChain: [
          {
            label: "Clinical task",
            value:
              "Targets MRI brain tumor detection where the pipeline must handle small samples, visual variation, and medically meaningful classification.",
          },
          {
            label: "Preprocessing",
            value:
              "Uses interpolation, rotation, folding, and HOG features to improve visual representation before classification.",
          },
          {
            label: "Model comparison",
            value:
              "Compares SVM, MLP, XGBoost, KNN, and logistic regression within a lightweight basic-library framework.",
          },
          {
            label: "Research value",
            value:
              "Shows that transparent preprocessing and classical ML can still form a defensible medical AI baseline without advanced frameworks.",
          },
        ],
        readmeHighlights: [
          "Builds an optimized ML framework for brain tumor detection with only basic Python libraries.",
          "Implements SVM, MLP, XGBoost, KNN, and logistic regression for MRI analysis.",
          "Combines interpolation, rotation, folding, and HOG features to improve visual feature quality.",
          "Highlights small-sample learning and transparent medical-image experimentation without advanced libraries.",
        ],
        image: `${imagePath}/clinical_brain_tumor_detection.png`,
      },
    ],
  },
  {
    title: "Machine Learning Foundations & Analytics",
    description:
      "Classical machine learning systems built from optimization primitives, probabilistic fusion, structured feature engineering, and interpretable analytics. This direction provides the algorithmic base for modern AI systems through from-scratch training loops, intrusion detection, segmentation, posterior calibration, customer behavior modeling, and applied decision analytics.",
    signal: "Optimization, Bayesian fusion, segmentation",
    projects: [
      {
        name: "ScratchOML-NIDS",
        description:
          "A two-stage Bayesian fusion intrusion detection system on UNSW-NB15 with all optimization and model code written from scratch. It manually implements GD, SGD, Adam, logistic regression, Gaussian Naive Bayes, decision trees, and MLP, then uses a cascaded Stage 1 attack-normal classifier and Stage 2 nine-class attack classifier before fusing posterior probabilities for 10-class detection.",
        keywords: ["From-Scratch ML", "Bayesian Fusion", "SGD", "Adam", "UNSW-NB15"],
        github: "https://github.com/SuleynanAuir/ScratchOML-NIDS",
        impact:
          "Connects from-scratch optimization, class-imbalance handling, interaction feature engineering, posterior fusion, ROC/PR evaluation, Top-K confidence analysis, and error diagnosis in one system.",
        platformRole:
          "Forms the classical ML foundation beneath modern LLM, agent, and scientific AI workflows.",
        logicChain: [
          {
            label: "Data challenge",
            value:
              "Starts from UNSW-NB15 where attack categories are imbalanced and require careful cleaning, feature transformation, and resampling.",
          },
          {
            label: "Model foundation",
            value:
              "Implements GD, SGD, Adam, logistic regression, Gaussian Naive Bayes, decision trees, and MLP without third-party deep-learning frameworks.",
          },
          {
            label: "Detection architecture",
            value:
              "Uses a two-stage cascade: Stage 1 detects attack versus normal traffic, while Stage 2 classifies nine attack subclasses.",
          },
          {
            label: "Evaluation logic",
            value:
              "Fuses Bayesian posterior probabilities and diagnoses results with ROC/PR curves, a 10x10 confusion matrix, Top-K confidence, and error cases.",
          },
        ],
        readmeHighlights: [
          "Builds a two-stage Bayesian fusion intrusion detection system on UNSW-NB15.",
          "Manually implements GD, SGD, Adam, logistic regression, Gaussian Naive Bayes, decision trees, and MLP.",
          "Uses numeric cleaning, skewness transformation, category cardinality reduction, interaction features, and stratified resampling.",
          "Reports end-to-end evaluation with ROC/PR curves, 10x10 confusion matrix, Top-K confidence analysis, error diagnosis, and 10-class macro-F1 around 0.44.",
        ],
        image: `${imagePath}/scratchoml_NIDS.png`,
      },
      {
        name: "Customer Analytics Platform",
        description:
          "An e-commerce predictive customer analytics project using the Customer Personality Analysis dataset. It combines exploratory data analysis, supervised learning, unsupervised segmentation, demographic modeling, purchase behavior analysis, and marketing-response discovery to uncover hidden patterns in customer profiles and business outcomes.",
        keywords: ["Customer Analytics", "Data Mining", "Segmentation", "Churn", "Value Modeling"],
        github: "https://github.com/SuleynanAuir/Customer-Analytics-Modeling-Churn-and-Value-in-E-Commerce",
        impact:
          "Turns tabular customer data into interpretable behavior segments, marketing response signals, value indicators, and decision-support insights.",
        platformRole:
          "Represents applied structured-data intelligence and business analytics inside the broader AI systems portfolio.",
        logicChain: [
          {
            label: "Business question",
            value:
              "Asks how demographics, purchase history, and marketing interactions explain customer value, response, and segmentation.",
          },
          {
            label: "Data exploration",
            value:
              "Uses EDA to inspect user demographics, spending behavior, campaign response, and hidden feature relationships.",
          },
          {
            label: "Modeling route",
            value:
              "Combines supervised learning for prediction with unsupervised segmentation for interpretable customer groups.",
          },
          {
            label: "Decision value",
            value:
              "Converts customer data mining into practical signals for targeting, churn/value modeling, and marketing strategy.",
          },
        ],
        readmeHighlights: [
          "Explores predictive customer analytics in the e-commerce industry with the Customer Personality Analysis dataset.",
          "Combines exploratory data analysis, supervised learning, and unsupervised segmentation.",
          "Analyzes demographics, purchasing behavior, hidden customer patterns, and marketing responses.",
          "Produces interpretable customer segments and decision signals for applied business analytics.",
        ],
        image: `${imagePath}/customer_platform1.png`,
        images: [`${imagePath}/customer_platform1.png`, `${imagePath}/customer_platform2.png`],
      },
    ],
  },
  {
    title: "Reinforcement Learning & Recommendation",
    description:
      "Reward-driven intelligence for agents and recommendation systems, spanning value approximation, replay-based DQN variants, PPO-style policy optimization, actor-critic learning, generative recommendation, Semantic ID representation, and preference alignment. The projects connect sequential decision making, multimodal content representation, user behavior modeling, and reward-based behavior improvement.",
    signal: "DQN, PPO, A2C, OneRec, rewards",
    projects: [
      {
        name: "DRL Basis Projects",
        description:
          "A compact modular implementation of core deep reinforcement learning algorithms across value-based and policy-based methods. The material covers DQN/DDQN with Q-function approximation, replay buffers, and target network updates, plus PPO with clipped objectives, generalized advantage estimation, policy-gradient learning, and actor-critic paradigms.",
        keywords: ["DQN", "DDQN", "PPO", "Actor-Critic", "Experience Replay"],
        github: "https://github.com/SuleynanAuir/DRL-Basis-Project-v2",
        impact:
          "Builds the decision-learning foundation for agents that improve behavior through reward, environment interaction, value approximation, and policy optimization.",
        platformRole:
          "Supplies policy-learning concepts for autonomous systems that must adapt from feedback rather than static supervision.",
        logicChain: [
          {
            label: "Learning setup",
            value:
              "Starts from agents that learn through environment interaction rather than labeled supervised examples.",
          },
          {
            label: "Value methods",
            value:
              "Implements DQN and DDQN with Q-function approximation, replay buffers, and target network updates.",
          },
          {
            label: "Policy methods",
            value:
              "Implements PPO-style policy optimization with clipped objective, generalized advantage estimation, and actor-critic networks.",
          },
          {
            label: "Research value",
            value:
              "Separates policy-gradient and actor-critic paradigms into compact modules for learning, experimentation, and reproducible research.",
          },
        ],
        readmeHighlights: [
          "Documents Q-function approximators for DQN/DDQN and policy-value networks used in PPO.",
          "Includes experience replay and target network updates for DQN-based methods.",
          "Covers clipped objective and generalized advantage estimation for PPO.",
          "Organizes DRL-Basis-Project-v2 as a compact modular implementation for learning, experimentation, and reproducible research.",
        ],
        image: `${imagePath}/rl.png`,
      },
      {
        name: "OMNI-Rec",
        description:
          "A OneRec-inspired generative recommendation project for TikTok, Instagram, Kuaishou, and short-video recommendation paradigms. It explores recommendation as sequence generation and preference alignment, using Semantic ID to unify multimodal content and user behavior, then applying reinforcement-learning style reward mechanisms for end-to-end optimization.",
        keywords: ["OneRec", "Semantic ID", "Generative Recommendation", "Reward Optimization", "Short Video"],
        github: "https://github.com/SuleynanAuir/OMNI-Rec/tree/main",
        impact:
          "Reframes recommendation from discriminative ranking into generative, context-aware, preference-aligned intelligence for short-video platforms.",
        platformRole:
          "Connects reinforcement learning, multimodal representation, and user-preference modeling for interactive AI systems.",
        logicChain: [
          {
            label: "Paradigm shift",
            value:
              "Moves from traditional discriminative ranking toward generative recommendation that can reason over sequences and context.",
          },
          {
            label: "Representation layer",
            value:
              "Uses Semantic ID to unify multimodal content and user behavior in a common discrete representation space.",
          },
          {
            label: "Optimization loop",
            value:
              "Introduces reward-driven optimization so recommendations can be aligned with user preference and platform feedback.",
          },
          {
            label: "Platform relevance",
            value:
              "Targets short-video and streaming recommendation contexts such as TikTok, Instagram, and Kuaishou.",
          },
        ],
        readmeHighlights: [
          "Builds on the OneRec generative recommendation paradigm used in short-video and streaming systems.",
          "Models recommendation as sequence generation and preference alignment.",
          "Uses Semantic ID to unify multimodal content and user behavior.",
          "Combines generative modeling, context awareness, and reinforcement-learning reward optimization for end-to-end recommendation.",
        ],
        image: `${imagePath}/omni_rec.png`,
      },
    ],
  },
  {
    title: "Multimodal Intelligence",
    description:
      "Multimodal reasoning systems for visual restoration, document OCR, image-text semantic alignment, multimodal safety, and visual-language understanding. This direction focuses on converting noisy visual evidence into structured signals, aligning language with perception, and supporting robust crossmodal reasoning for research, safety, and document-ingestion workflows.",
    signal: "OCR, optical flow, CLIP, VLM",
    projects: [
      {
        name: "PEANUT Video Restoration",
        description:
          "Prompt-Enhanced Ablation with Optical Flow-Based Neural Unit is designed to enhance video restoration by combining spatial consistency, temporal consistency, and clarity optimization. Its core innovations are prompt-guided mask self-generation and optical-flow-based neural units that help generate high-fidelity restored video sequences.",
        keywords: ["Video Restoration", "Optical Flow", "Prompt-Guided Mask", "SAM2", "Crossmodal"],
        github: "https://github.com/SuleynanAuir/PEANUT--Prompt-Enhanced-Ablation-with-Optical-Flow-Based-Neural-Unit",
        impact:
          "Bridges language prompts, segmentation masks, motion cues, temporal consistency, and restoration objectives in a high-fidelity multimodal video pipeline.",
        platformRole:
          "Adds temporal visual perception and restoration capability to the portfolio's multimodal intelligence layer.",
        logicChain: [
          {
            label: "Restoration problem",
            value:
              "Targets video restoration where frame clarity, spatial consistency, and temporal consistency must be improved together.",
          },
          {
            label: "Prompt mechanism",
            value:
              "Uses prompt-guided mask self-generation to connect user or semantic guidance with restoration masks.",
          },
          {
            label: "Motion modeling",
            value:
              "Leverages optical-flow-based neural units to preserve temporal coherence across video sequences.",
          },
          {
            label: "Output value",
            value:
              "Produces a multimodal restoration pipeline that connects segmentation prompts, motion estimation, and high-fidelity visual reconstruction.",
          },
        ],
        readmeHighlights: [
          "Enhances video restoration by combining spatial consistency, temporal consistency, and clarity optimization.",
          "Introduces Prompt-Guided Mask Self-Generation as a core mechanism.",
          "Uses optical-flow-based neural units to generate high-fidelity video sequences.",
          "Connects crossmodal prompting, segmentation cues, motion signals, and restoration quality.",
        ],
        image: `${imagePath}/peanut1.png`,
        images: [`${imagePath}/peanut1.png`, `${imagePath}/peanut2.png`, `${imagePath}/peanut3.png`],
      },
      {
        name: "P-ADONIS OCR",
        description:
          "Prior-enhanced Attention Document OCR Network for Image-to-Structure integrates a prior-enhanced attention text image super-resolution model with an OCR pipeline. The project is designed to improve recognition quality for noisy or low-resolution PDFs and convert degraded document images into more reliable structured text.",
        keywords: ["OCR", "Super Resolution", "Text-to-Structure", "Prior-Enhanced Attention"],
        github: "https://github.com/SuleynanAuir/P-ADONIS",
        impact:
          "Turns degraded visual documents into more reliable structured text for downstream search, retrieval, knowledge extraction, and document understanding.",
        platformRole:
          "Works as a document-ingestion module for converting papers, PDFs, and scanned artifacts into usable evidence.",
        logicChain: [
          {
            label: "Input problem",
            value:
              "Starts from noisy or low-resolution PDFs where direct OCR produces unstable recognition quality.",
          },
          {
            label: "Visual enhancement",
            value:
              "Uses prior-enhanced attention text image super-resolution to improve the visual quality of text regions.",
          },
          {
            label: "Recognition pipeline",
            value:
              "Feeds enhanced text images into an OCR pipeline to move from image evidence to structured text.",
          },
          {
            label: "Downstream value",
            value:
              "Supports retrieval, document ingestion, and knowledge extraction by making degraded PDFs more searchable and usable.",
          },
        ],
        readmeHighlights: [
          "Defines P-ADONIS as a Prior-enhanced Attention Document OCR Network for Image-to-Structure.",
          "Integrates the prior-enhanced attention text image super-resolution model with an OCR pipeline.",
          "Targets noisy or low-resolution PDFs where text recognition quality is poor.",
          "Improves document ingestion by converting degraded visual text into more reliable structured content.",
        ],
      },
      {
        name: "Hateful Memes Detection",
        description:
          "A social-media multimodal hate detection project that addresses image-text semantic inconsistency, implicit references, sarcasm, and irony. It develops a CLIP + LLM framework for multimodal representation learning and semantic alignment, then uses prompt engineering and multi-LLM reasoning to improve output quality for ambiguous visual-language evidence.",
        keywords: ["CLIP", "LLM Inference", "Crossmodal Alignment", "Prompt Engineering", "Hateful Meme Detection"],
        github: "https://github.com/SuleynanAuir/Hateful-Image-Project",
        impact:
          "Tests multimodal reasoning under ambiguous, implicit, sarcastic, and socially sensitive image-text evidence.",
        platformRole:
          "Adds multimodal safety, semantic alignment, and robust image-text understanding to the AI research portfolio.",
        logicChain: [
          {
            label: "Safety problem",
            value:
              "Targets hateful meme detection where harmful meaning may depend on image-text interaction rather than either modality alone.",
          },
          {
            label: "Representation layer",
            value:
              "Uses CLIP-style multimodal representation learning to connect visual and textual signals.",
          },
          {
            label: "Reasoning layer",
            value:
              "Uses LLM inference, prompt engineering, and multi-LLM reasoning to handle implicit references, sarcasm, and irony.",
          },
          {
            label: "Research value",
            value:
              "Adds a multimodal safety case study for crossmodal alignment and robust reasoning under socially sensitive evidence.",
          },
        ],
        readmeHighlights: [
          "Focuses on social-media multimodal hate detection.",
          "Addresses image-text semantic inconsistency, implicit references, sarcasm, and irony.",
          "Uses a CLIP + LLM framework for multimodal representation learning and semantic alignment.",
          "Applies prompt engineering and multi-LLM reasoning to improve output quality for ambiguous visual-language cases.",
        ],
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
