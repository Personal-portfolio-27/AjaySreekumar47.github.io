
import { Project } from "./ProjectCard";

export const projects: Project[] = [
  {
    title: "🚀 AI Copilot for Code Generation",
    description: "Developed an AI-driven coding Copilot using open-source LLMs and the LangChain framework, improving code generation accuracy by 90% and reducing inference latency by 80%.",
    shortDescription: "Developed an AI-driven coding Copilot using open-source LLMs and the LangChain framework, improving code generation accuracy by 90% and reducing inference latency by 80%. Leveraged advanced NLP techniques, retrieval-augmented generation (RAG), and custom VS Code tooling to enhance developer productivity and model performance.",
    fullDescription: `As a Machine Learning Researcher at the University of Arizona in collaboration with NASA Jet Propulsion Laboratory and BAE Systems, I spearheaded the development of an AI-powered coding Copilot that significantly enhances developer productivity and code quality using open-source large language models.

Key Contributions:

• AI-Driven Code Generation Copilot: Designed and deployed a domain-specific coding assistant using open-source LLMs (7B–13B parameters) orchestrated via the LangChain framework. Achieved a 90% increase in code generation accuracy through context-aware prompting and dynamic model chaining.

• Retrieval-Augmented Generation (RAG) Pipeline: Architected a custom RAG system leveraging Tiktoken BPE tokenization and L5-large Sentence Transformers (768-dimensional). Introduced cosine similarity thresholding for high-precision retrieval, boosting domain-specific relevance by 60%.

• Inference Optimization: Applied advanced data preprocessing techniques such as token normalization, dynamic chunking, and n-gram extraction. These optimizations reduced model inference latency from 3.8s to 0.74s, enabling near real-time performance.

• Syntactic and Semantic Validation: Developed a custom validation framework using Pydantic schemas and EBNF-based grammar rules compiled with Lark parsers, ensuring 100% syntactic compliance for generated code snippets.

• Developer Tooling: Built a VS Code plugin that integrates the Copilot as an inline assistant for developers. This tool enhances developer productivity by over 30 hours per month through intelligent code suggestions and auto-corrections.

• Few-Shot Fine-Tuning: Conducted low-resource fine-tuning of LLMs using curated domain-specific examples, improving grammar adherence and code reliability under limited annotated data conditions.

Impact:
This project demonstrates how tailored LLM architectures and optimized pipelines can be integrated into developer workflows, significantly advancing productivity, accuracy, and real-time usability in mission-critical environments like aerospace and defense.`,
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "LLM", "RAG", "NLP"],
    achievements: ["90% increase in code generation accuracy", "80% reduction in inference latency", "30+ hours saved per month"],
    githubUrl: "https://github.com/username/ai-copilot",
    demoUrl: "https://ai-copilot.demo",
    technologies: ["LangChain", "PyTorch", "Sentence Transformers", "VS Code Extension API", "Pydantic", "Lark"],
    featured: true,
    organization: "University of Arizona | NASA JPL | BAE Systems",
    period: "Jan 2025 – Present",
  },
  {
    title: "🔬 LLMOps & Scientific Modeling Research",
    description: "Built uncertainty quantification techniques and multi-modal foundation models to enhance code translation and scientific data processing.",
    shortDescription: "Built uncertainty quantification techniques and multi-modal foundation models to enhance code translation and scientific data processing. Improved Fortran-to-C++ translation accuracy by 30–42% and boosted time-series forecasting by 20% using Vision Transformers and ML evaluation frameworks.",
    fullDescription: `As a Data Science Research Intern at Los Alamos National Laboratory, I contributed to advancing large language model operations (LLMOps) and scientific data understanding by designing high-precision modeling tools and evaluation frameworks.

Key Contributions:

• Uncertainty Quantification (UQ) for LLMs: Developed statistical modeling and parameter tuning techniques for LLM-assisted Fortran-to-C++ translation, improving translation accuracy by 30% through rigorous UQ strategies.

• ML Evaluation Framework: Designed a comprehensive benchmarking suite for 12 open-source LLMs (7B–34B) using stratified sampling and CodeBLEU metrics, enabling detailed performance comparison across models.

• Reinforcement Learning with Feedback Loop: Engineered an agentic feedback system integrating compiler diagnostics with semantic similarity scores, which implemented a reinforcement learning loop, achieving 42% performance uplift over baseline translation systems.

• Multi-Modal Scientific Modeling: Developed foundation models combining computer vision and predictive ML for scientific datasets. Fine-tuned Vision Transformers (ViT) in PyTorch and TensorFlow, improving time-series image forecasting accuracy by 20%.

• Large-Scale Data Handling: Managed and processed 500+ datasets using Python (pandas, NumPy) and SQL, implementing scalable feature engineering and cleaning workflows for downstream model readiness.

• Research Publication: Co-authored a paper titled "LLM-Assisted Translation of Legacy FORTRAN Code to C++" presented at AISD NAACL 2025, recognized for innovation in LLM application to scientific codebases.

• Visualization Suite: Created interactive, multi-dimensional plots using t-SNE and UMAP to map error patterns across 5,000+ code samples, helping identify key performance bottlenecks and trends.

Impact:
This internship showcased how domain-aligned LLMs, reinforcement learning, and visual analytics can be combined to enhance scientific computation and legacy code translation at scale.`,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    tags: ["LLMOps", "Scientific Computing", "Uncertainty Quantification", "Computer Vision"],
    achievements: ["30-42% improved code translation", "20% better time-series forecasting", "Published paper at AISD NAACL 2025"],
    githubUrl: "https://github.com/username/lanl-llmops",
    technologies: ["Python", "PyTorch", "TensorFlow", "Vision Transformers", "Reinforcement Learning", "SQL"],
    featured: true,
    organization: "Los Alamos National Laboratory",
    period: "May 2024 – Aug 2024",
  },
  {
    title: "Walmart Demand Prediction",
    description: "Developed a time series forecasting model to predict product demand for Walmart stores, enabling better inventory management and reduced stockouts.",
    tags: ["Time Series", "Forecasting", "Machine Learning"],
    achievements: ["89% prediction accuracy", "Reduced inventory costs by 12%", "Optimized supply chain operations"],
    githubUrl: "https://github.com/username/walmart-demand-prediction",
    technologies: ["ARIMA", "Prophet", "Gradient Boosting", "Python", "Pandas"],
  },
  {
    title: "NYC Taxi Anomaly Detection",
    description: "Built an anomaly detection system for NYC taxi trip data to identify fraudulent activities and unusual patterns in real-time.",
    tags: ["Anomaly Detection", "Deep Learning", "AWS"],
    achievements: ["93% precision in anomaly detection", "AWS Lambda deployment", "Real-time monitoring capability"],
    githubUrl: "https://github.com/username/nyc-taxi-anomaly-detection",
    technologies: ["LSTM", "Isolation Forest", "AWS Lambda", "Docker", "TensorFlow"],
  },
  {
    title: "Japanese Credit Risk Analysis",
    description: "Designed and implemented a credit risk assessment model for a Japanese financial institution to improve loan approval decisions.",
    tags: ["Risk Analysis", "Classification", "Financial ML"],
    achievements: ["85%+ accuracy in risk prediction", "Real-time prediction system", "Reduced default rates by 17%"],
    githubUrl: "https://github.com/username/japanese-credit-risk",
    technologies: ["SVM", "Random Forest", "Feature Engineering", "scikit-learn", "XGBoost"],
  },
];
